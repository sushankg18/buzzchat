import React, { useState, useEffect } from 'react'
import {
    Box,
    Button,
    Heading,
    Input,
    Text,
    HStack,
    Radio,
    RadioGroup,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Flex,
    VStack
} from '@chakra-ui/react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { MdEmail } from "react-icons/md";
import { FaLock, FaLongArrowAltUp } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { BiSolidHide } from "react-icons/bi";
import { IoEyeSharp } from "react-icons/io5";
import { BsChatLeftText } from "react-icons/bs";
import BgImage from '../assets/loginPage.jpg'
const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()
    const handleLogin = async (e) => {
        e.preventDefault()
        if ([password, email].some((fields) => fields.trim() === "")) {
            alert("Please fill all the fields")
        } else {
            try {
                const response = await axios.post('http://localhost:8080/api/v1/user/login', {
                    email: email,
                    password,
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                if (response.data.success) {
                    alert("User Logged in Successfully")
                    navigate('/')
                }
                console.log(response)
            } catch (error) {
                console.log("error occured while registring user : ", error)
            }
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        console.log("Password: ", e.target.value);
    };

    return (
        <Box minH={'100vh'} bgImage={BgImage} color={'white'} display={'flex'} alignItems={'center'} justifyContent={'center'} gap={'3rem'} flexDir={'column'} fontFamily={'Kanit'} minW={'100vw'} >
            <HStack fontSize={'2.3rem'} gap={'1rem'} color={'lightgreen'}>
                <Heading userSelect={'none'}>BUZZ CHAT </Heading>
                <BsChatLeftText />
            </HStack>
            <Box minH={'60vh'} w={'30%'} borderRadius={'.8rem'} border={'1px solid dimgray'} overflow={'hidden'} display={'flex'} flexDirection={'column'} gap={'2rem'}  >
                <Box borderBottom={'1px solid gray'} borderTop={'none'} p={'1rem'} w={'100%'} h={'fit-content'}>
                    <Heading fontSize={'1.4rem'} userSelect={'none'} textAlign={'center'} color={'white'}>Login</Heading>
                </Box>

                <Box height={'100%'} >
                    <form style={formStyling}>

                        <InputGroup w={'70%'} display={'flex'} bgColor={'white'} outline={'none'} p={'.5rem 1rem'}>
                            <InputLeftElement>
                                <MdEmail />
                            </InputLeftElement>
                            <Input variant={'unstyled'} type='email' onChange={handleEmail} placeholder='Enter Email Id' />
                        </InputGroup>


                        <InputGroup w={'70%'} bgColor={'white'} outline={'none'} p={'.5rem 1rem'}  >
                            <InputLeftElement>
                                <FaLock />
                            </InputLeftElement>
                            <Input variant={'unstyled'} onChange={handlePassword} type={showPassword ? "text" : "password"} placeholder='Enter Password' />
                            <InputRightElement onClick={() => setShowPassword(!showPassword)} cursor={'pointer'}>
                                {
                                    showPassword ? <BiSolidHide /> : <IoEyeSharp />
                                }
                            </InputRightElement>
                        </InputGroup>


                        <Button w={'70%'} type='submit' onClick={handleLogin} bgColor={'lightgreen'} color={'black'} py={0}>Login</Button>
                    </form>

                </Box>
                <Box w={'100%'} h={'30%'} display={'flex'} py={'.6rem'} alignItems={'center'} justifyContent={'center'}>
                    <Text>Don't have an account ? <Link to={'/login'} ><span style={{ color: "lightgreen", marginLeft: '.5rem' }}>Sign up</span></Link></Text>
                </Box>
            </Box>
        </Box>
    )
}
const formStyling = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    flexDirection: "column",
    width: "100%",
    color: "black"

}
export default Login
