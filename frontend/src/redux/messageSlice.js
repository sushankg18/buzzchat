import { createSlice } from '@reduxjs/toolkit'

const messageSlice = createSlice({
    name: "message",
    initialState: {
        getMessage: null,
    },
    reducers: {
        setGetMessagges: (state, action) => {
            state.getMessage = action.payload
        }
    }
})

export const { setGetMessagges } = messageSlice.actions
export default messageSlice.reducer