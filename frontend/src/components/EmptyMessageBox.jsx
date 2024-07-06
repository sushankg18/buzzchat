import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

const EmptyMessageBox = () => {
    const {authUser} = useSelector(store => store.user)
  return (
    <Box w={'100%'} h={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'} flexDir={'column'}>
        <Heading fontSize={'1.5rem'}>Hi, {authUser?.username}</Heading>
        <h1>start a new conversation</h1>
    </Box>
  )
}

export default EmptyMessageBox
