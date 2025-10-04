import React from 'react';
import { Brain, BarChart3, PenTool, Search, Zap, Target, Store, Briefcase } from 'lucide-react';

// Critical instruction compliance:
// - AI CMO is centered hub
// - All lines originate from AI CMO and terminate at either Agents or Integrations
// - No agent↔integration or cross connections

const AICMODiagram: React.FC = () => {
  const agents = [
    { icon: PenTool, name: 'Creative', color: 'bg-purple-100 text-purple-600' },
    { icon: BarChart3, name: 'Reporting', color: 'bg-green-100 text-green-600' },
    { icon: Search, name: 'Analytics', color: 'bg-blue-100 text-blue-600' },
    { icon: Zap, name: 'Diagnostic', color: 'bg-orange-100 text-orange-600' },
    { icon: Target, name: 'Performance', color: 'bg-red-100 text-red-600' },
  ];

  const integrations = [
    { icon: Target, name: 'Google Ads', color: 'text-blue-600' },
    { icon: Briefcase, name: 'Meta Ads', color: 'text-indigo-600' },
    { icon: Store, name: 'Shopify', color: 'text-green-600' },
    { icon: Briefcase, name: 'HubSpot', color: 'text-orange-600' },
    { icon: Briefcase, name: 'Zoho', color: 'text-purple-600' },
    { icon: Briefcase, name: 'Shiprocket', color: 'text-teal-600' },
  ];

  const size = 560;
  const center = size / 2;
  const agentRadius = 170;
  const integrationRadius = 230;

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">AI CMO Hub</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your AI CMO is the command center — powering every agent and seamlessly connecting with Meta Ads, Google Ads, Shopify, HubSpot, Zoho, and Shiprocket.
          </p>
        </div>

        <div className="flex justify-center">
          <div className={`relative w-[${size}px] h-[${size}px]`}>
            {/* Central AI CMO */}
            <div className="absolute" style={{ left: center - 56, top: center - 56 }}>
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full w-28 h-28 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.5)]">
                <div className="text-center text-white">
                  <Brain className="h-10 w-10 mx-auto mb-1" />
                  <div className="font-bold text-sm">AI CMO</div>
                </div>
              </div>
            </div>

            {/* Agent spokes and nodes */}
            {agents.map((agent, index) => {
              const angle = (index * 2 * Math.PI) / agents.length - Math.PI / 2;
              const x = center + Math.cos(angle) * agentRadius;
              const y = center + Math.sin(angle) * agentRadius;
              const spokeLength = agentRadius - 70;

              return (
                <div key={agent.name}>
                  {/* Spoke from AI CMO to Agent (originates at center) */}
                  <div
                    className="absolute bg-blue-300"
                    style={{
                      left: center,
                      top: center,
                      width: spokeLength,
                      height: 2,
                      transformOrigin: '0 0',
                      transform: `rotate(${angle}rad)`
                    }}
                  />

                  {/* Agent node */}
                  <div
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: x, top: y }}
                  >
                    <div className={`${agent.color} rounded-full w-20 h-20 flex items-center justify-center shadow-lg border-2 border-white`}>
                      <div className="text-center">
                        <agent.icon className="h-6 w-6 mx-auto mb-1" />
                        <div className="text-xs font-medium">{agent.name}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Integration spokes and nodes */}
            {integrations.map((integration, index) => {
              const angle = (index * 2 * Math.PI) / integrations.length + Math.PI / 6; // offset for visual spacing
              const x = center + Math.cos(angle) * integrationRadius;
              const y = center + Math.sin(angle) * integrationRadius;
              const spokeLength = integrationRadius - 56; // start at center outward only

              return (
                <div key={integration.name}>
                  {/* Spoke from AI CMO to Integration (originates at center) */}
                  <div
                    className="absolute bg-indigo-300"
                    style={{
                      left: center,
                      top: center,
                      width: spokeLength,
                      height: 2,
                      transformOrigin: '0 0',
                      transform: `rotate(${angle}rad)`
                    }}
                  />

                  {/* Integration node */}
                  <div
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: x, top: y }}
                  >
                    <div className="bg-white rounded-xl px-4 py-3 shadow-lg border border-gray-100">
                      <div className="flex items-center space-x-2">
                        <integration.icon className={`h-5 w-5 ${integration.color}`} />
                        <div className="font-semibold text-gray-900 text-sm">{integration.name}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-10 max-w-3xl mx-auto">
          <p className="text-lg text-gray-600">
            Your AI CMO is the command center — powering every agent and seamlessly connecting with Meta Ads, Google Ads, Shopify, HubSpot, Zoho, and Shiprocket.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AICMODiagram;
