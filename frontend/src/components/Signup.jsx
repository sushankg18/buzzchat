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
  VStack,
  useToast
} from '@chakra-ui/react'
import axios from 'axios'
import { Link , useNavigate } from 'react-router-dom'
import { MdEmail } from "react-icons/md";
import { FaLock, FaLongArrowAltUp } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { BiSolidHide } from "react-icons/bi";
import { IoEyeSharp } from "react-icons/io5";
import { BsChatLeftText } from "react-icons/bs";
import BgImage from '../assets/loginPage.jpg'
const Signup = () => {

  const [fullname, setFullname] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isPassConf, setIsPassConf] = useState(false)
  const [selectedGender, setSelectedGender] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()
  const toast = useToast()
  const handleSignup = async (e) => {
    e.preventDefault()
    if ([fullname, username, password, confirmPassword, selectedGender, email].some((fields) => fields.trim() === "")) {
      toast({
        position: "top",
        title: "please fill all the fields",
        status: 'warning',
        isClosable: true,
        duration: 2000
      });
    } else {
      try {
        const response = await axios.post('http://localhost:8000/api/v1/user/register', {
          fullName: fullname,
          email: email,
          username,
          password,
          confirmPassword,
          gender: selectedGender
        }, {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true
        });
        toast({
          position: "top",
          title: response.data.message,
          status: 'success',
          isClosable: true,
          duration: 2000
        });
        navigate('/login')
        console.log(response)
      } catch (error) {
        if(error.response.status === 400){
          toast({
            position: "top",
            title: error.response.data.message,
            status: 'error',
            isClosable: true,
            duration: 2000
          });
        } else if(error.response.status === 401){
            toast({
              position : "top",
              status : "warning",
              title : error.response.data.message,
              isClosable: true,
              duration: 2000
            })
        }
        console.log("error occured while registring user : ", error)
      }
    }
  }

  const handleFullname = (e) => {
    setFullname(e.target.value)
  }

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    const regex = /^[a-zA-Z0-9]*$/;
    if (regex.test(value)) {
      setUsername(value);
    }
  };

  const handleKeyDown = (event) => {
    const invalidChars = [' ', '#', '@', '$', '%', '^', '&', '*', '(', ')', '!', '+', '=', '{', '}', '[', ']', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/', '\\', '|', '~', '`'];
    if (invalidChars.includes(event.key)) {
      event.preventDefault();
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log("Password: ", e.target.value);
  };

  const handleCheckConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    console.log("Confirm password: ", e.target.value);
  };

  useEffect(() => {
    if (confirmPassword.length > 0 && password === confirmPassword) {
      setIsPassConf(true);
    } else {
      setIsPassConf(false);
    }
  }, [password, confirmPassword]);



  return (
    <Box minH={'100vh'} bgImage={BgImage} color={'white'} display={'flex'} alignItems={'center'} justifyContent={'center'} gap={'3rem'} flexDir={'column'} fontFamily={'Kanit'} minW={'100vw'} >
      <HStack fontSize={'2.3rem'} gap={'1rem'} color={'lightgreen'}>
        <Heading userSelect={'none'}>BUZZ CHAT </Heading>
        <BsChatLeftText />
      </HStack>
      <Box minH={'60vh'} w={'30%'} borderRadius={'.8rem'} border={'1px solid dimgray'} overflow={'hidden'} display={'flex'} flexDirection={'column'} gap={'2rem'}  >
        <Box borderBottom={'1px solid gray'} borderTop={'none'} p={'1rem'} w={'100%'} h={'fit-content'}>
          <Heading fontSize={'1.4rem'} userSelect={'none'} textAlign={'center'} color={'white'}>Sign Up</Heading>
        </Box>

        <Box height={'100%'} >
          <form style={formStyling}>
            <InputGroup w={'70%'} display={'flex'} bgColor={'white'} outline={'none'} p={'.5rem 1rem'}>
              <InputLeftElement>
                <FaRegUser />
              </InputLeftElement>
              <Input variant={'unstyled'} maxLength={25} onChange={handleFullname} placeholder='Enter full name' />
            </InputGroup>

            <InputGroup w={'70%'} display={'flex'} bgColor={'white'} outline={'none'} p={'.5rem 1rem'}>
              <InputLeftElement>
                <MdDriveFileRenameOutline />
              </InputLeftElement>
              <Input variant={'unstyled'} maxLength={20} onChange={handleUsernameChange} onKeyDown={handleKeyDown} placeholder='Enter Username' />
            </InputGroup>

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
              <Input variant={'unstyled'} onChange={handlePassword} type={'text'} placeholder='Enter Password' />
            </InputGroup>

            <VStack w={'70%'} >
              <InputGroup bgColor={'white'} outline={'none'} p={'.5rem 1rem'}  >
                <InputLeftElement>
                  <FaLock />
                </InputLeftElement>
                <Input variant={'unstyled'} isDisabled={password.length < 8} onChange={handleCheckConfirmPassword} type={showPassword ? 'text' : 'password'} placeholder='Confirm Password' />
                <InputRightElement cursor={'pointer'} onClick={() => setShowPassword(!showPassword)}>
                  {
                    showPassword ? <BiSolidHide /> : <IoEyeSharp />
                  }
                </InputRightElement>
              </InputGroup>
              {
                confirmPassword === "" ? null : isPassConf ? <Text alignSelf={'start'} pl={'20%'} color={'green'}>Password is matched</Text> : <Text alignSelf={'start'} pl={'20%'} color={'red'}>Password is not matched</Text>
              }

            </VStack>


            <RadioGroup color={'white'} display={'flex'} gap={'2rem'} onChange={setSelectedGender} value={selectedGender} colorScheme='white'>
              <Radio value='male' color={'white'}>
                Male
              </Radio>
              <Radio value='female' color={'white'}>
                Female
              </Radio>
            </RadioGroup>

            <Button w={'70%'} type='submit' onClick={handleSignup} bgColor={'lightgreen'} color={'black'} py={0}>Sign up</Button>
          </form>

        </Box>
        <Box w={'100%'} h={'30%'} display={'flex'} py={'.6rem'} alignItems={'center'} justifyContent={'center'}>
          <Text>Already have an account ? <Link to={'/login'} ><span style={{ color: "lightgreen", marginLeft: '.5rem' }}>Login</span></Link></Text>
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
export default Signup
