import React, { useState } from 'react'
import axios from 'axios';
import { HStack, Input } from '@chakra-ui/react'
import { MdAttachment } from "react-icons/md";
import { MdEmojiEmotions } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { setGetMessagges } from '../redux/messageSlice';
const InputMessage = () => {
    const [sendMessage, setSendMessage] = useState('')
    const dispatch = useDispatch()
    const { selectedUser } = useSelector(store => store.user)
    const {getMessage} = useSelector(store=>store.message)
    const handleSendMessage = async (e) => {
        e.preventDefault();
        try {
            axios.defaults.withCredentials = true
            const response = await axios.post(`http://localhost:8000/api/v1/message/send/${selectedUser?._id}`, 
                {message : sendMessage },
                 {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })
            dispatch(setGetMessagges([...getMessage, response.data.newMessgae]))
            setSendMessage('')
        } catch (error) {
            console.log("Error while sending message : ", error)
        }
    }
    return (
        <form form onSubmit={handleSendMessage} style={formStyling} >
            <HStack w={'15%'} gap={'1rem'} fontSize={'1.3rem'}>
                <MdEmojiEmotions cursor={'pointer'} />
                <MdAttachment cursor={'pointer'} />
            </HStack>
            <HStack w={'80%'} >
                <Input value={sendMessage} onChange={(e) => setSendMessage(e.target.value)} variant={'unstyled'} px={'.6rem'} placeholder='Type a message' />
            </HStack>
            <HStack as={'button'} type='submit' w={'5%'} fontSize={'1.2rem'} cursor={'pointer'}>
                <IoSend />
            </HStack >
        </form >
    )
}
const formStyling = {
    display: 'flex',
    position: "absolute",
    width: "100%",
    padding: ".4rem 1rem"
}
export default InputMessage