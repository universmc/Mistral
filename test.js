import MistralClient from '@mistralai/mistralai';

const apiKey = process.env.MISTRAL_API_KEY;

const client = new MistralClient(apiKey);

const chatResponse = await client.chat({
  model: 'mistral-tiny',
  messages: [{role: 'user', content: 'howto "mistral-tiny" projet user-defined-fonctions in javascript mistral.js ?'}],
});

console.log('Chat:', chatResponse.choices[0].message.content);
