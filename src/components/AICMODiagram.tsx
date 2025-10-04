import React from 'react';
import { Brain, BarChart3, PenTool, Search, Zap, Target, MessageSquare, ShoppingBag } from 'lucide-react';

// Critical rule enforced: All lines originate from AI CMO and end at either an Agent or an Integration. No cross-connections.

const AICMODiagram: React.FC = () => {
  const agents = [
    { icon: PenTool, name: 'Creative', color: 'bg-purple-100 text-purple-600' },
    { icon: BarChart3, name: 'Reporting', color: 'bg-green-100 text-green-600' },
    { icon: Search, name: 'Analytics', color: 'bg-blue-100 text-blue-600' },
    { icon: Zap, name: 'Diagnostics', color: 'bg-orange-100 text-orange-600' },
    { icon: Target, name: 'Performance', color: 'bg-red-100 text-red-600' },
  ];

  // Integrations per spec: Meta Ads, Google Ads, Shopify, HubSpot, Zoho, Shiprocket
  const integrations = [
    { name: 'Meta Ads', icon: MessageSquare, color: 'text-blue-600' },
    { name: 'Google Ads', icon: Target, color: 'text-indigo-600' },
    { name: 'Shopify', icon: ShoppingBag, color: 'text-green-600' },
    { name: 'HubSpot', icon: MessageSquare, color: 'text-orange-600' },
    { name: 'Zoho', icon: MessageSquare, color: 'text-red-600' },
    { name: 'Shiprocket', icon: ShoppingBag, color: 'text-purple-600' },
  ];

  // Predefined positions for integrations relative to the central hub (x,y from center)
  const integrationPositions = [
    { x: 260, y: -160 },
    { x: 320, y: -60 },
    { x: 320, y: 60 },
    { x: 260, y: 160 },
    { x: -320, y: -80 },
    { x: -320, y: 80 },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">AI CMO: The Central Command</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your AI CMO is the command center — powering every agent and seamlessly connecting with Meta Ads, Google Ads, Shopify, HubSpot, Zoho, and Shiprocket.
          </p>
        </div>

        {/* Unified Diagram Container with single central hub */}
        <div className="relative w-full max-w-[1000px] h-[520px] mx-auto">
          {/* Central AI CMO Hub */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full w-32 h-32 flex items-center justify-center shadow-[0_0_40px_rgba(37,99,235,0.6)] ring-4 ring-blue-300/40">
                <div className="text-center text-white">
                  <Brain className="h-12 w-12 mx-auto mb-1" aria-hidden="true" />
                  <div className="font-extrabold text-sm tracking-wide">AI CMO</div>
                </div>
              </div>
              {/* Pulsing glow */}
              <div className="absolute inset-0 rounded-full animate-ping bg-blue-400/20" aria-hidden="true"></div>
            </div>
          </div>

          {/* Agents arranged in circle with outward lines from center */}
          {agents.map((agent, index) => {
            const angle = (index * 2 * Math.PI) / agents.length - Math.PI / 2;
            const radius = 170;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <div key={agent.name}>
                {/* Connection line: AI CMO -> Agent */}
                <div
                  className="absolute top-1/2 left-1/2 origin-left bg-gradient-to-r from-blue-400 to-blue-200 z-10"
                  style={{
                    width: `${radius - 32}px`,
                    height: '3px',
                    transform: `translate(-50%, -50%) rotate(${angle}rad)`,
                    boxShadow: '0 0 12px rgba(59,130,246,0.5)'
                  }}
                  aria-hidden="true"
                />

                {/* Agent Node */}
                <div
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-20"
                  style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                >
                  <div className={`${agent.color} rounded-full w-20 h-20 flex items-center justify-center shadow-lg border-2 border-white group-hover:scale-110 transition-all duration-300`}>
                    <div className="text-center">
                      <agent.icon className="h-6 w-6 mx-auto mb-1" aria-hidden="true" />
                      <div className="text-xs font-semibold">{agent.name}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Integrations spokes from the same hub, no cross connections */}
          {integrations.map((integration, idx) => {
            const pos = integrationPositions[idx % integrationPositions.length];
            const angle = Math.atan2(pos.y, pos.x);
            const length = Math.hypot(pos.x, pos.y) - 40; // subtract hub radius

            return (
              <div key={integration.name}>
                {/* Spoke from center to integration */}
                <div
                  className="absolute top-1/2 left-1/2 origin-left bg-gradient-to-r from-indigo-400 to-indigo-200 z-0"
                  style={{
                    width: `${length}px`,
                    height: '3px',
                    transform: `translate(-50%, -50%) rotate(${angle}rad)`,
                    boxShadow: '0 0 12px rgba(99,102,241,0.5)'
                  }}
                  aria-hidden="true"
                />

                {/* Integration Node */}
                <div
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
                  style={{ left: `calc(50% + ${pos.x}px)`, top: `calc(50% + ${pos.y}px)` }}
                >
                  <div className="bg-white rounded-lg p-4 shadow-lg border-2 border-gray-100 hover:shadow-xl transition-shadow text-center">
                    <integration.icon className={`h-8 w-8 ${integration.color} mx-auto mb-2`} aria-hidden="true" />
                    <div className="font-semibold text-gray-900 text-sm">{integration.name}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Caption */}
        <div className="text-center mt-10 max-w-3xl mx-auto">
          <p className="text-lg text-gray-600">Your AI CMO is the command center — powering every agent and seamlessly connecting with Meta Ads, Google Ads, Shopify, HubSpot, Zoho, and Shiprocket.</p>
        </div>
      </div>
    </section>
  );
};

export default AICMODiagram;
