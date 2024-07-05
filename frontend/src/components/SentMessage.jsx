import React, { useEffect } from 'react'
import axios from 'axios'
import GetMessages from './GetMessages'

const SentMessage = () => {
    const sendMessage = async () => {
        axios.defaults.withCredentials = true
        const response = axios.post(`http://localhost:8000/api/v1/message/send/6685cb1a1f2f340aa0caf255`,
            { GetMessages }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        }
        )
    }
}

export default SentMessage
