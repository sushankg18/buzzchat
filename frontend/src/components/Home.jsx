import { Box, HStack, Heading, Image, Input, Button, useToast, Text, Flex, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BgImage from '../assets/loginPage.jpg'
import { FaRegUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { IoMdMore } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaVideo } from "react-icons/fa";
import { IoCreateSharp } from "react-icons/io5";
import { CgMoreVertical } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { BsChatLeftText } from "react-icons/bs";
import axios from 'axios';
import OtherUsers from './OtherUsers.jsx';
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedUser } from '../redux/userSlice.js';
import GetMessages from './GetMessages.jsx';
import Messages from './Messages.jsx';
import InputMessage from './InputMessage.jsx';
import EmptyMessageBox from './EmptyMessageBox.jsx';
import EditProfile from './EditProfile.jsx';
const Home = () => {
  const dispatch = useDispatch()
  const [showLogoutBtn, setShowLogoutBtn] = useState(false)
  const [editProfileModal, setEditProfileModal] = useState(false)

  const openModal = () => setEditProfileModal(true);
  const closeModal = () => setEditProfileModal(false);

  const navigate = useNavigate();
  const toast = useToast();
  const { selectedUser } = useSelector(store => store.user)
  const handleLogout = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/v1/user/logout', { withCredentials: true })
      navigate('/login')
      toast({
        status: 'success',
        title: res.data.message,
        duration: 1000,
        position: 'top'
      });
      dispatch(setSelectedUser(null));
      setShowLogoutBtn(false)
    } catch (error) {
      console.log("error while logout", error)
    }
  }

  const handleEditProfileModal = () => {
    setEditProfileModal(!editProfileModal)
    setShowLogoutBtn(false)
  }
  GetMessages()
  return (
    <Box minH={'100vh'} position={'relative'} display={'flex'} alignItems={'center'} justifyContent={'center'} flexDir={'column'} gap={'2rem'} bgImage={BgImage} color={'white'} fontFamily={'Kanit'} minW={'100vw'} >
      {
        editProfileModal && <EditProfile isOpen={editProfileModal} onClose={closeModal} />
      }


      {/* PEOPLE AREA */}
      <Box w={'100%'} display={'flex'} color={'black'} height={'100vh'} bgColor={'whitesmoke'}>
        <Box w={'25%'} h={'100%'} display={'flex'} flexDirection={'column'} >
          <Box h={'10%'} bgColor={'lightblue'} display={'flex'} p={'.6rem 1rem'} justifyContent={'space-between'}>
            <HStack color={'black'} gap={'.7rem'}>
              <Heading fontSize={'1.3rem'} userSelect={'none'}>BUZZ CHAT </Heading>
              <BsChatLeftText fontSize={'1.1rem'} />
            </HStack>
            <HStack fontSize={'1.3rem'} gap={'.8rem'}>
              <IoCreateSharp cursor={'pointer'} />
              <Box position={'relative'}>
                <CgMoreVertical cursor={'pointer'} onClick={() => setShowLogoutBtn(!showLogoutBtn)} />
                <Box position={'absolute'} zIndex={'2'} left={'0'} top={'7'} bgColor={'white'} display={showLogoutBtn ? 'flex' : 'none'} flexDir={'column'}>
                  <Button borderRadius={'0'} onClick={handleEditProfileModal} p={'.3rem 1rem'} borderBottom={'2px solid white'} color={'black'} textAlign={'start'} rightIcon={<FaRegUser />} fontSize={'.8rem'} variant={'unstyled'}>Edit profile</Button>
                  <Button onClick={handleLogout} borderRadius={'0'} p={'.3rem 1rem'} textAlign={'start'} color={'black'} rightIcon={<FiLogOut />} fontSize={'.8rem'} variant={'unstyled'}>Logut</Button>
                </Box>
              </Box>
            </HStack>
          </Box>

          <Box bgColor={'lightcyan'} height={'90%'} display={'flex'} flexDir={'column'} gap={'.6rem'} px={'.3rem'}>
            <HStack p={'.3rem 1rem'} bgColor={'lavenderblush'} mt={'.3rem'}>
              <FaSearch />
              <Input type='text' variant={'unstyled'} color={'black'} placeholder='Search or start a new chat' />
            </HStack>
            <OtherUsers />
          </Box>
        </Box>


        {/* CHAT/MESSAGES AREA */}

        <Box width={'75%'} h={'100%'} bgColor={'lavenderblush'} position={'relative'}>
          <Box bgColor={'lightgreen'} py={'.6rem'} height={'10%'} display={'flex'} justifyContent={'space-between'}>
            <HStack pl={'1rem'} gap={'.5rem'}>
              <Image src={selectedUser?.profilePicture} w={'2.2rem'} borderRadius={'50%'} />
              <Flex flexDir={'column'}>
                <Heading fontSize={'1.2rem'}>{selectedUser?.fullName}</Heading>
                <Text fontSize={'.8rem'}>Online</Text>
              </Flex>
            </HStack>
            {
              selectedUser && (

                <HStack gap={'1.5rem'} px={'1rem'} fontSize={'1.34rem'} color={'black'}>
                  <FaVideo cursor={'pointer'} />
                  <IoCall cursor={'pointer'} />
                  <IoMdMore cursor={'pointer'} />
                </HStack>
              )
            }
          </Box>

          {/* MESSAGES AREA */}

          <Box overflowY={'auto'} display={'flex'} scrollBehavior={'smooth'} flexDir={'column'} alignItems={'start'} w={'100%'} maxH={'80%'} p={'.5rem 1rem'}>
            {
              selectedUser ? Messages && <Messages /> : <EmptyMessageBox />
            }
          </Box>

          <Box position={'absolute'} h={'10%'} display={'flex'} alignItems={'center'} bottom={'0'} w={'100%'} >
            {
              selectedUser && (
                <>
                  <InputMessage />
                </>
              )
            }
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Home
