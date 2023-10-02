import './App.css';
import NavBar from "./components/navBar/Navbar";
import AddPost from "./components/homePage/AddPost";
import Card from "./components/homePage/Card";


function App() {
  return (
    <>
     <NavBar/>
     <div className='flex flex-col items-center pl-20 pr-20 dark:bg-black'>
     <AddPost/>
     <Card/>
     </div>
    </> 
  );  
}

export default App;
