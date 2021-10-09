const { LOCALE } = require("../util/EvobotUtil");
const i18n = require("i18n");

i18n.setLocale(LOCALE);
let quotes = ['I am over this', 'Your memes are interfering with my lifestyle','yamete kudasai']
var mood = quotes[Math.floor(Math.random() * quotes.length)];
//console.log(random);

module.exports = {
  name: "quote",
  cooldown: 10,
  description: i18n.__("quote.description"),
  execute(message) {
    message
      .reply(i18n.__mf(mood))
      .catch(console.error);
  }
};