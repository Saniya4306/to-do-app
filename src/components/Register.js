import { Box, Typography, Button, TextField } from "@mui/material";
import React, { useState } from "react";

function Register() {
  const [value, setValue] = useState();

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
        <Typography
          variant="h3"
          margin={"auto"}
          sx={{ marginTop: 2, marginBottom: 2 }}
        >
          Register
        </Typography>
        <TextField onChange={(e)=>setValue(e.target.value)}
        placeholder="text"
         variant="outlined" 
         margin="normal" />
        <TextField onChange={(e)=>setValue(e.target.value)}
         placeholder="email"
          variant="outlined" 
          margin="normal" />
        <TextField onChange={(e)=>setValue(e.target.value)}
         placeholder="password"
          variant="outlined" 
          margin="normal" />
        <Button variant="contained" color="warning" sx={{ marginTop: 2 }}>
          Login
        </Button>
        <Typography sx={{ marginTop: 2 }}>Dont have an account ?</Typography>
      </Box>
    </>
  );
}

export default Register;
