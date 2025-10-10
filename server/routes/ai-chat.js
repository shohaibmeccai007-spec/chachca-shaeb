const express = require('express');
const router = express.Router();

// Mock AI responses for marketing questions
// In production, integrate with Gemini API or other LLM service
const getAIResponse = async (message, context = 'marketing') => {
  const marketingResponses = {
    'roas': "To improve your ROAS, focus on audience targeting, creative testing, and bid optimization. Start by analyzing your top-performing audiences and scaling them while testing new creative variations. Consider implementing dynamic product ads and retargeting campaigns.",
    
    'd2c': "For D2C brands, the key is building direct relationships with customers. Focus on email marketing, social media engagement, and personalized experiences. Use first-party data to create lookalike audiences and implement post-purchase email sequences.",
    
    'ad spend': "Optimize your ad spend by: 1) Pausing underperforming campaigns, 2) Increasing budgets on winning campaigns, 3) Testing new audiences and creatives, 4) Using automated bidding strategies, and 5) Implementing proper tracking and attribution.",
    
    'metrics': "Key metrics to track: ROAS, CAC (Customer Acquisition Cost), LTV (Lifetime Value), conversion rate, click-through rate, and engagement rate. Set up proper attribution modeling to understand your customer journey.",
    
    'strategy': "A solid marketing strategy includes: 1) Clear target audience definition, 2) Competitive analysis, 3) Channel selection based on audience behavior, 4) Content strategy, 5) Budget allocation, and 6) Performance measurement framework.",
    
    'campaign': "For campaign optimization: 1) Test different ad formats, 2) A/B test headlines and descriptions, 3) Use dynamic creative optimization, 4) Implement proper tracking, 5) Optimize for the right conversion events, and 6) Regular performance reviews.",
    
    'growth': "Growth marketing focuses on sustainable, scalable growth. Key tactics include: viral loops, referral programs, content marketing, SEO, paid acquisition, and retention strategies. Always measure and optimize for long-term customer value.",
    
    'social media': "Social media marketing success requires: 1) Platform-specific content, 2) Consistent posting schedule, 3) Community engagement, 4) Influencer partnerships, 5) User-generated content, and 6) Analytics-driven optimization.",
    
    'email': "Email marketing best practices: 1) Segment your audience, 2) Personalize content, 3) Optimize send times, 4) A/B test subject lines, 5) Mobile-responsive design, 6) Clear CTAs, and 7) Regular list cleaning.",
    
    'seo': "SEO fundamentals: 1) Keyword research and optimization, 2) Quality content creation, 3) Technical SEO (site speed, mobile-friendliness), 4) Link building, 5) Local SEO (if applicable), and 6) Regular performance monitoring."
  };

  // Simple keyword matching for demo purposes
  const messageLower = message.toLowerCase();
  
  for (const [keyword, response] of Object.entries(marketingResponses)) {
    if (messageLower.includes(keyword)) {
      return response;
    }
  }

  // Default responses based on common marketing questions
  const defaultResponses = [
    "Great question! For marketing success, focus on understanding your audience deeply, testing different approaches, and measuring what matters. Start with clear goals and KPIs, then optimize based on data.",
    
    "That's a common challenge! The key is to start with your customer journey - map out each touchpoint and optimize for conversions. Consider A/B testing different strategies to find what works best for your audience.",
    
    "Excellent question! Marketing success comes from a combination of strategy, execution, and measurement. Focus on building genuine relationships with your customers and providing real value at every touchpoint.",
    
    "I'd recommend starting with your current performance data. Analyze what's working, identify gaps, and create a testing roadmap. Remember, marketing is about continuous improvement and adaptation.",
    
    "That's a strategic question! The best approach depends on your specific goals and audience. I'd suggest starting with a clear understanding of your target customer and their pain points, then building your strategy around that."
  ];

  // Return a random default response
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
};

// POST /api/ai-chat - Get AI response
router.post('/', async (req, res) => {
  try {
    const { message, context } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({
        success: false,
        message: 'Message is required and must be a string'
      });
    }

    // Get AI response
    const response = await getAIResponse(message, context);

    res.status(200).json({
      success: true,
      response: response,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('AI Chat error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get AI response',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
    });
  }
});

// GET /api/ai-chat - Get chat suggestions
router.get('/suggestions', (req, res) => {
  const suggestions = [
    "How can I improve my ROAS?",
    "What's the best strategy for D2C brands?",
    "How do I optimize my ad spend?",
    "What metrics should I track?",
    "How can I increase conversions?",
    "What's the best approach for social media marketing?",
    "How do I build an email marketing strategy?",
    "What's the key to successful content marketing?"
  ];

  res.status(200).json({
    success: true,
    suggestions: suggestions
  });
});

module.exports = router;
