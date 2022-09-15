import './App.css';
import {BrowserRouter as Router,Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Car from './pages/Car'

function App() {
  return (
    <div className="App">

      
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>

      <Route path='/car/:carId' element={<Car/>}/>

    </Routes>
    </BrowserRouter>


    </div>
  );
}

export default App;
