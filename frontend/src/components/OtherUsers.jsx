import React from 'react'
import { Image, HStack, Flex, Text } from '@chakra-ui/react'
import GetOtherUsers from './GetOtherUsers.jsx'
import { useSelector, useDispatch } from 'react-redux'
import { setSelectedUser } from '../redux/userSlice.js'
const OtherUsers = () => {
    const dispatch = useDispatch()

    GetOtherUsers();
    const { otherUsers, selectedUser } = useSelector(store => store.user)
    if (!otherUsers) return;
    const handleSelctedUser = (user) => {
        dispatch(setSelectedUser(user))
    }
    return (
        <>
            {
                otherUsers?.map((user) => {
                    return (
                        <HStack onClick={() => handleSelctedUser(user)} bgColor={selectedUser?._id === user._id ? "lightgreen" : null} w={'100%'} height={'10%'} px={'.4rem'} cursor={'pointer'}>
                            <Image borderRadius={'50%'} src={user.profilePicture} w={'2.2rem'} />
                            <Flex alignItems={'start'} flexDir={'column'} justifyContent={'space-evenly'}>
                                <Text color={selectedUser?._id === user._id ? "black" : null}>{user.username}</Text>
                                <Text fontSize={'.8rem'} color={'GrayText'}>Aur kya haal hai ?</Text>
                            </Flex>
                        </HStack>
                    )
                })
            }
        </>
    )
}

export default OtherUsers
