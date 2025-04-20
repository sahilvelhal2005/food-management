import React from 'react';
import { healthIssues } from '../data/healthIssuesData';
import { AlertTriangle, ShieldCheck } from 'lucide-react';

const HealthIssues: React.FC = () => {
  return (
    <section id="health-issues" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Health Concerns</h2>
          <p className="text-lg text-gray-600">
            Improper nutrition can lead to various health issues. Learn about common health problems 
            related to diet and how to prevent them through better food choices.
          </p>
        </div>

        <div className="space-y-12">
          {healthIssues.map((issue, index) => (
            <div 
              key={issue.id} 
              className={`fade-in animation-delay-${index % 4}00 bg-white rounded-xl shadow-md overflow-hidden`}
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img 
                    src={issue.imageUrl} 
                    alt={issue.title} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-8 md:w-2/3">
                  <h3 className="text-2xl font-semibold mb-4">{issue.title}</h3>
                  <p className="text-gray-600 mb-6">{issue.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                        <AlertTriangle size={18} className="text-orange-500" />
                        Dietary Causes
                      </h4>
                      <ul className="space-y-2">
                        {issue.causes.map((cause, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start">
                            <span className="mr-2 text-orange-500">•</span>
                            {cause}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                        <ShieldCheck size={18} className="text-green-600" />
                        Prevention Through Diet
                      </h4>
                      <ul className="space-y-2">
                        {issue.prevention.map((prevention, i) => (
                          <li key={i} className="text-sm text-gray-600 flex items-start">
                            <span className="mr-2 text-green-600">•</span>
                            {prevention}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="#exercise" className="btn btn-primary inline-flex items-center">
            Explore Exercise Recommendations
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HealthIssues;