import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { Table,TableHead,TableBody,TableCell,TableRow } from '@mui/material';
import { useContext } from "react";
// import { ProductContext } from '../../pages/Panier';
import { CartContext } from '../../contextes/cartCtx';
import MainBtn from "../MainBtn";
import '../../styles/Panier.css';
import '../../styles/Button.css';
import { AuthContext } from '../../contextes/authCtx';
import api from '../../api/apiHandler'
import { useNavigate } from 'react-router-dom';
const PanierRecap = () => {
    const cartCtx = useContext(CartContext);
    const authCtx = useContext(AuthContext);
    const navigate = useNavigate();
    let totalProductPrice = 0;
    cartCtx.cart.forEach(element => {
        totalProductPrice += (element.unit_price * element.cartQuantity); 
         
    });
    let tdStyles = {fontSize:16,border:'none',padding:10};

    const handleBasketValidation = async (e) => {
        e.preventDefault();

        //console.log({id : cartCtx.cart[0]._id,qtt:cartCtx.cart[0].cartQuantity} )
        //console.log(JSON.parse(localStorage.getItem("user"))._id)

        let data =  {
            products : cartCtx.cart.map(p => p._id),
            owner : JSON.parse(localStorage.getItem("user"))._id
        };
        if (authCtx.isLoggedIn) {
            try {
                console.log(data)
                const result = await api.createOne('http://localhost:8000/v1/orders', data)
                console.log('insert successfull')
              } catch (err) {
                console.log(err)
              }
        }else{
            navigate('/login');
        }
    }
    
    return (
        
        <Card sx={{ boxShadow: 3 }} className='RecapCard' >
            <p >Résumé de la commande</p>
            <hr ></hr>
            <div style={{height:100,overflow:'auto'}}>
                <Table >
                <TableBody >
                        {cartCtx.cart.map((product,index)=>{
                    return(
                        
                            <TableRow key={product.id} style={{display:'flex',justifyContent:'space-around'}}> 
                                <TableCell style={tdStyles}>{product.name}</TableCell>
                                <TableCell style={tdStyles}>{product.unit_price * product.cartQuantity} €</TableCell>
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
                        <MainBtn title={"Ajouter"}></MainBtn>
                    </div>
                   
                </div>
                
            </form>
            <div className='Pay' >
                {/*<MainBtn onClick={handleBasketValidation} title={"Valider"}></MainBtn>*/}
                <form onSubmit={(e) => handleBasketValidation(e)} action="http://localhost:8000/v1/orders" method="post">
                <input  type='submit' style={{fontSize:18}} className="main-btn" value='Valider'/>
                </form>
                
            </div>
            

        </Card>
            
        
    )
}

export default PanierRecap;
