import React, {useState, useRef} from 'react';
import {Link} from "react-router-dom";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import NativeSelect from '@mui/material/NativeSelect';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { blue, pink, yellow } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

import "../styles/Shop.css";

function valuetext(value) {
  return `${value}€`;
}

const Shop = () => {
  const [sliderValue, setSliderValue] = useState([20, 1000]);

  const handleChangeSlider = (e) => {
    console.log('e', e);
    console.log('e.target', e.target);
    console.log('e.target.value: ', e.target.value)
  
    setSliderValue(e.target.value);
  };
  const inputSliderRef = useRef();

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <Container>
      <div>
      <Container>
        
        <Grid container item xs={12}  justifyContent="center" >    
            <Grid item xs={6}>
            <h3>Sneakers</h3>

            <Box sx={{ maxWidth: 200 }} position = 'rows'>
              <FormControl fullWidth>
                {/* <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Sneakers
                </InputLabel> */}
               
                <NativeSelect
                  defaultValue={20}
                  inputProps={{
                    name: 'Sneakers',
                    // id: 'uncontrolled-native',
                  }}
                >
                  <option value={10}>Pour Elle</option>
                  <option value={20}>Pour Lui</option>
                  <option value={30}>Les Kids</option>
                  <option value={40}>Running</option>
                  <option value={50}>Les Accessoirs</option>
               
                </NativeSelect>
              </FormControl>
            </Box>
            
            </Grid>      
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={3}>
          {/* <h1></h1> */}
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
              <Stack spacing={1}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Taille</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {/* <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography> */}
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Marque</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography>Couleur</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <div>
                    <Checkbox {...label} 
                      sx={{
                        color: blue[800],
                        '&.Mui-checked': {
                          color: blue[600],
                        },
                      }} />
                    <Checkbox {...label} 
                     sx={{
                      color: yellow[800],
                      '&.Mui-checked': {
                        color: yellow[600],
                      },
                    }} />
                    <Checkbox {...label} 
                     sx={{
                      color: pink[800],
                      '&.Mui-checked': {
                        color: pink[600],
                      },
                    }} />
                    <Checkbox {...label} 
                      sx={{
                        color: pink[800],
                        '&.Mui-checked': {
                          color: pink[600],
                        },
                      }} />
                    <Checkbox
                      {...label}
                      // defaultChecked
                      sx={{
                        color: pink[800],
                        '&.Mui-checked': {
                          color: pink[600],
                        },
                      }}
                    />
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4a-content"
                  id="panel4a-header"
                >
                  <Typography>Modèle</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel5a-content"
                  id="panel5a-header"
                >
                  <Typography>Prix</Typography>
                </AccordionSummary>
                   
                <AccordionDetails>
                <Slider
                      getAriaLabel={() => 'Prix range'}
                      value={sliderValue}
                      min={20}
                      step={20}
                      max={1000}
                      onChange={(e) => handleChangeSlider(e)}
                      valueLabelDisplay="auto"
                      getAriaValueText={valuetext}
                      ref={inputSliderRef}
                      name="slider-input"
                      disableSwap
                    />
                 
                </AccordionDetails>
              </Accordion>
              </Stack>

            </ul>
                  
          </Grid>
          <Grid item xs={9}>
            {/* <h3>Sneakers</h3> */}
            <ImageList sx={{ width: 500, height: 450 }} cols={3}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={<span>by: {item.author}</span>}
                  position="below"
                />
              </ImageListItem>
              ))}
            </ImageList>
                          
          </Grid>

        </Grid>
      </Container>

    </div>
    </Container>
     
  )
};
const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
  },
];

export default Shop;
