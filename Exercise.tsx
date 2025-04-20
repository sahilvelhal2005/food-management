import React, { useState } from 'react';
import { exercises } from '../data/exerciseData';
import { Clock, BarChart, ListChecks } from 'lucide-react';

const Exercise: React.FC = () => {
  const [selectedExercise, setSelectedExercise] = useState(exercises[0]);

  return (
    <section id="exercise" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Exercise Recommendations</h2>
          <p className="text-lg text-gray-600">
            Regular physical activity is essential for maintaining good health. 
            Here are some recommended exercises to complement proper nutrition.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1 space-y-4">
            {exercises.map((exercise) => (
              <div
                key={exercise.id}
                className={`fade-in p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                  selectedExercise.id === exercise.id
                    ? 'bg-green-100 border-l-4 border-green-600'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
                onClick={() => setSelectedExercise(exercise)}
              >
                <h3 className="font-medium">{exercise.name}</h3>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <Clock size={14} className="mr-1" />
                  <span>{exercise.duration}</span>
                  <span className="mx-2">•</span>
                  <span className={`capitalize ${
                    exercise.difficulty === 'easy' ? 'text-green-600' :
                    exercise.difficulty === 'medium' ? 'text-orange-500' : 'text-red-500'
                  }`}>
                    {exercise.difficulty}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="md:col-span-2 bg-white rounded-xl shadow-md overflow-hidden fade-in">
            <div className="h-64 overflow-hidden">
              <img 
                src={selectedExercise.imageUrl} 
                alt={selectedExercise.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{selectedExercise.name}</h3>
              <p className="text-gray-600 mb-6">{selectedExercise.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                    <BarChart size={18} className="text-green-600" />
                    Benefits
                  </h4>
                  <ul className="space-y-2">
                    {selectedExercise.benefits.map((benefit, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start">
                        <span className="mr-2 text-green-600">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-3 flex items-center gap-2">
                    <ListChecks size={18} className="text-green-600" />
                    How to Get Started
                  </h4>
                  <ol className="space-y-2">
                    {selectedExercise.instructions.map((instruction, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-start">
                        <span className="mr-2 font-medium text-green-600">{i + 1}.</span>
                        {instruction}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="#donate" className="btn btn-primary inline-flex items-center">
            Donate Food
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Exercise;