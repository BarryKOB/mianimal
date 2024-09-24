import { useState } from 'react'
import './App.css'
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
import { Avatar, Grid2, Stack, Typography } from '@mui/material';
import { red, green, blue } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

function App() {
  const [cont, setCount] = useState(0)

  function handleClick() {
    setCount(cont+1)
  };

  const StackDiv = styled('div')(({ theme }) => ({
    marginBottom: 20,
    marginTop: 20,
    borderRadius: 10,
    [theme.breakpoints.down('md')]: {
      backgroundColor: red[500],
    },

    [theme.breakpoints.up('md')]: {
      backgroundColor: blue[500],
      display: "flex",
      gap: theme.spacing(2),
    },

    [theme.breakpoints.up('lg')]: {
      backgroundColor: green[500],
    },
  }));

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  return (
    <>
      <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <Stack sx={{display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "40px"}}>
          <Typography id='b' sx={{display: "flex", justifyContent: "space-around", alignItems: "center",  fontSize: 40, backgroundColor: "#0c2661", paddingTop: 3, paddingBottom: 3, width: "100%", textAlign: "center", color: "#c4d6d8"}} variant='contained'>Soy un gato y vivo feliz  
          <StackDiv>
                <Typography sx={{padding: "8px", boxShadow: "0px 3px 2px #0c2661"}}>down(md): red</Typography>
                <Typography sx={{padding: "8px", boxShadow: "0px 3px 2px #0c2661"}}>up(md): blue</Typography>
                <Typography sx={{padding: "8px", boxShadow: "0px 3px 2px #0c2661"}}>up(lg): green</Typography>
          </StackDiv>
          </Typography>
            <Avatar className='avatar' src="src/assets/cat.jpg" sx={{width: 400, height: 400, filter: "blur(2px)", display: "block", margin: "auto", marginTop: 5, marginBottom: 5,   transition: "all 0.50s ease", "&:hover": {transform: "translateY(-0.25em)",filter: "blur(0px)"}}}  alt="gato"></Avatar>
            <Stack sx={{marginBottom: "20px"}}>
              <Button onClick={handleClick} sx={{backgroundColor: "black",  marginBottom: 2}} size='medium' color='error' variant="text" disabled>
                Me has echo {cont} rascaditas
              </Button>
              <Button onClick={handleClick}>
                Me has echo {cont} rascaditas
              </Button>
              <Button onClick={handleClick} sx={{borderRadius: 20,  marginBottom: 2}} size='large' color='warning' variant="outlined">
                Me has echo {cont} rascaditas
              </Button>
              <Button onClick={handleClick} sx={{border: 10, borderColor: "black",  marginBottom: 2}} size='string' color='primary' variant="contained">
                Me has echo {cont} rascaditas
              </Button>
              <Button onClick={handleClick} size='string' color='primary' variant="contained">
                Me has echo {cont} rascaditas
              </Button>
            </Stack>
            <Box>
              <Grid2 container spacing={2}>
                <Grid2 size={{xs:12, sm:6, md:3}}>
                  <Item >size=6</Item>
                </Grid2>
                <Grid2 size={{xs:12, sm:6, md:3}}>
                  <Item >size=6</Item>
                </Grid2>
                <Grid2  size={{xs:12, sm:6, md:3}}>
                  <Item>size=6</Item>
                </Grid2>
                <Grid2 size={{xs:12, sm:6, md:3}}>
                  <Item>size=6</Item>
                </Grid2>
              </Grid2>
            </Box>
          </Stack>
      </body>
      </html>
    </>
  );
}

export default App
