import { Box, Button, Heading, Input, Text, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { BiSolidHide } from "react-icons/bi";
import { IoEyeSharp } from "react-icons/io5";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false)

    return (
        <Box minH={'100vh'} display={'flex'} alignItems={'center'} justifyContent={'center'} fontFamily={'Kanit'} bgColor={'#F0F0F0'} minW={'100vw'} >
            <Box h={'60vh'} w={'30%'} borderRadius={'.8rem'} display={'flex'} flexDirection={'column'} gap={'2rem'} bgColor={'lightgray'} >
                <Box bgGradient="linear(to-r, lightgreen, darkgreen)"p={'1rem'}  w={'100%'} h={'fit-content'}>
                    <Heading fontSize={'1.4rem'} textAlign={'center'} color={'white'}>Login</Heading>
                </Box>

                <Box w={'100%'} height={'100%'} display={'flex'} alignItems={'center'} flexDir={'column'} gap={'1rem'}>

                    <InputGroup w={'70%'} display={'flex'} bgColor={'white'} outline={'none'} p={'.5rem 1rem'}>
                        <InputLeftElement>
                            <MdEmail />
                        </InputLeftElement>
                        <Input variant={'unstyled'} placeholder='Enter Email Id' />
                    </InputGroup>


                    <InputGroup w={'70%'} bgColor={'white'} outline={'none'} p={'.5rem 1rem'}  >
                        <InputLeftElement>
                            <FaLock />
                        </InputLeftElement>
                        <Input variant={'unstyled'} type={showPassword ?'text' :'password'} placeholder='Enter Password' />
                        <InputRightElement onClick={()=>setShowPassword(!showPassword)}>
                        {
                            showPassword ?<BiSolidHide /> : <IoEyeSharp />
                        }
                            
                        </InputRightElement>
                    </InputGroup>


                    <Button w={'70%'} bgColor={'lightgreen'} color={'black'} py={0}>Login</Button>
                    <Text>Don't have an account ? <Link to={'/signup'}>Register</Link></Text>
                </Box>
            </Box>
        </Box>
    )
}

export default Login
