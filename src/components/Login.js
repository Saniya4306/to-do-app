import { Box, Typography, Button, TextField } from "@mui/material";
import React,{useState} from "react";
//import {NavLink} from "react-router-dom";
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';

function Login() {
  const [value, setValue] = useState({
    email:"",
    password:""
  });
  const [errorMsg , setErrorMsg] = useState("");

function handleSubmmission(){
  if(!value.email|| !value.password){
    setErrorMsg("Required all feilds");
  }else{
    setErrorMsg('');
  }
  console.log(value);
}

function submitHandler(e){
  e.preventDefault();
}
  
  
  return (
    <>
    <form onSubmit={submitHandler}>
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
        
       
        <Typography variant="h4" margin={'auto'} sx={{marginTop:2,marginBottom:2,fontWeight:'bold'}}>Login <ExitToAppOutlinedIcon/></Typography>
        <TextField onChange={(e)=>{
                    setValue((prev)=>({...prev ,email: e.target.value}))
                  }}
        autoComplete="off"
        placeholder="email" 
        value = {value.email}
        type={'email'}
        variant="outlined"
         margin="normal" />
        <TextField 
        onChange={(e)=>{
          setValue((prev)=>({...prev ,password: e.target.value}))
        }}
        autoComplete="off"
        placeholder="password" 
        value = {value.password}
        type={'password'}
        variant="outlined"
        margin="normal"/>
        <Typography sx={{color:'red '}}>{errorMsg}</Typography>
        <Button onClick={handleSubmmission}
        endIcon={<ExitToAppOutlinedIcon/>}
         variant="contained" color="warning" sx={{ marginTop: 2 }}>
          Login
        </Button>
      <Button sx={{ marginTop: 2 ,color:"black"}}>Dont have an account ?  <HowToRegOutlinedIcon/></Button>
       
      </Box>
      </form>
    </>
  );
}

export default Login;
