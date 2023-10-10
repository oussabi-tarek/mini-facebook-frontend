import './App.css';
import SignUpPage from './components/register/SignUpPage';
import NavBar from "./components/navBar/Navbar";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AddPostContainer } from './container/AddPostContainer';
import { HomeContainer } from './container/HomeContainer';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
     <HomeContainer/>
     </QueryClientProvider>
    </> 
  );  
}

export default App;
