import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import { PostListContainer } from './container/PostListContainer';
import { AddPostContainer } from './container/AddPostContainer';
import NavBar from './components/navBar/Navbar';
import authContext, { AuthContextProvider } from './context/AuthContextProvider';
import Home from './components/Home';
import LoginPage from './components/login/LoginPage';
import SignUpPage from './components/register/SignUpPage';
import { HomeContainer } from './container/HomeContainer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  return (
    <BrowserRouter>
      
      <AuthContextProvider>
         <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/' element={<HomeContainer />} />
        </Routes>
         </QueryClientProvider>
      </AuthContextProvider>
         
    </BrowserRouter> 
  );  
}

export default App;
