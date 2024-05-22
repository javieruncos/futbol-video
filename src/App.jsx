import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Inicio from './Components/view/Inicio';
import MenuLateral from './Components/common/MenuLateral';
import Menu from './Components/common/Menu';

function App() {

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Menu></Menu>
          <div className='d-flex'>
            <MenuLateral></MenuLateral>
            <Routes>
              <Route path="/" element={<Inicio />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
