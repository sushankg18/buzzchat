import { useEffect, useState } from 'react';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import Login from './components/Login';
import Signup from './components/Signup';
import { useSelector, useDispatch } from 'react-redux';
import io from 'socket.io-client'
import { setSocket } from './redux/socketSlice';
import { setOnlineUsers } from './redux/userSlice';
function App() {

  const dispatch = useDispatch()
  const { authUser } = useSelector(store => store.user)
  const {socket} = useSelector(store => store.socket)
  useEffect(() => {
    if (authUser) {
      const socket = io('http://localhost:8000', {
        withCredentials: true,
        query: {
          userId: authUser.id
        }
      });
      dispatch(setSocket(socket));

      socket.on('getOnlineUsers' , (onlineUsers)=>{
        dispatch(setOnlineUsers(onlineUsers))
      });

      return ()=> socket.close()
    }else{
      if(socket){
        socket.close();
        dispatch(setSocket(null))
      }
    }
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
