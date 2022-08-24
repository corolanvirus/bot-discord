const token =
  "OTMwMDY4OTU1MjUzNTgzOTAz.GS3awF.0QzM41gMo0eRNexBEI1DRaW2cZ7d39eId7PxRM";
const { Client, IntentsBitField, GatewayIntentBits } = require("discord.js");
const axios = require("axios");

const myIntents = new IntentsBitField();
myIntents.add(
  IntentsBitField.Flags.GuildPresences,
  IntentsBitField.Flags.Guilds,
  IntentsBitField.Flags.GuildMessages,
  GatewayIntentBits.MessageContent,
  IntentsBitField.Flags.DirectMessages,
  IntentsBitField.Flags.DirectMessageReactions
);
const client = new Client({ intents: [myIntents] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", async (message) => {
  const url =
    "https://api.unsplash.com/photos/random/?client_id=99w1o8eVlvP-MWvNHGUmUXwNw_b3WcfzQitqt2KXHv4&query=redhead";
  const url2 =
    "https://www.reddit.com/search.json?q=redhead&include_over_18=on";
  const funct = () => {
    axios.get(url).then((resp) => {
      console.log(resp.data.urls.full);
      const test = resp.data.urls.full;
      message.reply(test);
    });
  };
  const funct2 = () => {
    axios.get(url2).then((resp) => {
      console.log(resp.data.children);
    });
  };
  if (message.content === "test") {
    funct();
  }
  if (message.content === "test2") {
    funct2();
  }
});
// Login to Discord with your client's token
client.login(token);
