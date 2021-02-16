const core = require('@actions/core');
const axios = require('axios')
const fs = require('fs');

const GITHUB_TOKEN = core.getInput('gh_token');
const ANSWER = core.getInput('answer');


core.setSecret(GITHUB_TOKEN);

let rawdata = fs.readFileSync('current',{encoding:'utf8', flag:'r'});
rawdata = rawdata.trim();

rawdata = fs.readFileSync(`questions/${rawdata}.json`);
let quiz = JSON.parse(rawdata);
var payload;

if(ANSWER == "true") {
  payload = `**Answer** ${quiz.answer}\n**Explaination**\n${quiz.explaination}`;
}
else {
  payload = `@everyone Today's Question by ${quiz.username}\n${quiz.question}\n\n**Answer by adding proper reaction (or, tap on existing)**\nHelp: https://discord.com/channels/777126470946390017/777522230543908884/810779429608751154`;
}

axios
  .post('https://discord.com/api/webhooks/810492471640588298/ccj9nNcTfAJXBUayL-wo3UHU18Xa53Kz5e-MEfCVnFPQnw5gxlZYrqosgkBzKO5ZIzu0', {
    "content": payload
  })
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })
