const core = require('@actions/core');
const axios = require('axios');
const gq = require('./utils/getQ.js');
const ga = require('./utils/getA.js');

const GITHUB_TOKEN = core.getInput('gh_token');
const ANSWER = core.getInput('answer');


core.setSecret(GITHUB_TOKEN);

var payload;

if(ANSWER == "true") {
  ga.getA().then(resp => {
    console.log(resp.data[0]);
    let d = resp.data[0];
    payload = `**Answer** Option: :${d[1]}:\n**Explaination**\n${d[2]}\nContribute Own Question: https://ccsnuchapter.netlify.app/dailyquiz`;
    sendMessage();
    ga.delivered(d[0]);
  }).catch(e => {
    console.log(e);
  });
}
else {
  gq.getQ().then(resp => {
    console.log(resp.data[0]);
    let d = resp.data[0];
    let opts = JSON.parse(d[3]);
    let formattedOpts = ``;
    Object.keys(opts).forEach(function(k){
      formattedOpts += `:${k}: ${opts[k]}\n`;
    });
    payload = `@everyone Today's Question by ${d[1]}\n${d[2]}\nOptions:\n${formattedOpts}\n**Answer by adding proper reaction (or, tap on existing)**\nContribute Own Question: https://ccsnuchapter.netlify.app/dailyquiz\nHelp: https://discord.com/channels/777126470946390017/777522230543908884/810779429608751154`;
    console.log(payload);
    sendMessage();
    gq.delivered(d[0]);
  }).catch(e => {
    console.log(e);
    throw(e);
  });
}

function sendMessage() {
  axios
  .post(process.env.DISCORD_KEY, {
    "content": payload
  })
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`);
    console.log(res);
  })
  .catch(error => {
    console.error(error);
    throw(e);
  });
}

