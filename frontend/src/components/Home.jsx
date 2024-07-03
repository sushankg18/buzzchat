import { Box, Flex, HStack, Heading, Image, Tooltip, Input, Text } from '@chakra-ui/react'
import React from 'react'
import BgImage from '../assets/loginPage.jpg'
import { IoMdMore } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";
import { IoCreateSharp } from "react-icons/io5";
import { CgMoreVerticalO } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { MdAttachment } from "react-icons/md";
import { MdEmojiEmotions } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { BsChatLeftText } from "react-icons/bs";



import avatar from '../assets/demoAvatarImg.jpg'
const Home = () => {
  return (
    <Box minH={'100vh'} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDir={'column'} gap={'2rem'} bgImage={BgImage} color={'white'} fontFamily={'Kanit'} minW={'100vw'} >
      <HStack fontSize={'2.3rem'} gap={'1rem'} color={'lightgreen'}>
        <Heading userSelect={'none'}>BUZZ CHAT </Heading>
        <BsChatLeftText />
      </HStack>

      {/* PEOPLE AREA */}
      <Box w={'70%'} display={'flex'} color={'black'} height={'80vh'} bgColor={'whitesmoke'}>
        <Box w={'30%'} h={'100%'} display={'flex'} flexDirection={'column'} >
          <Box h={'10%'} bgColor={'lightblue'} display={'flex'} p={'.6rem 1rem'} justifyContent={'space-between'}>
            <Box>
              <Heading fontSize={'1.4rem'}>Chats</Heading>
            </Box>
            <HStack fontSize={'1.3rem'} gap={'.8rem'}>
              <Tooltip label='create group chat'  placement='bottom'>
                <IoCreateSharp cursor={'pointer'} />
              </Tooltip>
              <CgMoreVerticalO cursor={'pointer'} />
            </HStack>
          </Box>

          <Box bgColor={'lightcyan'} height={'90%'} display={'flex'} flexDir={'column'} gap={'.6rem'} px={'.3rem'}>
            <HStack p={'.3rem 1rem'} bgColor={'lavenderblush'} mt={'.3rem'}>
              <FaSearch />
              <Input type='text' variant={'unstyled'} color={'black'} placeholder='Search or start a new chat' />
            </HStack>


            <HStack w={'100%'} height={'10%'} px={'.4rem'} cursor={'pointer'}>
              <Image borderRadius={'50%'} src={avatar} w={'2.2rem'} />
              <Flex alignItems={'start'} flexDir={'column'} justifyContent={'space-evenly'}>
                <Text>Sourabh</Text>
                <Text fontSize={'.8rem'} color={'GrayText'}>Aur kya haal hai ?</Text>
              </Flex>
            </HStack>

            <HStack w={'100%'} height={'10%'} px={'.4rem'} cursor={'pointer'}>
              <Image borderRadius={'50%'} src={avatar} w={'2.2rem'} />
              <Flex alignItems={'start'} flexDir={'column'} justifyContent={'space-evenly'}>
                <Text>Sourabh</Text>
                <Text fontSize={'.8rem'} color={'GrayText'}>Aur kya haal hai ?</Text>
              </Flex>
            </HStack>

            <HStack w={'100%'} height={'10%'} px={'.4rem'} cursor={'pointer'}>
              <Image borderRadius={'50%'} src={avatar} w={'2.2rem'} />
              <Flex alignItems={'start'} flexDir={'column'} justifyContent={'space-evenly'}>
                <Text>Sourabh</Text>
                <Text fontSize={'.8rem'} color={'GrayText'}>Aur kya haal hai ?</Text>
              </Flex>
            </HStack>

            <HStack w={'100%'} height={'10%'} px={'.4rem'} cursor={'pointer'}>
              <Image borderRadius={'50%'} src={avatar} w={'2.2rem'} />
              <Flex alignItems={'start'} flexDir={'column'} justifyContent={'space-evenly'}>
                <Text>Sourabh</Text>
                <Text fontSize={'.8rem'} color={'GrayText'}>Aur kya haal hai ?</Text>
              </Flex>
            </HStack>

            <HStack w={'100%'} height={'10%'} px={'.4rem'} cursor={'pointer'} >
              <Image borderRadius={'50%'} src={avatar} w={'2.2rem'} />
              <Flex alignItems={'start'} flexDir={'column'} justifyContent={'space-evenly'}>
                <Text>Sourabh</Text>
                <Text fontSize={'.8rem'} color={'GrayText'}>Aur kya haal hai ?</Text>
              </Flex>
            </HStack>
          </Box>
        </Box>


        {/* CHAT/MESSAGES AREA */}

        <Box width={'70%'} h={'100%'} bgColor={'lavenderblush'} position={'relative'}>


          <Box bgColor={'lightgreen'} py={'.6rem'} height={'10%'} display={'flex'} justifyContent={'space-between'}>
            <HStack pl={'1rem'} gap={'.5rem'}>
              <Image src={avatar} w={'2.2rem'} borderRadius={'50%'} />
              <Heading fontSize={'1.2rem'}>Sourabh</Heading>
            </HStack>

            <HStack gap={'1.5rem'} px={'1rem'} fontSize={'1.34rem'} color={'black'}>
              <FaVideo cursor={'pointer'} />
              <IoCall cursor={'pointer'} />
              <IoMdMore cursor={'pointer'} />
            </HStack>
          </Box>


          <Box position={'absolute'} display={'flex'} alignItems={'center'} p={'.5rem 1rem'} bottom={'0'} w={'100%'} >
            <HStack w={'15%'} gap={'1rem'} fontSize={'1.3rem'}>
              <MdEmojiEmotions cursor={'pointer'} />
              <MdAttachment cursor={'pointer'} />
            </HStack>
            <HStack w={'80%'} >
              <Input variant={'unstyled'} px={'.6rem'} placeholder='Type a message' />
            </HStack>
            <HStack w={'5%'} fontSize={'1.2rem'} cursor={'pointer'}>
              <IoSend />
            </HStack>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Home
