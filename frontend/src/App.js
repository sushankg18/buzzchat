import { useEffect, useState } from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import Login from './components/Login';
import Signup from './components/Signup';
import { useSelector } from 'react-redux';
import io from 'socket.io-client'
function App() {

  const [socket, setSocket] = useState(null)
  const { authUser } = useSelector(store => store.user)
  useEffect(() => {
    if (authUser) {
      const socket = io('http://localhost:8000', {
        withCredentials: true,
      });
      setSocket(socket)
    };
  }, [authUser])

  return (
    <>
      <ChakraProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </Router>
      </ChakraProvider>

    </>
  );
}

export default App;
