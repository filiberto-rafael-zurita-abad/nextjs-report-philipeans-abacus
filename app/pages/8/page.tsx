'use client';

import { Smartphone, Star, TrendingUp, Users, CreditCard } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';
import { CustomPagination } from '@/components/ui/custom-pagination';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const globalComparison = [
  { country: 'Philippines', usage: 91.3, color: '#10b981' },
  { country: 'Singapore', usage: 78.2, color: '#3b82f6' },
  { country: 'Indonesia', usage: 65.4, color: '#8b5cf6' },
  { country: 'Thailand', usage: 52.1, color: '#f59e0b' },
  { country: 'Global Avg.', usage: 37.8, color: '#6b7280' }
];

const appUsageData = [
  { app: 'GCash', usage: 94, color: '#059669' },
  { app: 'Maya', usage: 39, color: '#0891b2' },
  { app: 'ShopeePay', usage: 26, color: '#c2410c' },
];

const serviceTypes = [
  { service: 'Balance Checking', frequency: 95, satisfaction: 96 },
  { service: 'Bill Payments', frequency: 80, satisfaction: 92 },
  { service: 'Money Transfers', frequency: 80, satisfaction: 89 },
];

function Slide8Component() {
  const searchParams = useSearchParams();
  const total = Number(searchParams.get('total')) || 1;
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
      <div className="flex flex-col gap-6 h-full p-12">
        {/* Header */}
        <div className="text-center flex-none">
          <CustomPagination total={total} />
          <h1 className="text-6xl font-bold mb-2 text-white flex items-center justify-center gap-4">
            <Smartphone size={64} className="text-blue-400" />
            Consumer Confidence
          </h1>
          <p className="text-3xl text-gray-300">91.3% Monthly Financial App Usage</p>
        </div>

        {/* Main Dashboard */}
        <div className="grid grid-cols-2 gap-8 flex-1 min-h-0">
          
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            
            {/* Global Leadership Panel */}
            <div className="bg-slate-800/50 p-6 rounded-xl flex flex-col flex-1 min-h-0">
              <div className="flex items-center gap-4 mb-4 flex-none">
                <Star className="text-yellow-400" size={28} />
                <h3 className="text-2xl font-semibold text-yellow-300">Global Leadership Position</h3>
              </div>
              <div className="flex-1 min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={globalComparison} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis type="number" domain={[0, 100]} stroke="#9CA3AF" fontSize={14} tickFormatter={(value) => `${value}%`} />
                    <YAxis type="category" dataKey="country" stroke="#9CA3AF" fontSize={14} width={110} axisLine={false} tickLine={false} />
                    <Bar dataKey="usage" radius={[0, 4, 4, 0]}>
                      {globalComparison?.map?.((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry?.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* App Preference */}
            <div className="bg-slate-800/50 p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-4">
                <CreditCard className="text-blue-400" size={28} />
                <h3 className="text-2xl font-semibold text-blue-300">App Usage Distribution</h3>
              </div>
              <div className="space-y-3">
                {appUsageData?.map?.((app, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-24 text-right text-base font-medium">{app?.app}</div>
                    <div className="flex-1 bg-gray-700 rounded-full h-6 relative">
                      <div 
                        className="h-6 rounded-full flex items-center justify-end pr-3 text-sm font-bold"
                        style={{ width: `${app?.usage}%`, backgroundColor: app?.color }}
                      >
                        {app?.usage}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            
            {/* Service Preference Matrix */}
            <div className="bg-slate-800/50 p-6 rounded-xl flex flex-col flex-1 min-h-0">
              <div className="flex items-center gap-4 mb-4 flex-none">
                <TrendingUp className="text-green-400" size={28} />
                <h3 className="text-2xl font-semibold text-green-300">Service Usage & Satisfaction</h3>
              </div>
              <div className="space-y-4 flex flex-col justify-around flex-1">
                {serviceTypes?.map?.((service, index) => (
                  <div key={index} className="bg-green-900/20 border border-green-400/30 rounded-xl p-3">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-green-300">{service?.service}</h4>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">Satisfaction</div>
                        <div className="text-lg font-bold text-green-400">{service?.satisfaction}%</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-sm text-gray-400 w-16">Usage:</div>
                      <div className="flex-1 bg-gray-700 rounded-full h-2.5 relative">
                        <div className="h-2.5 rounded-full bg-gradient-to-r from-green-400 to-green-600" style={{ width: `${service?.frequency}%` }} />
                      </div>
                      <div className="text-sm font-bold text-green-400 w-12">{service?.frequency}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sentiment Tracking */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-800/50 p-4 rounded-xl text-center">
                <Users className="mx-auto mb-2 text-purple-400" size={32} />
                <div className="text-4xl font-bold text-purple-400">97%</div>
                <p className="text-base text-gray-200">Will Continue Digital Use</p>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl text-center">
                <Smartphone className="mx-auto mb-2 text-orange-400" size={32} />
                <div className="text-4xl font-bold text-orange-400">56%</div>
                <p className="text-base text-gray-200">Prefer Digital Wallet</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="grid grid-cols-3 gap-6 flex-none pt-2">
          <div className="bg-yellow-900/40 backdrop-blur-lg border border-yellow-400/30 rounded-xl p-4 text-center">
            <Star className="mx-auto mb-2 text-yellow-400" size={24} />
            <p className="text-base font-semibold text-yellow-300">Global #1 in financial app adoption</p>
          </div>
          <div className="bg-green-900/40 backdrop-blur-lg border border-green-400/30 rounded-xl p-4 text-center">
            <TrendingUp className="mx-auto mb-2 text-green-400" size={24} />
            <p className="text-base font-semibold text-green-300">High satisfaction across key services</p>
          </div>
          <div className="bg-blue-900/40 backdrop-blur-lg border border-blue-400/30 rounded-xl p-4 text-center">
            <Users className="mx-auto mb-2 text-blue-400" size={24} />
            <p className="text-base font-semibold text-blue-300">Strong digital-first preference</p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-400 text-base flex-none">
          Source: Consumer Sentiment Analysis, Q3 2023
        </div>
      </div>
    </div>
  );
}

export default function Slide8() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Slide8Component />
    </Suspense>
  );
}
