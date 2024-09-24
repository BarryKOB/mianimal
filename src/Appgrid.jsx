import React from 'react';
import "./App.css";
import { Button,Grid as Grid2, styled, Typography } from "@mui/material";
import Box from '@mui/material/Box';

function Appgrid() {
    // const Grid2a = styled(Grid2)(({ theme }) => ({
    //     padding: theme.spacing(2),
    // })); 

    return (
        <>
            <Typography sx={{fontSize: 40, backgroundColor: "#0c2661", textAlign: "center", color: "#c4d6d8", padding: 2, marginBottom: "20px"}}>Grid2 3 botones</Typography>
            <Box sx={{margin: "12px"}}>
                <Grid2 container spacing={2} >
                    <Grid2 item   xs={4} sm={12} md={12}> 
                        <Button variant="contained" fullWidth>1</Button>
                    </Grid2>
                    <Grid2 item xs={4} sm={6} md={12}>
                        <Button variant="contained" fullWidth>2</Button>
                    </Grid2>
                    <Grid2 item xs={4} sm={6} md={12}>
                        <Button variant="contained" fullWidth>3</Button>
                    </Grid2>
                </Grid2>
            </Box>            
        </>
    );
}
// size={{xs:12, sm:6, md:2}}
export default Appgrid
