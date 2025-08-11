
'use client';

import { BarChart3, PieChart, TrendingUp, Building2 } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell } from 'recharts';
import { CustomPagination } from '@/components/ui/custom-pagination';
import { useSearchParams } from 'next/navigation';

const marketGrowthData = [
  { year: '2018', adoption: 10 },
  { year: '2019', adoption: 14 },
  { year: '2020', adoption: 28 },
  { year: '2021', adoption: 42 },
  { year: '2022', adoption: 48 },
  { year: '2023', adoption: 57.4 }
];

const competitorData = [
  { name: 'GCash', value: 89, color: '#2d3748' },
  { name: 'Maya', value: 11, color: '#319795' }
];

export default function Slide2() {
  const searchParams = useSearchParams();
  const total = Number(searchParams.get('total')) || 1;
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
      <div className="flex flex-col gap-12 h-full p-16">
        {/* Header */}
        <div className="text-center flex-none">
          <CustomPagination total={total} />
          <h1 className="text-7xl font-bold mb-4 text-white flex items-center justify-center gap-6">
            <BarChart3 size={80} className="text-blue-400" />
            Market Dynamics
          </h1>
          <p className="text-4xl text-gray-200">Explosive Growth in a Concentrated Market</p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-2 gap-16 flex-1 min-h-0">
          {/* Left Panel - Market Size Evolution */}
          <div className="flex flex-col gap-6">
            <div className="chart-container flex-1 min-h-0">
              <h3 className="text-3xl font-semibold mb-6 text-center">Digital Payment Volume Growth</h3>
              <div className="flex-1 min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={marketGrowthData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis 
                      dataKey="year" 
                      stroke="#9CA3AF"
                      fontSize={16}
                    />
                    <YAxis 
                      stroke="#9CA3AF"
                      fontSize={16}
                      domain={[0, 65]}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="adoption" 
                      stroke="#3182ce" 
                      fill="url(#colorGradient)" 
                      strokeWidth={3}
                    />
                    <defs>
                      <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3182ce" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#3182ce" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="metric-card">
              <div className="flex items-center gap-4 mb-4">
                <Building2 className="text-purple-400" size={40} />
                <h3 className="text-2xl font-semibold">E-commerce Segment</h3>
              </div>
              <div className="text-4xl font-bold text-purple-400 mb-2">₱1.3T ($24.1B)</div>
              <p className="text-xl text-gray-200">2024 Projection</p>
              <p className="text-lg text-green-400 mt-2">28.6% CAGR (2019-2023)</p>
            </div>
          </div>

          {/* Right Panel - Competitive Landscape */}
          <div className="flex flex-col gap-6">
            <div className="chart-container flex-1 min-h-0">
              <h3 className="text-3xl font-semibold mb-6 text-center">Market Share Distribution</h3>
              <div className="flex-1 min-h-0 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={competitorData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={140}
                      paddingAngle={5}
                      dataKey="value"
                      stroke="none"
                    >
                      {competitorData?.map?.((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry?.color} />
                      ))}
                    </Pie>
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-slate-700 rounded"></div>
                  <span className="text-xl">GCash (89%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-teal-600 rounded"></div>
                  <span className="text-xl">Maya (11%)</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="metric-card text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">51M</div>
                <div className="text-lg text-gray-200">GCash Users</div>
                <div className="text-sm text-green-400 mt-1">Unicorn Status</div>
              </div>
              <div className="metric-card text-center">
                <div className="text-2xl font-bold text-teal-400 mb-2">47M</div>
                <div className="text-lg text-gray-200">Maya Users</div>
                <div className="text-sm text-green-400 mt-1">Banking License</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="grid grid-cols-3 gap-6 flex-none">
          <div className="bg-blue-900/30 backdrop-filter backdrop-blur-lg border border-blue-400/30 rounded-xl p-4 text-center">
            <TrendingUp className="mx-auto mb-2 text-blue-400" size={32} />
            <p className="text-lg font-semibold text-blue-300">E-commerce payments: 28.6% CAGR</p>
          </div>
          <div className="bg-purple-900/30 backdrop-filter backdrop-blur-lg border border-purple-400/30 rounded-xl p-4 text-center">
            <PieChart className="mx-auto mb-2 text-purple-400" size={32} />
            <p className="text-lg font-semibold text-purple-300">Duopoly structure with clear leader</p>
          </div>
          <div className="bg-green-900/30 backdrop-filter backdrop-blur-lg border border-green-400/30 rounded-xl p-4 text-center">
            <Building2 className="mx-auto mb-2 text-green-400" size={32} />
            <p className="text-lg font-semibold text-green-300">Super-app strategy drives stickiness</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-400 text-xl flex-none">
          Market Overview • Digital Payment Landscape Analysis
        </div>
      </div>
    </div>
  );
}
