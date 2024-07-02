import { User } from "../models/user.models.js";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const registerUser = async (req, res) => {
    try {
        const { username, fullName, password, confirmPassword, email, gender } = req.body

        if ([fullName, username, email, password, confirmPassword, gender].some((field) => field.trim() === "")) {
            return res.status(400).json({
                message: "Please fill all the fields"
            });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({
                message: "Password do not match"
            });
        };

        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "User already exist" });
        };

        const hashedPassword = await bcryptjs.hash(password, 10)

        const boyProfilePicture = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePicture = `https://avatar.iran.liara.run/public/girl?username=${username}`
        const createdUser = await User.create({
            fullName,
            email,
            username,
            password: hashedPassword,
            profilePicture: gender === 'male' ? boyProfilePicture : girlProfilePicture,
            gender
        })

        if (createdUser) {
            return res.status(200).json({ message: "User created successfully", success: true })
        }
    } catch (error) {
        console.log("Error while creating user", error)
    }
}

export const loginUser = async (req, res) => {

    try {
        const { email, password } = req.body

        if ([email, password].some((fields) => fields.trim() === "")) {
            return res.status(401).json({ message: "Please Enter fill all the fields" })
        };

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(401).json({ message: "User not found" })
        };

        const isPasswordValid = bcryptjs.compare(password, user.password)

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid username or password" })
        };

        const tokenData = {
            userId : user._id
        };

        const token = jwt.sign(tokenData , process.env.JWT_SECRET_KEY , {expiresIn : '1d'})

        return res.status(200)
        .cookie('token', token , {maxAge : 1*24*60*60*1000, httpOnly : true, sameSite : 'strict'})
        .json({
            id : user._id,
            username : user.username,
            fullName : user.fullName,
            email : user.email,
            profilePicture : user.profilePicture
        });


    } catch (error) {
        console.log("Error while login user :",error)
    }

}

export const logoutUser = (req,res) => {
    try {
        return res.status(200)
        .cookie('token', "", {maxAge : 0})
        .json({
            message : "User logged out successfully"
        })
    } catch (error) {
        console.log("Error while logout : ", error)
    }
}

export const getOtherUsers = async (req, res) => {
    try {
        const loggedInUserId = req.id;
        const otherUsers = await User.find({_id:{$ne:loggedInUserId}}).select("-password")
        return res.status(200).json(otherUsers)
    } catch (error) {
        console.log("Cannot found Users ",error)
    }
}