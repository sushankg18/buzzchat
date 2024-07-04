import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setOtherUsers } from '../redux/userSlice'

const GetOtherUsers = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        const fetchOtherUsers = async () => {
            try {
                axios.defaults.withCredentials = true
                const response = await axios.get("http://localhost:8000/api/v1/user/")
                dispatch(setOtherUsers(response.data))
            } catch (error) {
                console.log("Error while fetching otherUsers : ",error)
            }
        };
        fetchOtherUsers();   
    },[dispatch])
}

export default GetOtherUsers
