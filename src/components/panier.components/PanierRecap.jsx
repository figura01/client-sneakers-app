import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { useContext } from "react";
import { ProductContext } from '../../pages/Panier';
import '../../styles/Panier.css';
const PanierRecap = () => {
    const [products,addProduct,subProduct ,removeProduct] = useContext(ProductContext);
    let totalProductPrice = 0;
    products.forEach(element => {
        totalProductPrice += (element.prix * element.quantite); 
         
    });


    

    
    
    return (
        
        <Card sx={{ boxShadow: 3 }} className='RecapCard' >
            <p >Résumé de la commande</p>
            <hr ></hr>

            <div >
                <p>Sous total :</p>
                <p>{totalProductPrice} €</p>
            </div>
            <hr ></hr>
            <form action="">
                <div >
                    <label htmlFor="codeReduc">Code de reduction :</label>
                    <div >
                        <input type="text" name="codeReduc" id="codeReduc" />
                        <input type='button' className='RecapCardButton' value='Valider'/>
                    </div>
                   
                </div>
                
            </form>
            <div className='Pay' >
                <input type='button' className='RecapCardButton' value='Paiement'/>
            </div>
            

        </Card>
            
        
    )
}

export default PanierRecap;
