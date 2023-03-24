process.env.NTBA_FIX_319 = 1;

const TelegramBot = require("node-telegram-bot-api");
const client = new TelegramBot(process.env.token, { polling: true });
const { translate } = require("@vitalets/google-translate-api");
const Promise = require("bluebird");
const axios = require("axios");

Promise.config({
  cancellation: true
});


// Uptime
const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => res.send("Запуск сервера!"));
app.listen(port, () => console.log(`http://localhost:${port}`));


// Buttons
const keyboard = [
  [
    {
      text: "Получить список",
      callback_data: "cmds"
    }
  ]
];

client.on("callback_query", msg => {
  console.log("Запуск бота!")
  if (msg.data === "cmds") {
    client.sendMessage(
      msg.message.chat.id,
      `Факты о животных\n*/cat* - О кошках\n*/dog* - О собаках\n*/fox* - О лисах\n*/panda* - О пандах\n*/bird* - О птицах\n*/koala* - О коалах`, { parse_mode: "markdown" }
    );
  }
});


// Commands
client.on("message", async (message) => {
  chatId = message.chat.id
  
  if (message.text == "/start") {
    client.sendMessage(
      chatId,
      "Привет, нажми на кнопку и получи список команд",
      {
        reply_markup: {
          inline_keyboard: keyboard
        }
      }
    );
  } else if (message.text == "/cat") {
    const url = "https://some-random-api.ml/img/cat";
    const facts = "https://some-random-api.ml/facts/cat";
    let image, response;
    let fact, responses;

    response = await axios.get(url);
    image = response.data;
    responses = await axios.get(facts);
    fact = responses.data;

    await translate(`${fact.fact}`, {
      from: "en",
      to: "ru"
    }).then(res => {
      client.sendPhoto(chatId, image.link, { caption: res.text });
    }).catch(err => {
      console.error(`Ошибка: ${err}`);
    });
  } else if (message.text == "/dog") {
    const url = "https://some-random-api.ml/img/dog";
    const facts = "https://some-random-api.ml/facts/dog";
    let image, response;
    let fact, responses;

    response = await axios.get(url);
    image = response.data;
    responses = await axios.get(facts);
    fact = responses.data;

    await translate(`${fact.fact}`, {
      from: "en",
      to: "ru"
    }).then(res => {
      client.sendPhoto(chatId, image.link, { caption: res.text });
    }).catch(err => {
      console.error(`Ошибка: ${err}`);
    });
  } else if (message.text == "/fox") {
    const url = "https://some-random-api.ml/img/fox";
    const facts = "https://some-random-api.ml/facts/fox";
    let image, response;
    let fact, responses;

    response = await axios.get(url);
    image = response.data;
    responses = await axios.get(facts);
    fact = responses.data;

    await translate(`${fact.fact}`, {
      from: "en",
      to: "ru"
    }).then(res => {
      client.sendPhoto(chatId, image.link, { caption: res.text });
    }).catch(err => {
      console.error(`Ошибка: ${err}`);
    });
  } else if (message.text == "/panda") {
    const url = "https://some-random-api.ml/img/panda";
    const facts = "https://some-random-api.ml/facts/panda";
    let image, response;
    let fact, responses;

    response = await axios.get(url);
    image = response.data;
    responses = await axios.get(facts);
    fact = responses.data;

    await translate(`${fact.fact}`, {
      from: "en",
      to: "ru"
    }).then(res => {
      client.sendPhoto(chatId, image.link, { caption: res.text });
    }).catch(err => {
      console.error(`Ошибка: ${err}`);
    });
  } else if (message.text == "/bird") {
    const url = "https://some-random-api.ml/img/bird";
    const facts = "https://some-random-api.ml/facts/bird";
    let image, response;
    let fact, responses;

    response = await axios.get(url);
    image = response.data;
    responses = await axios.get(facts);
    fact = responses.data;

    await translate(`${fact.fact}`, {
      from: "en",
      to: "ru"
    }).then(res => {
      client.sendPhoto(chatId, image.link, { caption: res.text });
    }).catch(err => {
      console.error(`Ошибка: ${err}`);
    });
  } else if (message.text == "/koala") {
    const url = "https://some-random-api.ml/img/koala";
    const facts = "https://some-random-api.ml/facts/koala";
    let image, response;
    let fact, responses;

    response = await axios.get(url);
    image = response.data;
    responses = await axios.get(facts);
    fact = responses.data;

    await translate(`${fact.fact}`, {
      from: "en",
      to: "ru"
    }).then(res => {
      client.sendPhoto(chatId, image.link, { caption: res.text });
    }).catch(err => {
      console.error(`Ошибка: ${err}`);
    });
  }
});
