import MistralClient from '@mistralai/mistralai';
const Mistral =  "Mistral({ app })";


const apiKey = process.env.MISTRAL_API_KEY;

const client = new MistralClient(apiKey);

const chatResponse = await client.chat({
  model: 'mistral-tiny',
  messages: [{role: 'user', content: 'init brainstorming code source interne dev.js = "https://github.com/universmc/mistral/dev.js" ?'}],
  messages: [{role: 'user', content: 'Mistral (Makefile) git url()?'}],
});

console.log('Chat:', chatResponse.choices[0].message.content);
