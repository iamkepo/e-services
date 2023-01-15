const {instance} = require('./instance');
function chatgpt3(param) {
  console.log('trying to chatgpt3');
  instance.post('/public/chatgpt3', param).then((response) => {
    console.log(response.data);
  }).catch((err) => {
    console.log(err.response?.status);
  });
}
let data = {
  model: "text-davinci-003",
  prompt: "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\nHuman: Hello, who are you?\nAI: I am an AI created by OpenAI. How can I help you today?",
  stop: [" Human:", " AI:"],
}
chatgpt3(data)