import * as core from '@actions/core';
import { getInput, setOutput } from '@actions/core';
import { context } from '@actions/github';

async function run() {
  try { 
    const nameToGreet = getInput('who-to-greet');
    console.log(`Hello ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    setOutput("time", time);
    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
  } 
  catch (error) {
    core.setFailed(error.message);
  }
}

run()