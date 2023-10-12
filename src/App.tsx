import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import  { AuthContextProvider } from './context/AuthContextProvider';
import LoginPage from './components/login/LoginPage';
import SignUpPage from './components/register/SignUpPage';
import { HomeContainer } from './container/HomeContainer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ConnectionRefused } from './components/error/ConnectionRefused';

const queryClient = new QueryClient();
function App() {
  return (
    <BrowserRouter>
      
      <AuthContextProvider>
         <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/NoResponse' element={<ConnectionRefused/>}/>
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
