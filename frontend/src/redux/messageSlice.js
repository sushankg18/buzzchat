import { createSlice } from '@reduxjs/toolkit'

const messageSlice = createSlice({
    name: "message",
    initialState: {
        getMessage: null,
    },
    reducers: {
        setGetMessagges: (state, action) => {
            state.getMessage = action.payload
        },
        clearMessages: (state) => {
            state.getMessage = null
        }
    }
})

export const { setGetMessagges , clearMessages } = messageSlice.actions
export default messageSlice.reducer