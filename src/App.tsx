import './App.css';
import AddPost from './components/homePage/AddPost';
import Card from './components/homePage/Card';
import NavBar from './components/navBar/Navbar';


function App() {
  return (
    <>
     <NavBar/>
     <div className='flex flex-col items-center pl-20 pr-20'>
     <AddPost/>
     <Card/>
     </div>
    </> 
  );  
}

export default App;
