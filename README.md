# Flable.ai Website

A modern, responsive website for Flable.ai - an AI-powered digital marketing team that runs and optimizes campaigns 24/7.

## Features

### 🚀 Core Features
- **Hero Section**: Compelling headline highlighting AI-powered marketing with ROI focus
- **Book a Demo**: Complete demo booking flow with form validation and confirmation
- **AI CMO Hub**: Central visualization showing AI CMO as the command center powering all agents and integrations
- **Value Proposition**: 4 key benefits (Save Time, Optimize ROI, 24/7 Execution, Cross-Channel Intelligence)
- **Agents Section**: Interactive cards showcasing 5 AI marketing agents with detailed information
- **Results & Social Proof**: Case studies, testimonials, and trust metrics
- **Pricing**: Transparent pricing tiers with FAQ section
- **Blog & Resources**: Content hub with categorized articles
- **Onboarding Flow**: Step-by-step process with video placeholder
- **Security & Privacy**: GDPR compliance and security information

### 🎨 Design Features
- **Mobile Responsive**: Fully optimized for all device sizes
- **Modern UI**: Clean, professional design with smooth animations
- **Accessibility**: WCAG compliant with proper focus states and alt tags
- **Performance**: Optimized images, lazy loading, and efficient code splitting
- **SEO Optimized**: Meta tags, structured data, and semantic HTML

### 🔧 Technical Features
- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **React Router**: Client-side routing for single-page application
- **Lucide React**: Beautiful, customizable icons
- **Vite**: Fast build tool and development server

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd flable-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Project Structure

```
├── src/
│   ├── App.tsx              # Main application component with routing
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles and Tailwind imports
├── components/
│   ├── HeroSection.tsx      # Hero section with CTA
│   ├── BookDemo.tsx         # Demo booking page
│   ├── AICMODiagram.tsx     # AI CMO hub visualization
│   ├── ValueProposition.tsx # Value proposition section
│   ├── AgentsSection.tsx    # AI agents showcase
│   ├── ResultsSection.tsx   # Case studies and testimonials
│   ├── PricingSection.tsx   # Pricing tiers
│   ├── FAQSection.tsx       # Frequently asked questions
│   ├── BlogSection.tsx      # Blog and resources
│   ├── OnboardingFlow.tsx   # Onboarding process
│   ├── TrustSection.tsx     # Security and privacy
│   ├── Header.tsx           # Navigation header
│   └── Footer.tsx           # Site footer
├── index.html               # HTML template with SEO meta tags
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.ts           # Vite build configuration
└── README.md                # This file
```

## Key Components

### AI CMO Hub Visualization
The centerpiece of the website, showing the AI CMO as the central hub with:
- **Central AI CMO**: Glowing, prominent central element
- **Agent Connections**: Lines flowing FROM AI CMO TO agents (Creative, Reporting, Analytics, Diagnostic, Performance)
- **Integration Connections**: Lines flowing FROM AI CMO TO integrations (Meta Ads, Google Ads, Shopify, HubSpot, Zoho, Shiprocket)
- **No Cross-Connections**: Agents and integrations are not connected to each other

### Book a Demo Flow
Complete demo booking experience:
- Form with required fields (Full Name, Company Name, Phone, Email)
- Form validation and submission handling
- Success confirmation page
- Email integration ready (placeholder for actual email service)

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interface elements
- Optimized typography for all screen sizes

## SEO Optimization

- **Meta Tags**: Comprehensive meta descriptions and keywords
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD schema markup
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Alt Tags**: Descriptive alt text for all images
- **Performance**: Optimized loading and Core Web Vitals

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Deployment

The website is ready for deployment to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: Connect repository for automatic deployments
- **AWS S3**: Upload `dist` folder contents
- **GitHub Pages**: Enable Pages in repository settings

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support or questions, please contact:
- Email: contact@flable.ai
- Website: https://flable.ai

---

Built with ❤️ by the Flable.ai team