import React, { useEffect, useRef } from 'react';
import { Brain, Target, TrendingUp, Users, BarChart3, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const AICMOHierarchy: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  const agents = [
    {
      id: 'strategy',
      name: 'Strategy',
      icon: Target,
      position: { x: 150, y: 100 },
      color: '#8B5CF6',
      description: 'Strategic planning and market analysis'
    },
    {
      id: 'analytics',
      name: 'Analytics',
      icon: BarChart3,
      position: { x: 300, y: 150 },
      color: '#06B6D4',
      description: 'Data insights and performance tracking'
    },
    {
      id: 'growth',
      name: 'Growth',
      icon: TrendingUp,
      position: { x: 450, y: 100 },
      color: '#10B981',
      description: 'Growth optimization and scaling'
    },
    {
      id: 'automation',
      name: 'Automation',
      icon: Zap,
      position: { x: 200, y: 250 },
      color: '#F59E0B',
      description: 'Campaign automation and execution'
    },
    {
      id: 'team',
      name: 'Team',
      icon: Users,
      position: { x: 400, y: 250 },
      color: '#EF4444',
      description: 'Team coordination and management'
    }
  ];

  const centerPosition = { x: 300, y: 175 };

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    // Animate connection lines
    const animateConnections = () => {
      const lines = svg.querySelectorAll('.connection-line');
      lines.forEach((line, index) => {
        setTimeout(() => {
          line.classList.add('animate-pulse');
        }, index * 200);
      });
    };

    animateConnections();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                AI CMO Command Center
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI CMO orchestrates a sophisticated hierarchy of specialized agents, each optimized for specific marketing functions while working in perfect coordination.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="zoom">
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
              <svg
                ref={svgRef}
                viewBox="0 0 600 350"
                className="w-full h-auto"
                style={{ minHeight: '400px' }}
              >
                <defs>
                  <linearGradient id="centerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="50%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                  
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>

                  <filter id="pulse">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Connection lines */}
                {agents.map((agent) => (
                  <line
                    key={`line-${agent.id}`}
                    className="connection-line"
                    x1={centerPosition.x}
                    y1={centerPosition.y}
                    x2={agent.position.x}
                    y2={agent.position.y}
                    stroke="url(#centerGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    opacity="0.6"
                    style={{
                      strokeDasharray: '5,5',
                      animation: 'dash 2s linear infinite'
                    }}
                  />
                ))}

                {/* Central AI CMO Node */}
                <g className="cursor-pointer group">
                  <circle
                    cx={centerPosition.x}
                    cy={centerPosition.y}
                    r="40"
                    fill="url(#centerGradient)"
                    filter="url(#glow)"
                    className="transition-all duration-300 group-hover:scale-110"
                  />
                  <circle
                    cx={centerPosition.x}
                    cy={centerPosition.y}
                    r="35"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    opacity="0.8"
                  />
                  <Brain 
                    x={centerPosition.x - 12} 
                    y={centerPosition.y - 12} 
                    size={24} 
                    color="white"
                    className="drop-shadow-lg"
                  />
                  <text
                    x={centerPosition.x}
                    y={centerPosition.y + 60}
                    textAnchor="middle"
                    className="text-sm font-bold fill-gray-700"
                  >
                    AI CMO
                  </text>
                </g>

                {/* Agent Nodes */}
                {agents.map((agent) => {
                  const IconComponent = agent.icon;
                  return (
                    <g key={agent.id} className="cursor-pointer group">
                      <circle
                        cx={agent.position.x}
                        cy={agent.position.y}
                        r="25"
                        fill={agent.color}
                        filter="url(#pulse)"
                        className="transition-all duration-300 group-hover:scale-110"
                        style={{
                          boxShadow: `0 0 20px ${agent.color}40`
                        }}
                      />
                      <circle
                        cx={agent.position.x}
                        cy={agent.position.y}
                        r="20"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        opacity="0.9"
                      />
                      <IconComponent 
                        x={agent.position.x - 8} 
                        y={agent.position.y - 8} 
                        size={16} 
                        color="white"
                        className="drop-shadow-lg"
                      />
                      <text
                        x={agent.position.x}
                        y={agent.position.y + 40}
                        textAnchor="middle"
                        className="text-xs font-semibold fill-gray-600"
                      >
                        {agent.name}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Agent Details */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {agents.map((agent, index) => {
                  const IconComponent = agent.icon;
                  return (
                    <ScrollReveal key={agent.id} variant="zoom">
                      <div 
                        className="group p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/30 hover:bg-white/80 transition-all duration-300 cursor-pointer hover:scale-105"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-center gap-4 mb-3">
                          <div 
                            className="p-3 rounded-xl"
                            style={{ backgroundColor: `${agent.color}20` }}
                          >
                            <IconComponent 
                              size={24} 
                              color={agent.color}
                            />
                          </div>
                          <h3 className="text-lg font-bold text-gray-900">
                            {agent.name}
                          </h3>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {agent.description}
                        </p>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each agent operates autonomously while maintaining constant communication with the central AI CMO, 
              ensuring coordinated, data-driven marketing decisions across all channels.
            </p>
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -10;
          }
        }
      `}</style>
    </section>
  );
};

export default AICMOHierarchy;
