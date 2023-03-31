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
                {cartCtx.products.map((product,index)=>{
                    return(
                
                    <Card key={product.id} className='Scrollabe' style={{border:'none',minWidth:250, margin:25}}  >
                        <img style={{width:'100%',height:122}} src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt=""  />
                        <p style={{textAlign:'center'}} className='nomProduit'>{product.name}</p>
                        <p style={{textAlign:'center'}} >prix : {product.price} €</p>
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
