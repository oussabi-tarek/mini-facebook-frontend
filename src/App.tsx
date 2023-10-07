import './App.css';
import SignUpPage from './components/register/SignUpPage';
import NavBar from "./components/navBar/Navbar";
import { PostListContainer } from './container/PostListContainer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AddPostContainer } from './container/AddPostContainer';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
     <NavBar/>
     <div className='flex flex-col items-center pl-20 pr-20 dark:bg-black'>
     <AddPostContainer/>
     <PostListContainer/>
     </div>
     </QueryClientProvider>
    </> 
  );  
}

export default App;
