import React from 'react';
import { Image, HStack, Flex, Text, Avatar, AvatarBadge } from '@chakra-ui/react';
import GetOtherUsers from './GetOtherUsers.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedUser } from '../redux/userSlice.js';

const OtherUsers = () => {
    const dispatch = useDispatch();

    GetOtherUsers();
    const { otherUsers, selectedUser, onlineUsers } = useSelector(store => store.user);
    if (!otherUsers) return null;
    const handleSelctedUser = (user) => {
        dispatch(setSelectedUser(user));
    }
    return (
        <>
            {otherUsers?.map((user) => {
                const isOnline = onlineUsers && onlineUsers.includes(user?._id)
                return (
                    <HStack
                        key={user._id}
                        onClick={() => handleSelctedUser(user)}
                        bgColor={selectedUser?._id === user._id ? "lightgreen" : null}
                        w={'100%'}
                        height={'10%'}
                        px={'.4rem'}
                        cursor={'pointer'}
                    >
                        <Avatar src={user.profilePicture} w={'2.6rem'} h={'2.6rem'} >
                            {
                                isOnline &&
                                <AvatarBadge boxSize='.9rem' bg='green.500' />
                            }
                        </Avatar>
                        <Flex alignItems={'start'} flexDir={'column'} justifyContent={'space-evenly'}>
                            <Text color={selectedUser?._id === user._id ? "black" : null}>{user.username}</Text>
                            <Text fontSize={'.8rem'} color={'GrayText'}>Aur kya haal hai ?</Text>
                        </Flex>
                    </HStack>
                );
            })}
        </>
    );
}

export default OtherUsers;
