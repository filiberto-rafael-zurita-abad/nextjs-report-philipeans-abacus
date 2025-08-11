'use client';

import { Send, Brain, TrendingUp, Users, AlertTriangle } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { CustomPagination } from '@/components/ui/custom-pagination';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const remittanceData = [
  { year: '2018', total: 28.1, digital: 7.0 },
  { year: '2019', total: 30.1, digital: 9.3 },
  { year: '2020', total: 29.9, digital: 14.9 },
  { year: '2021', total: 31.4, digital: 20.0 },
  { year: '2022', total: 36.1, digital: 25.2 },
  { year: '2023', total: 38.34, digital: 28.76 },
  { year: '2024', total: 42.1, digital: 33.8 },
  { year: '2025', total: 45.9, digital: 38.2 },
  { year: '2030', total: 55.75, digital: 48.4 }
];

const brainDrainSectors = [
  { sector: 'IT & Software', exodus: 82, impact: 'Critical' },
  { sector: 'Healthcare', exodus: 71, impact: 'High' },
  { sector: 'Engineering', exodus: 67, impact: 'High' },
];

function Slide7Component() {
  const searchParams = useSearchParams();
  const total = Number(searchParams.get('total')) || 1;
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
      <div className="flex flex-col gap-8 h-full p-16">
        {/* Header */}
        <div className="text-center flex-none">
          <CustomPagination total={total} />
          <h1 className="text-7xl font-bold mb-2 text-white flex items-center justify-center gap-6">
            <Send size={80} className="text-green-400" />
            <Brain size={80} className="text-red-400" />
            OFW Economy
          </h1>
          <p className="text-4xl text-gray-200">Digital Remittances vs. Talent Exodus</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-[2fr_auto_1fr] gap-8 flex-1 min-h-0">
          
          {/* Left Panel - Digital Remittances */}
          <div className="flex flex-col gap-4">
            <div className="chart-container flex-1 min-h-0 flex flex-col">
              <div className="flex items-center gap-4 mb-4 flex-none">
                <Send className="text-green-400" size={40} />
                <h3 className="text-3xl font-semibold text-green-300">Digital Remittances Evolution</h3>
              </div>
              <div className="flex-1 min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={remittanceData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis 
                      dataKey="year" 
                      stroke="#9CA3AF"
                      fontSize={14}
                    />
                    <YAxis 
                      stroke="#9CA3AF"
                      fontSize={14}
                      tickFormatter={(value) => `$${value}B`}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="total" 
                      stackId="1"
                      stroke="#6b7280" 
                      fill="#6b7280"
                      fillOpacity={0.3}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="digital" 
                      stackId="2"
                      stroke="#10b981" 
                      fill="#10b981"
                      fillOpacity={0.8}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-8 mt-2 flex-none">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-500 rounded"></div>
                  <span className="text-lg">Traditional</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-lg">Digital (75%)</span>
                </div>
              </div>
            </div>

            {/* Remittance Metrics */}
            <div className="grid grid-cols-3 gap-4 flex-none">
              <div className="bg-green-900/30 backdrop-filter backdrop-blur-lg border border-green-400/30 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">$38.34B</div>
                <div className="text-base text-gray-300">Total 2023</div>
              </div>
              <div className="bg-blue-900/30 backdrop-filter backdrop-blur-lg border border-blue-400/30 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-blue-400 mb-1">75%</div>
                <div className="text-base text-gray-300">Digital Share</div>
              </div>
              <div className="bg-purple-900/30 backdrop-filter backdrop-blur-lg border border-purple-400/30 rounded-xl p-4 text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">$55.75B</div>
                <div className="text-base text-gray-300">2030 Projection</div>
              </div>
            </div>
          </div>

          {/* Center - Paradox Indicator */}
          <div className="flex flex-col items-center justify-center gap-6 px-6">
            <div className="bg-gradient-to-br from-amber-900/50 to-orange-900/50 backdrop-filter backdrop-blur-lg border border-amber-400/30 rounded-2xl p-6 text-center">
              <AlertTriangle className="mx-auto mb-4 text-amber-400" size={48} />
              <h3 className="text-2xl font-semibold text-amber-300 mb-4">Economic Paradox</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <TrendingUp className="text-green-400" size={20} />
                  <span className="text-base text-green-300">Short-term capital gain</span>
                </div>
                <div className="flex items-center gap-2">
                  <Brain className="text-red-400" size={20} />
                  <span className="text-base text-red-300">Long-term innovation loss</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-xl font-semibold text-orange-300 mb-2">Net Impact</div>
              <div className="text-3xl font-bold text-orange-400">Mixed</div>
              <div className="text-base text-gray-400">Capital vs. Talent</div>
            </div>
          </div>

          {/* Right Panel - Brain Drain Impact */}
          <div className="flex flex-col gap-4">
            <div className="chart-container flex-1 min-h-0 flex flex-col">
              <div className="flex items-center gap-4 mb-4 flex-none">
                <Brain className="text-red-400" size={40} />
                <h3 className="text-2xl font-semibold text-red-300">Talent Exodus by Sector</h3>
              </div>
              <div className="space-y-4 flex-1 min-h-0 flex flex-col justify-center">
                {brainDrainSectors?.map?.((sector, index) => (
                  <div key={index} className="bg-red-900/20 backdrop-filter backdrop-blur-lg border border-red-400/30 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-red-300">{sector?.sector}</h4>
                      <div className={`px-2 py-1 rounded text-xs font-semibold ${
                        sector?.impact === 'Critical' ? 'bg-red-600 text-red-100' :
                        sector?.impact === 'High' ? 'bg-orange-600 text-orange-100' :
                        'bg-yellow-600 text-yellow-100'
                      }`}>
                        {sector?.impact}
                      </div>
                    </div>
                    <div className="mb-1">
                      <div className="bg-gray-700 rounded-full h-3 relative">
                        <div 
                          className="h-3 rounded-full bg-gradient-to-r from-red-400 to-red-600 flex items-center justify-end pr-2 text-xs font-bold transition-all duration-1000"
                          style={{ width: `${sector?.exodus}%` }}
                        >
                          {sector?.exodus}%
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mitigation Strategies & Key Insights */}
        <div className="grid grid-cols-2 gap-8 flex-none">
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-filter backdrop-blur-lg border border-blue-400/30 rounded-2xl p-4">
            <h3 className="text-2xl font-semibold mb-3 text-center text-blue-300">Mitigation Strategies</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <Users className="mx-auto mb-2 text-blue-400" size={28} />
                <h4 className="text-base font-semibold text-blue-300">Skills Programs</h4>
                <p className="text-sm text-gray-300">Upskill local talent</p>
              </div>
              <div className="text-center">
                <TrendingUp className="mx-auto mb-2 text-green-400" size={28} />
                <h4 className="text-base font-semibold text-green-300">Salary Competitiveness</h4>
                <p className="text-sm text-gray-300">Improve retention</p>
              </div>
              <div className="text-center">
                <Send className="mx-auto mb-2 text-purple-400" size={28} />
                <h4 className="text-base font-semibold text-purple-300">Diaspora Engagement</h4>
                <p className="text-sm text-gray-300">Leverage expertise</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-900/30 backdrop-filter backdrop-blur-lg border border-slate-400/30 rounded-2xl p-4">
             <h3 className="text-2xl font-semibold mb-3 text-center text-slate-300">Key Insights</h3>
            <div className="grid grid-cols-1 gap-2 text-center">
                <p className="text-base font-semibold text-green-300/90">75% remittance digitization = $28.76B digital flow</p>
                <p className="text-base font-semibold text-red-300/90">Talent retention is critical for fintech innovation</p>
                <p className="text-base font-semibold text-blue-300/90">Diaspora engagement programs show early promise</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-400 text-base flex-none -mt-2">
          Population Dynamics • OFW Impact Assessment
        </div>
      </div>
    </div>
  );
}

export default function Slide7() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Slide7Component />
    </Suspense>
  );
}
