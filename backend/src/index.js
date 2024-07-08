import express from 'express'
import dotenv from 'dotenv'
import mongoDB_Connection from './db/index.db.js';
import userRouter from './routes/user.routes.js'
import messaageRouter from './routes/message.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import {app, server} from './socket/socket.js'

dotenv.config({path : "./env"})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(cors({
    origin : 'http://localhost:3000',
    credentials : true,
}))

app.use('/api/v1/user',userRouter)
app.use('/api/v1/message',messaageRouter)

mongoDB_Connection()
// first I wrote app.listen here but for socket connection we have change it to server.listen because we have to run socket and backend app on same server
.then(server.listen(process.env.PORT || 4000 , ()=>{
    console.log("app is listening on port ",process.env.PORT || 4000 )  
}))
.catch(
    (error)=>{
        console.log("Error while connecting to MongoDB ",error)
    }
)
