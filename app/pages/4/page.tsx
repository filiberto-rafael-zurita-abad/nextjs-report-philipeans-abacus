
'use client';

import { TrendingUp, Target, Zap, Globe } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { CustomPagination } from '@/components/ui/custom-pagination';
import { useSearchParams } from 'next/navigation';

const growthData = [
  { year: '2018', total: 15.2, ecommerce: 2.1, realtime: 0.8 },
  { year: '2019', total: 18.7, ecommerce: 3.4, realtime: 1.5 },
  { year: '2020', total: 28.3, ecommerce: 8.2, realtime: 4.2 },
  { year: '2021', total: 34.8, ecommerce: 12.8, realtime: 8.9 },
  { year: '2022', total: 38.2, ecommerce: 16.3, realtime: 15.2 },
  { year: '2023', total: 43.65, ecommerce: 24.1, realtime: 22.4 },
  { year: '2024', total: 49.1, ecommerce: 29.8, realtime: 31.7 },
  { year: '2025', total: 55.8, ecommerce: 36.2, realtime: 42.1 },
  { year: '2026', total: 63.4, ecommerce: 43.1, realtime: 52.8 },
  { year: '2027', total: 72.1, ecommerce: 50.9, realtime: 63.2 },
  { year: '2028', total: 82.0, ecommerce: 59.7, realtime: 73.1 },
  { year: '2029', total: 93.2, ecommerce: 69.8, realtime: 82.4 },
  { year: '2030', total: 106.1, ecommerce: 81.3, realtime: 91.2 }
];

const drivers = [
  { title: 'Government Digitization', impact: 95, icon: Globe },
  { title: 'Pandemic Acceleration', impact: 88, icon: Zap },
  { title: 'Smartphone Penetration', impact: 82, icon: Target },
  { title: 'Regulatory Support (BSP)', impact: 78, icon: TrendingUp }
];

export default function Slide4() {
  const searchParams = useSearchParams();
  const total = Number(searchParams.get('total')) || 1;
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
      <div className="flex flex-col gap-6 h-full p-16">
        {/* Header */}
        <div className="text-center flex-none">
          <CustomPagination total={total} />
          <h1 className="text-7xl font-bold mb-2 text-white flex items-center justify-center gap-6">
            <TrendingUp size={80} className="text-green-400" />
            Growth Trajectory
          </h1>
          <p className="text-4xl text-gray-200">Projected 13.8% CAGR Through 2030</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-[2fr_1fr] gap-12 flex-1 min-h-0">
          
          {/* Left Panel - Growth Chart */}
          <div className="flex flex-col gap-6 min-h-0">
            <div className="chart-container flex-1 min-h-0 border border-gray-700/50 rounded-2xl bg-slate-900/30 p-6 flex flex-col">
              <h3 className="text-3xl font-semibold mb-4 text-center">Market Value Projection ($B USD)</h3>
              <div className="flex justify-center gap-6 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-1 bg-green-500 rounded-full"></div>
                  <span className="text-base text-gray-300">Total Market</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-1 bg-blue-500" style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'}}></div>
                  <span className="text-base text-gray-300">E-commerce</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-1 bg-purple-500" style={{clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'}}></div>
                  <span className="text-base text-gray-300">Real-time Payments</span>
                </div>
              </div>
              <div className="flex-1 min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={growthData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="year" stroke="#9CA3AF" fontSize={16} />
                    <YAxis stroke="#9CA3AF" fontSize={16} tickFormatter={(value) => `$${value}B`} />
                    <Line type="monotone" dataKey="total" stroke="#10b981" strokeWidth={4} dot={{ r: 4, fill: '#10b981' }} name="Total Market" />
                    <Line type="monotone" dataKey="ecommerce" stroke="#3b82f6" strokeWidth={3} strokeDasharray="5 5" dot={{ r: 4, fill: '#3b82f6' }} name="E-commerce" />
                    <Line type="monotone" dataKey="realtime" stroke="#8b5cf6" strokeWidth={3} strokeDasharray="10 5" dot={{ r: 4, fill: '#8b5cf6' }} name="Real-time Payments" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Right Panel - Growth Drivers & Metrics */}
          <div className="flex flex-col gap-4">
            
            {/* Supporting Metrics */}
            <div className="grid grid-cols-1 gap-4">
              <div className="metric-card text-center bg-slate-900/30 p-4 rounded-xl border border-gray-700/50">
                <div className="text-4xl font-bold text-green-400 mb-1">13.8%</div>
                <div className="text-xl text-gray-200">Overall CAGR</div>
              </div>
              <div className="metric-card text-center bg-slate-900/30 p-4 rounded-xl border border-gray-700/50">
                <div className="text-4xl font-bold text-blue-400 mb-1">19.6%</div>
                <div className="text-xl text-gray-200">E-commerce CAGR</div>
              </div>
              <div className="metric-card text-center bg-slate-900/30 p-4 rounded-xl border border-gray-700/50">
                <div className="text-4xl font-bold text-purple-400 mb-1">58.7%</div>
                <div className="text-xl text-gray-200">Real-time Share</div>
              </div>
            </div>

            {/* Growth Drivers */}
            <div className="chart-container flex-1 min-h-0 bg-slate-900/30 p-3 rounded-xl border border-gray-700/50 flex flex-col">
              <h3 className="text-2xl font-semibold mb-2 text-center text-green-300">Key Growth Enablers</h3>
              <div className="space-y-1 flex-1 min-h-0 flex flex-col justify-center">
                {drivers?.map?.((driver, index) => {
                  const IconComponent = driver?.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <IconComponent className="text-green-400 flex-none" size={28} />
                      <div className="flex-1">
                        <div className="text-base font-medium mb-1">{driver?.title}</div>
                        <div className="bg-gray-700 rounded-full h-2.5 relative">
                          <div className="h-2.5 rounded-full bg-gradient-to-r from-green-400 to-green-600" style={{ width: `${driver?.impact}%` }} />
                        </div>
                      </div>
                      <div className="text-base font-bold text-green-300 flex-none w-12 text-right">{driver?.impact}%</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="grid grid-cols-4 gap-6 flex-none">
          <div className="bg-green-900/30 backdrop-blur-sm border border-green-400/30 rounded-xl p-4 text-center flex flex-col items-center justify-center">
            <Globe className="mb-2 text-green-400" size={32} />
            <p className="text-lg font-semibold text-green-300">Digitization Push</p>
          </div>
          <div className="bg-blue-900/30 backdrop-blur-sm border border-blue-400/30 rounded-xl p-4 text-center flex flex-col items-center justify-center">
            <Zap className="mb-2 text-blue-400" size={32} />
            <p className="text-lg font-semibold text-blue-300">Pandemic Acceleration</p>
          </div>
          <div className="bg-purple-900/30 backdrop-blur-sm border border-purple-400/30 rounded-xl p-4 text-center flex flex-col items-center justify-center">
            <Target className="mb-2 text-purple-400" size={32} />
            <p className="text-lg font-semibold text-purple-300">Smartphone Growth</p>
          </div>
          <div className="bg-orange-900/30 backdrop-blur-sm border border-orange-400/30 rounded-xl p-4 text-center flex flex-col items-center justify-center">
            <TrendingUp className="mb-2 text-orange-400" size={32} />
            <p className="text-lg font-semibold text-orange-300">Regulatory Support</p>
          </div>
        </div>

        {/* Footer 
        <div className="text-center text-gray-400 text-base flex-none -mt-2">
          Source: GlobalData & BSP Digital Payments Transformation Roadmap
        </div>
        */}
      </div>
    </div>
  );
}
