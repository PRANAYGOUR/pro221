const express = require("express");
const app = express();
const server = require("http").Server(app);
app.use(express.json())



var nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    port:587,
    host:"smtp.gmail.com",
    auth:{
        user:'pranaygour3042007@gmail.com',
        pass:'qzghwrjkbmibyxtr'
    },
    secure:true,
})


app.post("/send-mail" , (req,res)=>{
    const to = req.body.to;
    const url = req.body.url;
    const maildata = {
        from:"pranaygour3042007@gmail.com",
        to:to,
        subject:"Join the Video chat with me",
        html:`<p>Hey There</p>
        <p>come and join with me for a video chat here - ${url}</p>`
    };
    transporter.sendMail(maildata,(error,info)=>{
        if(error){
            return console.log(error)
        }
        else{
            res.status(200).send({message:"Invitation sent" , message_id:info.messageId})
        }
    })

})




server.listen(process.env.PORT || 3030);

