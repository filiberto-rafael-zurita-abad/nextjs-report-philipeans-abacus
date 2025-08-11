'use client';

import { TrendingUp, AlertTriangle, Shield, Wifi, Users, DollarSign } from 'lucide-react';
import { CustomPagination } from '@/components/ui/custom-pagination';
import { useSearchParams } from 'next/navigation';

// Trimmed list to reduce vertical space
const enablers = [
  { factor: 'Financial Inclusion', strength: 90, metric: '397M mobile wallet accounts', icon: Users },
  { factor: 'Internet Penetration', strength: 84, metric: '83.8% population coverage', icon: Wifi },
  { factor: 'Government Support', strength: 88, metric: 'BSP Digital Roadmap', icon: Shield },
  { factor: 'OFW Remittances', strength: 92, metric: '$38.34B market', icon: DollarSign },
];

// Trimmed list to reduce vertical space
const barriers = [
  { factor: 'Digital Divide', impact: 'High', likelihood: 'High', severity: 85 },
  { factor: 'Cybersecurity Threats', impact: 'High', likelihood: 'Medium', severity: 70 },
  { factor: 'Infrastructure Gaps', impact: 'Medium', likelihood: 'High', severity: 65 },
  { factor: 'High Broadband Costs', impact: 'Medium', likelihood: 'Medium', severity: 55 },
];

export default function Slide5() {
  const searchParams = useSearchParams();
  const total = Number(searchParams.get('total')) || 1;
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
      {/* Reduced padding and gap */}
      <div className="flex flex-col gap-6 h-full p-12">
        {/* Header - Reduced font sizes, margins, and icon sizes */}
        <div className="text-center flex-none">
          <CustomPagination total={total} />
          <h1 className="text-6xl font-bold mb-2 text-white flex items-center justify-center gap-4">
            <TrendingUp size={64} className="text-green-400" />
            <AlertTriangle size={64} className="text-red-400" />
            Market Forces
          </h1>
          <p className="text-3xl text-gray-200">Accelerators vs. Impediments</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-[1fr_auto_1fr] gap-8 flex-1 min-h-0">
          
          {/* Left Panel - Growth Enablers */}
          <div className="chart-container flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <TrendingUp className="text-green-400" size={32} />
              <h3 className="text-3xl font-semibold text-green-300">Growth Enablers</h3>
            </div>
            {/* Reduced space between items */}
            <div className="space-y-4 flex-1">
              {enablers?.map?.((enabler, index) => {
                const IconComponent = enabler?.icon;
                return (
                  // Reduced padding and font sizes
                  <div key={index} className="bg-green-900/20 backdrop-filter backdrop-blur-lg border border-green-400/30 rounded-xl p-3">
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent className="text-green-400" size={20} />
                      <h4 className="text-lg font-semibold text-green-300">{enabler?.factor}</h4>
                    </div>
                    <div className="mb-2">
                      <div className="bg-gray-700 rounded-full h-3.5 relative">
                        <div 
                          className="h-3.5 rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-end pr-2 text-xs font-bold transition-all duration-1000"
                          style={{ width: `${enabler?.strength}%` }}
                        >
                          {enabler?.strength}%
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300">{enabler?.metric}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Center Panel - Net Impact Gauge - Reduced size */}
          <div className="flex flex-col items-center justify-center gap-6 px-6">
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-3">Net Market Momentum</h3>
              <div className="relative w-36 h-36">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" stroke="#374151" strokeWidth="12" fill="transparent" />
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="url(#gaugeGradient)"
                    strokeWidth="12"
                    fill="transparent"
                    strokeDasharray={`${78 * 2.64} ${(100 - 78) * 2.64}`} 
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981"/>
                      <stop offset="50%" stopColor="#3b82f6"/>
                      <stop offset="100%" stopColor="#8b5cf6"/>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-400">7.8</div>
                    <div className="text-sm text-gray-400">out of 10</div>
                  </div>
                </div>
              </div>
              <p className="text-base font-semibold text-green-300 mt-3">Positive Momentum</p>
            </div>
            
            <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 backdrop-filter backdrop-blur-lg border border-blue-400/30 rounded-xl p-3 text-center">
              <p className="text-base font-semibold text-blue-300">Enablers Outweigh Barriers</p>
              <p className="text-sm text-gray-300 mt-1">Despite significant challenges</p>
            </div>
          </div>

          {/* Right Panel - Market Barriers */}
          <div className="chart-container flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <AlertTriangle className="text-red-400" size={32} />
              <h3 className="text-3xl font-semibold text-red-300">Market Barriers</h3>
            </div>
            {/* Reduced space between items */}
            <div className="space-y-4 flex-1">
              {barriers?.map?.((barrier, index) => (
                // Reduced padding and font sizes
                <div key={index} className="bg-red-900/20 backdrop-filter backdrop-blur-lg border border-red-400/30 rounded-xl p-3">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-red-300">{barrier?.factor}</h4>
                    <div className="text-right">
                      <div className="text-xs text-gray-300">Severity</div>
                      <div className="text-base font-bold text-red-400">{barrier?.severity}%</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Impact</div>
                      <div className={`text-xs font-semibold px-2 py-0.5 rounded text-center ${
                        barrier?.impact === 'High' ? 'bg-red-600 text-red-100' : 
                        'bg-yellow-600 text-yellow-100'
                      }`}>
                        {barrier?.impact}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-1">Likelihood</div>
                      <div className={`text-xs font-semibold px-2 py-0.5 rounded text-center ${
                        barrier?.likelihood === 'High' ? 'bg-red-600 text-red-100' : 
                        'bg-yellow-600 text-yellow-100'
                      }`}>
                        {barrier?.likelihood}
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-2">
                    <div className="bg-gray-700 rounded-full h-2.5 relative">
                      <div 
                        className="h-2.5 rounded-full bg-gradient-to-r from-red-400 to-red-600 transition-all duration-1000"
                        style={{ width: `${barrier?.severity}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer - Reduced font size */}
        <div className="text-center text-gray-400 text-base flex-none pt-2">
          Socio-Economic Analysis • Market Force Assessment
        </div>
      </div>
    </div>
  );
}
