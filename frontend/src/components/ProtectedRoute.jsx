import React from 'react'
import { Navigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

const ProtectedRoute = () => {

    const {authUser} = useSelector(store => store.user)
    const toast = useToast()
    if(!authUser){
        toast({
            status : "error",
            title : "Please Login or Register first !"
        });
        return <Navigate to={'/login'} replace />
    }
  return Element;
}

export default ProtectedRoute