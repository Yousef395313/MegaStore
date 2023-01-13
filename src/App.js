import React from 'react'
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Home from './Pages/Home';
import ProductsList from './Pages/ProductsList';
import SingleProduct from './Pages/SingleProduct';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Announcement from './Components/Announcement';
import Slider from './Components/Slider';
import NewsLetter from './Components/NewsLetter';


const App = () => {
  return (
      <>
        <div className='App'>
        
          
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/login' element={<> <Navbar /> <Login /> </>} />
          <Route path='/Register' element={<> <Navbar /><Register /> </>} />
          <Route path='/Cart' element={<> <Cart /> </> } />
        </Routes>
        
        </div>
      </>
    
  )
}


  export default App;
