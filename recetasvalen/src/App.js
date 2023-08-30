import logo from './logo.png';
import './App.css';
import './tarjetas.css'
import './tarjetas.js';
import flan from './flan.jpg';
import Card from './tarjetas.js';




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
          title='flan'
          description='Derrite 1 taza de azúcar en una cacerola para hacer caramelo. Vierte el caramelo en un molde para flan y déjalo enfriar.

          Bate 4 huevos en un tazón y agrega 2 tazas de leche. Mezcla bien.
          
          Vierte la mezcla de huevos y leche en el molde de flan con caramelo.
          
          Hornea el flan a 180°C en un baño de agua durante aproximadamente 1 hora, hasta que esté firme en los bordes y ligeramente tembloroso en el centro.
          
          Enfría el flan a temperatura ambiente y luego refrigéralo.
          
          Desmolda el flan volteándolo en un plato y sirve.'
       />
      </header>
      <footer className='footer'>
        <p className="footer-copyright">© 2023 recetas. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
export default App;

