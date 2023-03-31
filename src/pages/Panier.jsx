import PanierList from "../components/panier.components/PanierList";
import PanierRecap from "../components/panier.components/PanierRecap";
import PanierSuggestion from "../components/panier.components/PanierSuggestion";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, createContext, useContext } from "react";
import { CartContext } from '../contextes/cartCtx';
import emptyBasket from "../assets/panier_empty.png";
import '../styles/Panier.css';
import { Card } from "@mui/material";

// export const ProductContext = createContext();
const Panier = () => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx.products);
  if(cartCtx.products.length<1){
    return (
      <>
        <section className="PanierSection">
          <Card style={{padding:10}}>
            <div style={{display:'flex',justifyContent:'center'}}>
            <img style={{height:200,width:200}} src={emptyBasket}/>
            </div>
            <p style={{fontWeight:'bold',fontSize:24}}>Panier vide : ajoutez des produits ou connectez vous</p>
          </Card>
        </section>
      </>
      
    )
   }else{
    return (
      <>
          <section className="PanierTop">
            <h1>Panier</h1>
            <section className="PanierSection">
              <PanierList></PanierList>
              <PanierRecap></PanierRecap>
            </section>
            <hr className="sectionSeperator"></hr>
          </section>
          <section>
            <h1>Vous allez adorez aussi...</h1>
            <PanierSuggestion></PanierSuggestion>
          </section> 
      </>
          
    )
    }

  
};

export default Panier;
