import React from 'react';
import { Brain, BarChart3, PenTool, Search, Zap, ShoppingBag, Target, Settings, Facebook, Chrome } from 'lucide-react';

const AICMODiagram = () => {
  const agents = [
    { icon: PenTool, name: 'Creative', color: 'bg-purple-100 text-purple-600' },
    { icon: BarChart3, name: 'Reporting', color: 'bg-green-100 text-green-600' },
    { icon: Search, name: 'Analytics', color: 'bg-blue-100 text-blue-600' },
    { icon: Zap, name: 'Diagnostics', color: 'bg-orange-100 text-orange-600' },
    { icon: Target, name: 'Performance', color: 'bg-red-100 text-red-600' },
  ];

  const integrations = [
    { icon: Facebook, name: 'Meta Ads', color: 'text-blue-600' },
    { icon: Chrome, name: 'Google Ads', color: 'text-red-500' },
    { icon: ShoppingBag, name: 'Shopify', color: 'text-green-600' },
    { icon: Settings, name: 'HubSpot', color: 'text-orange-500' },
    { icon: Target, name: 'Zoho', color: 'text-purple-600' },
    { icon: Target, name: 'Shiprocket', color: 'text-indigo-600' },
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
          <div className="relative w-[700px] h-[700px]">
            {/* Central AI CMO - Enhanced with glow effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 rounded-full w-40 h-40 flex items-center justify-center shadow-2xl animate-glow">
                <div className="text-center text-white">
                  <Brain className="h-16 w-16 mx-auto mb-2" />
                  <div className="font-bold text-lg">AI CMO</div>
                  <div className="text-xs opacity-90">Command Center</div>
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
                  {/* Glowing Connection Line from AI CMO to Agent */}
                  <div 
                    className="absolute top-1/2 left-1/2 origin-left bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 transition-colors z-10 shadow-lg"
                    style={{
                      width: `${radius - 60}px`,
                      height: '3px',
                      transform: `translate(-50%, -50%) rotate(${angle}rad)`,
                      boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
                    }}
                  ></div>
                  
                  {/* Agent Circle */}
                  <div
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-15"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                    }}
                  >
                    <div className={`${agent.color} rounded-full w-24 h-24 flex items-center justify-center shadow-xl border-3 border-white group-hover:scale-110 transition-all duration-300 cursor-pointer`}>
                      <div className="text-center">
                        <agent.icon className="h-7 w-7 mx-auto mb-1" />
                        <div className="text-xs font-medium">{agent.name}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Integration Icons positioned in outer circle */}
            {integrations.map((integration, index) => {
              const angle = (index * 2 * Math.PI) / integrations.length;
              const radius = 280;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <div key={integration.name}>
                  {/* Connection Line from AI CMO to Integration */}
                  <div 
                    className="absolute top-1/2 left-1/2 origin-left bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 transition-colors z-5"
                    style={{
                      width: `${radius - 80}px`,
                      height: '2px',
                      transform: `translate(-50%, -50%) rotate(${angle}rad)`,
                      boxShadow: '0 0 8px rgba(34, 197, 94, 0.4)',
                    }}
                  ></div>
                  
                  {/* Integration Icon */}
                  <div
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-10"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                    }}
                  >
                    <div className="bg-white rounded-lg p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 border-2 border-gray-100 group-hover:border-gray-200 group-hover:scale-105">
                      <integration.icon className={`h-6 w-6 ${integration.color} mx-auto mb-1`} />
                      <div className="text-xs font-semibold text-gray-900 text-center">{integration.name}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Description */}
        <div className="text-center mt-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Futuristic Command Center</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The AI CMO serves as your <strong>single source of truth</strong> — the central intelligence hub that powers every agent and connects directly to all your marketing platforms. 
            </p>
            <p className="text-md text-gray-600 leading-relaxed">
              ✅ <strong>All lines originate from AI CMO</strong> — no cross-connections between agents and integrations<br/>
              ✅ <strong>Agents receive power</strong> from the AI CMO for creative, reporting, analytics, diagnostics, and performance<br/>
              ✅ <strong>Integrations connect directly</strong> to AI CMO for seamless data flow and campaign execution
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICMODiagram;