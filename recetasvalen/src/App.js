import logo from './logo.png';
import './App.css';

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
        <card>
          <h1> holi como tan</h1>
        </card>
      </header>
      <footer className='footer'>
        <p className="footer-copyright">© 2023 recetas. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
