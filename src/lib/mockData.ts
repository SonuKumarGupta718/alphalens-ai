import { AnalysisResult } from "../types";

export const mockDataRegistry: Record<string, AnalysisResult> = {
  nvidia: {
    companyName: "NVIDIA Corporation",
    companyOverview: "NVIDIA Corporation is a pioneer in GPU-accelerated computing. Founded in 1993, the company has transformed from a graphics-focused chipmaker into a full-stack computing infrastructure company leading the global Artificial Intelligence revolution.",
    industry: "Semiconductors & AI Infrastructure",
    businessModel: "Sells high-performance computing hardware (GPUs, Tensor Core units) alongside proprietary software layers (CUDA) to enterprise, gaming, cloud providers, and automotive sectors.",
    revenueSources: [
      "Compute & Networking (Data Center GPU sales, networking switches) - 85%",
      "Graphics (Gaming GPU units for laptops and desktop consoles) - 11%",
      "Professional Visualization (Omniverse software & workstation GPUs) - 2.5%",
      "Automotive (Autonomous driving computing units) - 1.5%"
    ],
    competitiveAdvantages: [
      "Developer Lock-In via CUDA software ecosystem, creating an extremely high switching cost.",
      "Technological Lead in hardware interconnects (NVLink) and high-bandwidth memory architectures.",
      "First-mover advantage in AI scaling, enjoying deep partnerships with all major hyperscalers."
    ],
    swot: {
      strengths: [
        "Uncontested market leader in AI data center computing hardware.",
        " CUDA software developer ecosystem has over 4 million registered developers.",
        "High gross margin profile (above 75%) indicating extreme pricing power."
      ],
      weaknesses: [
        "High revenue concentration among a small number of cloud provider hyperscalers.",
        "Vulnerability to supply chain bottlenecks, relying heavily on a single foundry partner (TSMC).",
        "Higher complexity in chip designs leads to long lead times for new product rollouts."
      ],
      opportunities: [
        "Expansion of custom silicon design services for cloud service providers.",
        "Automotive ADAS (Advanced Driver Assistance Systems) scaling in next-generation electric vehicles.",
        "Industrial metaverse and digital twins using the Omniverse enterprise platform."
      ],
      threats: [
        "Increased insourcing of custom chips (ASICs) by major clients like Google, Amazon, and Microsoft.",
        "Geopolitical tensions surrounding Taiwan (TSMC dependency) causing sudden supply cuts.",
        "Rapid advancements in competitor chips (AMD Instinct series, Intel Gaudi) narrowing the performance gap."
      ]
    },
    growthDrivers: [
      "Generative AI model scaling requiring exponential compute capabilities.",
      "Transition of traditional data centers from CPUs to accelerated computing models.",
      "Rising enterprise adoption of private LLMs and AI agent workflows."
    ],
    financialHealth: "Outstanding financial health with over $25 billion in cash reserves, minimal debt, and record-high free cash flow generation from high-margin compute infrastructure demand.",
    marketPosition: "Dominant market leader with an estimated 85% to 90% share of the AI chip market and near-total monopoly on the software interface utilized by developers.",
    competitiveLandscape: "Competes with AMD in graphics and computing, Intel in legacy processor domains, and custom hardware programs built inside Google (TPUs) and AWS.",
    keyRisks: [
      "Potential cyclical downturn in data center capital expenditure once AI buildouts mature.",
      "Strict trade restrictions limiting sales of high-end computing components to critical markets.",
      "Key person risk linked to CEO Jensen Huang."
    ],
    investmentHorizon: {
      shortTerm: "Catalyzed by continuing demand for Blackwell chips and enterprise AI upgrades. Positive outlook.",
      mediumTerm: "Potential digestion phase as hyperscalers adjust capacity, but structural secular growth remains strong.",
      longTerm: "Generational holding candidate as computing shifts towards physical AI, robotics, and autonomous systems."
    },
    scores: {
      businessQuality: 96,
      growthPotential: 92,
      competitiveAdvantage: 98,
      riskLevel: 75, // Lower risk score means safer
      marketOpportunity: 95
    },
    finalScore: 92,
    recommendation: "Invest",
    confidenceScore: 95,
    recommendationReasoning: "NVIDIA is a top-tier business holding a virtual monopoly on the infrastructure driving the AI revolution. Supported by its CUDA software moat, the company commands incredible pricing power, exceptional financial health, and continuous demand. While valuation multiples and geopolitical supply chain risks are present, the business quality and long-term tailwinds justify a strong Invest recommendation."
  },
  tesla: {
    companyName: "Tesla, Inc.",
    companyOverview: "Tesla, Inc. is a vertical-integration energy and transportation company. Founded in 2003, it has scaled from a niche electric vehicle manufacturer into a global brand focusing on clean energy, energy storage, AI, and autonomous driving.",
    industry: "Automotive & Clean Energy Infrastructure",
    businessModel: "Generates revenue via direct-to-consumer vehicle sales, hardware charging networks (Superchargers), battery energy storage deployments, and proprietary FSD (Full Self-Driving) subscriptions.",
    revenueSources: [
      "Automotive Sales (Model 3, Y, S, X, Cybertruck) - 80%",
      "Energy Generation & Storage (Powerwall, Megapack) - 9.5%",
      "Automotive Regulatory Credits - 3.5%",
      "Services & Other (Supercharging networks, insurance, body shop repairs) - 7%"
    ],
    competitiveAdvantages: [
      "Industry-leading manufacturing cost efficiency and gross margins per vehicle.",
      "Unrivaled charging network (Supercharger standard adopted globally).",
      "Massive fleet data feedback loop for training Neural Networks for FSD and autopilot."
    ],
    swot: {
      strengths: [
        "Unrivaled brand recognition and customer loyalty in the electric vehicle sector.",
        "Vertical integration including battery cell supply agreements and software stacks.",
        "Highly profitable compared to legacy automakers entering the EV market."
      ],
      weaknesses: [
        "High reliance on two main models (Model 3 and Model Y) for volume.",
        "Lower price points of Chinese competitors squeezing global market share.",
        "Key person risk regarding Elon Musk's public actions and multiple CEO roles."
      ],
      opportunities: [
        "Scaling Tesla Energy utility-scale storage (Megapack) which has high-margin profiles.",
        "Robotaxi rollout and FSD licensing to third-party automotive companies.",
        "Development of Optimus humanoid robot platform for industrial factory floors."
      ],
      threats: [
        "Intense price competition from Chinese automakers like BYD.",
        "Regulatory scrutiny over autopilot and FSD safety claims.",
        "Slowing global EV adoption rates prompting legacy hybrids resurgence."
      ]
    },
    growthDrivers: [
      "Expansion of next-generation low-cost vehicle platform.",
      "Global energy transition requiring battery storage grids to buffer solar/wind power.",
      "FSD commercialization and robotaxi software scaling."
    ],
    financialHealth: "Strong cash buffer of over $28 billion, minimal long-term debt, and solid operational cash flow that allows the company to fund capital expenditures internally.",
    marketPosition: "Leading EV provider in North America and Europe, facing growing competition in Asia, and expanding rapidly into utility-scale grid battery backup positions.",
    competitiveLandscape: "Competes with traditional automotive OEMs (Toyota, Volkswagen, GM) and pure-play EV competitors (BYD, Rivian, Lucid, Xiaomi).",
    keyRisks: [
      "Execution delays on FSD development and regulatory approvals.",
      "Macroeconomic cycles impacting consumers purchasing premium passenger vehicles.",
      "Potential margin compression if vehicle price cuts persist."
    ],
    investmentHorizon: {
      shortTerm: "Neutral outlook as margins adjust to vehicle pricing cycles and interest rates. Expect volatility.",
      mediumTerm: "High growth potential led by next-generation models and Megapack scaling. Positive.",
      longTerm: "High upside if FSD autonomy is achieved and humanoid robots deploy. Generates immense value."
    },
    scores: {
      businessQuality: 82,
      growthPotential: 85,
      competitiveAdvantage: 88,
      riskLevel: 55, // Moderately high risk
      marketOpportunity: 90
    },
    finalScore: 81,
    recommendation: "Invest",
    confidenceScore: 88,
    recommendationReasoning: "Tesla represents an investment in clean energy and artificial intelligence. While margins have faced pressure from EV price wars, the energy storage business is growing rapidly and its FSD neural networks hold a structural lead. Supported by a healthy balance sheet, it earns a low-tier Invest rating, with the caveat of high volatility."
  },
  apple: {
    companyName: "Apple Inc.",
    companyOverview: "Apple Inc. is a multinational technology giant. Founded in 1976, the company designs consumer electronics, software, and services, centering around its highly profitable iPhone and ecosystem of connected hardware.",
    industry: "Consumer Electronics & Services",
    businessModel: "Monetizes premium hardware sales alongside high-margin recurring services (App Store fees, iCloud, Apple Music, Apple Pay) locked inside iOS.",
    revenueSources: [
      "iPhone Sales (Core mobile devices) - 52%",
      "Services (App Store commission, subscriptions, AppleCare) - 22%",
      "Wearables, Home & Accessories (Apple Watch, AirPods, Vision Pro) - 10%",
      "Mac Computing Systems - 8%",
      "iPad Tablets - 8%"
    ],
    competitiveAdvantages: [
      "Unrivaled brand equity and ecosystem lock-in (iMessage, Apple Watch integration).",
      "Consistent developer ecosystem translating to high-spending App Store metrics.",
      "High proprietary chip design capability (Apple Silicon M-series) reducing component costs."
    ],
    swot: {
      strengths: [
        "Incredible customer retention rates exceeding 90% globally.",
        "Services division operates at a massive 70%+ gross margin scale.",
        "Cash flow powerhouse, generating over $100 billion annually."
      ],
      weaknesses: [
        "High dependency on iPhone upgrades for core revenue cycles.",
        "Slower adoption of generative AI compared to competitors (Google/Microsoft).",
        "Geopolitical exposure with heavy manufacturing presence in China."
      ],
      opportunities: [
        "Ecosystem monetization of Apple Intelligence (generative AI integrations).",
        "Expansion of financial services (Apple Card, Apple Pay) in global markets.",
        "Health and wellness tracking features inside wearables."
      ],
      threats: [
        "Antitrust regulatory pressure on App Store fees in EU and US.",
        "Slowing smartphone upgrade cycles as device lifespans lengthen.",
        "Geopolitical supply chains disruption and trade tariff increases."
      ]
    },
    growthDrivers: [
      "Subscription service expansion (Apple TV+, Arcade, Fitness+).",
      "Apple Intelligence prompting a hardware supercycle upgrade program.",
      "Rising affluence in emerging markets driving iOS user acquisitions."
    ],
    financialHealth: "Exceptional financial strength with robust cash reserves and continuous share buybacks, maintaining the strongest liquidity profile in the technology sector.",
    marketPosition: "Market-leading premium smartphone brand worldwide, holding the highest share of industry profit pools.",
    competitiveLandscape: "Competes with Samsung in smartphones, Google in software systems (Android), and Microsoft/Dell in PCs.",
    keyRisks: [
      "Regulatory mandates forcing Apple to open up iOS to third-party app stores.",
      "Slowing innovation curves in hardware upgrades.",
      "Supply chain disruptions in assembly corridors."
    ],
    investmentHorizon: {
      shortTerm: "Stable growth driven by Apple Intelligence upgrades and services margins. Positive.",
      mediumTerm: "Steady growth, acting as a defensive cash compounder with buyback support. Positive.",
      longTerm: "Safe long-term compounder, though terminal growth may slow to GDP-matching rates."
    },
    scores: {
      businessQuality: 94,
      growthPotential: 70,
      competitiveAdvantage: 95,
      riskLevel: 85, // Safe risk score
      marketOpportunity: 75
    },
    finalScore: 84,
    recommendation: "Invest",
    confidenceScore: 92,
    recommendationReasoning: "Apple is a premier defensive cash generator. Although its hardware growth has slowed, the Services division continues to expand and lock in its active user base of over 2 billion devices. Apple Intelligence should catalyze hardware upgrades. An outstanding investment candidate for capital preservation and steady compounding."
  },
  microsoft: {
    companyName: "Microsoft Corporation",
    companyOverview: "Microsoft Corporation is a global technology leader. Founded in 1975, the company has successfully transitioned from PC desktop OS dominance into a cloud infrastructure and enterprise software behemoth.",
    industry: "Enterprise Software & Cloud Computing",
    businessModel: "Monetizes cloud compute platforms (Azure), enterprise SaaS products (Office 365, Dynamics), gaming consoles (Xbox), and AI integrations (Copilot).",
    revenueSources: [
      "Intelligent Cloud (Azure compute, SQL server infrastructure) - 43%",
      "Productivity & Business Processes (Office 365, LinkedIn, Teams) - 32%",
      "More Personal Computing (Windows OEM licenses, Xbox gaming, Surface hardware) - 25%"
    ],
    competitiveAdvantages: [
      "Deep integration inside enterprise infrastructure; near-zero customer churn.",
      "Leading AI partnership with OpenAI, integrating Copilots across the entire Office stack.",
      "Azure's hybrid cloud capabilities scale across global fortune 500 corporations."
    ],
    swot: {
      strengths: [
        "Unrivaled enterprise distribution channel and billing relationships.",
        "Diversified revenue streams spanning cloud, SaaS, gaming, and business media.",
        "Elite operating margins exceeding 40% and strong cash flow."
      ],
      weaknesses: [
        "High capital expenditures required to build and maintain AI GPU data centers.",
        "Integration friction following large acquisitions (e.g. Activision Blizzard).",
        "Legacy desktop computing divisions are subject to declining consumer markets."
      ],
      opportunities: [
        "AI Copilot add-on monetization across hundreds of millions of commercial seats.",
        "Azure stealing market share from AWS as enterprises adopt AI-centric cloud environments.",
        "Expansion of cyber-security enterprise services."
      ],
      threats: [
        "Security breaches damaging enterprise trust in cloud environments.",
        "Increased price competition from Google Workspace in enterprise SaaS.",
        "Antitrust regulatory reviews over bundled products (Teams, Office, Azure)."
      ]
    },
    growthDrivers: [
      "Enterprise AI adoption driving massive cloud compute workloads on Azure.",
      "SaaS pricing increases due to AI Copilot integrations.",
      "Consolidation of IT spend onto Microsoft's single enterprise platform."
    ],
    financialHealth: "AAA credit rating (held by only two US corporations), boasting over $70 billion in cash and robust free cash flow, giving it unparalleled capital flexibility.",
    marketPosition: "Dominant enterprise SaaS platform and the leading candidate for cloud AI migration alongside AWS.",
    competitiveLandscape: "Competes with Amazon Web Services (AWS) in cloud compute, Google in productivity software, and Sony in gaming.",
    keyRisks: [
      "Infrastructure capacity constraints delaying GPU deployment on Azure.",
      "Cybersecurity vulnerabilities exposing enterprise customer data.",
      "Return on investment delays for AI capital expenditures."
    ],
    investmentHorizon: {
      shortTerm: "High revenue growth from Azure AI and Copilot additions. Positive outlook.",
      mediumTerm: "Sustained compounding as enterprises mature their cloud migration and lock in workflows. Positive.",
      longTerm: "Generational holding. Its positioning in cloud, operating systems, and developer tools (GitHub) is secure."
    },
    scores: {
      businessQuality: 96,
      growthPotential: 88,
      competitiveAdvantage: 96,
      riskLevel: 90, // Extremely safe risk profile
      marketOpportunity: 90
    },
    finalScore: 92,
    recommendation: "Invest",
    confidenceScore: 96,
    recommendationReasoning: "Microsoft is arguably the most secure, high-quality business in the world. Combining its AAA financial health, Azure's high-margin scaling, and its position as the primary commercializer of generative AI (via OpenAI), it offers the best risk-adjusted return profile in tech. Enjoys a strong Invest recommendation."
  },
  "reliance industries": {
    companyName: "Reliance Industries Limited",
    companyOverview: "Reliance Industries Limited is India's largest private sector conglomerate. Founded by Dhirubhai Ambani and headquartered in Mumbai, it has evolved from an oil-and-gas giant into a diverse retail, telecom, and digital services powerhouse.",
    industry: "Conglomerate (Energy, Retail, Telecom)",
    businessModel: "Operates oil refineries (petrochemicals), India's largest retail chain (Reliance Retail), and the country's leading 4G/5G telecom network (Jio).",
    revenueSources: [
      "Oil-to-Chemicals (Refining, Petrochemicals, Fuels) - 58%",
      "Organized Retail (Reliance Retail stores, digital commerce) - 23%",
      "Digital Services & Telecom (Jio subscriptions, Jio Fiber) - 14%",
      "Oil & Gas Exploration & Production - 5%"
    ],
    competitiveAdvantages: [
      "World's largest oil refining complex at Jamnagar, providing exceptional refining margins.",
      "Jio's massive data infrastructure and low-cost subscriber lock-in (>450M users).",
      "Unmatched physical footprint of over 18,000 retail stores across India."
    ],
    swot: {
      strengths: [
        "Market leader across energy, organized retail, and telecom in India.",
        "Deep capital reserves and strong domestic political and institutional support.",
        "Strong cash flow generation from O2C (Oil-to-Chemicals) division funding consumer expansions."
      ],
      weaknesses: [
        "High capital expenditure intensity to maintain 5G telecom rollout and green energy transition.",
        "Relatively high debt load from aggressive consumer division buildouts.",
        "Complex conglomerate structure can lead to a valuation discount."
      ],
      opportunities: [
        "Jio Financial Services scaling to disrupt digital banking and credit ecosystems.",
        "Massive green energy buildout (solar gigafactories, green hydrogen) in Gujarat.",
        "IPO value unlocking through potential listings of Jio and Retail subsidiaries."
      ],
      threats: [
        "Volatility in crude oil prices and global refining margins.",
        "Government regulatory shifts in tariffs, data storage rules, or fuel pricing.",
        "Fierce competition from Adani Group in clean energy and infra sectors."
      ]
    },
    growthDrivers: [
      "Consumption growth driven by rising middle-class disposable income in India.",
      "Data usage expansion and monetization via Jio digital platform services.",
      "Green energy sector transition supported by Indian government policies."
    ],
    financialHealth: "Robust operational cash flows, backed by top-tier credit rating in India, though leverage is high due to capital intensive consumer and green energy projects.",
    marketPosition: "Dominant market leader in retail and telecom, holding a strategic position in global energy refining.",
    competitiveLandscape: "Competes with Airtel in telecom, Tata and Amazon in retail, and Indian public refiners in energy.",
    keyRisks: [
      "Prolonged depression in global refining cracks/margins.",
      "Failure to unlock value via retail/telecom subsidiary spin-offs.",
      "Key person risk regarding succession planning after Mukesh Ambani."
    ],
    investmentHorizon: {
      shortTerm: "Supported by tariff hikes in telecom and steady retail growth. Neutral-Positive.",
      mediumTerm: "Clean energy investments start generating revenue; potential IPOs of Jio/Retail. Positive.",
      longTerm: "Generational compounder aligned with India's long-term GDP growth trajectory."
    },
    scores: {
      businessQuality: 88,
      growthPotential: 80,
      competitiveAdvantage: 90,
      riskLevel: 70, // Moderate risk
      marketOpportunity: 85
    },
    finalScore: 83,
    recommendation: "Invest",
    confidenceScore: 90,
    recommendationReasoning: "Reliance Industries is the ultimate proxy for India's domestic growth story. It combines a highly profitable energy business with dominant consumer platforms in Retail and Telecom (Jio). As it pivots to clean energy and digital financial platforms, it is poised to capture the next wave of India's development, earning a solid Invest recommendation."
  }
};

export function getMockData(companyName: string): AnalysisResult {
  const normName = companyName.toLowerCase().trim();
  
  // 1. Direct check in registry
  if (mockDataRegistry[normName]) {
    return mockDataRegistry[normName];
  }
  
  // 2. Partial matching for popular companies
  if (normName.includes("nvidia") || normName.includes("nvda")) return mockDataRegistry.nvidia;
  if (normName.includes("tesla") || normName.includes("tsla")) return mockDataRegistry.tesla;
  if (normName.includes("apple") || normName.includes("aapl")) return mockDataRegistry.apple;
  if (normName.includes("microsoft") || normName.includes("msft")) return mockDataRegistry.microsoft;
  if (normName.includes("reliance") || normName.includes("jio")) return mockDataRegistry["reliance industries"];
  
  // 3. Fallback: Dynamic Generic Generator for any other company name
  return generateGenericMockData(companyName);
}

function generateGenericMockData(companyName: string): AnalysisResult {
  // Format the name nicely
  const formattedName = companyName.trim().split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ");
  
  // Generate random scores to look natural (around 70-85)
  const businessQuality = 75 + Math.floor(Math.random() * 15);
  const growthPotential = 70 + Math.floor(Math.random() * 20);
  const competitiveAdvantage = 70 + Math.floor(Math.random() * 18);
  const riskLevel = 60 + Math.floor(Math.random() * 25);
  const marketOpportunity = 72 + Math.floor(Math.random() * 18);
  
  // Calculate score math
  const finalScore = Math.round(
    (businessQuality * 0.25) +
    (growthPotential * 0.20) +
    (competitiveAdvantage * 0.20) +
    (riskLevel * 0.15) +
    (marketOpportunity * 0.20)
  );

  let recommendation: "Invest" | "Watchlist" | "Pass" = "Pass";
  if (finalScore >= 80) {
    recommendation = "Invest";
  } else if (finalScore >= 60) {
    recommendation = "Watchlist";
  }

  return {
    companyName: formattedName,
    companyOverview: `${formattedName} is a prominent business operating in its sector. The company has developed a strong operational footprint, serving a diverse customer base and scaling its market reach through innovation and execution.`,
    industry: "Technology & Professional Services",
    businessModel: "Generates revenue through a combination of B2B enterprise service agreements, product transactions, and recurring software licensing plans.",
    revenueSources: [
      "Core Product & Service Sales - 65%",
      "Recurring Subscriptions & Maintenance - 25%",
      "Custom Implementation Fees & Consulting - 10%"
    ],
    competitiveAdvantages: [
      "Proprietary operational workflow process providing high customer retention.",
      "Recognizable brand reputation within local and international market segments.",
      "High barriers to entry due to high capital requirements for direct competitors."
    ],
    swot: {
      strengths: [
        "Experienced management team with a proven track record of execution.",
        "Stable recurring revenue streams from core customer contracts.",
        "Solid balance sheet with manageable debt profiles."
      ],
      weaknesses: [
        "Moderate geographic concentration in local markets.",
        "Dependence on third-party cloud vendors for platform hosting.",
        "Long sales cycles for signing enterprise-level contracts."
      ],
      opportunities: [
        "Unlocking efficiency gains through internal automation tools.",
        "Expanding distribution networks into adjacent geographic regions.",
        "Rolling out next-generation product additions to up-sell existing clients."
      ],
      threats: [
        "Increasing competitive pressures from low-cost market entrants.",
        "Macroeconomic fluctuations affecting client procurement budgets.",
        "Changing regulatory compliance standards increasing operational friction."
      ]
    },
    growthDrivers: [
      "Digital transformation cycles forcing clients to adopt more modern tools.",
      "Strategic pricing adjustments across core product lines.",
      "Successful expansion of client acquisition funnels."
    ],
    financialHealth: "The company maintains a stable financial position characterized by positive operating cash flows, adequate liquidity reserves, and a conservative approach to debt financing.",
    marketPosition: "Holds a stable, mid-tier market position with a loyal customer base and a reputation for providing high reliability.",
    competitiveLandscape: "Operates in a moderately fragmented sector, competing with large international players and nimble, local startup competitors.",
    keyRisks: [
      "Talent retention in highly competitive engineering and sales roles.",
      "Potential pricing compression as competitors launch copycat products.",
      "Changes in macro credit availability impacting client financing."
    ],
    investmentHorizon: {
      shortTerm: "Stable, but close monitoring of client retention numbers is advised as client budgets adjust.",
      mediumTerm: "Steady growth expected as geographic expansion initiatives mature and scale.",
      longTerm: "Represents a reliable compounder if the company continues to defend its core customer relationships."
    },
    scores: {
      businessQuality,
      growthPotential,
      competitiveAdvantage,
      riskLevel,
      marketOpportunity
    },
    finalScore,
    recommendation,
    confidenceScore: 80,
    recommendationReasoning: `Analysis of ${formattedName} indicates a stable business profile with a score of ${finalScore}. The company's recurring revenue base and solid market position support a ${recommendation} rating. Ongoing risk monitoring is recommended regarding macro headwind pressures and competition.`
  };
}
