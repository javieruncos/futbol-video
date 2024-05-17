import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Inicio from './Components/view/Inicio';
import MenuLateral from './Components/common/MenuLateral';

function App() {

  return (
    <>
      <div className='App'>
        <div className='row container-fluid'>
          <div className='col-12 col-lg-2 col-lg-2'>
            <MenuLateral></MenuLateral>
          </div>
          <div className='col-12 col-lg-10 col-lg-10'>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Inicio />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
