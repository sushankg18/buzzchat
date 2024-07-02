import jwt from 'jsonwebtoken'

export const isAuthenticated = async(req, res , next) =>{
    try {
        const token = req.cookies.token;

        if(!token){
            return res.status(401).json({message : "Please login first to get other users!"})
        };

        const decode = jwt.verify(token,process.env.JWT_SECRET_KEY)
        if(!decode){
            return res.status(401).json({message : "Invalid token"})
        };

        req.id = decode.userId;
        next();

    } catch (error) {
        console.log("Error while authentication : ",error)
        return res.status(500).json({ message: "Internal server error" });
    }
}