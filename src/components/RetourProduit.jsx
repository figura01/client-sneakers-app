import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container } from "@mui/system";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const RetourProduit = () => {
    return (
        <div>
        <Container>
            <div>
                <h1>COMMENT FAIRE UN RETOUR / ÉCHANGE ?</h1>
            </div>
            <div>

            <Box sx={{ width: '100%' }}>
                <Grid>
                    <Grid>
                        <Grid item xs={12}>
                        <Item>RETOURS</Item>
                        </Grid>
                    </Grid>
                    <div>
                        <p>
                        Nous vous garantissons le remboursement de tout article acheté sur notre site si vous n’en êtes pas complètement satisfait. 
                        Pour ce faire il suffit d'enregistrer votre retour dans votre compte client dans les 30 jours suivants sa réception.
                        </p>
                        <h3>Un bon de retour Mondial Relay peut directement être téléchargé dans votre compte client.</h3>
                        
                    </div>
                    
                </Grid>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={3}>
                    <Item><strong>NOS MÉTHODES DE RETOURS</strong></Item>
                    </Grid>
                    <Grid item xs={3}>
                    <Item><strong>COÛT</strong></Item>
                    </Grid>
                    <Grid item xs={6}>
                    <Item><strong>DÉTAILS</strong></Item>
                    </Grid>
                </Grid>    
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>    
                    <Grid item xs={3}>
                    <Item>Retours via Mondial Relay</Item>
                    </Grid>
                    <Grid item xs={3}>
                    <Item>Gratuit</Item>
                    </Grid>
                    <Grid item xs={6}>
                    <Item>En savoir plus</Item>
                    </Grid>
                    <Grid item xs={3}>
                    <Item>Retours via la Poste</Item>
                    </Grid>
                    <Grid item xs={3}>
                    <Item>A vos frais (7 à 10 €)</Item>
                    </Grid>
                    <Grid item xs={6}>
                    <Item>En savoir plus</Item>
                    </Grid>
                    <Grid item xs={3}>
                    <Item>En boutique1</Item>
                    </Grid>
                    <Grid item xs={3}>
                    <Item>Gratuit</Item>
                    </Grid>
                    <Grid item xs={6}>
                    <Item>Vous pouvez nous retourner vos articles dans l'une de nos boutiques</Item>
                    </Grid>
                </Grid>
                </Box>
            </div>
            <div>
                <h3>Attention : Les articles achetés en boutique ne peuvent être retournés qu'en boutique.</h3>
                <p>
                Nous vous proposons de nous retourner gratuitement vos articles par Mondial Relay via une procédure de retours facilités. Si vous ne souhaitez pas utiliser ce service, libre de nous renvoyer vos articles non désirés par tout autre transporteur de votre choix à vos propres frais.  
                </p>
                <p>
                A la réception de votre colis par nos services, vous serez remboursé dans un délai de 14 jours maximum par le même moyen qui vous a servi au paiement (CB, carte cadeau, Paypal ou virement). Le remboursement inclut les frais de port que vous auriez payé pour que l'on vous expédie votre commande.   
                </p>
                <p>
                Les articles que vous souhaitez nous renvoyer doivent être neufs, non utilisés et non portés, dans leur emballage d’origine avec les étiquettes attachées aux produits. Les chaussettes sont considérées comme des sous-vêtements et ne peuvent donc pas être remboursées après essayage.   
                </p>
                <h3>Pour réaliser un retour :</h3>
                <p>
                Rendez-vous dans votre compte client, puis dans le détail de commande concernée pour indiquer les produits que vous souhaitez nous retourner et imprimer le bordereau de retour à glisser dans votre colis.   
                </p>
                <h3>
                Pour nous faire parvenir votre retour via la procédure de retours facilités Mondial Relay :   
                </h3>
                <p>
                Dans l’onglet « Mes retours produits », cliquez sur « imprimer l’étiquette » pour être redirigé sur le site de Mondial Relay, où, après avoir vérifié vos coordonnées vous pourrez imprimer votre étiquette de retour Mondial Relay à coller sur votre carton.
                Vous n’aurez ensuite plus qu’à déposer votre colis dans le Point Relais® de votre choix.
                </p>
            </div>
        
        </Container>
        </div>
    );
};

export default RetourProduit;