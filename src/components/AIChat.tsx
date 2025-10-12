import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AIChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your AI CMO. Ask me anything about marketing strategy, campaign optimization, or growth tactics. What's on your mind?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Pre-loaded intelligent responses
  const getIntelligentResponse = (userMessage: string): string | null => {
    const message = userMessage.toLowerCase();
    
    // Response 1: "Why do I need an AI CMO?"
    if (message.includes('why') && (message.includes('ai cmo') || message.includes('need'))) {
      return `Great question! Here's why you need an AI CMO:

🎯 24/7 Marketing Intelligence: While human CMOs sleep, your AI CMO analyzes data, optimizes campaigns, and identifies opportunities around the clock.

💰 Profit-First Approach: Unlike traditional marketing that focuses on vanity metrics, your AI CMO optimizes for actual profit and ROI, not just clicks and impressions.

⚡ Lightning-Fast Decisions: Make data-driven decisions in seconds, not weeks. Your AI CMO processes millions of data points instantly to guide your strategy.

🔍 Complete Data Integration: Connect all your marketing platforms (Facebook, Google, TikTok, email, etc.) into one unified dashboard that shows the real picture.

📈 Continuous Optimization: Your AI CMO never stops learning and improving. Every campaign gets smarter, every dollar gets more efficient.

Bottom line: You get a world-class marketing executive that works 24/7, costs a fraction of a human CMO, and delivers measurable results from day one.

Ready to see how this works for your business? Let's discuss your specific challenges!`;
    }

    // Response 2: "What problem does AI CMO solve?"
    if (message.includes('problem') || message.includes('solve')) {
      return `The AI CMO solves the #1 problem facing D2C brands today: Marketing Chaos.

🚨 The Problem: Most brands are flying blind:
• Data scattered across 10+ platforms
• Making decisions with incomplete information  
• Optimizing for clicks instead of profit
• Wasting 30-50% of ad spend on poor targeting
• Manual reporting that's always outdated

✅ The Solution: Your AI CMO provides:
• Unified Intelligence: All your data in one profit-focused dashboard
• Autonomous Optimization: Campaigns that improve themselves 24/7
• Real ROI Clarity: See exactly which channels drive actual profit
• Predictive Insights: Know what to do before your competitors do

Real Impact: Our clients typically see 40-60% improvement in ROAS within 30 days, plus 10+ hours saved weekly on manual reporting.

The question isn't whether you need this—it's whether you can afford to keep marketing the old way. What's your biggest marketing challenge right now?`;
    }

    // Response 3: "Show me where I'm wasting ad spend"
    if (message.includes('wasting') || message.includes('ad spend') || message.includes('waste')) {
      return `Let me show you exactly where your money is disappearing! 💸

Common Ad Spend Wasters We Find:

🎯 Poor Audience Targeting (30-40% waste)
• Targeting too broad or too narrow
• Not excluding existing customers
• Ignoring lookalike audiences

📊 Wrong Attribution Models (20-30% waste)  
• Last-click attribution missing the full customer journey
• Not accounting for cross-device behavior
• Ignoring organic impact on paid campaigns

⏰ Poor Timing & Frequency (15-25% waste)
• Showing ads when your audience isn't active
• Ad fatigue from overexposure
• Not adjusting for time zones

💰 Bidding Inefficiencies (10-20% waste)
• Manual bidding instead of smart automation
• Not adjusting for device performance
• Ignoring quality score optimization

The AI CMO Solution:
✅ Real-time spend optimization across all platforms
✅ Smart audience discovery and refinement  
✅ Automated bidding that maximizes profit, not just clicks
✅ Cross-platform attribution that shows true ROI

Want to see your specific waste points? Book a free audit and I'll show you exactly where your ad dollars are going wrong and how to fix it in 7 days.`;
    }

    // Response 4: "Which marketing channels are actually profitable?"
    if (message.includes('channels') || message.includes('profitable') || message.includes('which')) {
      return `The truth about profitable channels? It depends on your business - but here's what the data shows:

📊 Channel Profitability by Business Type:

🛍️ D2C E-commerce (Typical ROI):
• Facebook/Instagram: 3-5x ROAS (when optimized)
• Google Shopping: 4-6x ROAS  
• TikTok: 2-4x ROAS (growing fast)
• Email Marketing: 40-60x ROI (highest!)

💼 B2B SaaS (Typical ROI):
• LinkedIn: 2-4x ROAS
• Google Ads: 3-5x ROAS
• Content Marketing: 3-6x ROI
• Webinars: 5-10x ROI

The Real Secret: It's not about the channel—it's about optimization:
• 80% of brands use channels wrong
• Proper attribution changes everything
• Cross-channel synergy beats single-channel focus

What Your AI CMO Does:
✅ Tests all channels with your specific audience
✅ Optimizes for profit, not just clicks
✅ Finds the perfect channel mix for YOUR business
✅ Automatically shifts budget to winning channels

Bottom Line: Every channel can be profitable if you know how to use it. The question is: are you optimizing for vanity metrics or actual profit?

Want me to analyze your current channel performance? I can show you exactly where to focus your budget for maximum ROI.`;
    }

    // Response 5: "How is this different from other marketing tools?"
    if (message.includes('different') || message.includes('other tools') || message.includes('vs') || message.includes('versus')) {
      return `Great question! Most "marketing tools" are just fancy dashboards. Your AI CMO is a complete marketing executive.

🆚 Traditional Marketing Tools:
• Show you data (but don't tell you what to do)
• Require constant manual optimization
• Focus on vanity metrics (clicks, impressions)
• Need you to be the expert
• Cost $500-2000/month per tool

🤖 Your AI CMO:
• Thinks like a CMO and makes strategic decisions
• Executes campaigns autonomously 24/7
• Optimizes for profit, not vanity metrics
• Learns your business and gets smarter over time
• Replaces multiple tools with one intelligent system

Real Example: 
Traditional setup: Google Ads + Facebook Ads + Email + Analytics + Reporting tools = $3,000/month + 20 hours/week of manual work

Your AI CMO: One system that does it all = $997/month + 2 hours/week of oversight

The Difference: 
• Other tools = Expensive calculators
• Your AI CMO = Your personal marketing genius

Results: Our clients typically see 3-5x better performance than their previous tool stack, plus 15+ hours saved weekly.

Think of it this way: Would you rather have a calculator or a math professor? That's the difference between tools and your AI CMO.

Ready to see how this works for your specific business?`;
    }

    // Response 6: "What's the ROI? How much will I save?"
    if (message.includes('roi') || message.includes('save') || message.includes('cost') || message.includes('price')) {
      return `Let's talk numbers! Here's the real ROI of your AI CMO:

💰 Typical Savings & Returns:

Ad Spend Optimization: 30-50% improvement in ROAS
• If you spend $10k/month on ads → Save $3-5k monthly
• Better targeting = higher conversion rates
• Eliminate wasted spend on poor-performing campaigns

Time Savings: 15-20 hours/week
• No more manual reporting and analysis
• Automated campaign optimization
• Smart insights delivered automatically
• Value: $1,500-2,500/month (at $100/hour)

Tool Consolidation: $1,500-3,000/month saved
• Replace 5-8 marketing tools with one system
• No more tool subscription fatigue
• Unified data and reporting

Performance Gains: 40-60% better results
• Smarter audience targeting
• Optimized bidding strategies  
• Cross-channel coordination
• Predictive insights

Real Client Example:
D2C Brand spending $15k/month on ads:
• Before: 2.1x ROAS, 25 hours/week management
• After: 4.2x ROAS, 5 hours/week oversight
• Monthly Value: $31,500 additional revenue + $2,000 time savings

Your AI CMO Investment: $997/month
Your Return: $5,000-15,000/month (depending on ad spend)

ROI: 500-1500% return on investment

The question isn't whether you can afford an AI CMO—it's whether you can afford NOT to have one.

Want to calculate your specific ROI? Let's discuss your current marketing spend and I'll show you exactly what you could save.`;
    }

    // Response 7: "How quickly can I get started?"
    if (message.includes('quickly') || message.includes('start') || message.includes('fast') || message.includes('time')) {
      return `You can be running profit-first marketing in 7 days! Here's exactly how:

🚀 Your 7-Day Launch Timeline:

Day 1: Connect all your data sources
• 15 minutes to connect Facebook, Google, TikTok, etc.
• Your AI CMO immediately starts analyzing your current performance
• No data migration needed - we pull everything automatically

Day 2-3: AI builds your profit-first dashboard  
• Your AI CMO processes millions of data points
• Creates unified view of all your marketing performance
• Identifies immediate optimization opportunities

Day 4-5: First optimizations go live
• Automated bid adjustments start working
• Audience targeting gets refined
• Budget reallocation begins

Day 6-7: You see first results
• Improved ROAS starts showing in your dashboard
• Clear profit attribution across all channels
• Automated insights delivered daily

Week 2+: Full autonomous optimization
• Your AI CMO runs 24/7 optimization
• Weekly strategy reports
• Continuous improvement and learning

What You Need to Start:
✅ Access to your ad accounts (we handle the rest)
✅ 30 minutes for initial setup call
✅ That's it!

No Technical Setup Required:
• No coding or complex integrations
• No training or learning curve
• No hiring additional staff

Risk-Free: 14-day free trial with full access to all features.

Bottom Line: Most clients see improved performance within 48 hours, significant results within 7 days, and full optimization within 30 days.

Ready to start your 7-day transformation? Let's get you connected today!`;
    }

    // Response 8: "Can you explain the 3-step process?"
    if (message.includes('3-step') || message.includes('process') || message.includes('explain') || message.includes('how it works')) {
      return `Absolutely! Here's exactly how your AI CMO transforms your marketing in 3 simple steps:

🎯 Step 1: Connect & Diagnose (Day 1)
• Connect all your marketing platforms in minutes
• Your AI CMO immediately analyzes your current performance
• Identifies exactly where you're wasting money and missing opportunities
• Creates your personalized optimization roadmap

What happens: You get a complete picture of your marketing health and a clear action plan.

📊 Step 2: Build & Optimize (Days 2-7)  
• AI builds your unified profit-first dashboard
• Automated optimizations start running across all channels
• Smart bidding, audience refinement, and budget reallocation begin
• You start seeing improved performance immediately

What happens: Your campaigns get smarter, your ROAS improves, and you save hours on manual work.

🚀 Step 3: Scale & Dominate (Ongoing)
• Your AI CMO runs 24/7 autonomous optimization
• Continuous learning and improvement across all channels
• Predictive insights help you stay ahead of trends
• Weekly strategy reports keep you informed and in control

What happens: You get world-class marketing performance that gets better every day, without the cost or complexity of a traditional marketing team.

The Magic: Each step builds on the previous one, creating a compounding effect that transforms your entire marketing operation.

Real Timeline:
• Day 1: Setup complete, diagnosis ready
• Day 7: First optimizations live, results visible  
• Day 30: Full autonomous operation, significant ROI gains
• Day 90+: Market-leading performance, predictable growth

No Complex Setup: Just connect your accounts and watch the magic happen.

Ready to start your 3-step transformation? Let's begin with Step 1 today!`;
    }

    return null; // No pre-written response found
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText.trim(),
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputText.trim();
    setInputText('');
    setIsLoading(true);

    // Check for intelligent response first
    const intelligentResponse = getIntelligentResponse(currentInput);
    
    if (intelligentResponse) {
      // Use pre-written response
      setTimeout(() => {
        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: intelligentResponse,
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiMessage]);
        setIsLoading(false);
      }, 1500); // Simulate thinking time
    } else {
      // Fall back to API call for other questions
      try {
        const response = await fetch('http://localhost:3002/api/ai-chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: currentInput,
            context: 'marketing'
          }),
        });

        if (response.ok) {
          const data = await response.json();
          if (data.success) {
            const aiMessage: Message = {
              id: (Date.now() + 1).toString(),
              text: data.response,
              isUser: false,
              timestamp: new Date()
            };
            setMessages(prev => [...prev, aiMessage]);
          } else {
            throw new Error(data.message || 'Failed to get AI response');
          }
        } else {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.message || `Server error: ${response.status}`);
        }
      } catch (error) {
        console.error('AI Chat error:', error);
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: "I'm experiencing some technical difficulties right now. As your AI CMO, I'd recommend focusing on your core marketing metrics and testing different approaches. Feel free to book a demo to discuss your specific marketing challenges with our team!",
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const suggestedQuestions = [
    "Why do I need an AI CMO?",
    "What problem does AI CMO solve?",
    "Show me where I'm wasting ad spend",
    "Which marketing channels are actually profitable?",
    "How is this different from other marketing tools?",
    "What's the ROI? How much will I save?",
    "How quickly can I get started?",
    "Can you explain the 3-step process?"
  ];

  const handleSuggestedQuestion = (question: string) => {
    setInputText(question);
  };

  return (
    <section className="py-32 bg-gradient-to-br from-violet-50 via-white to-cyan-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-100/20 via-transparent to-transparent"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-violet-200 rounded-full px-6 py-3 mb-8">
              <Sparkles className="h-5 w-5 text-violet-600" />
              <span className="text-sm font-medium text-gray-700">AI CMO Assistant</span>
            </div>
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
              <span className="brand-text">Ask Your AI CMO Anything</span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Get instant, intelligent answers to your marketing questions from your personal AI marketing copilot
            </p>
          </div>
        </ScrollReveal>

        {/* Chat Interface */}
        <ScrollReveal variant="zoom">
          <div className="glass-card rounded-3xl overflow-hidden">
            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start gap-3 max-w-[80%] ${message.isUser ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.isUser 
                        ? 'bg-gradient-to-r from-pink-500 to-cyan-500' 
                        : 'bg-gradient-to-r from-violet-500 to-purple-500'
                    }`}>
                      {message.isUser ? (
                        <User className="h-4 w-4 text-white" />
                      ) : (
                        <Bot className="h-4 w-4 text-white" />
                      )}
                    </div>
                    <div className={`px-4 py-3 rounded-2xl ${
                      message.isUser 
                        ? 'bg-gradient-to-r from-pink-500 to-cyan-500 text-white' 
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.isUser ? 'text-white/70' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <div className="bg-gray-100 px-4 py-3 rounded-2xl">
                      <div className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin text-violet-600" />
                        <span className="text-sm text-gray-600">AI CMO is thinking...</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Questions */}
            {messages.length === 1 && (
              <div className="px-6 pb-4">
                <p className="text-sm text-gray-600 mb-3">Try asking:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestedQuestion(question)}
                      className="px-3 py-1 text-xs bg-white/50 border border-violet-200 rounded-full hover:bg-violet-50 hover:border-violet-300 transition-all duration-200 cursor-hover"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="p-6 border-t border-gray-200">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Ask your AI CMO anything about marketing..."
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 transition-all duration-300"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!inputText.trim() || isLoading}
                  className="btn-neo cursor-hover px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="h-4 w-4" />
                  )}
                </button>
              </div>
            </form>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <div className="mt-16 text-center">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                <span className="brand-text">Need More Personalized Help?</span>
              </h3>
              <p className="text-gray-600 mb-6">
                Book a demo to get a customized strategy session with our AI marketing experts
              </p>
              <button className="btn-neo cursor-hover text-lg px-8 py-4">
                Book Your Demo
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AIChat;
