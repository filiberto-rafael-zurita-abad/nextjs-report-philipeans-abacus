'use client';

import { Wifi, MapPin, Building2, DollarSign, TrendingUp } from 'lucide-react';
import { CustomPagination } from '@/components/ui/custom-pagination';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const infrastructureData = {
  regions: [
    { name: 'NCR', coverage: 95, color: '#10b981' },
    { name: 'Central Luzon', coverage: 89, color: '#22c55e' },
    { name: 'CALABARZON', coverage: 87, color: '#34d399' },
    { name: 'Central Visayas', coverage: 82, color: '#4ade80' },
    { name: 'Davao Region', coverage: 78, color: '#6ee7b7' },
    { name: 'Western Visayas', coverage: 74, color: '#86efac' },
  ]
};

const investmentMetrics = [
  { title: 'Mobile Signal Reach', value: '92%', subtitle: 'of barangays', icon: Wifi },
  { title: '4G Coverage', value: '61%', subtitle: 'national average', icon: MapPin },
  { title: 'Fixed Broadband', value: '18%', subtitle: 'household penetration', icon: Building2 },
  { title: 'Cost Barrier', value: '11.3%', subtitle: 'of GNI per capita', icon: DollarSign }
];

function Slide6Component() {
  const searchParams = useSearchParams();
  const total = Number(searchParams.get('total')) || 1;
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
      <div className="flex flex-col gap-10 h-full p-16">
        {/* Header */}
        <div className="text-center flex-none">
          <CustomPagination total={total} />
          <h1 className="text-7xl font-bold mb-2 text-white flex items-center justify-center gap-6">
            <MapPin size={70} className="text-blue-400" />
            Digital Divide
          </h1>
          <p className="text-4xl text-gray-300">Infrastructure as the Growth Bottleneck</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-[2fr_1fr] gap-12 flex-1 min-h-0">
          
          {/* Left Panel - Regional Coverage Map */}
          <div className="flex flex-col gap-8 bg-slate-900/30 p-8 rounded-2xl">
            <h3 className="text-4xl font-semibold text-center text-gray-100 flex-none">4G Coverage by Region</h3>
            <div className="flex-1 min-h-0 flex flex-col justify-center space-y-4">
              {infrastructureData.regions.map((region, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-48 text-right text-xl font-medium flex-none">{region.name}</div>
                  <div className="flex-1 bg-gray-700 rounded-full h-8 relative">
                    <div 
                      className="h-8 rounded-full flex items-center justify-end pr-3 text-base font-bold transition-all duration-1000"
                      style={{ 
                        width: `${region.coverage}%`,
                        backgroundColor: region.color
                      }}
                    >
                      {region.coverage}%
                    </div>
                  </div>
                  <div className="w-24 text-left text-lg text-gray-400 flex-none">
                    {region.coverage >= 85 ? 'High' : region.coverage >= 75 ? 'Medium' : 'Low'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel - Infrastructure Metrics */}
          <div className="flex flex-col gap-8">
            
            {/* Connectivity Stats */}
            <div className="grid grid-cols-2 gap-6">
              {investmentMetrics.map((metric, index) => {
                const IconComponent = metric.icon;
                return (
                  <div key={index} className="bg-slate-900/30 p-6 rounded-2xl flex flex-col">
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent className="text-blue-400" size={28} />
                      <h4 className="text-xl font-semibold">{metric.title}</h4>
                    </div>
                    <div className="mt-auto">
                      <div className="text-5xl font-bold text-blue-300 mb-1">{metric.value}</div>
                      <p className="text-lg text-gray-400">{metric.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Infrastructure Investment Panel */}
            <div className="bg-slate-900/30 p-6 rounded-2xl flex-1 flex flex-col">
              <h3 className="text-2xl font-semibold mb-4 text-center text-purple-300 flex-none">Key Investments & Growth</h3>
              <div className="flex-1 grid grid-rows-2 gap-4 content-evenly">
                <div className="text-center">
                  <p className="text-lg text-purple-400 font-semibold">World Bank Funding</p>
                  <p className="text-4xl font-bold text-white">$287M</p>
                  <p className="text-base text-gray-400">for digital infrastructure</p>
                </div>
                <div className="text-center">
                  <p className="text-lg text-green-400 font-semibold">Cell Towers Growth (20-23)</p>
                  <p className="text-4xl font-bold text-white flex items-center justify-center gap-3">
                    17.8K <TrendingUp className="text-green-400" size={32} /> 35K
                  </p>
                  <p className="text-base text-gray-400">Doubling national capacity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Slide6() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Slide6Component />
    </Suspense>
  );
}
