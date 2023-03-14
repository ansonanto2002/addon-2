import {  Button, CardMedia, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [value,setvalue] =useState(0);
    const add =() =>{
          setvalue(value+1)
    }
    const sub =()=>{
        setvalue(value-1)
    }
  return (
    <div>
      <Typography>value is {value}</Typography>
      <Button variant='contained' color='primary'onClick={add}>PLUS</Button>
      <Button variant='contained' color='error'onClick={sub}>MINUS</Button>
      
          </div>
  )
}

export default Counter

