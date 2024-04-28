const MistralClient = require('@mistralai/mistralai');
const express = require('express');
const Mistral = require('mistral');
const myCustomTask = require('./myCustomTask');

const app = express();
const workflowEngine = new Mistral({ app });

workflowEngine.registerTask(myCustomTask);

const apiKey = process.env.MISTRAL_API_KEY;


const myMiddleware = function (req, res, next) {
  console.log('Executing my middleware function');
  // Modify the workflow context here
  req.context.myCustomData = 'Hello from my middleware';
  next();
};

app.use(function (req, res, next) {
  // Register your middleware function here
  next(myMiddleware);
});

const client = new MistralClient(apiKey);

const chatResponse = await client.chat({
  model: 'mistral-tiny',
  messages: [
    {role: 'user', content: 'howto "mistral-tiny" projet Role-mistral.js ?'}
    {role: 'user', content: 'user-defined-name ?'}
  
  ],
});

console.log('Chat:', chatResponse.choices[0].message.content);
