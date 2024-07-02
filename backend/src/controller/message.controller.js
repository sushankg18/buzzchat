import { Conversation } from '../models/conversation.models.js'
import {Message} from '../models/message.models.js'

export const sendMessage = async (req, res) => {
    try {
        const senderId = req.id;
        const recieverId = req.params.id;

        const {message} = req.body;

        let gotConversation = await Conversation.findOne({
            participants : {$all : [senderId, recieverId]}
        })

        if(!gotConversation){
            gotConversation = await Conversation.create({
                participants : [senderId, recieverId]
            })
        }

        const newMessgae = await Message.create({
            senderId,
            recieverId,
            message
        })

        if(newMessgae){
            gotConversation.messages.push(newMessgae._id)
        };

        await gotConversation.save();
        return res.status(200).json({
            message : "Message sent Successfully"
        })

    } catch (error) {
        console.log("Error while sending message : ",error)
        return res.status(401).json({
            message : "Error while sending message!"
        })
    }

}

export const getMessage = async(req, res) => {
    try {
        const senderId = req.id;
        const recieverId = req.params.id
        
        const conversation = await Conversation.findOne({
            participants : {$all : [senderId, recieverId]}
        }).populate("messages")

        console.log(conversation.messages);
        return res.status(200).json(conversation?.messages)


    } catch (error) {
        console.log("Error while getting message : ",error)
        return res.status(401).json({
            message :"Message not sent",
            success : false
        })
    }
}