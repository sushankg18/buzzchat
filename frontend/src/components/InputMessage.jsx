import React, { useState } from 'react'
import { HStack, Input, position } from '@chakra-ui/react'
import { MdAttachment } from "react-icons/md";
import { MdEmojiEmotions } from "react-icons/md";
import { IoSend } from "react-icons/io5";
const InputMessage = () => {
    const [sendMessage, setSendMessage] = useState('')
    const handleSendMessage = (e) => {
        e.preventDefault();
        setSendMessage('')
        alert(sendMessage);
    }
    return (
            <form onSubmit={handleSendMessage} style={formStyling}>
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
            </form>
    )
}
const formStyling = {
    display : 'flex',
    position : "absolute",
    width : "100%",
    padding : ".4rem 1rem"
}
export default InputMessage
