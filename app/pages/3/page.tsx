
'use client';

import { Users, Building, Smartphone, Activity } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';
import { CustomPagination } from '@/components/ui/custom-pagination';
import { useSearchParams } from 'next/navigation';

const ageData = [
  { age: '18-24', adoption: 68.2, color: '#3b82f6' },
  { age: '25-34', adoption: 71.4, color: '#2563eb' },
  { age: '35-44', adoption: 54.3, color: '#1d4ed8' },
  { age: '45-54', adoption: 42.1, color: '#1e40af' },
  { age: '55+', adoption: 28.7, color: '#1e3a8a' }
];

const businessData = [
  { type: 'Corporations', adoption: 85, employees: '500+' },
  { type: 'Partnerships', adoption: 67, employees: '50-499' },
  { type: 'Sole Prop.', adoption: 43, employees: '1-49' }
];

export default function Slide3() {
  const searchParams = useSearchParams();
  const total = Number(searchParams.get('total')) || 1;
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
      <div className="flex flex-col gap-12 h-full p-16">
        {/* Header */}
        <div className="text-center flex-none">
          <CustomPagination total={total} />
          <h1 className="text-7xl font-bold mb-4 text-white flex items-center justify-center gap-6">
            <Users size={80} className="text-blue-400" />
            Demographic Deep Dive
          </h1>
          <p className="text-4xl text-gray-200">Youth-Led, Business-Accelerated Adoption</p>
        </div>

        {/* Three-Column Dashboard */}
        <div className="grid grid-cols-3 gap-12 flex-1 min-h-0">
          
          {/* Column 1 - Age Demographics */}
          <div className="flex flex-col gap-6">
            <div className="chart-container flex flex-col flex-1 min-h-0">
              <h3 className="text-2xl font-semibold mb-4 text-center text-blue-300">Adoption by Age Group</h3>
              <div className="flex-1 min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={ageData} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis 
                      type="number" 
                      domain={[0, 80]}
                      stroke="#9CA3AF"
                      fontSize={14}
                      tickFormatter={(value) => `${value}%`}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis 
                      type="category" 
                      dataKey="age" 
                      stroke="#9CA3AF"
                      fontSize={14}
                      width={50}
                      axisLine={false}
                      tickLine={false}
                    />
                    <Bar dataKey="adoption" radius={[0, 4, 4, 0]}>
                      {ageData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="metric-card">
              <div className="flex items-center gap-3 mb-3">
                <Activity className="text-blue-400" size={32} />
                <h4 className="text-xl font-semibold">Youth Dominance</h4>
              </div>
              <div className="text-3xl font-bold text-blue-400 mb-2">71.4%</div>
              <p className="text-lg text-gray-200">Peak adoption in 25-34 age group</p>
              <p className="text-base text-green-400 mt-2">Digital natives leading the charge</p>
            </div>
          </div>

          {/* Column 2 - Business Adoption */}
          <div className="flex flex-col gap-6">
            <div className="chart-container flex-1 min-h-0">
              <h3 className="text-2xl font-semibold mb-4 text-center text-green-300">Business Size Correlation</h3>
              <div className="space-y-4 flex-1 min-h-0 flex flex-col justify-center">
                {businessData.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-24 text-right text-sm font-medium">{item.type}</div>
                    <div className="flex-1 bg-gray-700 rounded-full h-8 relative">
                      <div 
                        className={`h-8 rounded-full flex items-center justify-end pr-3 text-sm font-bold transition-all duration-1000`}
                        style={{ 
                          width: `${item.adoption}%`,
                          background: `linear-gradient(90deg, #10b981 0%, #059669 100%)`
                        }}
                      >
                        {item.adoption}%
                      </div>
                    </div>
                    <div className="w-20 text-left text-xs text-gray-400">{item.employees}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="metric-card">
              <div className="flex items-center gap-3 mb-3">
                <Building className="text-green-400" size={32} />
                <h4 className="text-xl font-semibold">Corporate Adoption</h4>
              </div>
              <div className="text-3xl font-bold text-green-400 mb-2">85%</div>
              <p className="text-lg text-gray-200">Large corporations show highest uptake</p>
              <p className="text-base text-green-400 mt-2">SMEs represent growth opportunity</p>
            </div>
          </div>

          {/* Column 3 - Digital Engagement */}
          <div className="flex flex-col gap-6">
            <div className="chart-container flex flex-col flex-1 min-h-0">
              <h3 className="text-2xl font-semibold mb-2 text-center text-purple-300">Digital Engagement</h3>
              <div className="flex flex-col justify-around items-center h-full">
                
                {/* Internet Users Gauge */}
                <div className="text-center">
                  <div className="relative w-24 h-24 mx-auto">
                    <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="40" stroke="#374151" strokeWidth="8" fill="transparent" />
                      <circle
                        cx="50" cy="50" r="40" stroke="#8b5cf6" strokeWidth="8" fill="transparent"
                        strokeDasharray={`${83.8 * 2.51} ${(100 - 83.8) * 2.51}`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-xl font-bold text-purple-400">83.8%</div>
                        <div className="text-xs text-gray-400">Internet</div>
                      </div>
                    </div>
                  </div>
                  <p className="text-base font-semibold mt-1">97.5M Users</p>
                </div>

                {/* Mobile Usage Stats */}
                <div className="grid grid-cols-2 gap-4 w-full px-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">8+</div>
                    <div className="text-sm text-gray-300">Hours Daily</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">90%</div>
                    <div className="text-sm text-gray-300">Use Banking Apps</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="metric-card">
              <div className="flex items-center gap-3 mb-3">
                <Smartphone className="text-purple-400" size={32} />
                <h4 className="text-xl font-semibold">Mobile Wallets</h4>
              </div>
              <div className="text-3xl font-bold text-purple-400 mb-2">75.5M</div>
              <p className="text-lg text-gray-200">Active Accounts (GCash, Maya)</p>
              <p className="text-base text-green-400 mt-2">Driven by mobile-first behavior</p>
            </div>
          </div>
        </div>

        {/* Key Insights Footer */}
        <div className="grid grid-cols-3 gap-6 flex-none">
          <div className="bg-blue-900/30 backdrop-filter backdrop-blur-lg border border-blue-400/30 rounded-xl p-4 text-center">
            <p className="text-lg font-semibold text-blue-300">Youth (18-34) are primary adopters</p>
          </div>
          <div className="bg-green-900/30 backdrop-filter backdrop-blur-lg border border-green-400/30 rounded-xl p-4 text-center">
            <p className="text-lg font-semibold text-green-300">Business size strongly correlates with usage</p>
          </div>
          <div className="bg-purple-900/30 backdrop-filter backdrop-blur-lg border border-purple-400/30 rounded-xl p-4 text-center">
            <p className="text-lg font-semibold text-purple-300">High mobile engagement is key infrastructure</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-400 text-xl flex-none">
          Demographic Analysis • User Adoption Patterns
        </div>
      </div>
    </div>
  );
}
