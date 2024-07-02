import mongoose from "mongoose";
import { DB_NAME } from "./constant.db.js";

const { MONGO_URI } = process.env

const mongoDB_Connection = async () => {
    try {
        await mongoose.connect(`${MONGO_URI}${DB_NAME}`)
        console.log("database connected successfully")
    } catch (error) {
        console.log("Connection failed! :",error)
    }
}

export default mongoDB_Connection