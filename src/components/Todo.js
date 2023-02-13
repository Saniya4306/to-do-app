import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import TodoList from "./TodoList";

function Todo() {
    const[value,setValue]=useState("")
    const[newTodo ,setNewTodo]=useState([]);

    function changeHandler(e){
        setValue(e.target.value);
    }
   
    function addTodo(){
        if(!value){
            alert('there is no todo');
            return ;
        }else{
     setNewTodo((prev)=>{
       return [...prev , value]
     })
     
    }
    setValue("   ");
}

 function deleteTodo(id){
  console.log('delete');
 setNewTodo((prev)=>{
     return  prev.filter((curele ,index)=>{
        return index !== id ;
  })
  })
 }
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={"column"}
        maxWidth={400}
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
        <Typography variant="h4"
         marginTop={3} 
        fontWeight={"bold"}
        textAlign={'center'}
        sx={{backgroundColor:'#ef6c00',width:'400px',color:'white'}}>
          ToDo LIST <FormatListBulletedIcon />
        </Typography>
        <Box display={"flex"} flexDirection={"row"} sx={{marginTop:5}}>
          <TextField
          placeholder="Add your ToDo"
          onChange={changeHandler}
            variant="standard" 
            sx={{width:'250px'}} />
          <Button
          onClick={addTodo}
            variant="contained"
            color="warning"
            sx={{ marginLeft: 2, borderRadius: 50 }}
          >
            +
          </Button>
        </Box>
        <ul>
          {
            newTodo.map((ele,index)=>{
              return <TodoList
                   key={index}
                   id={index} 
                   text={ele}
                   onSelect={deleteTodo}
                   />
            })
          }
          </ul>
      </Box>
    </>
  );
}
export default Todo;
