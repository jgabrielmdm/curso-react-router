import './App.css';

//2 - reaproveitamento de estrutura
import { Outlet } from 'react-router-dom';

//4 - Navegando entre páginas
import NavBar from './componentes/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <h1>react router</h1>
      <Outlet/>
      <p>footer</p>
    </div>
    
  );
}

export default App;
