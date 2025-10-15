import React, { useState } from "react";
import { motion } from "framer-motion";

const PricingPage = () => {
  const [region, setRegion] = useState<"IN" | "GLOBAL">("IN");

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
          "AI CMO Agent": "",
          "AI Dashboard + Diagnostics + Recommendations": "",
          "Campaign Automation & Optimization - META ":
            "5 campaigns * Coming Soon ",
          // "AI Alerts (Anomaly Detection)": "No",
          "AI Custom Reports": "",
          "Creative Analysis": "",
          "Attribution (SKU → Channel → Profitability) - last touch": "",
          "Data Integrations": "2",
          "Multi Store Analytics": "1 Store",
          "Data Refresh once every": "24 hrs",
          "Data in GB": "50 GB",
          "Data Security and Privacy": "",
          // "Dedicated Instance": "No",
          // "Dedicated DB": "No",
          "Service Support Time": "72 hrs",
          // "Dedicated Account Manager": "No",
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
          "AI CMO Agent": "",
          "AI Dashboard + Diagnostics + Recommendations": "",
          "Campaign Automation & Optimization - META ":
            "30 campaigns * Coming Soon",
          "AI Alerts (Anomaly Detection)": "",
          "AI Custom Reports": "",
          "Creative Analysis": "",
          "Attribution (SKU → Channel → Profitability) - last touch": "",
          "Data Integrations": "5",
          "Multi Store Analytics": "1 Store",
          "Data Refresh once every": "24 hrs",
          "Data in GB": "300 GB",
          "Data Security and Privacy": "",
          // "Dedicated Instance": "No",
          // "Dedicated DB": "No",
          "Service Support Time": "24 hrs",
          // "Dedicated Account Manager": "No",
        },
      },
      {
        tier: "Pro",
        price: "$799",
        tagline: "For scaling brands and agencies",
        color: "from-orange-500 to-red-500",
        features: {
          "Ad Spend Limit": "$60k - $250k",
          "AI CMO Agent": "",
          "AI Dashboard + Diagnostics + Recommendations": "",
          "Campaign Automation & Optimization - META ":
            "50 campaigns * Coming Soon ",
          "AI Alerts (Anomaly Detection)": "",
          "AI Custom Reports": "",
          "Creative Analysis": "",
          "Attribution (SKU → Channel → Profitability) - last touch": "",
          "Data Integrations": "10",
          "Multi Store Analytics": "5 Stores",
          "Data Refresh once every": "12 hrs",
          "Data in GB": "1 TB",
          "Data Security and Privacy": "",
          // "Dedicated Instance": "No",
          "Dedicated DB": "",
          "Service Support Time": "8 hrs",
          "Dedicated Account Manager": "",
        },
      },
      {
        tier: "Enterprise",
        price: "Custom",
        tagline: "For multi-region enterprises",
        color: "from-emerald-500 to-teal-500",
        features: {
          "Ad Spend Limit": "Unlimited",
          "AI CMO Agent": "",
          "AI Dashboard + Diagnostics + Recommendations": "",
          "Campaign Automation & Optimization - META ":
            "Unlimited * Coming Soon ",
          "AI Alerts (Anomaly Detection)": "",
          "AI Custom Reports": "",
          "Creative Analysis": "",
          "Attribution (SKU → Channel → Profitability) - last touch": "",
          "Data Integrations": "Unlimited + Custom",
          "Multi Store Analytics": "Entire Globe",
          "Data Refresh once every": "1 hr",
          "Data in GB": "Unlimited",
          "Data Security and Privacy": "",
          "Dedicated Instance": "",
          "Dedicated DB": "",
          "Service Support Time": "8 hrs",
          "Dedicated Account Manager": "",
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
          "AI CMO Agent": "",
          "AI Dashboard + Diagnostics + Recommendations": "",
          "Campaign Automation & Optimization - META ":
            "5 campaigns * Coming Soon ",
          // "AI Alerts (Anomaly Detection)": "No",
          "AI Custom Reports": "",
          "Creative Analysis": "",
          "Attribution (SKU → Channel → Profitability) - last touch": "",
          "Data Integrations": "2",
          "Multi Store Analytics": "1 Store",
          "Data Refresh once every": "24 hrs",
          "Data in GB": "50 GB",
          "Data Security and Privacy": "",
          // "Dedicated Instance": "No",
          // "Dedicated DB": "No",
          "Service Support Time": "72 hrs",
          // "Dedicated Account Manager": "No",
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
          "AI CMO Agent": "",
          "AI Dashboard + Diagnostics + Recommendations": "",
          "Campaign Automation & Optimization - META ":
            "30 campaigns * Coming Soon ",
          "AI Alerts (Anomaly Detection)": "",
          "AI Custom Reports": "",
          "Creative Analysis": "",
          "Attribution (SKU → Channel → Profitability) - last touch": "",
          "Data Integrations": "5",
          "Multi Store Analytics": "1 Store",
          "Data Refresh once every": "24 hrs",
          "Data in GB": "300 GB",
          "Data Security and Privacy": "",
          // "Dedicated Instance": "No",
          // "Dedicated DB": "No",
          "Service Support Time": "24 hrs",
          // "Dedicated Account Manager": "No",
        },
      },
      {
        tier: "Pro",
        price: "$1799",
        tagline: "For scaling brands and agencies",
        color: "from-orange-500 to-red-500",
        features: {
          "Ad Spend Limit": "$60k - $250k",
          "AI CMO Agent": "",
          "AI Dashboard + Diagnostics + Recommendations": "",
          "Campaign Automation & Optimization - META ":
            "50 campaigns * Coming Soon ",
          "AI Alerts (Anomaly Detection)": "",
          "AI Custom Reports": "",
          "Creative Analysis": "",
          "Attribution (SKU → Channel → Profitability) - last touch": "",
          "Data Integrations": "10",
          "Multi Store Analytics": "5 Stores",
          "Data Refresh once every": "12 hrs",
          "Data in GB": "1 TB",
          "Data Security and Privacy": "",
          // "Dedicated Instance": "No",
          "Dedicated DB": "",
          "Service Support Time": "8 hrs",
          "Dedicated Account Manager": "",
        },
      },
      {
        tier: "Enterprise",
        price: "Custom",
        tagline: "For multi-region enterprises",
        color: "from-emerald-500 to-teal-500",
        features: {
          "Ad Spend Limit": "Unlimited",
          "AI CMO Agent": "",
          "AI Dashboard + Diagnostics + Recommendations": "",
          "Campaign Automation & Optimization - META ":
            "Unlimited * Coming Soon ",
          "AI Alerts (Anomaly Detection)": "",
          "AI Custom Reports": "",
          "Creative Analysis": "",
          "Attribution (SKU → Channel → Profitability) - last touch": "",
          "Data Integrations": "Unlimited + Custom",
          "Multi Store Analytics": "Entire Globe",
          "Data Refresh once every": "1 hr",
          "Data in GB": "Unlimited",
          "Data Security and Privacy": "",
          "Dedicated Instance": "",
          "Dedicated DB": "",
          "Service Support Time": "8 hrs",
          "Dedicated Account Manager": "",
        },
      },
    ],
  };

  const data = pricingData[region];

  // Get all feature keys dynamically from the first plan
  const featureKeys = Object.keys(data[0].features);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf7ff] via-[#f4faff] to-[#f6fff8] py-20 px-6">
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
            onClick={() => setRegion("IN")}
            className={`px-6 py-2 font-semibold rounded-full transition-all ${
              region === "IN"
                ? "bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white"
                : "text-gray-600 hover:text-violet-500"
            }`}
          >
            🇮🇳 India
          </button>
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
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {data.map((tier) => (
          <motion.div
            key={tier.tier}
            whileHover={{ y: -8 }}
            className={`relative rounded-3xl p-8 bg-white/80 backdrop-blur-md border transition-all shadow-md hover:shadow-2xl ${
              tier.highlight
                ? "border-violet-300 ring-2 ring-violet-400 ring-offset-2 ring-offset-white scale-105"
                : "border-gray-100"
            }`}
          >
            <div
              className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${tier.color} opacity-10`}
            ></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-gray-900">{tier.tier}</h2>
              <p className="text-sm text-gray-500 mb-4">{tier.tagline}</p>

              <div className="text-3xl font-extrabold bg-gradient-to-r from-fuchsia-600 to-cyan-500 bg-clip-text text-transparent mb-6">
                {tier.price}
              </div>

              <ul className="space-y-3 text-gray-700 text-sm">
                {featureKeys.map((key) => (
                  <li key={key}>
                    <div key={key} className="flex items-start space-x-3">
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${tier.color} flex items-center justify-center mt-0.5`}
                      >
                        <svg
                          className="w-3 h-3 text-white"
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
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-800 font-medium">
                          {key}{" "}
                          {tier.features[key as keyof typeof tier.features]
                            ? `: ${
                                tier.features[
                                  key as keyof typeof tier.features
                                ]?.replace("* Coming Soon", "") || ""
                              }`
                            : null}
                          {tier.features[key as keyof typeof tier.features] &&
                            tier.features[
                              key as keyof typeof tier.features
                            ]?.includes("Coming Soon") && (
                              <span className="text-xs text-violet-500 font-normal ml-1">
                                * Coming Soon
                              </span>
                            )}
                        </p>
                      </div>
                    </div>
                    {/* <strong>{key}:</strong> {tier.features[key]} */}
                  </li>
                ))}
              </ul>

              <button
                className={`mt-6 w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r ${tier.color} hover:opacity-90 transition`}
              >
                {tier.price === "Custom" ? "Contact Sales" : "Get Started"}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-gray-500 text-center text-sm mt-12">
        *All prices include taxes. Cancel anytime. Enterprise customers get
        onboarding support.
      </p>
    </div>
  );
};

export default PricingPage;
