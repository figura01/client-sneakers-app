import PanierList from "../components/panier.components/PanierList";
import PanierRecap from "../components/panier.components/PanierRecap";
import { useState, createContext, useContext } from "react";
import '../styles/Panier.css';

export const ProductContext = createContext();
const Panier = () => {
  const [products, setProducts] = useState([{id:1,nom:'Air T',taille:44.5,prix:98.5,quantite:3},{id:2,nom:'Air T',taille:44.5,prix:98.5,quantite:2},{id:3,nom:'Air T',taille:44.5,prix:98.5,quantite:2}]);

  const addProduct = (id)=>{
    let newProductList = products.map(product=>{
      if (product.id == id) {
        const newQuantite = product.quantite+1;
        return {...product,quantite:newQuantite}
      }
      return product;
    })
      setProducts(newProductList);
  }

  const subProduct = (id)=>{
    const newProductList = products.map(product=>{
      if (product.id == id && product.quantite>0) {
        const newQuantite = product.quantite-1;
        return {...product,quantite:newQuantite}
      }
      return product;
    })
      setProducts(newProductList);
  }

  const removeProduct = (id)=>{
    const newArr = products.filter(pdct=>pdct.id !== id);
    setProducts(newArr);
    console.log(newArr);
  }

  return (
    <>
      <ProductContext.Provider value={[products,addProduct,subProduct ,removeProduct]}>
        <section className="PanierTop">
        <h1>Panier</h1>
        <section className="PanierSection">
          <PanierList></PanierList>
          <PanierRecap></PanierRecap>
        </section>
        <hr className="sectionSeperator"></hr>
        </section>
        
      </ProductContext.Provider>   
    </>
        
  )
};

export default Panier;
