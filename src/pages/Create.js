import React from 'react'
// import materialui
import { Container, Typography, Button  } from '@material-ui/core';

export default function Create() {
  return (
    <Container maxWidth="sm">
      <Typography
        variant='h2'
        color="red"
        align="center"
      >
      wdd
      </Typography>
      <Button 
        onClick=''
        variant="contained" 
        color="secondary"
        type="submit"
      >
        Secondary
      </Button>
    </Container>
    
  )
}
