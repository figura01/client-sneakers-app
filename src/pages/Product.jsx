import { useState, useEffect, useContext } from "react";
import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { Link } from "react-router-dom";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import CustomRadioButton from "../components/CustomRadioButton";
import { CartContext } from "../contextes/cartCtx";
import "../styles/Product.css";
import api from "../api/apiHandler";

const Product = () => {
  const context = useContext(CartContext)

  const [selection, setSelection] = useState({
    color: null,
    taille: null,
  });
  const [error, setError] = useState(null);
  const [product, setProduct] = useState({});
  const path = window.location.pathname.replace("/product", "");
  // Fetch des données du produit
  useEffect(() => {
    api.getOne(`http://localhost:8000/v1/products/${path}`).then((data) => {
      setProduct(data);
    });
  }, []);
  // MAJ couleur / taille choisis par le user
  const updateSelection = (event) => {
    event.persist();
    const { name, value } = event.target;
    setSelection({ ...selection, [name]: value });
  };

  // Gestion de l'ajout panier et erreur si pas de choix taille et couleur
  const handleClick = () => {
    console.log(selection)
    console.log(product)
    selection.color && selection.taille
      ? context.addToCart(product)
      : setError({
          message:
            "Vous devez choisir une taille et un coloris pour cet article !",
        });
  };

  return (
    <Container sx={{ my: 4 }} id="product-pages">
      <Grid container spacing={2}>
        {/* Grille d'images produit */}
        <Grid item xs={6}>
          {product && product.images ? (
            product.images.map((image, index) => {
              return (
                <img
                  src={image}
                  width="263"
                  height="300"
                  alt={`image produit n°${index}`}
                  key={`image-produit-${index}`}
                />
              );
            })
          ) : (
            <p>loading</p>
          )}
        </Grid>
        <Grid item xs={6}>
          {/* Grille description */}
          <span>{product.gamme}</span>
          <h2>{product.name}</h2>
          <p>
            <strong>{product.unit_price} €</strong>
          </p>
          <p>Couleurs :</p>
          {/* Radio buttons de selection des couleurs */}
          <div onChange={updateSelection} className="radio-color-wrapper">
            {product && product.colors ? (
              product.colors.map((data, index) => (
                <CustomRadioButton
                  data={data}
                  index={`color-${index}`}
                  name="color"
                  key={`radio-color-${index}`}
                  colorClass={data}
                />
              ))
            ) : (
              <p>loading</p>
            )}
          </div>
          <p>Tailles :</p>
          {/* Radio buttons de selection des tailles */}
          <div onChange={updateSelection} className="radio-taille-wrapper">
            {product && product.sizes ? (
              product.sizes.map((data, index) => (
                <CustomRadioButton
                  data={data}
                  index={`taille-${index}`}
                  name="taille"
                  key={`radio-taille-${index}`}
                />
              ))
            ) : (
              <p>loading</p>
            )}
          </div>
          {/* Bouton ajouter au panier */}
          <a className="main-btn" onClick={handleClick}>
            Ajouter au panier
          </a>
          {/* Gestion des erreurs si user ne selectionne pas taille et couleur */}
          {error && (
            <div className="alerte">
              <ErrorOutlineOutlinedIcon />
              <p>&nbsp;{error.message}</p>
            </div>
          )}
          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <CalendarMonthOutlinedIcon />
            <p>&nbsp;Expédié dès demain !</p>
          </Box>
          <Box>
            <h3>Description</h3>
            <p>{product.description}</p>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Product;
