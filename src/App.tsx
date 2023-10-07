import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AddPost from './components/homePage/AddPost';
import Card from './components/homePage/Card';
import NavBar from './components/navBar/Navbar';
import AuthProvider from './components/context/AuthContext';


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NavBar/>
        <div className='flex flex-col items-center pl-20 pr-20'>
        <AddPost/>
        <Card/>
        </div>
      </AuthProvider>
    </BrowserRouter> 
  );  
}

export default App;
