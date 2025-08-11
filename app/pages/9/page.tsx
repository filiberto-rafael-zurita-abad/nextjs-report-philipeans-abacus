'use client';

import { Shield, CheckCircle, Clock, Building, Globe } from 'lucide-react';
import { CustomPagination } from '@/components/ui/custom-pagination';
import { useSearchParams } from 'next/navigation';

// Trimmed to 4 key milestones to reduce vertical space
const milestones = [
  { year: '2020', title: 'Digital Payments Roadmap', status: 'completed', impact: 'High' },
  { year: '2021', title: 'Circular No. 1105 (Digital Banking)', status: 'completed', impact: 'High' },
  { year: '2023', title: 'InstaPay/PESONet Enhancement', status: 'completed', impact: 'High' },
  { year: '2024', title: 'Digital Bank Operations', status: 'active', impact: 'High' },
];

const achievements = [
  { target: 'Digital Payment Volume', goal: '50%', achieved: '57.4%', status: 'exceeded' },
  { target: 'Financial Inclusion', goal: '70%', achieved: '65.2%', status: 'progress' },
  { target: 'Digital Bank Framework', goal: 'Establish', achieved: 'Operational', status: 'completed' },
  { target: 'QR Ph Adoption', goal: 'Nationwide', achieved: '85%', status: 'progress' }
];

// This section was removed to simplify the layout and fix overflow.
// const regulatoryComponents = [ ... ];

export default function Slide9() {
  const searchParams = useSearchParams();
  const total = Number(searchParams.get('total')) || 1;
  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
      {/* Reduced vertical padding and gap to save space */}
      <div className="flex flex-col gap-6 h-full p-12">
        {/* Header */}
        <div className="text-center flex-none">
          <CustomPagination total={total} />
          {/* Reduced font sizes for better fit */}
          <h1 className="text-6xl font-bold mb-2 text-white flex items-center justify-center gap-6">
            <Shield size={60} className="text-blue-400" />
            Regulatory Excellence
          </h1>
          <p className="text-3xl text-gray-200">BSP's Digital-First Framework</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-[2fr_1fr] gap-8 flex-1 min-h-0">
          
          {/* Left Panel - Policy Roadmap */}
          <div className="flex flex-col gap-6">
            
            {/* Roadmap Timeline */}
            <div className="chart-container flex-1 min-h-0">
              <h3 className="text-3xl font-semibold mb-4 text-center text-blue-300">Policy Implementation Timeline</h3>
              <div className="flex-1 min-h-0 flex flex-col justify-center">
                <div className="relative">
                  {milestones?.map?.((milestone, index) => (
                    // Reduced margin-bottom to tighten the list
                    <div key={index} className="flex items-center gap-4 mb-4">
                      <div className="flex-none">
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center text-sm font-bold ${
                          milestone?.status === 'completed' ? 'bg-green-500 text-green-100' :
                          milestone?.status === 'active' ? 'bg-blue-500 text-blue-100' :
                          'bg-gray-500 text-gray-100'
                        }`}>
                          {milestone?.year}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="bg-slate-800/50 backdrop-filter backdrop-blur-lg border border-slate-600/30 rounded-xl p-3">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="text-lg font-semibold text-white">{milestone?.title}</h4>
                            <div className="flex items-center gap-2">
                              {milestone?.status === 'completed' && <CheckCircle className="text-green-400" size={18} />}
                              {milestone?.status === 'active' && <Clock className="text-blue-400" size={18} />}
                              <span className={`px-2 py-1 rounded text-xs font-semibold ${
                                milestone?.impact === 'High' ? 'bg-red-600/80 text-red-100' :
                                'bg-yellow-600/80 text-yellow-100'
                              }`}>
                                {milestone?.impact} Impact
                              </span>
                            </div>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-1.5">
                            <div 
                              className={`h-1.5 rounded-full transition-all duration-1000 ${
                                milestone?.status === 'completed' ? 'bg-green-500' :
                                milestone?.status === 'active' ? 'bg-blue-500' :
                                'bg-gray-500'
                              }`}
                              style={{ 
                                width: milestone?.status === 'completed' ? '100%' : 
                                       milestone?.status === 'active' ? '65%' : '25%' 
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Achievements */}
          <div className="flex flex-col gap-6 justify-center">
            
            {/* Achievement Dashboard */}
            <div className="chart-container bg-slate-800/30 backdrop-filter backdrop-blur-lg border border-slate-600/30 rounded-xl p-6">
              <h3 className="text-2xl font-semibold mb-4 text-center text-green-300">Target vs. Achievement</h3>
              <div className="space-y-4">
                {achievements?.map?.((item, index) => (
                  <div key={index} className="bg-slate-900/40 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-base font-semibold text-white">{item?.target}</h4>
                      <div className={`px-2 py-0.5 rounded text-xs font-semibold ${
                        item?.status === 'exceeded' ? 'bg-green-600/80 text-green-100' :
                        item?.status === 'completed' ? 'bg-blue-600/80 text-blue-100' :
                        'bg-yellow-600/80 text-yellow-100'
                      }`}>
                        {item?.status === 'exceeded' ? 'Exceeded' : 
                         item?.status === 'completed' ? 'Completed' : 'In Progress'}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Target: {item?.goal}</span>
                      <span className={`font-bold ${
                        item?.status === 'exceeded' ? 'text-green-400' :
                        item?.status === 'completed' ? 'text-blue-400' :
                        'text-yellow-400'
                      }`}>
                        Achieved: {item?.achieved}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Removed "Regulatory Innovation" section to fix overflow */}

          </div>
        </div>

        {/* Removed "BSP Digital Leadership Outcomes" and "Key Insights" sections to fix overflow */}

        {/* Footer */}
        <div className="text-center text-gray-400 text-base flex-none mt-auto">
          Regulatory Analysis • BSP Framework & Achievement Assessment
        </div>
      </div>
    </div>
  );
}
