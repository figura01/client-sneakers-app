import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { Table,TableHead,TableBody,TableCell,TableRow } from '@mui/material';
import { useContext } from "react";
// import { ProductContext } from '../../pages/Panier';
import { CartContext } from '../../contextes/cartCtx';
import MainBtn from "../MainBtn";
import '../../styles/Panier.css';
import '../../styles/Button.css';
const PanierRecap = () => {
    const cartCtx = useContext(CartContext);
    let totalProductPrice = 0;
    cartCtx.products.forEach(element => {
        totalProductPrice += (element.price * element.availableQuantity); 
         
    });

    let tdStyles = {fontSize:16,border:'none',padding:10};
    
    return (
        
        <Card sx={{ boxShadow: 3 }} className='RecapCard' >
            <p >Résumé de la commande</p>
            <hr ></hr>
            <div style={{height:100,overflow:'auto'}}>
                <Table >
                <TableBody >
                        {cartCtx.products.map((product,index)=>{
                    return(
                        
                            <TableRow key={product.id} style={{display:'flex',justifyContent:'space-around'}}> 
                                <TableCell style={tdStyles}>{product.name}</TableCell>
                                <TableCell style={tdStyles}>{product.price * product.availableQuantity} €</TableCell>
                            </TableRow>
                        
                            ) 
                 })}
                </TableBody>
                    
                </Table>
            </div>
            

            <div style={{display:'flex',justifyContent:'space-around'}} >
                <p>Sous total :</p>
                <p>{totalProductPrice} €</p>
            </div>
            <hr ></hr>
            <form action="">
                <div >
                    <label htmlFor="codeReduc">Code de reduction :</label>
                    <div >
                        <input type="text" name="codeReduc" id="codeReduc" />
                        <MainBtn title={"Valider"}></MainBtn>
                    </div>
                   
                </div>
                
            </form>
            <div className='Pay' >
                <MainBtn title={"Paiement"}></MainBtn>
                {/*<input type='button' className='RecapCardButton' value='Paiement'/>*/}
            </div>
            

        </Card>
            
        
    )
}

export default PanierRecap;
