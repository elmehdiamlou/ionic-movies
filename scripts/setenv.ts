const { writeFile } = require('fs');
const { argv } = require('yargs');

require('dotenv').config();

const environment = argv.environment;
const isProduction = environment === 'prod';
const targetPath = isProduction
  ? `./src/environments/environment.prod.ts`
  : `./src/environments/environment.ts`;

const environmentFileContent = `
export const environment = {
    production: ${isProduction},
    firebase {
        apiKey: "${process.env.apiKeyFirebase}",
    },
    apiKey: "${process.env.apiKeyMovies}"
};
`;

writeFile(targetPath, environmentFileContent, (err) => {
  if (err) {
    console.log(err);
  }
});
