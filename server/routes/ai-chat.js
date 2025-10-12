const express = require('express');
const router = express.Router();

// Google Gemini API integration
const { GoogleGenerativeAI } = require('@google/generative-ai');

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || 'AIzaSyBi1aBJ5AVydLcv4ocRxqSNQoIpC5tyb20');

const getAIResponse = async (message, context = 'marketing') => {
  try {
    // Get the Gemini Pro model
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    // Create a marketing-focused prompt
    const prompt = `You are an AI Chief Marketing Officer (AI CMO) with extensive experience in digital marketing, growth strategies, and campaign optimization. 

You should respond as a knowledgeable, strategic marketing executive who:
- Provides actionable, data-driven advice
- Thinks strategically about marketing challenges
- Offers specific tactics and frameworks
- Maintains a professional yet approachable tone
- Focuses on measurable results and ROI

User's question: "${message}"

Please provide a comprehensive, helpful response that demonstrates your expertise as an AI CMO. Keep your response concise but detailed enough to be valuable. If the question is not marketing-related, politely redirect to marketing topics while still being helpful.

Response:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return text;
  } catch (error) {
    console.error('Gemini API error:', error);
    
    // Fallback to intelligent responses if Gemini fails
    const fallbackResponses = {
      'roas': "To improve your ROAS, focus on audience targeting, creative testing, and bid optimization. Start by analyzing your top-performing audiences and scaling them while testing new creative variations. Consider implementing dynamic product ads and retargeting campaigns.",
      
      'd2c': "For D2C brands, the key is building direct relationships with customers. Focus on email marketing, social media engagement, and personalized experiences. Use first-party data to create lookalike audiences and implement post-purchase email sequences.",
      
      'ad spend': "Optimize your ad spend by: 1) Pausing underperforming campaigns, 2) Increasing budgets on winning campaigns, 3) Testing new audiences and creatives, 4) Using automated bidding strategies, and 5) Implementing proper tracking and attribution.",
      
      'metrics': "Key metrics to track: ROAS, CAC (Customer Acquisition Cost), LTV (Lifetime Value), conversion rate, click-through rate, and engagement rate. Set up proper attribution modeling to understand your customer journey.",
      
      'strategy': "A solid marketing strategy includes: 1) Clear target audience definition, 2) Competitive analysis, 3) Channel selection based on audience behavior, 4) Content strategy, 5) Budget allocation, and 6) Performance measurement framework."
    };

    const messageLower = message.toLowerCase();
    for (const [keyword, response] of Object.entries(fallbackResponses)) {
      if (messageLower.includes(keyword)) {
        return response;
      }
    }

    return "I'm experiencing some technical difficulties right now. As your AI CMO, I'd recommend focusing on your core marketing metrics and testing different approaches. Feel free to book a demo to discuss your specific marketing challenges with our team!";
  }
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
