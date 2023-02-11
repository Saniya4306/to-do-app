import { Box,  Button, TextField, Typography } from "@mui/material";
import React from "react";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

function Todo(){
    return(
        <>
        <Box 
        display={"flex"}
        flexDirection={"column"}
        maxWidth={350}
        alignItems={"center"}
        justifyContent={"center"}
        margin={"auto"}
        marginTop={8}
        padding={3}
        borderRadius={5}
        boxShadow={"5px 5px 10px #ccc"}
        sx={{
          ":hover": {
            boxShadow: "10px 10px 20px #ccc",
          },
        }}
      >
        <Typography>ToDo LIST   <FormatListBulletedIcon/></Typography>
            <TextField/>
            <Button>+</Button>
        </Box>
        </>
    )
}
export default Todo;