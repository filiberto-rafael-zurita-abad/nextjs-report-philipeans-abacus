'use client';

import { useState } from 'react';
import { ChevronDown, ChevronRight, Users, Target, Cog, Shield, CheckCircle, AlertTriangle } from 'lucide-react';
import { CustomPagination } from '@/components/ui/custom-pagination';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const strategicQuestions = [
  {
    id: 1,
    title: 'Market Entry Strategy',
    icon: Target,
    content: {
      analysis: 'Market dominated by GCash (89%) and Maya (11%).',
      opportunities: [
        'White-label partnerships with existing players',
        'Niche vertical specialization (B2B, rural)',
        'Telco infrastructure partnerships'
      ],
      decisions: [
        'Direct competition vs. partnership',
        'Urban expansion vs. rural penetration',
        'Service differentiation'
      ]
    }
  },
  {
    id: 2,
    title: 'Target Segment Prioritization',
    icon: Users,
    content: {
      analysis: 'Youth market (18-34) shows high adoption but is saturating.',
      opportunities: [
        'B2B payments: High-growth potential',
        'Rural expansion: 20M+ underserved population',
        'SME digitization support'
      ],
      decisions: [
        'Focus: Saturated youth vs. underserved B2B',
        'Geography: Urban density vs. rural greenfield',
        'Service depth vs. breadth'
      ]
    }
  },
  {
    id: 3,
    title: 'Technology & Infrastructure',
    icon: Cog,
    content: {
      analysis: 'Infrastructure gaps (61% 4G coverage) limit rural expansion.',
      opportunities: [
        'Partner with World Bank $287M project',
        'Collaborate with Telcos on connectivity',
        'Integrate AI/blockchain for advantage'
      ],
      decisions: [
        'Build vs. partner technology stack',
        'Infrastructure investment priority',
        'Rural connectivity approach'
      ]
    }
  },
  {
    id: 4,
    title: 'Regulatory & Compliance',
    icon: Shield,
    content: {
      analysis: 'BSP offers a clear, innovation-friendly framework.',
      opportunities: [
        'Digital bank license (₱1.0B capital)',
        'Utilize regulatory sandbox for innovation',
        'Up to 100% foreign ownership for banks'
      ],
      decisions: [
        'Digital bank license vs. partnership',
        'Compliance investment timing',
        'Regulatory relationship strategy'
      ]
    }
  }
];

const executiveSummary = {
  verdict: 'Attractive high-growth market with supportive regulations.',
  successFactors: [
    'Strategic partnerships over direct competition',
    'Rural connectivity investment for expansion',
    'Differentiated value for underserved segments'
  ],
  riskMitigation: [
    'Cybersecurity investment (high threat)',
    'Talent retention programs',
    'Infrastructure dependency planning'
  ]
};

const actionItems = [
  { item: 'Conduct competitive analysis', completed: false },
  { item: 'Evaluate partnership opportunities', completed: false },
  { item: 'Assess tech infrastructure needs', completed: false },
  { item: 'Develop compliance roadmap', completed: false }
];

function Slide11Component() {
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(1);
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const searchParams = useSearchParams();
  const total = Number(searchParams.get('total')) || 1;

  const toggleQuestion = (id: number) => {
    setExpandedQuestion(expandedQuestion === id ? null : id);
  };

  const toggleActionItem = (index: number) => {
    setCheckedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="relative overflow-hidden w-[1920px] h-[1080px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 text-white">
      <div className="flex flex-col gap-6 h-full p-16">
        {/* Header */}
        <div className="text-center flex-none">
          <CustomPagination total={total} />
          <h1 className="text-6xl font-bold mb-2 text-white flex items-center justify-center gap-6">
            <CheckCircle size={60} className="text-green-400" />
            Strategic Decision Framework
          </h1>
          <p className="text-3xl text-gray-300">Key Questions for Market Entry</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-[3fr_2fr] gap-8 flex-1 min-h-0">
          
          {/* Left Panel - Interactive Questions */}
          <div className="flex flex-col gap-4 min-h-0">
            <h3 className="text-3xl font-semibold text-blue-300">Strategic Decision Points</h3>
            <div className="space-y-3 flex-1 min-h-0">
              {strategicQuestions?.map?.((question) => {
                const IconComponent = question?.icon;
                const isExpanded = expandedQuestion === question?.id;
                
                return (
                  <div key={question?.id} className="bg-slate-800/50 backdrop-filter backdrop-blur-lg border border-slate-600/30 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleQuestion(question?.id)}
                      className="w-full p-4 flex items-center gap-4 hover:bg-slate-700/30 transition-colors"
                    >
                      <IconComponent className="text-blue-400" size={28} />
                      <h4 className="text-xl font-semibold text-white flex-1 text-left">{question?.title}</h4>
                      {isExpanded ? 
                        <ChevronDown className="text-blue-400" size={24} /> : 
                        <ChevronRight className="text-blue-400" size={24} />
                      }
                    </button>
                    
                    {isExpanded && (
                      <div className="p-4 pt-0">
                        <div className="space-y-3 pt-3 border-t border-slate-600/30">
                          <div>
                            <h5 className="text-base font-semibold text-green-300 mb-1">Analysis:</h5>
                            <p className="text-base text-gray-300">{question?.content?.analysis}</p>
                          </div>
                          <div>
                            <h5 className="text-base font-semibold text-blue-300 mb-1">Opportunities:</h5>
                            <ul className="space-y-1">
                              {question?.content?.opportunities?.map?.((opp, index) => (
                                <li key={index} className="text-base text-gray-300 flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-none"></div>
                                  {opp}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Panel - Executive Summary & Actions */}
          <div className="flex flex-col gap-4">
            
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-600/30">
              <h3 className="text-2xl font-semibold mb-3 text-center text-green-300">Executive Summary</h3>
              <div className="space-y-3">
                <p className="text-base text-center bg-green-900/30 p-2 rounded-lg border border-green-500/30">
                  <span className="font-bold text-green-300">Verdict:</span> {executiveSummary?.verdict}
                </p>
                <div>
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">Success Factors</h4>
                  <ul className="space-y-1">
                    {executiveSummary?.successFactors?.map?.((factor, index) => (
                      <li key={index} className="text-base text-gray-300 flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-none"></div>
                        {factor}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-red-300 mb-2">Risk Mitigation</h4>
                  <ul className="space-y-1">
                    {executiveSummary?.riskMitigation?.map?.((risk, index) => (
                      <li key={index} className="text-base text-gray-300 flex items-start gap-2">
                        <AlertTriangle className="text-red-400 flex-none mt-1" size={16} />
                        {risk}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-600/30 flex-1 flex flex-col">
              <h3 className="text-2xl font-semibold mb-3 text-center text-purple-300">Action Items</h3>
              <div className="space-y-2 flex-grow">
                {actionItems?.map?.((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 bg-purple-900/20 rounded-lg">
                    <button
                      onClick={() => toggleActionItem(index)}
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all flex-none ${
                        checkedItems.includes(index)
                          ? 'bg-green-500 border-green-500'
                          : 'border-purple-400 hover:border-purple-300'
                      }`}
                    >
                      {checkedItems.includes(index) && <CheckCircle className="text-white" size={14} />}
                    </button>
                    <span className={`text-base transition-all ${
                      checkedItems.includes(index) ? 'text-gray-500 line-through' : 'text-gray-200'
                    }`}>
                      {item?.item}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-3 text-center">
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="h-2.5 rounded-full bg-gradient-to-r from-purple-400 to-green-400 transition-all duration-500"
                    style={{ width: `${(checkedItems?.length / actionItems?.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-400 text-base flex-none mt-2">
          Strategic Conclusions • Decision Framework • Market Readiness
        </div>
      </div>
    </div>
  );
}

export default function Slide11() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Slide11Component />
    </Suspense>
  );
}
