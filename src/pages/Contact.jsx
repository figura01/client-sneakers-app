import * as React from 'react';
import { Container } from "@mui/system";
import { Box, Grid } from "@mui/material";

const Contact = () => {
    return (
        <div>
            
        <Container>
            <div>
                <h1>COMMENT FAIRE UN RETOUR / ÉCHANGE ?</h1>
            </div>
            <div>

            <Box sx={{ width: '100%' }}>
                
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>    
                    <Grid item xs={4} 
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}>
                        <Grid >
                            <ul><strong>
                                <li>Service client</li></strong>
                                <li>Du Lundi au vendredi</li>
                                <li>de 9h à 17h</li>
                                <li><br /></li>
                                <li>Nous contacter</li>
                                <li>01 xx 00 00</li>
                                
                            </ul>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}
                     sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}>
                        <Grid>
                            <ul><strong>
                                <li>Boutique Paris</li></strong>
                                <li>Du Mardi au Dimanche</li>
                                <li>de 9h à 19h30</li>
                                <li><br/></li>
                                <li>00 rue de ravioli</li>
                                <li>750xx Paris</li>
                                
                            </ul>
                        </Grid>
                    </Grid>
                    
                    <Grid item xs={4}
                     sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}>
                        <Grid>
                            <ul><strong>
                                <li>Boutique Lyon</li> </strong>
                                <li>Du Mardi au Samedi</li>
                                <li>de 9h à 18h</li>
                                <li><br /></li>
                                <li>00 rue de Lyon</li>
                                <li>Lyon</li>
                               
                            </ul>
                        </Grid>
                    </Grid>
                </Grid>
                
            </Box>
            </div>
            
        
        </Container>
        </div>

        );
    };
    
export default Contact;        