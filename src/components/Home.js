import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Todo from './Todo';

export default function Home(props) {
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="warning">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           ToDo
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    <Typography variant='h4' alignItems={'center'}
    fontWeight={'bold'} 
    justifyContent={'center'}
    display={'flex'}
    marginTop={3}>{props.name ? `Welcome-${props.name} :)` : "Login please"}</Typography>
    <Todo/>
    </>
  );
}

