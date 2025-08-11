'use client';

import { Target, Smartphone, Users } from 'lucide-react';
import { CustomPagination } from '@/components/ui/custom-pagination';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const opportunities = [
  { 
    name: 'B2B Payments', 
    marketSize: 85, 
    growthPotential: 92, 
    timeToMaturity: 18,
    description: 'Large enterprise payment digitization'
  },
  { 
    name: 'Rural Expansion', 
    marketSize: 90, 
    growthPotential: 78, 
    timeToMaturity: 36,
    description: '20M+ unserved population'
  },
  { 
    name: 'Lending/BNPL', 
    marketSize: 65, 
    growthPotential: 95, 
    timeToMaturity: 12,
    description: 'Buy-now-pay-later services'
  },
  { 
    name: 'Wealthtech', 
    marketSize: 35, 
    growthPotential: 88, 
    timeToMaturity: 24,
    description: 'Investment & insurance tech'
  },
  { 
    name: 'Cross-border', 
    marketSize: 55, 
    growthPotential: 72, 
    timeToMaturity: 30,
    description: 'ASEAN payment integration'
  }
];

const techAdoption = [
  { tech: 'AI-driven Personalization', timeline: '2024-2025', readiness: 85 },
  { tech: 'Cross-border Blockchain', timeline: '2025-2026', readiness: 65 },
  { tech: 'ASEAN Nexus Rail', timeline: '2026', readiness: 70 },
  { tech: 'PHPX Stablecoin', timeline: '2025-2027', readiness: 55 }
];

const marketExpansion = [
  { segment: 'Unbanked Sector', opportunity: '30M+ Adults', potential: 'High' },
  { segment: 'Rural Markets', opportunity: 'Target: 20M by 2028', potential: 'High' },
  { segment: 'B2B Digital Payments', opportunity: 'SMEs & Large Enterprises', potential: 'Very High' }
];

function Slide10Component() {
  const searchParams = useSearchParams();
  const total = Number(searchParams.get('total')) || 1;
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
      <div className="flex flex-col gap-4 h-full p-12">
        {/* Header */}
        <div className="text-center flex-none">
          <CustomPagination total={total} />
          <h1 className="text-6xl font-bold mb-2 text-white flex items-center justify-center gap-4">
            <Target size={56} className="text-green-400" />
            Strategic Horizons
          </h1>
          <p className="text-3xl text-gray-300">Next-Generation Financial Services</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-[3fr_2fr] gap-8 flex-1 min-h-0">
          
          {/* Left Panel - Opportunity Matrix */}
          <div className="flex flex-col gap-4 min-h-0">
            <div className="bg-slate-800/40 rounded-xl p-6 flex flex-col flex-1 min-h-0">
              <h3 className="text-2xl font-semibold mb-4 text-center text-green-300 flex-none">Market Opportunity Matrix</h3>
              <div className="relative flex-1 min-h-0">
                
                {/* Axis Labels */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-sm text-gray-400">
                  Market Size →
                </div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm text-gray-400">
                  Growth Potential →
                </div>
                
                {/* Opportunity Bubbles */}
                <div className="relative w-full h-full">
                  {opportunities?.map?.((opp, index) => {
                    const leftPos = (opp?.marketSize / 100) * 85 + 10; // 10-95% of width
                    const bottomPos = (opp?.growthPotential / 100) * 80 + 10; // 10-90% of height
                    const bubbleSize = 15 + opp.timeToMaturity / 3;
                    
                    return (
                      <div
                        key={index}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2"
                        style={{
                          left: `${leftPos}%`,
                          bottom: `${bottomPos}%`,
                        }}
                      >
                        <div 
                          className={`rounded-full flex items-center justify-center text-xs font-bold text-white relative cursor-pointer transition-all duration-300 hover:scale-110 ${
                            index === 0 ? 'bg-gradient-to-br from-green-400 to-green-600' :
                            index === 1 ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
                            index === 2 ? 'bg-gradient-to-br from-purple-400 to-purple-600' :
                            index === 3 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600' :
                            'bg-gradient-to-br from-red-400 to-red-600'
                          }`}
                           style={{ width: `${bubbleSize}px`, height: `${bubbleSize}px` }}
                        >
                          {index + 1}
                        </div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 text-center whitespace-nowrap">
                          <div className="text-xs font-semibold leading-tight">{opp?.name}</div>
                          <div className="text-[10px] text-gray-400 leading-tight">{opp?.timeToMaturity}mo</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Technology & Expansion */}
          <div className="flex flex-col gap-8">
            
            {/* Technology Integration */}
            <div className="bg-slate-800/40 rounded-xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <Smartphone className="text-purple-400" size={28} />
                <h3 className="text-xl font-semibold text-purple-300">Technology Roadmap</h3>
              </div>
              <div className="space-y-3">
                {techAdoption?.map?.((tech, index) => (
                  <div key={index} className="bg-purple-900/20 border border-purple-400/20 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-base font-semibold text-purple-300">{tech?.tech}</h4>
                      <span className="text-xs text-gray-400">{tech?.timeline}</span>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Readiness: {tech?.readiness}%</div>
                      <div className="bg-gray-700 rounded-full h-1.5">
                        <div 
                          className="h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-purple-600"
                          style={{ width: `${tech?.readiness}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Expansion */}
            <div className="bg-slate-800/40 rounded-xl p-4 flex-1">
              <div className="flex items-center gap-3 mb-3">
                <Users className="text-blue-400" size={28} />
                <h3 className="text-xl font-semibold text-blue-300">Addressable Markets</h3>
              </div>
              <div className="space-y-3">
                {marketExpansion?.map?.((market, index) => (
                  <div key={index} className="bg-blue-900/20 border border-blue-400/20 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-base font-semibold text-blue-300">{market?.segment}</h4>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
                        market?.potential === 'Very High' ? 'bg-green-600/80 text-green-100' :
                        market?.potential === 'High' ? 'bg-blue-600/80 text-blue-100' :
                        'bg-yellow-600/80 text-yellow-100'
                      }`}>
                        {market?.potential}
                      </span>
                    </div>
                    <div className="text-base font-bold text-blue-400">{market?.opportunity}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-base flex-none py-2">
          Strategic Analysis • Market Opportunities & Tech Roadmap
        </div>
      </div>
    </div>
  );
}

export default function Slide10() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Slide10Component />
    </Suspense>
  );
}
