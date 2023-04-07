import Card from '@mui/material/Card';
import PanierItem from "./PanierItem";
import { useContext } from "react";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { CartContext } from '../../contextes/cartCtx';
import '../../styles/Panier.css'
import { margin } from '@mui/system';
const PanierSuggestion = () => {
    const cartCtx = useContext(CartContext);
    return(
        <>
        <section>
            <div style={{display:'flex',justifyContent:'center',margin:10}}>
                {/*<KeyboardArrowLeftIcon style={{alignSelf:'center', color:'white' ,fontSize:50,padding:5,borderRadius:50,backgroundColor:'#DD624E',marginLeft:10}} ></KeyboardArrowLeftIcon>*/}
                
                <div style={{display:'flex',width:1000,justifyContent:'space-between',overflow:"auto",margin:10}}>
                {cartCtx.cart.map((product,index)=>{
                    return(
                
                    <Card key={product.id} className='Scrollabe' style={{border:'none', padding:10 ,minWidth:200, margin:25}}  >
                        <img style={{width:'100%',height:122}} src={product.images[0]} alt=""  />
                        <p style={{textAlign:'center'}} className='nomProduit'>{product.name}</p>
                        <p style={{textAlign:'center'}} >prix : {product.unit_price} €</p>
                    </Card>
                
                ) 
            })}
                </div>
                {/*<KeyboardArrowRightIcon style={{alignSelf:'center', color:'white' ,fontSize:50,padding:5,borderRadius:50,backgroundColor:'#DD624E',marginRight:10}}></KeyboardArrowRightIcon>*/}
            </div>
            

        </section>
        </>
    )
    
}

export default PanierSuggestion;
