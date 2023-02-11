import { Box, Typography, Button, TextField } from "@mui/material";
import React,{useState} from "react";
//import {Link} from "react-router-dom";

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
  
  return (
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
        
       
        <Typography variant="h3" margin={'auto'} sx={{marginTop:2,marginBottom:2}}>Login</Typography>
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
         variant="contained" color="warning" sx={{ marginTop: 2 }}>
          Login
        </Button>
        <Typography sx={{ marginTop: 2 }}>Dont have an account ?  <HowToRegOutlinedIcon/></Typography>
       
      </Box>
    </>
  );
}

export default Login;
