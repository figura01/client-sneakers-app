import Card from '@mui/material/Card';
import PanierItem from "./PanierItem";
import { useContext } from "react";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { ProductContext } from '../../pages/Panier';
import '../../styles/Panier.css'
const PanierList = () => {
    const [products,addProduct,subProduct ,removeProduct] = useContext(ProductContext);
    if (products.length ===0) {
        return (
            <Card sx={{ boxShadow: 3 }} className='ItemsCard'>
                <p className='msgPanier'>Le panier est vide <SentimentVeryDissatisfiedIcon></SentimentVeryDissatisfiedIcon> </p>    
            </Card>
        )
    }else{
        return (
        
            <Card sx={{ boxShadow: 3 }} className='ItemsCard'>
                <ul className='panierUl'>  
                {products.map((product,index)=>{
                    return(
                        <>
                            <PanierItem key={"item"+index} product={product}></PanierItem>
                            <hr style={{width:'80%'}} />
                        </>
                        
                    ) 
                 })}
                
                </ul>    
            </Card>
                
            
        )
    }
    
}

export default PanierList;
