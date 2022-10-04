require("dotenv").config();
process.env.NTBA_FIX_319 = 1;

const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot(process.env.token, { polling: true });
const Promise = require("bluebird");
const axios = require("axios");
const superagent = require("superagent");
const nekoclient = require("nekos.life");
const neko = new nekoclient();
Promise.config({
  cancellation: true
});

// сервер
const express = require("express");
const server = express();

server.all("/", (req, res) => {
  res.send("Бот запускается...")
})

server.listen(process.env.PORT, () => {
  console.log("Сервер готов")
})

// бот
// кнопка
const keyboard = [
  [
    {
      text: "Get the list",
      callback_data: "cmds"
    }
  ]
];

bot.on("message", async (message, args) => {
  const chatId = message.chat.id;
  if (message.text == "/start") {
    bot.on("message", message => {
      bot.sendMessage(
        chatId,
        "Hi, click on the button and get a list of commands",
        {
          reply_markup: {
            inline_keyboard: keyboard
          }
        }
      );
    });
  }

  bot.on("callback_query", msg => {
    console.log("Запуск!")
    const chatId = msg.message.chat.id;
    if (msg.data === "cmds") {
      bot.sendMessage(
        chatId,
        `Animal facts\n
        /cat - About cats
        /dog - About dogs
        /fox - About foxes
        /panda - About pandas
        /bird - About birds
        /koala - About koalas
        /raccoon - About raccoons
        /kangaroo - About kangaroo`
      );
    }
  });

  if (message.text == "/neko") {
    let { body } = await superagent.get(`https://nekos.life/api/v2/img/neko`);
    if (!{ body }) return;
    bot.sendPhoto(chatId, body.url);
  }

  if (message.text == "/hentai") {
    let { body } = await superagent.get(`https://nekos.life/api/v2/img/hentai`);
    if (!{ body }) return;
    bot.sendPhoto(chatId, body.url);
  }

  if (message.text == "/hentai-gif") {
    let { body } = await superagent.get(
      `https://nekos.life/api/v2/img/Random_hentai_gif`
    );
    if (!{ body }) return;
    bot.sendVideo(chatId, body.url);
  }

  if (message.text == "/fox-girl") {
    let { body } = await superagent.get(
      `https://nekos.life/api/v2/img/fox_girl`
    );
    if (!{ body }) return;
    bot.sendPhoto(chatId, body.url);
  }

  if (message.text == "/wallpaper") {
    let { body } = await superagent.get(
      `https://nekos.life/api/v2/img/wallpaper`
    );
    if (!{ body }) return;
    bot.sendPhoto(chatId, body.url);
  }
  
  if (message.text == "/cum") {
    let { body } = await superagent.get(
      `https://nekos.life/api/v2/img/cum`
    );
    if (!{ body }) return;
    bot.sendPhoto(chatId, body.url);
  }
  
  if (message.text == "/anal") {
    let { body } = await superagent.get(
      `https://nekos.life/api/v2/img/anal`
    );
    if (!{ body }) return;
    bot.sendPhoto(chatId, body.url);
  }
  
  if (message.text == "/boobs") {
    let { body } = await superagent.get(
      `https://nekos.life/api/v2/img/boobs`
    );
    if (!{ body }) return;
    bot.sendPhoto(chatId, body.url);
  }
  
  if (message.text == "/trap") {
    let { body } = await superagent.get(
      `https://nekos.life/api/v2/img/trap`
    );
    if (!{ body }) return;
    bot.sendPhoto(chatId, body.url);
  }
  
  if (message.text == "/hug") {
    let { body } = await superagent.get(
      `https://nekos.life/api/v2/img/hug`
    );
    if (!{ body }) return;
    bot.sendVideo(chatId, body.url);
  }
  
  if (message.text == "/kiss") {
    let { body } = await superagent.get(
      `https://nekos.life/api/v2/img/hug`
    );
    if (!{ body }) return;
    bot.sendVideo(chatId, body.url);
  }
  
  if (message.text == "/solog") {
    let { body } = await superagent.get(
      `https://nekos.life/api/v2/img/solog`
    );
    if (!{ body }) return;
    bot.sendPhoto(chatId, body.url);
  }
  
  if (message.text == "/smug") {
    let { body } = await superagent.get(
      `https://nekos.life/api/v2/img/smug`
    );
    if (!{ body }) return;
    bot.sendPhoto(chatId, body.url);
  }
  
  if (message.text == "/feet") {
    let { body } = await superagent.get(
      `https://nekos.life/api/v2/img/feet`
    );
    if (!{ body }) return;
    bot.sendPhoto(chatId, body.url);
  }
  
  if (message.text == "/lewdkemo") {
    let { body } = await superagent.get(
      `https://nekos.life/api/v2/img/lewdkemo`
    );
    if (!{ body }) return;
    bot.sendPhoto(chatId, body.url);
  }
  
  if (message.text == "/gasm") {
    let { body } = await superagent.get(
      `https://nekos.life/api/v2/img/gasm`
    );
    if (!{ body }) return;
    bot.sendPhoto(chatId, body.url);
  }
  
  if (message.text == "/solo") {
    let { body } = await superagent.get(
      `https://nekos.life/api/v2/img/solo`
    );
    if (!{ body }) return;
    bot.sendPhoto(chatId, body.url);
  }
  
  if (message.text == "/cuddle") {
    let { body } = await superagent.get(
      `https://nekos.life/api/v2/img/cuddle`
    );
    if (!{ body }) return;
    bot.sendPhoto(chatId, body.url);
  }
  
  if (message.text == "/avatar") {
    let { body } = await superagent.get(
      `https://nekos.life/api/v2/img/avatar`
    );
    if (!{ body }) return;
    bot.sendPhoto(chatId, body.url);
  }
  
  if (message.text == "/slap") {
    let { body } = await superagent.get(
      `https://nekos.life/api/v2/img/slap`
    );
    if (!{ body }) return;
    bot.sendVideo(chatId, body.url);
  }
  
  if (message.text == "/les") {
    let { body } = await superagent.get(
      `https://nekos.life/api/v2/img/les`
    );
    if (!{ body }) return;
    bot.sendVideo(chatId, body.url);
  }
  
  if (message.text == "/baka") {
    let { body } = await superagent.get(
      `https://nekos.life/api/v2/img/baka`
    );
    if (!{ body }) return;
    bot.sendVideo(chatId, body.url);
  }
  
  if (message.text == "/nsfw-avatar") {
    let { body } = await superagent.get(
      `https://nekos.life/api/v2/img/nsfw_avatar`
    );
    if (!{ body }) return;
    bot.sendPhoto(chatId, body.url);
  }
  
  if (message.text == "/nsfw-neko") {
    const body = await neko.nsfw.neko();
    bot.sendPhoto(chatId, body.url);
  }
  
  if (message.text == "/nsfw-nekogif") {
    const body = await neko.nsfw.nekoGif();
    bot.sendVideo(chatId, body.url);
  }

  if (message.text == "/nekogif") {
    const body = await neko.sfw.nekoGif();
    bot.sendVideo(chatId, body.url);
  }
  
  if (message.text == "/cumart") {
    const body = await neko.nsfw.cumArts();
    bot.sendPhoto(chatId, body.url);
  }


  /* Animals */

  if (message.text == "/cat") {
    const url = "https://some-random-api.ml/img/cat";
    const facts = "https://some-random-api.ml/facts/cat";
    let image, response;
    let fact, responses;

    response = await axios.get(url);
    image = response.data;
    responses = await axios.get(facts);
    fact = responses.data;

    bot.sendMessage(chatId, fact.fact);
    bot.sendPhoto(chatId, image.link);
  }

  if (message.text == "/dog") {
    const url = "https://some-random-api.ml/img/dog";
    const facts = "https://some-random-api.ml/facts/dog";
    let image, response;
    let fact, responses;

    response = await axios.get(url);
    image = response.data;
    responses = await axios.get(facts);
    fact = responses.data;

    bot.sendMessage(chatId, fact.fact);
    bot.sendPhoto(chatId, image.link);
  }

  if (message.text == "/fox") {
    const url = "https://some-random-api.ml/img/fox";
    const facts = "https://some-random-api.ml/facts/fox";
    let image, response;
    let fact, responses;

    response = await axios.get(url);
    image = response.data;
    responses = await axios.get(facts);
    fact = responses.data;

    bot.sendMessage(chatId, fact.fact);
    bot.sendPhoto(chatId, image.link);
  }

  if (message.text == "/panda") {
    const url = "https://some-random-api.ml/img/panda";
    const facts = "https://some-random-api.ml/facts/panda";
    let image, response;
    let fact, responses;

    response = await axios.get(url);
    image = response.data;
    responses = await axios.get(facts);
    fact = responses.data;

    bot.sendMessage(chatId, fact.fact);
    bot.sendPhoto(chatId, image.link);
  }

  if (message.text == "/bird") {
    const url = "https://some-random-api.ml/img/bird";
    const facts = "https://some-random-api.ml/facts/bird";
    let image, response;
    let fact, responses;

    response = await axios.get(url);
    image = response.data;
    responses = await axios.get(facts);
    fact = responses.data;

    bot.sendMessage(chatId, fact.fact);
    bot.sendPhoto(chatId, image.link);
  }

  if (message.text == "/koala") {
    const url = "https://some-random-api.ml/img/koala";
    const facts = "https://some-random-api.ml/facts/koala";
    let image, response;
    let fact, responses;

    response = await axios.get(url);
    image = response.data;
    responses = await axios.get(facts);
    fact = responses.data;

    bot.sendMessage(chatId, fact.fact);
    bot.sendPhoto(chatId, image.link);
  }

  if (message.text == "/raccoon") {
    const url = "https://some-random-api.ml/img/raccoon";
    const facts = "https://some-random-api.ml/facts/raccoon";
    let image, response;
    let fact, responses;

    response = await axios.get(url);
    image = response.data;
    responses = await axios.get(facts);
    fact = responses.data;

    bot.sendMessage(chatId, fact.fact);
    bot.sendPhoto(chatId, image.link);
  }

  if (message.text == "/kangaroo") {
    const url = "https://some-random-api.ml/img/kangaroo";
    const facts = "https://some-random-api.ml/facts/kangaroo";
    let image, response;
    let fact, responses;

    response = await axios.get(url);
    image = response.data;
    responses = await axios.get(facts);
    fact = responses.data;

    bot.sendMessage(chatId, fact.fact);
    bot.sendPhoto(chatId, image.link);
  }
});
