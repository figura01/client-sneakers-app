import {Link} from "react-router-dom";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

const Shop = () => {
  return (
    <Container>
      <div>
      <Container>
        <Grid container item xs={12} justifyContent="center" >    
            <Grid item xs={6}>
              <h3>Sneakers pour lui</h3>
            </Grid>      
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={3}>
          <h1></h1>
            <ul >
              <Stack spacing={1}>
                <li><Link to={`#`}>Tous les sneakers</Link></li>
                <li><Link to={`#`}>Classique</Link></li>
                <li><Link to={`#`}>Runnig</Link></li>
                <li><Link to={`#`}>Sportif</Link></li>
                <li><Link to={`#`}>Made in the UK & US</Link></li>
              </Stack>
            </ul>
            <ul>
              <Stack spacing={3}>
                <li><Link to={`#`}>Taille         +</Link></li>
                <li><Link to={`#`}>Largeur        +</Link></li>
                <li><Link to={`#`}>Coleur         +</Link></li>
                <li><Link to={`#`}>Modèle         +</Link></li>
                <li><Link to={`#`}>Prix           +</Link></li>
              </Stack>

            </ul>
                  
          </Grid>
          <Grid item xs={9}>
                    <h3>Sneakers pour lui</h3>
                    
          </Grid>

        </Grid>
      </Container>

    </div>
    </Container>
     
  )
};

export default Shop;
