import './App.css';
import AddPost from './components/AddPost';
import Card from './components/Card';
import NavBar from './components/Navbar';

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
