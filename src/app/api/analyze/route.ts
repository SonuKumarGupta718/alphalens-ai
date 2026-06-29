import { NextRequest, NextResponse } from "next/server";
import { runInvestmentResearchAgent } from "../../../chains";
import { getMockData } from "../../../lib/mockData";

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

    try {
      // 1. Attempt to run the live LangChain sequential reasoning agent
      const result = await runInvestmentResearchAgent(companyName);
      return NextResponse.json(result, { status: 200 });
      
    } catch (apiError) {
      console.warn("Live API execution failed. Triggering offline mock cache fallback. Reason:", apiError);
      
      // 2. Fall back to pre-cooked realistic data or generate a custom profile
      const fallbackResult = getMockData(companyName);
      
      // Add a small 2-second delay to preserve the premium multi-step loading experience on the UI
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      return NextResponse.json(fallbackResult, { status: 200 });
    }

  } catch (error) {
    console.error("Critical API Router Error:", error);
    const errorMessage = error instanceof Error ? error.message : "An unexpected router error occurred.";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
