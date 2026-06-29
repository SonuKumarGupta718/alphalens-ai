import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import { PromptTemplate } from "@langchain/core/prompts";
import fs from "fs";
import path from "path";

export async function runResearchChain(companyName: string): Promise<any> {
  const apiKey = process.env.GOOGLE_API_KEY;
  if (!apiKey) {
    throw new Error("GOOGLE_API_KEY is not configured. Please set GOOGLE_API_KEY in your .env file.");
  }

  // Use gemini-2.5-flash (or user config) for fast and high-quality responses
  const modelName = process.env.GEMINI_MODEL || "gemini-2.5-flash";
  const model = new ChatGoogleGenerativeAI({
    apiKey,
    model: modelName,
    temperature: 0.2,
  });

  const promptPath = path.join(process.cwd(), "src/prompts/research.txt");
  const promptTemplateStr = fs.readFileSync(promptPath, "utf-8");

  const prompt = PromptTemplate.fromTemplate(promptTemplateStr);
  const formattedPrompt = await prompt.format({ companyName });

  const response = await model.invoke(formattedPrompt);
  
  const content = typeof response.content === "string" ? response.content : JSON.stringify(response.content);
  const cleanJson = cleanJsonResponse(content);
  
  try {
    return JSON.parse(cleanJson);
  } catch (error) {
    console.error("JSON parsing error in Research Chain. Raw content:", content);
    throw new Error(`Failed to parse research data: ${(error as Error).message}`);
  }
}

export function cleanJsonResponse(text: string): string {
  let clean = text.trim();
  // Strip Markdown code block wrappers
  if (clean.startsWith("```json")) {
    clean = clean.substring(7);
  } else if (clean.startsWith("```")) {
    clean = clean.substring(3);
  }
  if (clean.endsWith("```")) {
    clean = clean.substring(0, clean.length - 3);
  }
  return clean.trim();
}
