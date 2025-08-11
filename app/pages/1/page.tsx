
'use client';

import { DollarSign, TrendingUp, Users, Globe, Smartphone } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { CustomPagination } from '@/components/ui/custom-pagination';
import { useSearchParams } from 'next/navigation';

const marketData = [
  { name: 'Digital Payments', value: 57.4, color: '#3182ce' },
  { name: 'Cash Payments', value: 42.6, color: '#ed8936' }
];

export default function Slide1() {
  const searchParams = useSearchParams();
  const total = Number(searchParams.get('total')) || 1;
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
      <div className="flex flex-col gap-8 h-full p-16">
        {/* Title Section */}
        <div className="text-center flex-none">
          <CustomPagination total={total} />
          <h1 className="text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Philippines Digital Payments
          </h1>
          <p className="text-4xl text-gray-200 mb-4">
            A $43.65B Market Transformation
          </p>
          <div className="highlight-box text-2xl inline-block">
            From Cash-Dominant to Digital-First in 5 Years
          </div>
        </div>

        {/* Main Dashboard Content */}
        <div className="grid grid-cols-[2fr_3fr] gap-16 flex-1 min-h-0">
          {/* Left Panel - Key Metrics */}
          <div className="flex flex-col gap-6 justify-center">
            <div className="grid grid-cols-2 gap-6">
              <div className="metric-card text-center">
                <DollarSign className="mx-auto mb-3 text-blue-400" size={40} />
                <div className="text-4xl font-bold text-blue-400 mb-1">$43.65B</div>
                <div className="text-xl text-gray-200">Total Market Value</div>
                <div className="text-base text-gray-300 mt-1">2024</div>
              </div>
              <div className="metric-card text-center">
                <TrendingUp className="mx-auto mb-3 text-green-400" size={40} />
                <div className="text-4xl font-bold text-green-400 mb-1">13.8%</div>
                <div className="text-xl text-gray-200">CAGR Growth</div>
                <div className="text-base text-gray-300 mt-1">2024-2030</div>
              </div>
              <div className="metric-card text-center">
                <Smartphone className="mx-auto mb-3 text-purple-400" size={40} />
                <div className="text-4xl font-bold text-purple-400 mb-1">57.4%</div>
                <div className="text-xl text-gray-200">Digital Adoption</div>
                <div className="text-base text-gray-300 mt-1">Retail Transactions</div>
              </div>
              <div className="metric-card text-center">
                <Globe className="mx-auto mb-3 text-orange-400" size={40} />
                <div className="text-4xl font-bold text-orange-400 mb-1">#1</div>
                <div className="text-xl text-gray-200">Global Ranking</div>
                <div className="text-base text-gray-300 mt-1">91.3% App Usage</div>
              </div>
            </div>
          </div>

          {/* Right Panel - Central Chart */}
          <div className="chart-container flex flex-col bg-slate-900/50 rounded-2xl p-6">
            <h3 className="text-2xl font-semibold mb-4 text-center">Digital vs Cash Payment Volume (2023)</h3>
            <div className="flex-1 min-h-0 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={marketData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={160}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {marketData?.map?.((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry?.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-8 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: '#3182ce' }}></div>
                <span className="text-lg">Digital (57.4%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded" style={{ backgroundColor: '#ed8936' }}></div>
                <span className="text-lg">Cash (42.6%)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-400 text-base flex-none">
          <p>Philippines Digital Payments Market Analysis • 2024 • Executive Dashboard</p>
        </div>
      </div>
    </div>
  );
}
