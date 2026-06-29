import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { PromptTemplate } from "@langchain/core/prompts";
import fs from "fs";
import path from "path";
import { cleanJsonResponse } from "./researchChain";

export async function runRecommendationChain(researchData: any, analysisData: any): Promise<any> {
  const apiKey = process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    throw new Error("GOOGLE_API_KEY is not configured. Please set GOOGLE_API_KEY in your .env file.");
  }

  const modelName = process.env.GEMINI_MODEL || "gemini-2.5-flash";
  const model = new ChatGoogleGenerativeAI({
    apiKey,
    model: modelName,
    temperature: 0.2,
  });

  const promptPath = path.join(process.cwd(), "src/prompts/recommendation.txt");
  const promptTemplateStr = fs.readFileSync(promptPath, "utf-8");

  const prompt = PromptTemplate.fromTemplate(promptTemplateStr);
  const formattedPrompt = await prompt.format({
    researchData: JSON.stringify(researchData, null, 2),
    analysisData: JSON.stringify(analysisData, null, 2),
  });

  const response = await model.invoke(formattedPrompt);
  
  const content = typeof response.content === "string" ? response.content : JSON.stringify(response.content);
  const cleanJson = cleanJsonResponse(content);
  
  try {
    return JSON.parse(cleanJson);
  } catch (error) {
    console.error("JSON parsing error in Recommendation Chain. Raw content:", content);
    throw new Error(`Failed to parse recommendation data: ${(error as Error).message}`);
  }
}
