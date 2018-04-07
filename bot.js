const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = '!';

client.on("ready", (message) => {
  console.log("Connected to server");
});

client.on("message", (message) => {
    if (message.content.startsWith(prefix) == false) {
        return ;
    }

    const mentionnned = message.mentions.members.first();
    if (mentionnned != undefined) {
        message.channel.send("Fuck you <@" + mentionnned.user.id + ">");
        return ;
    }

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    message.channel.send(command + " toi même pov con");

});

client.login("NDMyMTQ3Nzc4NDkyMTcwMjQx.DapE3w.quysmNwSMRp20T-lL3MPvN3XT7g");