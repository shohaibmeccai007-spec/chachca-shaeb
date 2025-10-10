import React, { useState } from 'react';
import { PenTool, BarChart3, Search, Zap, Target, ChevronDown, ChevronUp } from 'lucide-react';

const AgentsSection = () => {
  const [hoveredAgent, setHoveredAgent] = useState(null);
  const [expandedAgent, setExpandedAgent] = useState(null);

  const agents = [
    {
      id: 'creative',
      icon: PenTool,
      name: 'Creative Agent',
      shortBlurb: 'Generates and tests ad creatives automatically',
      details: 'Our Creative Agent uses advanced AI to generate compelling ad copy, visuals, and video content. It continuously A/B tests different variations to find the highest-performing creatives for your campaigns.',
      features: ['Auto-generated ad copy', 'Visual content creation', 'A/B testing optimization', 'Brand consistency checks'],
      color: 'bg-purple-100 text-purple-600'
    },
    {
      id: 'reporting',
      icon: BarChart3,
      name: 'Reporting Agent',
      shortBlurb: 'Delivers real-time insights and custom dashboards',
      details: 'Get comprehensive reports and analytics across all your marketing channels. The Reporting Agent provides real-time insights, custom dashboards, and automated alerts for campaign performance.',
      features: ['Real-time reporting', 'Custom dashboards', 'Automated alerts', 'Cross-channel analytics'],
      color: 'bg-green-100 text-green-600'
    },
    {
      id: 'analytics',
      icon: Search,
      name: 'Analytics Agent',
      shortBlurb: 'Deep-dive analysis for strategic insights',
      details: 'Uncover hidden opportunities and trends in your marketing data. The Analytics Agent performs deep-dive analysis to identify optimization opportunities and strategic insights.',
      features: ['Trend analysis', 'Opportunity identification', 'Predictive insights', 'Customer behavior analysis'],
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 'diagnostics',
      icon: Zap,
      name: 'Diagnostics Agent',
      shortBlurb: 'Identifies and fixes campaign issues instantly',
      details: 'Proactively monitors your campaigns for issues and automatically implements fixes. The Diagnostics Agent ensures your campaigns run smoothly 24/7 without manual intervention.',
      features: ['Issue detection', 'Automatic fixes', '24/7 monitoring', 'Performance alerts'],
      color: 'bg-orange-100 text-orange-600'
    },
    {
      id: 'performance',
      icon: Target,
      name: 'Performance Agent',
      shortBlurb: 'Optimizes campaigns for maximum ROI',
      details: 'Continuously optimizes your campaigns for better performance and ROI. The Performance Agent adjusts bids, budgets, and targeting to maximize your marketing results.',
      features: ['Bid optimization', 'Budget allocation', 'Targeting refinement', 'ROI maximization'],
      color: 'bg-red-100 text-red-600'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Your AI Marketing Agents
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each agent specializes in a specific aspect of your marketing, working together seamlessly under your AI CMO
          </p>
        </div>

        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredAgent(agent.id)}
              onMouseLeave={() => setHoveredAgent(null)}
            >
              <div className={`w-16 h-16 rounded-xl ${agent.color} flex items-center justify-center mb-6 transition-transform duration-300 ${hoveredAgent === agent.id ? 'scale-110' : ''}`}>
                <agent.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{agent.name}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{agent.shortBlurb}</p>
              
              <div className="space-y-2">
                {agent.features.slice(0, 2).map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${agent.color.split(' ')[1]}`}></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {hoveredAgent === agent.id && (
                <div className="mt-4 pt-4 border-t border-gray-100 animate-fadeIn">
                  <button className={`text-sm font-semibold ${agent.color.split(' ')[1]} hover:underline`}>
                    Learn More →
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Detailed Accordion */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Explore Agent Details</h3>
          <div className="space-y-4">
            {agents.map((agent) => (
              <div key={agent.id} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <div
                  className="p-6 cursor-pointer"
                  onClick={() => setExpandedAgent(expandedAgent === agent.id ? null : agent.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl ${agent.color} flex items-center justify-center`}>
                        <agent.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{agent.name}</h4>
                        <p className="text-gray-600">{agent.shortBlurb}</p>
                      </div>
                    </div>
                    {expandedAgent === agent.id ? (
                      <ChevronUp className="h-6 w-6 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-400" />
                    )}
                  </div>
                </div>

                {expandedAgent === agent.id && (
                  <div className="px-6 pb-6 animate-slideDown">
                    <div className="bg-white rounded-xl p-6 border-l-4 border-blue-500">
                      <p className="text-gray-700 mb-6 leading-relaxed">{agent.details}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {agent.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <div className={`w-2 h-2 rounded-full ${agent.color.split(' ')[1]}`}></div>
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;

// AgentsSection component removed. You can now use this file for Use Cases and Blogs sections.
// If you want to add those, create new components and import/use them here.