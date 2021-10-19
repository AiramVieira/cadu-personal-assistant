const fs = require('fs');
// This is good for local dev environments, when it's better to
// store a projects environment variables in a .gitignore'd file
require('dotenv').config();

function getEnvironmentVariable(key, _default = '') {
	return process.env[key] || _default;
}

const envConfigFile = `export const environment = {
  "production": true,
  "googleCx": "${getEnvironmentVariable('GOOGLE_CX')}",
  "googleKey": "${getEnvironmentVariable('GOOGLE_KEY')}",
  "discordKey": "${getEnvironmentVariable('DISCORD_KEY')}"
}
`;

fs.writeFile(`./src/environments/environment.ts`, envConfigFile, err => {
	if (err) {
		console.log(err);
	}
});
