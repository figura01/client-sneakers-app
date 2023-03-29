import { useState } from "react";
import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import CustomRadioButton from "../components/CustomRadioButton";
import exempleImage from "../assets/image-new-balance.jpg";
import "../styles/Product.css";
import { Link } from "react-router-dom";

const Product = () => {
  const colorsData = [
    { value: "red" },
    { value: "blue" },
    { value: "yellow" },
    { value: "white" },
  ];

  const taillesData = [
    { value: "37" },
    { value: "38" },
    { value: "39" },
    { value: "40" },
    { value: "41" },
    { value: "42" },
    { value: "43" },
    { value: "44" },
    { value: "45" },
    { value: "46" },
    { value: "47" },
    { value: "48" },
  ];

  // console.log(window.location.pathname.replace('/product/', ''));
  const [selection, setSelection] = useState({
    color: null,
    taille: null,
  });
  const [error, setError] = useState(null);

  const updateSelection = (event) => {
    event.persist();
    const { name, value } = event.target;
    setSelection({ ...selection, [name]: value });
  };

  const sendToBasket = () => {};

  const handleClick = () => {
    selection.color && selection.taille
      ? sendToBasket
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
          <img src={exempleImage} alt="Une jolie image" />
          <img src={exempleImage} alt="Une jolie image" />
          <img src={exempleImage} alt="Une jolie image" />
          <img src={exempleImage} alt="Une jolie image" />
        </Grid>
        <Grid item xs={6}>
          {/* Grille description */}
          <p>Categorie</p>
          <h2>Nom du produit</h2>
          <p>
            <strong>Prix €</strong>
          </p>
          <p>Couleurs :</p>
          {/* Radio buttons de selection des couleurs */}
          <div onChange={updateSelection} className="radio-color-wrapper">
            {colorsData.map((data, index) => (
              <CustomRadioButton
                data={data}
                index={`color-${index}`}
                name="color"
                key={`radio-color-${index}`}
                colorClass={data.value}
              />
            ))}
          </div>
          <p>Tailles :</p>
          {/* Radio buttons de selection des tailles */}
          <div onChange={updateSelection} className="radio-taille-wrapper">
            {taillesData.map((data, index) => (
              <CustomRadioButton
                data={data}
                index={`taille-${index}`}
                name="taille"
                key={`radio-taille-${index}`}
              />
            ))}
          </div>
          {/* Bouton ajouter au panier */}
          <Link to={`#`} className="main-btn" onClick={handleClick}>
            Ajouter au panier
          </Link>
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
            <p>
              Que vous partiez à l’assaut d’un nouveau trail ou de vos courses
              hebdomadaires, la 410v7 allie confort et durabilité, dans une
              silhouette discrète.
              <br />
              Cette chaussure de course pour hommes est munie d’une semelle
              intermédiaire douce qui amortit chacun de vos pas, tandis que la
              semelle extérieure AT Tread est parée à toutes les éventualités,
              sur la route comme en dehors. <br />
              Des empiècements résistants aux endroits clés garantissent une
              empeigne durable et légère.
            </p>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Product;
