import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import CustomRadioButton from "../components/CustomRadioButton";

import api from "../api/apiHandler";
import "../styles/Shop.css";
import "../styles/Product.css";

function valuetext(value) {
  return `${value}€`;
}

const Shop = () => {
  const [sliderValue, setSliderValue] = useState([20, 1000]);
  const [products, setProducts] = useState([]);

  const taillesData = [
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
  ];

  const colorsData = ["blue", "red", "white", "black", "yellow"];

  const handleChangeSlider = (e) => {
    setSliderValue(e.target.value);
  };
  const inputSliderRef = useRef();
  // Fetch des données, TODO fonctions pour fetch des données selon les filtres
  useEffect(() => {
    api.getOne("http://localhost:8000/v1/products/").then((data) => {
      setProducts(data);
    });
  }, []);

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div>
      <Container>
        <Grid container item xs={12} justifyContent="center">
          <Grid item xs={6}>
            {/* TODO: Conditionner le titre selon les données */}
            <h3>Tous les produits</h3>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <ul>
              <Stack spacing={1}>
                <li>
                  <Link to={`#`}>Pour Elle</Link>
                </li>
                <li>
                  <Link to={`#`}>Pour Lui</Link>
                </li>
                <li>
                  <Link to={`#`}>Les Kids</Link>
                </li>
                <li>
                  <Link to={`#`}>Running</Link>
                </li>
                <li>
                  <Link to={`#`}>Les Accessoires</Link>
                </li>
              </Stack>
            </ul>
            <ul>
              <Stack spacing={1}>
                <Accordion>
                  {/* TODO: Ajuster selon les filtres */}
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Taille</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="radio-taille-wrapper">
                      {taillesData.map((data, index) => (
                        <CustomRadioButton
                          data={data}
                          index={`taille-${index}`}
                          name="taille"
                          key={`radio-taille-${index}`}
                        />
                      ))}
                    </div>
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
                    <ul>
                      <Stack spacing={1}>
                        <li>
                          <Link to={`#`}>Marque 1</Link>
                        </li>
                        <li>
                          <Link to={`#`}>Marque 2</Link>
                        </li>
                        <li>
                          <Link to={`#`}>Marque 3</Link>
                        </li>
                        <li>
                          <Link to={`#`}>Marque 4</Link>
                        </li>
                        <li>
                          <Link to={`#`}>Marque 5</Link>
                        </li>
                      </Stack>
                    </ul>
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
                    <div className="radio-color-wrapper">
                      {colorsData.map((data, index) => (
                        <CustomRadioButton
                          data={data}
                          index={`color-${index}`}
                          name="color"
                          key={`radio-color-${index}`}
                          colorClass={data}
                        />
                      ))}
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
                    <ul>
                      <Stack spacing={1}>
                        <li>
                          <Link to={`#`}>Modèle 1</Link>
                        </li>
                        <li>
                          <Link to={`#`}>Modèle 2</Link>
                        </li>
                        <li>
                          <Link to={`#`}>Modèle 3</Link>
                        </li>
                        <li>
                          <Link to={`#`}>Modèle 4</Link>
                        </li>
                        <li>
                          <Link to={`#`}>Modèle 5</Link>
                        </li>
                      </Stack>
                    </ul>
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
                      getAriaLabel={() => "Prix range"}
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
          {/* Grille de présentation des produits */}
          <Grid item xs={9} sx={{ mb: 6 }}>
            <ImageList
              sx={{ width: 1, height: 1, ml: 2 }}
              cols={3}
              className="shop-imgs"
            >
              {products && products.length > 0 ? (
                products.map((item, index) => (
                  <Link to={`/product/${item._id}`} key={`image-item-${index}`}>
                    <ImageListItem>
                      <img
                        src={item.images[0]}
                        srcSet={item.images[0]}
                        width="276"
                        height="auto"
                        alt={item.name}
                        loading="lazy"
                      />
                      <ImageListItemBar
                        title={item.name}
                        subtitle={
                          <span>
                            Prix: <strong>{item.unit_price}</strong> €
                          </span>
                        }
                        position="below"
                      />
                    </ImageListItem>
                  </Link>
                ))
              ) : (
                <p>loading</p>
              )}
            </ImageList>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Shop;
