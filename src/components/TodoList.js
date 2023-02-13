import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button } from "@mui/material";

function TodoList(props) {
  return (
    <Box
      display={"flex"}
      flexDirection={"row"}
      width={370}
      maxHeight={50}
      alignItems={"center"}
      justifyContent={"center"}
      marginTop={2}
      marginRight={4}
      padding={1}
      borderRadius={3}
      boxShadow={"5px 5px 10px #ccc"}
      sx={{
        ":hover": {
          boxShadow: "10px 10px 20px #ccc",
        },
      }}
    >
      
      <li style={{ color: "grey",marginright:5 }}>
        {props.text}
      </li>
      <Button onClick={()=>{
        props.onSelect(props.id);
    }}
       sx={{marginLeft:3}}><DeleteIcon color="warning" /></Button> 
     
     
    </Box>
  );
}

export default TodoList;
