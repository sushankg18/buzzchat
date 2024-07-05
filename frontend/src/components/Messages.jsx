import {  Flex, Text,  } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Messages = () => {


  const { getMessage } = useSelector(store => store.message)

  useEffect(() => {

    if (!getMessage) return;
  }, [getMessage])

  return (
    <>{
      getMessage?.map((message) => {
        return (
          <Flex flexDir={'column'} gap={'0'} w={'100%'} >
            <Text bgColor={'lightgreen'} alignSelf={'flex-end'} w={'fit-content'} padding={'.2rem .7rem'} borderRadius={'.5rem'} >{message.message && message.message}</Text>
            <Text fontSize={'.7rem'} alignSelf={'flex-end'}>12:39</Text>
          </Flex>
        )
      })
    }
    </>
  )
}

export default Messages
