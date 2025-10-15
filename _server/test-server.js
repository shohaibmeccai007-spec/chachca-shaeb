const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const PORT = 3002;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI('AIzaSyBi1aBJ5AVydLcv4ocRxqSNQoIpC5tyb20');

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// AI Chat endpoint
app.post('/api/ai-chat', async (req, res) => {
  try {
    const { message } = req.body;
    
    if (!message) {
      return res.status(400).json({
        success: false,
        message: 'Message is required'
      });
    }

    // Get Gemini response
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    
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

    res.json({
      success: true,
      response: text,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('AI Chat error:', error);
    res.status(500).json({
      success: false,
      message: 'AI service temporarily unavailable',
      error: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Test server running on port ${PORT}`);
  console.log(`📡 AI Chat endpoint: http://localhost:${PORT}/api/ai-chat`);
  console.log(`❤️  Health check: http://localhost:${PORT}/api/health`);
});
