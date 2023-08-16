import fs from "node:fs/promises";
import { Configuration, OpenAIApi } from "openai";
import OpenAITokenCounter from "openai-gpt-token-counter";
import { Alltagsolympiade } from "./data";
import { environment } from "./environment";
import {
  GPT_MODEL,
  createChatCompletionRequest,
  createFileNameWithDateAndTime,
  createLevelPromptDe,
} from "./utils";

const configuration = new Configuration({
  apiKey: environment.OPENAI_API_KEY,
});
const GPT_MODEL_INPUT_TOKEN_COST = 0.0015 / 1000;
const GPT_MODEL_OUTPUT_TOKEN_COST = 0.002 / 1000;
const openai = new OpenAIApi(configuration);

console.log("Starting...");

const prompt = createLevelPromptDe(Alltagsolympiade);

const tokenCount = OpenAITokenCounter.text(prompt, GPT_MODEL);
console.log("Token count: ", tokenCount);

const completionRequest = createChatCompletionRequest(prompt);

console.log("Sending request: ", completionRequest);
const response = await openai.createChatCompletion(completionRequest);

console.log("Token usage: ", response.data.usage);
console.log(
  `Input costs: ${
    (response.data.usage?.prompt_tokens ?? -1) * GPT_MODEL_INPUT_TOKEN_COST
  }`
);
console.log(
  `Completion costs: ${
    (response.data.usage?.completion_tokens ?? -1) * GPT_MODEL_OUTPUT_TOKEN_COST
  }`
);

console.log("Writing response to file");
await fs.writeFile(
  `./history/${createFileNameWithDateAndTime()}.json`,
  JSON.stringify(
    { request: completionRequest, response: response.data },
    null,
    2
  )
);

console.log("Response: ", response.data.choices[0].message);
