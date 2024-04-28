import MistralClient from '@mistralai/mistralai';

const apiKey = process.env.MISTRAL_API_KEY;

engine.setModelPath('mistral/');
const outputFilePath = 'build/MistalDocs_' + new Date().toISOString().replace(/[-:TZ]/g, '') + ".md";

async function generateCompletion() {
  const prompt = "Your prompt goes here.";
  const completion = await engine.generateText(prompt);
  const mdContent = `# Output from Mistral Model\n\n${completion.choices[0].message.content}`;

  fs.writeFileSync(outputFilePath, mdContent);
  console.log(`Output saved to ${outputFilePath}`);
}
message();
generateCompletion();