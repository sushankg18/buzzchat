import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setGetMessagges } from '../redux/messageSlice'

const GetMessages = () => {
    const dispatch = useDispatch()
    const { selectedUser } = useSelector(store => store.user)
    console.log(selectedUser)
    useEffect(() => {
        if (!selectedUser) return; // Early return if no user is selected
        const getMessages = async () => {
            try {
                axios.defaults.withCredentials = true
                const response = await axios.get(`http://localhost:8000/api/v1/message/${selectedUser._id}`,{
                    withCredentials: true
                })
                console.log(response.data)
            } catch (error) {
                console.log("Error : ", error)
            }
        }

        getMessages();
    }, [selectedUser, dispatch]) // Include selectedUser and dispatch in the dependency array
}

export default GetMessages
