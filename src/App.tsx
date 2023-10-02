import './App.css';

import LoginForm from './components/login/LoginForm';
import LoginPage from './components/login/LoginPage';
import SignUpPage from './components/register/SignUpPage';
import NavBar from "./components/navBar/Navbar";
import AddPost from "./components/homePage/AddPost";
import Card from "./components/homePage/Card";

function App() {
  return (
    <>
     <SignUpPage />
     <NavBar/>
     <div className='flex flex-col items-center pl-20 pr-20 dark:bg-black'>
     <AddPost/>
     <Card/>
     </div>
    </> 
  );  
}

export default App;
