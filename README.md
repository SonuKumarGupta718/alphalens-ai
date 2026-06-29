# AlphaLens AI - Fundamental Investment Research Platform

AlphaLens AI is a modern, premium, and minimal fundamental research tool. It automates equity analysis on any company by running a three-stage sequential reasoning pipeline (Research ➡️ Analysis ➡️ Recommendation) and outputs a detailed financial profile, SWOT matrix, and calculated investment recommendation: **Invest**, **Watchlist**, or **Pass**.

---

## 📈 Project Overview
Traditional equity fundamental analysis takes hours of pulling filings, parsing financial statements, and compiling SWOT profiles. **AlphaLens AI** automates this by orchestrating a structured sequential pipeline using Google's Gemini API and LangChain.js. 

The application features a dark-themed glassmorphism dashboard with circular SVG confidence gauges, weighted factor progress bars, side-by-side growth/risk lists, and local search history persistence.

---

## ✨ Features
- **Sequential Reasoning Pipeline**: Separates information gathering, strategic auditing, and recommendation logic into three modular stages to ensure high-detail output.
- **Sleek Glassmorphic Dashboard**: A premium, responsive interface featuring custom glow states, circular gauges, and card grids.
- **Strict Programmatic Scoring System**: Recalculates category weightings programmatically to enforce mathematical accuracy (preventing LLM arithmetic errors).
- **Recent Search Terminal**: Uses the browser's `localStorage` API to cache and display your recent searches persistently.
- **Offline / Rate-Limit Protection**: Implements a backend fallback cache that serves realistic data for popular assets if API quotas are exhausted.

---

## 🏗️ Technical Architecture & How It Works
The platform follows a modular, serverless Next.js App Router structure:

```text
[User Search Input] ➡️ [Next.js API Route /api/analyze] ➡️ [Orchestrator Chain] ➡️ [Research ➡️ Analysis ➡️ Recommendation] ➡️ [Programmatic Math Verification] ➡️ [Frontend Dashboard]
```

### The Three-Stage Reasoning Pipeline
To get high-detail profiles and prevent hallucination, the task is divided into three sequential steps:
1. **Research Chain**: Gathers raw company facts, industry sectors, business monetization models, and competitive advantages (moats).
2. **Analysis Chain**: Formulates the SWOT matrix (Strengths, Weaknesses, Opportunities, Threats), growth drivers, key risks, financial health, and market positions.
3. **Recommendation Chain**: Evaluates the company across 5 key dimensions, assigns scores, projects short/medium/long-term horizons, and formats the reasoning.

---

## ⚙️ How to Install & Run

### Prerequisites
* **Node.js** (v18.0.0 or higher)
* **npm** (v9.0.0 or higher)
* **Google Gemini API Key** (from Google AI Studio)

### Installation
1. Clone the project folder:
   ```bash
   cd "alphalens-ai"
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```

### Environment Configuration
Create a `.env` file in the root directory (a template is pre-created as `.env.example`):
```env
# Gemini API Key used by LangChain.js
GOOGLE_API_KEY=your_gemini_api_key_here

# Target model (defaults to stable gemini-2.5-flash for production safety)
GEMINI_MODEL=gemini-2.5-flash
```

### Running Locally
1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and navigate to **http://localhost:3000**.

3. To build and run in production:
   ```bash
   npm run build
   npm run start
   ```

---

## ⚖️ Key Decisions & Trade-offs

| Decision | Chosen Solution | Why It Was Chosen | Trade-off / What Was Left Out |
| :--- | :--- | :--- | :--- |
| **Backend Integration** | Next.js API Routes | Eliminates the need for a separate Node/Express backend server, making deployments to Vercel simple and serverless. | Left out complex web sockets or message queues since requests resolve in standard API cycles. |
| **Math Accuracy** | Programmatic Calculations | LLMs frequently make simple arithmetic errors when multiplying weights. We let the LLM generate the 5 scores, but **programmatically** calculated the weighted sum in TypeScript. | The LLM doesn't have 100% control over the final score label, ensuring strict threshold compliance. |
| **History Caching** | Browser `localStorage` | Caches recent searches locally on the user's browser, providing a SaaS-like history panel with zero database setups. | Left out Postgres/Prisma database layers to keep the project light and easy to explain. |
| **API Limit Protection** | Offline Mock Fallback Mode | If the user hits Google's free-tier daily rate limits (20 requests/day), the API catches the error and serves pre-cooked mock profiles or generates custom data on the fly. | The user sees pre-generated high-quality data during quota exhaustion rather than a raw server crash. |

---

## 📊 Scoring Logic & Thresholds
To guarantee mathematical precision, the final score is calculated programmatically using specific weightings:

$$\text{Final Score} = (0.25 \times \text{Quality}) + (0.20 \times \text{Growth}) + (0.20 \times \text{Moat}) + (0.15 \times \text{Risk}) + (0.20 \times \text{Market})$$

- 🟢 **Score >= 80**: **Invest**
- 🟡 **Score 60 - 79**: **Watchlist**
- 🔴 **Score < 60**: **Pass**

---

## 🔮 Future Enhancements
1. **Live Financial Data Integration**: Integrate the Yahoo Finance API (`yahoo-finance2`) to pull real-time trading metrics, P/E multiples, and beta calculations.
2. **SEC Edgar PDF Scrapers**: Build a document loading loader in LangChain to scrape and parse Form 10-K and 10-Q filings directly from the SEC database for real-time compliance auditing.
3. **Multi-Agent Search Grounding**: Equip the agent with Google Search or Tavily Web Search capabilities to fetch real-time financial news instead of relying solely on LLM parametric memory.
