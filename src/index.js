import { Client } from "discord.js";
import token from "../token.json" assert { type: "json" };

const client = new Client({
    intents: ['GuildMessages', 'Guilds']
})
console.log(token)
client.login(token);