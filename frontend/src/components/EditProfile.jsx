import React, { useState } from 'react'
import { Avatar, Box, Button, Flex, Heading, HStack, Input, InputGroup, InputLeftAddon, InputLeftElement, Text } from '@chakra-ui/react'
import { RiCloseLargeFill } from "react-icons/ri";
import { useSelector } from 'react-redux';
import { VscEdit } from "react-icons/vsc";

const EditProfile = ({ isOpen, onClose }) => {
    const { authUser } = useSelector(store => store.user)
    const [changeFullname, setChangeFullname] = useState(authUser?.username)
    const [changeEmail, setChangeEmail] = useState(authUser?.email)
    const [changeBio, setChangeBio] = useState('Bio')
    if (!authUser) return;

    return (
        <Box w={'100vw'}isOpen={isOpen} onClose={onClose} zIndex={'19'} h={'100vh'} position={'absolute'} bgColor={'rgba(0,0,0,.7)'} display={'flex'} justifyContent={'center'} alignItems={'center'} >
            <Box minW={'35vw'} minH={'50vh'} bgColor={'black'} color={'white'} zIndex={'100'} position={'absolute'}>
                <HStack borderBottom={'1px solid white'} p={'.7rem 1rem'} h={'13%'} justifyContent={'space-between'}>
                    <Heading color={'green'} fontSize={'1.2rem'}>Edit profile</Heading>
                    <RiCloseLargeFill onClick={onClose} cursor={'pointer'} color='red'/>
                </HStack>

                <Flex flexDir={'column'} gap={'1rem'} w={'100%'} h={'87%'} p={'1rem 0'}>
                    <Flex flexDir={'column'} alignItems={'center'} gap={'.5rem'}>
                        <Avatar src={authUser?.profilePicture} w={'6rem'} h={'6rem'} />
                        <Button fontSize={'.7rem'} w={'fit-content'} colorScheme={'teal'}>Change profile </Button>
                    </Flex>


                    <Flex flexDir={'column'} w={'100%'} gap={'.8rem'} p={'.1rem 2rem'} >
                        <Flex flexDir={'column'} gap={'.3rem'}>
                            <Text fontSize={'.8rem'}>Change fullname</Text>
                            <InputGroup>
                                <InputLeftElement>
                                    <VscEdit />
                                </InputLeftElement>
                                <Input value={changeFullname} type='text' />
                            </InputGroup>
                        </Flex>

                        <Flex flexDir={'column'} gap={'.3rem'}>
                            <Text fontSize={'.8rem'}>Edit Bio</Text>
                            <InputGroup>
                                <InputLeftElement>
                                    <VscEdit />
                                </InputLeftElement>
                                <Input value={changeBio} type='text' />
                            </InputGroup>
                        </Flex>

                        <Flex flexDir={'column'} gap={'.3rem'}>
                            <Text fontSize={'.8rem'}>Change Email</Text>
                            <InputGroup>
                                <InputLeftElement>
                                    <VscEdit />
                                </InputLeftElement>
                                <Input value={changeEmail} type='email' />
                            </InputGroup>
                        </Flex>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    )
}

export default EditProfile
