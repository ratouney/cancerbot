const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = '!';
let trashThisGuy = null;

client.on("ready", (message) => {
  console.log("Connected to server");
});

client.on("message", (message) => {
    if (trashThisGuy != null && message.author.id == trashThisGuy.user.id) {
        message.channel.send("SHUT UP!");
    }

    if (message.content.startsWith(prefix) == false) {
        return ;
    }

    console.log("Trashing : ", trashThisGuy);
    if (trashThisGuy != null) {
        console.log(" ??? " + trashThisGuy.user.id + " == ", message.author.id)
    }


    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command == 'trash') {
        trashThisGuy = message.mentions.members.first();
        message.channel.send("Oh boi, you're done " + trashThisGuy);
        return ;
    }
    message.channel.send(command + " toi même pov con");

});

client.login("NDMyMTQ3Nzc4NDkyMTcwMjQx.DapE3w.quysmNwSMRp20T-lL3MPvN3XT7g");