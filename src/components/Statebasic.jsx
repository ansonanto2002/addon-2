import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasic = () => {
    var [fname,setfname]=useState("ANSON")
    const ChangeName=()=>{
        setfname("ARAVIND")
    }
  return (
    <div>
     <Typography>WELCOME {fname} </Typography> 
     <Button variant='contained'color='primary'onClick={ChangeName}>change name</Button>
     <Button variant='contained' color='error'>gallery</Button>
     <br/>
     <Button variant='contained'color='success'>contact</Button>
     <br/><br/>
     <Button variant='contained'color='inherit'>form</Button>
    </div>
  )
}

export default Statebasic
