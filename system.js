import MistralClient from '@mistralai/mistralai';

const apiKey = process.env.MISTRAL_API_KEY;

const client = new MistralClient(apiKey);

const chatResponse = await client.chat({
  model: 'mistral-tiny',
  messages: [
    {role: 'user', content: 'comment outputchatCompletion.choices[all]?.message?.content; outputFilePath = build/MistalDocs_ + new Date().toISOString().replace(/[-:TZ]/g, ) + ".md";fs.writeFileSync(outputFilePath, mdContent); ? '},
    {role: 'user', content: ' pour enregistré la response au message dans notre code source cette completion avec le model Mistral .js ?'}
  
  ],
});

console.log('Chat:', chatResponse.choices[0].message.content);
