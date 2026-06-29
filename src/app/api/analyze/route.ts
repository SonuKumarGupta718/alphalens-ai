import { NextRequest, NextResponse } from "next/server";
import { runInvestmentResearchAgent } from "../../../chains";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { companyName } = body;

    if (!companyName || typeof companyName !== "string" || companyName.trim() === "") {
      return NextResponse.json(
        { error: "Company name is required and must be a valid non-empty string." },
        { status: 400 }
      );
    }

    if (!process.env.GOOGLE_API_KEY) {
      return NextResponse.json(
        { 
          error: "Google Gemini API Key is missing on the server. Please check your environment configuration." 
        },
        { status: 500 }
      );
    }

    const result = await runInvestmentResearchAgent(companyName);
    return NextResponse.json(result, { status: 200 });

  } catch (error) {
    console.error("API Analyze Error:", error);
    
    // Provide a descriptive message to help debug during the interview or dev process
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred during company analysis.";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
