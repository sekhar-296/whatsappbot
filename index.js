// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require("venom-bot");
venom
  .create({
    session: "session-name", //name of session
    multidevice: false, // for version not multidevice use false.(default: true)
  })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.onMessage((message) => {
    if (
      message.body === "Hi" ||
      message.body === "hi" ||
      message.body === "hello" ||
      message.body === "Hello" ||
      message.body === "hiee" ||
      (message.body === "Hiee" && message.isGroupMsg === false)
    ) {
      client
        .sendText(
          message.from,
          "Welcome to indogulfwellness 🙏 please type the corresponding number for response \n 1️⃣ Location \n 2️⃣ Fees/Subscription \n 3️⃣ Registration \n 4️⃣ More FAQs"
        )
        .then((result) => {
          console.log("Result: ", result); //return object success
        })
        .catch((erro) => {
          console.error("Error when sending: ", erro); //return object error
        });
    }
    if (message.body === "1" && message.isGroupMsg === false) {
      client
        .sendLinkPreview(
          message.from,
          "https://goo.gl/maps/5J54zHwoXYE4QkdQA",
          "📌 Sea Diamond Plaza"
        )
        .then((result) => {
          console.log("Result: ", result); //return object success
        })
        .catch((erro) => {
          console.error("Error when sending: ", erro); //return object error
        });
    }
    if (message.body === "2" && message.isGroupMsg === false) {
      client
        .sendText(
          message.from,
          "👉 for Kids:- 40 BHD-> 8 sessions \n 50 BHD->10 sessions \n 60 BHD-> 12 sessions \n 👉 for Couples 120 BHD for 12 sessions \n 👉 for Family 180 BHD for 12 sessions \n 👉 for Group sessions & attractive discounts please disuss with our team"
        )
        .then((result) => {
          console.log("Result: ", result); //return object success
        })
        .catch((erro) => {
          console.error("Error when sending: ", erro); //return object error
        });
    }
    if (message.body === "3" && message.isGroupMsg === false) {
      client
        .sendLinkPreview(
          message.from,
          "https://indogulfwellness.com/",
          "Please fill details in order to register your slot"
        )
        .then((result) => {
          console.log("Result: ", result); //return object success
        })
        .catch((erro) => {
          console.error("Error when sending: ", erro); //return object error
        });
    }
    if (message.body === "4" && message.isGroupMsg === false) {
      client
        .sendText(
          message.from,
          "👉 12 classes will be conducted for each person as per their allotment \n 👉 Prior to information classes can be rescheduled in an emergency 👉 basic swimming is guranteed by our professionals with in 12 sessions \n 👉 Person can select the timing between 4:00 pm to 8:00 pm in week days \n 👉 Moring slots are also available on weekends \n👉 Any medical conditions should be discussed with our team during the enrollment 👉 Proper swimming costume is mandatory for attending sessions"
        )
        .then((result) => {
          console.log("Result: ", result); //return object success
        })
        .catch((erro) => {
          console.error("Error when sending: ", erro); //return object error
        });
    }
  });
}
