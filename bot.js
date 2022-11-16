const dotenv = require('dotenv');
dotenv.config();

const { Client,collection } = require("discord.js");
const client = (module.exports = new Client({intents:[131071]}));
client.login(process.env.TOKEN);

client.once("ready",()=>{
    console.log('😂')
})

client.on("messageCreate", Message=>{
    if(Message.content == "GM"){
        Message.reply({content:'GM stranger👽'})
    }
})