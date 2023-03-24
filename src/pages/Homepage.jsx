import { Container } from "@mui/system";
import MainBtn from "../components/MainBtn";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import Box from "@mui/material/Box";

import exempleImage from "../assets/image-new-balance.jpg";
import contactPicture from "../assets/contact-picture.jpg";
import "../styles/Homepage.css";

const Homepage = () => {
  return (
    <main>
      <Container>
        <section id="call-to-action">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
              width: 1,
              height: 540,
            }}
            className="main-img"
          >
            <h1>Sneakly, chercher moins, trouver plus !</h1>
            <MainBtn title={"Découvrir"} />
          </Box>
        </section>
        <div className="yellow-rect"></div>

        <section id="brands">
          {/* Composant ScrollMenu */}
          <h1>Nouveautés...</h1>
          <Box sx={{ display: "flex", gap: 6, mb: 8 }} className="scroll-menu">
            <img src={exempleImage} height="250" alt="Une jolie image" />
            <img src={exempleImage} height="250" alt="Une jolie image" />
            <img src={exempleImage} height="250" alt="Une jolie image" />
            <img src={exempleImage} height="250" alt="Une jolie image" />
            <img src={exempleImage} height="250" alt="Une jolie image" />
            <img src={exempleImage} height="250" alt="Une jolie image" />
            <img src={exempleImage} height="250" alt="Une jolie image" />
            <img src={exempleImage} height="250" alt="Une jolie image" />
            <img src={exempleImage} height="250" alt="Une jolie image" />
          </Box>
          <h1>Marques...</h1>
          <Box sx={{ display: "flex", gap: 6, mb: 6 }} className="scroll-menu">
            <img src={exempleImage} height="250" alt="Une jolie image" />
            <img src={exempleImage} height="250" alt="Une jolie image" />
            <img src={exempleImage} height="250" alt="Une jolie image" />
            <img src={exempleImage} height="250" alt="Une jolie image" />
            <img src={exempleImage} height="250" alt="Une jolie image" />
            <img src={exempleImage} height="250" alt="Une jolie image" />
            <img src={exempleImage} height="250" alt="Une jolie image" />
            <img src={exempleImage} height="250" alt="Une jolie image" />
            <img src={exempleImage} height="250" alt="Une jolie image" />
          </Box>
        </section>

        <section id="commitments">
          <h1>Engagements...</h1>
          <Container>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                fontWeight: 600,
                m: 2,
              }}
            >
              <p>
                Chez Sneakly, la satisfaction de nos clients c’est ce que nous
                avons de plus précieux.
              </p>
              <p>
                Ce site a été conçu pour vous apporter la meilleur expérience
                possible, trouver facilement ce pourquoi vous êtes venu, et plus
                encore !
              </p>
              <p>
                Aussi, dans le prolongement de cette volonté, il nous semble
                essentiel de vous parler du “après” votre commande.
              </p>
              <p>
                Nous nous engageons sur les élements suivants pour que, tout
                comme votre commande, la livraison se passe dans les meilleures
                conditions.
              </p>
            </Box>
          </Container>
          <Box sx={{ display: "flex", justifyContent: "space-around", mt: 8 }}>
            <article>
              <LocalShippingOutlinedIcon />
              <h3>LIVRAISON OFFERTE</h3>
              <p>
                Partout en France <br />
                Dès 150 € d'achats
              </p>
            </article>
            <article>
              <CreditCardOutlinedIcon />
              <h3>PAIEMENT EN 3 FOIS</h3>
              <p>
                Par carte bancaire <br />
                Sans frais additionnels
              </p>
            </article>
            <article>
              <LiveHelpOutlinedIcon />
              <h3>SERVICE CLIENT EXPRESS</h3>
              <p>
                Réponse éclair de 9h à 20h <br />
                Du lundi au samedi
              </p>
            </article>
          </Box>
        </section>
        <div className="yellow-rect-2"></div>
        <section id="keep-in-touch">
          <Box sx={{display: 'flex'}}>
              <img src={contactPicture} width="600" height="540"/>
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
              <h1>On reste en contact ?</h1>
              <p>
                Des informations sur les sorties à venir, les évenemments, nos
                prochaines collections.
              </p>
              <p>Vous saurez tout avant les autres !</p>
              <input type="email" placeholder="Email"></input>
              <MainBtn title={"S'inscrire"} />
              <p>
                <strong>Une newsletter par mois, ni plus, ni moins !</strong>
              </p>
              <p>Vous pouvez évidemment vous désabonner à tout instant.</p>
            </Box>
          </Box>
        </section>
      </Container>
    </main>
  );
};

export default Homepage;
