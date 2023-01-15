const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();

var express = require('express');
var router = express.Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

router.post('/', async (req, res) => {

  const response = await openai.createCompletion({
    ...req.body,
    temperature: 0.9,
    max_tokens: 150,
    top_p: 1,
    frequency_penalty: 0.0,
    presence_penalty: 0.6
  });
  console.log(response.status);
  // res.send(response.data)

});

module.exports = router;