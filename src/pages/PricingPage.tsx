import React, { useState } from 'react';

type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'INR' | 'AUD' | 'CAD' | 'AED';

const currencyData = [
  { code: 'USD' as CurrencyCode, symbol: '$', name: 'US Dollar', rate: 85 },   // 1 USD = 85 INR
  { code: 'EUR' as CurrencyCode, symbol: '€', name: 'Euro', rate: 90 },       // 1 EUR = 90 INR
  { code: 'GBP' as CurrencyCode, symbol: '£', name: 'British Pound', rate: 105 },// 1 GBP = 105 INR
  { code: 'INR' as CurrencyCode, symbol: '₹', name: 'Indian Rupee', rate: 1 },  // 1 INR = 1 INR
  { code: 'AUD' as CurrencyCode, symbol: 'A$', name: 'Australian Dollar', rate: 56 },  // 1 AUD = 56 INR
  { code: 'CAD' as CurrencyCode, symbol: 'C$', name: 'Canadian Dollar', rate: 62 },   // 1 CAD = 62 INR
  { code: 'AED' as CurrencyCode, symbol: 'د.إ', name: 'UAE Dirham', rate: 23 },      // 1 AED = 23 INR
];

const adSpendMilestonesINR = [5000, 50000, 100000, 250000, 500000, 1000000, 1500000];
const gmvMilestonesINR = [10000, 100000, 250000, 500000, 1000000, 2000000, 3000000];

function formatNumber(val: number, code: CurrencyCode): string {
  if (code === 'INR') {
    return val.toLocaleString('en-IN', { maximumFractionDigits: 0 });
  }
  if (code === 'EUR') {
    return val.toLocaleString('de-DE', { maximumFractionDigits: 0 });
  }
  if (code === 'AED') {
    return val.toLocaleString('en-AE', { maximumFractionDigits: 0 });
  }
  return val.toLocaleString(undefined, { maximumFractionDigits: 0 });
}

const formatCurrency = (val: number, symbol: string, code: CurrencyCode) =>
  symbol + formatNumber(val, code);

const getLocalFromINR = (amountInINR: number, rate: number): number => Math.floor(amountInINR / rate);

const PricingPage: React.FC = () => {
  const [currency, setCurrency] = useState(currencyData[0]);
  const [gmv, setGMV] = useState<number>(getLocalFromINR(100000, currencyData[0].rate));
  const [adSpend, setAdSpend] = useState<number>(getLocalFromINR(10000, currencyData[0].rate));
  const [campaigns, setCampaigns] = useState<number>(5);

  // Limits in selected currency
  const adSpendCap = getLocalFromINR(1500000, currency.rate);
  const gmvCap = getLocalFromINR(3000000, currency.rate);

  // Build milestone arrays per currency (milestones <= cap)
  const milestones = adSpendMilestonesINR.map(amt => getLocalFromINR(amt, currency.rate)).filter(v => v <= adSpendCap);

  // Fix slider value if over new cap (when changing currency)
  React.useEffect(() => {
    if (adSpend > adSpendCap) setAdSpend(adSpendCap);
    if (gmv > gmvCap) setGMV(gmvCap);
  }, [currency]);

  const usdRate = 85;
  const eurRate = 90;
  // CALCULATION correct conversion
  const fee = (gmv * 0.002) + (adSpend * 0.025);

  let showApprox: { text: string; sym: string };
  if (currency.code === 'INR') {
    // INR -> USD
    showApprox = { text: formatCurrency(fee / usdRate, '$', 'USD'), sym: 'USD' };
  } else if (currency.code === 'USD') {
    // USD -> EUR
    showApprox = { text: formatCurrency(fee * (usdRate / eurRate), '€', 'EUR'), sym: 'EUR' };
  } else if (currency.code === 'EUR') {
    // EUR -> USD
    showApprox = { text: formatCurrency(fee * (eurRate / usdRate), '$', 'USD'), sym: 'USD' };
  } else {
    // Others: local -> USD
    showApprox = { text: formatCurrency(fee * currency.rate / usdRate, '$', 'USD'), sym: 'USD' };
  }

  // Helper to add plus sign only at cap
  const showValue = (val: number, max: number, code: CurrencyCode, symbol: string) =>
    (val >= max ? symbol + formatNumber(max, code) + '+' : symbol + formatNumber(val, code));

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5e6ff] via-[#f0f9ff] to-[#e5f2ff] flex flex-col items-center justify-center py-12">
      <div className="w-full max-w-2xl bg-white/80 dark:bg-[#211b2a]/90 shadow-2xl rounded-3xl p-10 border border-blue-100 dark:border-blue-950 relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-fuchsia-300 via-violet-300 to-cyan-200 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-tr from-cyan-200 via-violet-300 to-pink-300 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-center bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-500 bg-clip-text text-transparent">
          AI CMO Pricing Calculator
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-100 text-center mb-12 max-w-xl mx-auto">
          Get an instant quote — see your monthly subscription tailored to your business size and country.
        </p>
        <div className="flex flex-col md:flex-row md:items-center justify-center gap-3 mb-8 w-full">
          <span className="font-semibold text-gray-800 dark:text-gray-100">Country/Currency: </span>
          <select
            value={currency.code}
            onChange={e => {
              const cur = currencyData.find(c => c.code === e.target.value as CurrencyCode);
              setCurrency(cur || currencyData[0]);
            }}
            className="rounded-xl border border-gray-300 px-5 py-2 bg-white text-lg focus:outline-none focus:ring-violet-400"
          >
            {currencyData.map(cur => (
              <option key={cur.code} value={cur.code}>{cur.name} ({cur.symbol})</option>
            ))}
          </select>
        </div>
        <div className="flex flex-wrap items-center gap-2 justify-center mb-7">
          {milestones.map((ms) => {
            const isCap = ms === adSpendCap;
            return (
              <button
                key={ms}
                type="button"
                className={
                  "px-4 py-2 rounded-full bg-gradient-to-br text-white font-bold text-lg focus:outline-none " +
                  (adSpend === ms ? "from-fuchsia-600 to-cyan-500 shadow-xl scale-110" : "from-gray-300 to-violet-200 opacity-90 hover:from-fuchsia-300 hover:to-cyan-300")}
                onClick={() => setAdSpend(ms)}
              >
                {currency.symbol}{formatNumber(ms, currency.code)}{isCap ? '+' : ''} /mo
              </button>
            );
          })}
        </div>
        <div className="space-y-8 mb-10 mt-3">
          <div>
            <label className="block mb-2 font-semibold text-gray-800 dark:text-gray-100">GMV (Monthly Gross Merchandise Volume)</label>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min={0} max={gmvCap} step={1000}
                value={gmv}
                onChange={e => setGMV(Number(e.target.value))}
                style={{background: `linear-gradient(90deg, #f472b6 ${(gmv/gmvCap)*100}%, #e0e7ff ${(gmv/gmvCap)*100}%)`}}
                className="w-full accent-fuchsia-500 cursor-pointer h-2 rounded-lg appearance-none outline-none bg-gradient-to-r from-fuchsia-500 via-violet-400 to-cyan-400 shadow-inner"
              />
              <span className="w-28 text-right font-mono text-lg">{showValue(gmv, gmvCap, currency.code, currency.symbol)}</span>
            </div>
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-800 dark:text-gray-100">Ad Spend (Monthly)</label>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min={0} max={adSpendCap} step={500}
                value={adSpend}
                onChange={e => setAdSpend(Number(e.target.value))}
                style={{background: `linear-gradient(90deg, #a21caf ${(adSpend/adSpendCap)*100}%, #e0e7ff ${(adSpend/adSpendCap)*100}%)`}}
                className="w-full accent-violet-700 cursor-pointer h-2 rounded-lg appearance-none outline-none bg-gradient-to-r from-fuchsia-500 via-violet-600 to-cyan-400 shadow-inner"
              />
              <span className="w-28 text-right font-mono text-lg">{showValue(adSpend, adSpendCap, currency.code, currency.symbol)}</span>
            </div>
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-800 dark:text-gray-100">Active Campaigns</label>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min={1} max={50}
                value={campaigns}
                onChange={e => setCampaigns(Number(e.target.value))}
                style={{background: `linear-gradient(90deg, #06b6d4 ${(campaigns/50)*100}%, #e0e7ff ${(campaigns/50)*100}%)`}}
                className="w-full accent-cyan-500 cursor-pointer h-2 rounded-lg appearance-none outline-none bg-gradient-to-r from-fuchsia-500 via-violet-600 to-cyan-400 shadow-inner"
              />
              <span className="w-16 text-right font-mono text-lg">{campaigns}</span>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-fuchsia-500 via-violet-600 to-cyan-400 text-white rounded-2xl shadow-lg p-8 flex flex-col items-center mb-8 animate-fade-in-up">
          <div className="text-2xl md:text-4xl font-bold">Your Monthly Price</div>
          <div className="mt-2 text-4xl md:text-6xl font-mono tracking-tight bg-white bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 via-rose-200 to-fuchsia-100">
            {formatCurrency(fee, currency.symbol, currency.code)} <span className="text-lg">/month</span>
          </div>
          <div className="mt-2 text-lg font-medium opacity-80">≈ {showApprox.text} per month</div>
        </div>
        <p className="text-sm text-center text-gray-400 dark:text-gray-100 mb-4">*Quotes are instant, no hidden charges. All prices exclusive of taxes. Upgrade, downgrade, or cancel any time.</p>
        <div className="flex justify-center">
          <a href="/book-demo" className="btn-neo px-8 py-4 text-lg font-bold rounded-full shadow-lg border-2 border-transparent bg-gradient-to-r from-fuchsia-500 via-violet-600 to-cyan-400 text-white transition-all hover:scale-105 hover:shadow-2xl hover:border-violet-300">
            Hire Your AI CMO
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;