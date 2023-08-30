import logo from './logo.png';
import './App.css';
import './tarjetas.js';
import flan from './flan.jpg';
import { Card } from 'react-bootstrap';




function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="search-box">
          <input type="text" placeholder="Buscar receta..." />
        </div>
      </div>
      
      <header className="App-header">
        <Card
          imagenSrc={flan} alt='flan'
          title="Chocotorta en simcdples pasos"
          description="Mezcla el dulce de leche con el queso crema.Luego lo unes todo hasta que tengas una crema lisa y sin grumos.
           A continuación, en un plato, pon el café y el agua. El café puede ser con cafeína o descafeinado, como prefieras. En caso de no gustarte, puedes poner leche para mojar las galletas.
          La primera capa, la pondremos de galletas, que será la base de la tarta.Agarra las galletas, las vas pasando brevemente por la mezcla de café y agua y las colocas ordenadas en el fondo del molde.
          Procura rellenar bien todos los huecos con trocitos de galletas cortadas.A continuación pon una capa de la mezcla de dulce de leche y queso crema.
          Tienes que extender bien la capa, procurando que cubra todas las galletas.A continuación pon otra capa de galletas. Igual que antes, mojas y colocas.Y otra capa de crema.
          Así hasta que llegues a la última capa que será de dulce de leche.
          Una vez terminado, se lleva al refrigerador. Y listo!"
          
        />
        
      </header>
      <footer className='footer'>
        <p className="footer-copyright">© 2023 recetas. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
export default App;

