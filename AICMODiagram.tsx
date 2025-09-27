import React from 'react';
import { Brain, BarChart3, PenTool, Search, Zap, ShoppingBag, Truck, Target } from 'lucide-react';

const AICMODiagram = () => {
  const agents = [
    { icon: PenTool, name: 'Creative', color: 'bg-purple-100 text-purple-600' },
    { icon: BarChart3, name: 'Reporting', color: 'bg-green-100 text-green-600' },
    { icon: Search, name: 'Analytics', color: 'bg-blue-100 text-blue-600' },
    { icon: Zap, name: 'Diagnostics', color: 'bg-orange-100 text-orange-600' },
    { icon: Target, name: 'Performance', color: 'bg-red-100 text-red-600' },
  ];

  const integrations = [
    { icon: Target, name: 'Google Ads', color: 'text-blue-600' },
    { icon: Truck, name: 'Logistics', color: 'text-green-600' },
    { icon: ShoppingBag, name: 'Shopify', color: 'text-orange-600' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI CMO: The Central Command
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Your AI CMO orchestrates every agent and unifies your marketing, logistics, and Shopify data for maximum impact.
          </p>
        </div>

        {/* Main Diagram Container */}
        <div className="flex justify-center mb-16">
          <div className="relative w-[500px] h-[500px]">
            {/* Central AI CMO */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full w-32 h-32 flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300">
                <div className="text-center text-white">
                  <Brain className="h-12 w-12 mx-auto mb-2" />
                  <div className="font-bold text-sm">AI CMO</div>
                </div>
              </div>
            </div>

            {/* Agent Circles positioned around the center */}
            {agents.map((agent, index) => {
              // Calculate position in a circle around the center
              const angle = (index * 2 * Math.PI) / agents.length - Math.PI / 2;
              const radius = 160; // Distance from center
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <div key={agent.name}>
                  {/* Connection Line */}
                  <div 
                    className="absolute top-1/2 left-1/2 origin-left bg-blue-200 hover:bg-blue-400 transition-colors z-0"
                    style={{
                      width: `${radius - 40}px`,
                      height: '2px',
                      transform: `translate(-50%, -50%) rotate(${angle}rad)`,
                    }}
                  ></div>
                  
                  {/* Agent Circle */}
                  <div
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-10"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                    }}
                  >
                    <div className={`${agent.color} rounded-full w-20 h-20 flex items-center justify-center shadow-lg border-2 border-white group-hover:scale-110 transition-all duration-300 cursor-pointer`}>
                      <div className="text-center">
                        <agent.icon className="h-6 w-6 mx-auto mb-1" />
                        <div className="text-xs font-medium">{agent.name}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Integration Icons */}
        <div className="flex justify-center space-x-12">
          {integrations.map((integration, index) => (
            <div key={integration.name} className="text-center group">
              <div className="bg-white rounded-lg p-6 shadow-lg group-hover:shadow-xl transition-shadow border-2 border-gray-100 group-hover:border-gray-200">
                <integration.icon className={`h-8 w-8 ${integration.color} mx-auto mb-2`} />
                <div className="font-semibold text-gray-900">{integration.name}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="text-center mt-12 max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed">
            The AI CMO serves as the central intelligence hub, coordinating all specialized agents to work together seamlessly. 
            It analyzes data from multiple sources, makes strategic decisions, and ensures optimal performance across all your marketing channels.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AICMODiagram;