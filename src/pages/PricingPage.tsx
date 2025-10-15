import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PricingPage = () => {
  const [region, setRegion] = useState<"IN" | "GLOBAL">("GLOBAL");

  // Pricing data
  const pricingData = {
    IN: [
      {
        tier: "Starter",
        price: "$99",
        tagline: "Perfect for small startups",
        color: "from-cyan-500 to-blue-500",
        features: {
          "Ad Spend Limit": "Up to $10k",
          "AI CMO Agent - Fast & Deep Research Modes": "Yes",
          "AI Dashboard + Diagnostics + Recommendations": "Yes",
          "Campaign Automation & Optimization - META  * Coming Soon ":
            "5 campaigns ",
          "AI Alerts (Anomaly Detection)": "Yes",
          "AI Custom Reports": "Yes",
          "Creative Analysis": "Yes",
          "Attribution (SKU → Channel → Profitability) ": "Yes",
          // "Data Integrations": "2",
          "Multi Store Analytics": "2 Store",
          "Data Refresh once every": "24 hrs",
          // "Data in GB": "50 GB",
          "Data Security and Privacy": "Yes",
          "Dedicated Instance": "No",
          "Dedicated DB": "No",
          // "Service Support Time": "72 hrs",
          "Dedicated Account Manager": "No",
        },
      },
      {
        tier: "Growth",
        price: "$349",
        tagline: "Our most popular plan",
        color: "from-fuchsia-500 to-violet-500",
        highlight: true,
        features: {
          "Ad Spend Limit": "$25k - $60k",
          "AI CMO Agent - Fast & Deep Research Modes": "Yes",
          "AI Dashboard + Diagnostics + Recommendations": "Yes",
          "Campaign Automation & Optimization - META  * Coming Soon ":
            "30 campaigns",
          "AI Alerts (Anomaly Detection)": "Yes",
          "AI Custom Reports": "Yes",
          "Creative Analysis": "Yes",
          "Attribution (SKU → Channel → Profitability) ": "Yes",
          // "Data Integrations": "5",
          "Multi Store Analytics": "5 Store",
          "Data Refresh once every": "24 hrs",
          // "Data in GB": "300 GB",
          "Data Security and Privacy": "Yes",
          "Dedicated Instance": "No",
          "Dedicated DB": "No",
          // "Service Support Time": "24 hrs",
          "Dedicated Account Manager": "No",
        },
      },
      {
        tier: "Proffessional",
        price: "$799",
        tagline: "For scaling brands and agencies",
        color: "from-orange-500 to-red-500",
        features: {
          "Ad Spend Limit": "$60k - $250k",
          "AI CMO Agent - Fast & Deep Research Modes": "Yes",
          "AI Dashboard + Diagnostics + Recommendations": "Yes",
          "Campaign Automation & Optimization - META  * Coming Soon ":
            "50 campaigns ",
          "AI Alerts (Anomaly Detection)": "Yes",
          "AI Custom Reports": "Yes",
          "Creative Analysis": "Yes",
          "Attribution (SKU → Channel → Profitability) ": "Yes",
          // "Data Integrations": "10",
          "Multi Store Analytics": "15 Stores",
          "Data Refresh once every": "12 hrs",
          // "Data in GB": "1 TB",
          "Data Security and Privacy": "Yes",
          "Dedicated Instance": "Yes",
          "Dedicated DB": "Yes",
          // "Service Support Time": "8 hrs",
          "Dedicated Account Manager": "Yes",
        },
      },
      {
        tier: "Enterprise",
        price: "Custom",
        tagline: "For multi-region enterprises",
        color: "from-emerald-500 to-teal-500",
        features: {
          "Ad Spend Limit": "Unlimited",
          "AI CMO Agent - Fast & Deep Research Modes": "Yes",
          "AI Dashboard + Diagnostics + Recommendations": "Yes",
          "Campaign Automation & Optimization - META  * Coming Soon ":
            "Unlimited",
          "AI Alerts (Anomaly Detection)": "Yes",
          "AI Custom Reports": "Yes",
          "Creative Analysis": "Yes",
          "Attribution (SKU → Channel → Profitability) ": "Yes",
          // "Data Integrations": "Unlimited + Custom",
          "Multi Store Analytics": "All stores",
          "Data Refresh once every": "1 hr",
          // "Data in GB": "Unlimited",
          "Data Security and Privacy": "Yes",
          "Dedicated Instance": "Yes",
          "Dedicated DB": "Yes",
          // "Service Support Time": "8 hrs",
          "Dedicated Account Manager": "Yes",
        },
      },
    ],
    GLOBAL: [
      {
        tier: "Starter",
        price: "$599",
        tagline: "Perfect for small startups",
        color: "from-cyan-500 to-blue-500",
        features: {
          "Ad Spend Limit": "Up to $10k",
          "AI CMO Agent - Fast & Deep Research Modes": "Yes",
          "AI Dashboard + Diagnostics + Recommendations": "Yes",
          "Campaign Automation & Optimization - META  * Coming Soon ":
            "5 campaigns ",
          "AI Alerts (Anomaly Detection)": "Yes",
          "AI Custom Reports": "Yes",
          "Creative Analysis": "Yes",
          "Attribution (SKU → Channel → Profitability) ": "Yes",
          // "Data Integrations": "2",
          "Multi Store Analytics": "2 Store",
          "Data Refresh once every": "24 hrs",
          // "Data in GB": "50 GB",
          "Data Security and Privacy": "Yes",
          "Dedicated Instance": "No",
          "Dedicated DB": "No",
          // "Service Support Time": "72 hrs",
          "Dedicated Account Manager": "No",
        },
      },
      {
        tier: "Growth",
        price: "$1199",
        tagline: "Our most popular plan",
        color: "from-fuchsia-500 to-violet-500",
        highlight: true,
        features: {
          "Ad Spend Limit": "$25k - $60k",
          "AI CMO Agent - Fast & Deep Research Modes": "Yes",
          "AI Dashboard + Diagnostics + Recommendations": "Yes",
          "Campaign Automation & Optimization - META  * Coming Soon ":
            "30 campaigns ",
          "AI Alerts (Anomaly Detection)": "Yes",
          "AI Custom Reports": "Yes",
          "Creative Analysis": "Yes",
          "Attribution (SKU → Channel → Profitability) ": "Yes",
          // "Data Integrations": "5",
          "Multi Store Analytics": "5 Store",
          "Data Refresh once every": "24 hrs",
          // "Data in GB": "300 GB",
          "Data Security and Privacy": "Yes",
          "Dedicated Instance": "No",
          "Dedicated DB": "No",
          // "Service Support Time": "24 hrs",
          "Dedicated Account Manager": "No",
        },
      },
      {
        tier: "Proffessional",
        price: "$1799",
        tagline: "For scaling brands and agencies",
        color: "from-orange-500 to-red-500",
        features: {
          "Ad Spend Limit": "$60k - $250k",
          "AI CMO Agent - Fast & Deep Research Modes": "Yes",
          "AI Dashboard + Diagnostics + Recommendations": "Yes",
          "Campaign Automation & Optimization - META  * Coming Soon ":
            "50 campaigns ",
          "AI Alerts (Anomaly Detection)": "Yes",
          "AI Custom Reports": "Yes",
          "Creative Analysis": "Yes",
          "Attribution (SKU → Channel → Profitability) ": "Yes",
          // "Data Integrations": "10",
          "Multi Store Analytics": "15 Stores",
          "Data Refresh once every": "12 hrs",
          // "Data in GB": "1 TB",
          "Data Security and Privacy": "Yes",
          "Dedicated Instance": "Yes",
          "Dedicated DB": "Yes",
          // "Service Support Time": "8 hrs",
          "Dedicated Account Manager": "Yes",
        },
      },
      {
        tier: "Enterprise",
        price: "Custom",
        tagline: "For multi-region enterprises",
        color: "from-emerald-500 to-teal-500",
        features: {
          "Ad Spend Limit": "Unlimited",
          "AI CMO Agent - Fast & Deep Research Modes": "Yes",
          "AI Dashboard + Diagnostics + Recommendations": "Yes",
          "Campaign Automation & Optimization - META  * Coming Soon ":
            "Unlimited",
          "AI Alerts (Anomaly Detection)": "Yes",
          "AI Custom Reports": "Yes",
          "Creative Analysis": "Yes",
          "Attribution (SKU → Channel → Profitability) ": "Yes",
          // "Data Integrations": "Unlimited + Custom",
          "Multi Store Analytics": "All stores",
          "Data Refresh once every": "1 hr",
          // "Data in GB": "Unlimited",
          "Data Security and Privacy": "Yes",
          "Dedicated Instance": "Yes",
          "Dedicated DB": "Yes",
          // "Service Support Time": "8 hrs",
          "Dedicated Account Manager": "Yes",
        },
      },
    ],
  };

  const data = pricingData[region];

  // Get all feature keys dynamically from the first plan
  const featureKeys = Object.keys(data[0].features);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf7ff] via-[#f4faff] to-[#f6fff8] py-10 md:py-20 px-4 md:px-6">
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .scrollbar-thin::-webkit-scrollbar {
            height: 8px;
          }
          .scrollbar-thin::-webkit-scrollbar-track {
            background: #f1f5f9;
            border-radius: 4px;
          }
          .scrollbar-thin::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 4px;
          }
          .scrollbar-thin::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
          }
        `,
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
          Choose Your Flable Plan
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Scalable pricing for every growth stage — powered by AI intelligence.
        </p>
      </motion.div>

      {/* Region Toggle */}
      <div className="flex justify-center mb-12">
        <div className="flex items-center bg-white/70 border border-gray-200 rounded-full shadow-lg backdrop-blur-md">
          <button
            onClick={() => setRegion("GLOBAL")}
            className={`px-6 py-2 font-semibold rounded-full transition-all ${
              region === "GLOBAL"
                ? "bg-gradient-to-r from-cyan-500 to-violet-500 text-white"
                : "text-gray-600 hover:text-cyan-500"
            }`}
          >
            🌍 Global
          </button>
          <button
            onClick={() => setRegion("IN")}
            className={`px-6 py-2 font-semibold rounded-full transition-all ${
              region === "IN"
                ? "bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white"
                : "text-gray-600 hover:text-violet-500"
            }`}
          >
            🇮🇳 India
          </button>
        </div>
      </div>

      {/* Pricing Table */}
      <motion.div
        key={region}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        {/* Mobile Scroll Hint */}
        <div className="md:hidden text-center mb-4">
          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
              />
            </svg>
            Scroll horizontally to view all plans
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 9l4-4 4 4m0 6l-4 4-4-4"
              />
            </svg>
          </p>
        </div>

        {/* Mobile/Tablet Scrollable Container */}
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <div className="bg-white/80 backdrop-blur-md  shadow-2xl border border-gray-100 overflow-hidden min-w-[1000px]">
            <table className="w-full">
              {/* Table Header */}
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left text-sm md:text-lg p-3 md:p-6 bg-gray-50/50 font-semibold text-gray-700 w-1/5 min-w-[200px]">
                    Features
                  </th>
                  {data.map((tier) => (
                    <th
                      key={tier.tier}
                      className="p-3 md:p-6 text-center relative w-1/5 min-w-[180px]"
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${tier.color} opacity-5`}
                      ></div>
                      <div className="relative z-10">
                        <div
                          className={`inline-block px-2 md:px-4 py-1 md:py-2 rounded-full bg-gradient-to-r ${
                            tier.color
                          } text-white font-bold text-sm md:text-lg mb-2 ${
                            tier.highlight
                              ? "ring-2 ring-violet-400 ring-offset-2"
                              : ""
                          }`}
                        >
                          {tier.tier}
                        </div>
                        {/* <p className="text-xs md:text-sm text-gray-600 mb-2">
                          {tier.tagline}
                        </p> */}
                        <div className="text-lg md:text-2xl mt-3 font-extrabold bg-gradient-to-r from-fuchsia-600 to-cyan-500 bg-clip-text text-transparent">
                          {tier.price} {tier.price === "Custom" ? "" : " / mo"}
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {featureKeys.map((feature, index) => (
                  <tr
                    key={feature}
                    className={`border-b border-gray-50 hover:bg-gray-50/30 transition-colors ${
                      index % 2 === 0 ? "bg-white/50" : "bg-gray-50/20"
                    }`}
                  >
                    <td className="p-2 md:p-4 font-medium text-gray-800 border-r border-gray-100 text-sm md:text-base">
                      <div className="min-w-[180px]">
                        {feature.includes("Coming Soon")
                          ? feature.replace("* Coming Soon", "").trim()
                          : feature}
                        {feature.includes("Coming Soon") && (
                          <span className="inline-block mt-1 md:mt-2 bg-violet-100 text-violet-600 text-xs font-semibold px-2 py-1 rounded-full">
                            Coming Soon
                          </span>
                        )}
                      </div>
                    </td>
                    {data.map((tier) => (
                      <td
                        key={tier.tier}
                        className="p-2 md:p-4 text-center relative min-w-[160px]"
                      >
                        <div className="flex items-center justify-center">
                          <span className="text-xs md:text-sm text-gray-700 font-medium">
                            {(() => {
                              const featureValue = tier.features[
                                feature as keyof typeof tier.features
                              ]
                                ?.replace("* Coming Soon", "")
                                .trim();

                              if (featureValue === "Yes") {
                                return (
                                  <div
                                    className={`w-4 h-4 rounded-full bg-gradient-to-r ${tier.color} flex items-center justify-center mr-2 flex-shrink-0`}
                                  >
                                    <svg
                                      className="w-2.5 h-2.5 text-white"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </div>
                                );
                              } else if (featureValue === "No") {
                                return (
                                  <span className="text-red-600 font-bold text-lg">
                                    ✗
                                  </span>
                                );
                              } else {
                                return <>{featureValue || "✓"}</>;
                              }
                            })()}
                          </span>
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}

                {/* Action Buttons Row */}
                <tr className="bg-gray-50/50">
                  <td className="p-3 md:p-6 font-semibold text-gray-700 border-r border-gray-100 text-sm md:text-base">
                    <div className="min-w-[180px]">Get Started</div>
                  </td>
                  {data.map((tier) => (
                    <td
                      key={tier.tier}
                      className="p-3 md:p-6 text-center min-w-[160px]"
                    >
                      <Link
                        to="https://outlook.office.com/bookwithme/user/c131e2ddbc4c441e8ad355a708c6c169@flable.ai/meetingtype/gs8moKktfk6hEJ0RFqQLEg2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile"
                        target="_blank"
                        className={`inline-block w-full py-2 md:py-3 px-3 md:px-6 rounded-3xl font-semibold text-white bg-gradient-to-r ${tier.color} hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg text-xs md:text-sm`}
                      >
                        {tier.price === "Custom"
                          ? "Contact Sales"
                          : "Get Started"}
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>

      <p className="text-gray-500 text-center text-sm mt-12">
        *All prices include taxes. Cancel anytime. Enterprise customers get
        onboarding support.
      </p>
    </div>
  );
};

export default PricingPage;
