import Card from '@mui/material/Card';
import PanierItem from "./PanierItem";
import { useContext } from "react";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { CartContext } from '../../contextes/cartCtx';
import '../../styles/Panier.css'
const PanierList = () => {
    const cartCtx = useContext(CartContext);
    console.log(cartCtx.cart)
    // if (cartCtx.cart.length ===0) {
    //     return (
    //         <Card sx={{ boxShadow: 3 }} className='ItemsCard'>
    //             <p className='msgPanier'>Le panier est vide <SentimentVeryDissatisfiedIcon></SentimentVeryDissatisfiedIcon> </p>    
    //         </Card>
    //     )
    // }else{
        return (
            <Card sx={{ boxShadow: 3,overflowY: "auto",height:420 }} className='ItemsCard'>
                <ul className='panierUl'>  
                {cartCtx.cart.map((product)=>{
                    return(
                        <div key={product._id}>
                            <PanierItem  product={product}></PanierItem>
                            <hr style={{width:'80%'}} />
                        </div>
                        
                    ) 
                 })}
                
                </ul>    
            </Card>
                
            
        )
    
    
}

export default PanierList;
