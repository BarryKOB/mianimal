import React from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid2'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'

import { useState } from 'react'
import Stack from '@mui/material/Stack';
import Grid2 from '@mui/material/Grid2'



function FormRegistro() {
  const [data, setData] = useState({name:'', breed:''})

  const handleSubmit = (e) => {
    //Para que no mande el formulario, sino que haga lo que yo le diga
    e.preventDefault();  
  }

  const handleChangeName = (e) =>{
    setData({
      ...data,
      name: e.target.value
    })
    console.log(data.name);
  }

  const handleChangeBreed = (e) =>{
    setData({
      ...data,
      breed: e.target.value
    })
    console.log(data.breed);
  }

  function mostrar() {
    alert("Nombre de la Mascota: " + data.name);
    alert("Raza: " + data.breed);
  }

  return(
    <>
    <Container sx={{marginBottom: "70px"}}>
      <Paper elevation={3} square={true} sx={{textAlign:'center'}}>
        <Typography variant='h6' color='elige el color' sx={{mt:2, mb:2, color: "orange"}}>Registra tu mascota</Typography>
        <Box
          component='form'
          onSubmit={handleSubmit}
        >
          <Grid container spacing={0}>
            <Grid size={{xs:12, sm:6, md:6}}>
              <TextField 
                required
                label='Nombre Mascota'
                variant='outlined'
                fullWidth
                value= {data.name}
                onChange={handleChangeName}
              />
            </Grid>
            <Grid size={{xs:12, sm:6, md:6}}>
              <TextField 
                  label='Raza'
                  variant='outlined'
                  fullWidth
                  value= {data.breed}
                  onChange={handleChangeBreed}
              />
            </Grid> 
            <Grid size={12}>
              <Button type="submit" variant='outlined' onClick={mostrar} sx={{padding: "15px", "&:hover": {backgroundColor: "blue", color: "white", border: "1px solid #5454ec"}, transition: "all 0.5s ease"}} fullWidth>Registrar</Button>
            </Grid>    
          </Grid>
        </Box>
      </Paper>
    </Container>
    </>
  );

}
  
   
  

export default FormRegistro