import { Flex, Text, } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRef } from 'react'
const Messages = () => {

  const scroll = useRef()
  const { authUser } = useSelector(store => store.user)
  const { getMessage } = useSelector(store => store.message)
  useEffect(() => {
    if (!getMessage) return;
    scroll.current?.scrollIntoView({ behavior: "smooth" })
  }, [getMessage])

  return (
    <>{
      getMessage?.map((message) => {
        console.log(message)
        const isSender = authUser?.id === message?.senderId
        return (
          <Flex ref={scroll} flexDir={'column'} marginBottom={'.5rem'} w={'100%'} >
            <Flex bgColor={isSender ? 'lightgreen' : 'lightgray'}   flexDir={'column'} alignSelf={isSender ? 'flex-end' : 'flex-start'} w={'fit-content'} padding={'.1rem .7rem'} borderRadius={'.5rem'} >
              <Text >{message.message && message.message}</Text>
              <Text fontSize={'.6rem'} alignSelf={isSender? 'flex-end' : 'flex-end'}>{new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </Text>
              
            </Flex>
          </Flex>
        )
      })
    }
    </>
  )
}

export default Messages
