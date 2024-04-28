const fs = require("fs");
import MistralClient from '@mistralai/mistralai';

const apiKey = process.env.MISTRAL_API_KEY;

const client = new MistralClient(apiKey);

const chatResponse = await client.chat({
  model: 'mistral-tiny',
  messages: [
    {role: 'user', content: 'What is the best French EMBEDDING'},
    {role: 'user', content: '?'}
  
  ],
}).then((chatCompletion)=>{
  // Write the completion to a markdown file
  const mdContent = chatCompletion.choices[0]?.message?.content;
  const outputFilePath = "lsf_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
  fs.writeFileSync(outputFilePath, mdContent);
  console.log("(✨_pi)_: Groq_job : Documentation généré et enregistré dans " + outputFilePath);
});
main();