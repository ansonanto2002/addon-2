import React from 'react'
import { BottomNavigation, Button, TextField } from '@mui/material';
const Login = () => {
  return (
    <div>
       <h1>PAGE</h1>
    
    <TextField label="username"variant='outlined'/>
    <br/>
    <TextField label="password"variant='standard'/>
    <Button variant='contained'color='success'>login</Button>
    
    </div>
  )
}

export default Login

