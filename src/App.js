import './App.css';
import { Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Car from './pages/Car'
import { ToastContainer } from 'react-toastify';
import Payment from './pages/Payment';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <div className="App">

<ToastContainer  position='bottom-center' limit={1}/> 
     
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>

      <Route path='/car/:carId' element={<Car/>}/>
      <Route path='/payment' element={<Payment/>}/>

    </Routes>
    </BrowserRouter>


    </div>
  );
}

export default App;
