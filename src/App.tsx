import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import AddPost from './components/homePage/AddPost';
import Card from './components/homePage/Card';
import NavBar from './components/navBar/Navbar';
import authContext, { AuthContextProvider } from './context/AuthContextProvider';
import Home from './components/Home';
import LoginPage from './components/login/LoginPage';
import SignUpPage from './components/register/SignUpPage';


function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter> 
  );  
}

export default App;
