import { useState } from 'react'
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
import { Avatar, Grid2, Stack, Typography } from '@mui/material';
import { red, green, blue } from '@mui/material/colors';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { CustomButton } from 'milibreria'
import '../App.css'

function Ficha({animals}) {
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
      {animals.map((anim) => (  

        <Stack key={anim.id} sx={{display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "40px"}}>
          <Typography id='b' sx={{display: "flex", justifyContent: "space-around", alignItems: "center",  fontSize: 40, backgroundColor: "#0c2661", paddingTop: 3, paddingBottom: 3, width: "100%", textAlign: "center", color: "#c4d6d8"}} variant='contained'>Soy un  {anim.animal} y vivo feliz  
          <StackDiv>
                <Typography sx={{padding: "8px", boxShadow: "0px 3px 2px #0c2661"}}>down(md): red</Typography>
                <Typography sx={{padding: "8px", boxShadow: "0px 3px 2px #0c2661"}}>up(md): blue</Typography>
                <Typography sx={{padding: "8px", boxShadow: "0px 3px 2px #0c2661"}}>up(lg): green</Typography>
          </StackDiv>
          </Typography>
            <Avatar 
            className='avatar' 
            src={anim.imageUrl}
            sx={{
              width: anim.width, 
              height: anim.height, 
              filter: "blur(2px)", 
              marginTop: 5, 
              marginBottom: 5,   
              transition: "all 0.50s ease", "&:hover": 
              {transform: "translateY(-0.25em)",
              filter: "blur(0px)"}}}  
              alt= {anim.animal}
              description= {anim.description}
              attribute = {anim.attribute}
              >
              </Avatar>
            <Stack sx={{marginBottom: "20px"}}>
            <CustomButton
              onClick={handleClick}
              text={`Me has hecho ${cont} rascaditas`} 
              size="large"
              bgcolor="cornflowerblue"
              txtcolor="white"
              width="200px"
              style={{ padding: '12px 24px', fontSize: '16px' }}
            />
            </Stack>
          </Stack>
        ))}
    </>
  );
}

export default Ficha