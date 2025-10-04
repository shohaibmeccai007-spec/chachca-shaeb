import React from 'react';
import { Brain, BarChart3, PenTool, Search, Zap, Target, ShoppingBag, Truck, Mail, Database } from 'lucide-react';

const AICMODiagram = () => {
  const agents = [
    { icon: PenTool, name: 'Creative', color: 'bg-purple-100 text-purple-600 border-purple-200' },
    { icon: BarChart3, name: 'Reporting', color: 'bg-green-100 text-green-600 border-green-200' },
    { icon: Search, name: 'Analytics', color: 'bg-blue-100 text-blue-600 border-blue-200' },
    { icon: Zap, name: 'Diagnostic', color: 'bg-orange-100 text-orange-600 border-orange-200' },
    { icon: Target, name: 'Performance', color: 'bg-red-100 text-red-600 border-red-200' },
  ];

  const integrations = [
    { icon: Target, name: 'Meta Ads', color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { icon: Target, name: 'Google Ads', color: 'text-green-600', bgColor: 'bg-green-50' },
    { icon: ShoppingBag, name: 'Shopify', color: 'text-orange-600', bgColor: 'bg-orange-50' },
    { icon: Mail, name: 'HubSpot', color: 'text-purple-600', bgColor: 'bg-purple-50' },
    { icon: Database, name: 'Zoho', color: 'text-indigo-600', bgColor: 'bg-indigo-50' },
    { icon: Truck, name: 'Shiprocket', color: 'text-teal-600', bgColor: 'bg-teal-50' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            🚀 AI CMO Hub Visualization
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Your AI CMO is the command center — powering every agent and seamlessly connecting with Meta Ads, Google Ads, Shopify, HubSpot, Zoho, and Shiprocket.
          </p>
        </div>

        {/* Main Diagram Container */}
        <div className="flex justify-center mb-16">
          <div className="relative w-[800px] h-[600px]">
            {/* Central AI CMO - Enhanced with glowing effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative">
                {/* Glowing ring */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-75 animate-pulse"></div>
                {/* Main AI CMO */}
                <div className="relative bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full w-40 h-40 flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300 border-4 border-white">
                  <div className="text-center text-white">
                    <Brain className="h-16 w-16 mx-auto mb-2" />
                    <div className="font-bold text-lg">AI CMO</div>
                    <div className="text-xs opacity-90">Command Center</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Agent Circles positioned around the center */}
            {agents.map((agent, index) => {
              // Calculate position in a circle around the center
              const angle = (index * 2 * Math.PI) / agents.length - Math.PI / 2;
              const radius = 200; // Distance from center
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <div key={agent.name}>
                  {/* Connection Line from AI CMO to Agent */}
                  <div 
                    className="absolute top-1/2 left-1/2 origin-left bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 transition-all z-10 shadow-lg"
                    style={{
                      width: `${radius - 60}px`,
                      height: '4px',
                      transform: `translate(-50%, -50%) rotate(${angle}rad)`,
                    }}
                  ></div>
                  
                  {/* Agent Circle */}
                  <div
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-20"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                    }}
                  >
                    <div className={`${agent.color} rounded-full w-24 h-24 flex items-center justify-center shadow-xl border-4 border-white group-hover:scale-110 transition-all duration-300 cursor-pointer`}>
                      <div className="text-center">
                        <agent.icon className="h-8 w-8 mx-auto mb-1" />
                        <div className="text-xs font-bold">{agent.name}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Integration Icons positioned below */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full">
              <div className="flex justify-center space-x-8">
                {integrations.map((integration, index) => {
                  const integrationX = (index - (integrations.length - 1) / 2) * 120;
                  const centerY = 50; // Distance from bottom
                  
                  return (
                    <div key={integration.name}>
                      {/* Connection Line from AI CMO to Integration */}
                      <div 
                        className="absolute top-1/2 left-1/2 origin-top bg-gradient-to-b from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 transition-all z-10 shadow-lg"
                        style={{
                          width: '4px',
                          height: `${centerY + 20}px`,
                          transform: `translate(-50%, -50%) translate(${integrationX}px, ${centerY}px)`,
                        }}
                      ></div>
                      
                      {/* Integration Icon */}
                      <div
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-20"
                        style={{
                          left: `calc(50% + ${integrationX}px)`,
                          top: `calc(100% - ${centerY}px)`,
                        }}
                      >
                        <div className={`${integration.bgColor} rounded-xl p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-white group-hover:scale-110`}>
                          <integration.icon className={`h-8 w-8 ${integration.color} mx-auto mb-2`} />
                          <div className="font-bold text-gray-900 text-sm text-center">{integration.name}</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="text-center mt-12 max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed">
            The AI CMO serves as the central intelligence hub, coordinating all specialized agents to work together seamlessly. 
            It analyzes data from multiple sources, makes strategic decisions, and ensures optimal performance across all your marketing channels.
            All connections flow outward from the AI CMO, ensuring centralized control and unified intelligence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AICMODiagram;