import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Trail = () => {
    
    var[pagename,setpagename]=useState("HOME PAGE");
    const homepage =() =>{
        setpagename("HOME PAGE")
    }
    const galllerypage =()=>{
        setpagename("GALLERY PAGE")
    }
    const contactpage =()=>{
        setpagename("CONTACT PAGE")

    }
    

  return (
    <div>
    <Button variant='contained'color='inherit'onClick={homepage}>HOME PAGE</Button>
    <Button variant='contained'color='success'onClick={galllerypage}>GALLERY PAGE</Button>
    <Button variant='contained'color='error'onClick={contactpage}>CONTACT PAGE</Button>
    <Typography> WELCON TO {pagename}</Typography>
    </div>
  )
}

export default Trail
    