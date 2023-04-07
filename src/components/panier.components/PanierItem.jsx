import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../contextes/cartCtx';
import { Box } from '@mui/material';
import '../../styles/Panier.css'

const PanierItem = ({product}) => {
    const [quantite, setQuantite] = useState(product.cartQuantity);
    const cartCtx = useContext(CartContext);
    let styles = {
        padding : '5px',
    }

    //addProduct 
    const increase = (id) => {  
        setQuantite( quantite+1);
        //cartCtx.cart.map((product)=>{})
    };
    
    // subProduct 
    const decrease = (id) => {
        setQuantite(quantite => quantite - 1);  
        
    };
    
    return (
        <li>
            <Box className='Box'>
                <img className='' src={product.images[0]} alt=""  /> 
                <div>
                    <p className='nomProduit'>{product.name}</p>
                    <p></p>
                    <p> prix : {product.unit_price * product.cartQuantity} €</p>
                </div>
                <div >
                    <input type='button' className='CountButton' onChange={product.cartQuantity==0?cartCtx.removeFromCart(product._id):()=>{}} onClick={()=>{cartCtx.removeFromCart(product._id)}}   value='-' />
                    <input className='CountBox' type="text" readOnly={true} value={product.cartQuantity} />
                    <input type='button' className='CountButton' onClick={()=>cartCtx.addToCart(product)}   value='+' />
                </div>
                <span>
                    <CloseIcon onClick={()=>cartCtx.removeFromCart(product._id)} ></CloseIcon>
                </span>
            </Box>
        </li>
        
    )
}

export default PanierItem;