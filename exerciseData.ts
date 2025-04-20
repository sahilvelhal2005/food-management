import { Exercise } from '../types';

export const exercises: Exercise[] = [
  {
    id: 1,
    name: 'Walking',
    description: 'A simple, low-impact exercise that almost anyone can do to improve cardiovascular health and maintain weight.',
    benefits: [
      'Improves cardiovascular health',
      'Burns calories and helps maintain weight',
      'Strengthens bones and muscles',
      'Reduces stress and improves mood'
    ],
    instructions: [
      'Start with comfortable, supportive shoes',
      'Begin with 10-15 minutes daily and gradually increase',
      'Maintain good posture with shoulders back and head up',
      'Swing arms naturally and take comfortable strides'
    ],
    imageUrl: 'https://images.pexels.com/photos/4149013/pexels-photo-4149013.jpeg',
    duration: '30-60 minutes',
    difficulty: 'easy'
  },
  {
    id: 2,
    name: 'Yoga',
    description: 'A mind-body practice that combines physical postures, breathing techniques, and meditation or relaxation.',
    benefits: [
      'Increases flexibility and balance',
      'Builds strength and muscle tone',
      'Reduces stress and anxiety',
      'Improves focus and mental clarity'
    ],
    instructions: [
      'Find a quiet, comfortable space',
      'Use a yoga mat for comfort and stability',
      'Start with beginner poses and proper alignment',
      'Focus on your breath throughout the practice'
    ],
    imageUrl: 'https://images.pexels.com/photos/3822906/pexels-photo-3822906.jpeg',
    duration: '15-60 minutes',
    difficulty: 'medium'
  },
  {
    id: 3,
    name: 'Strength Training',
    description: 'Physical exercise specializing in the use of resistance to induce muscular contraction, building strength and size of muscles.',
    benefits: [
      'Builds and preserves muscle mass',
      'Strengthens bones and prevents osteoporosis',
      'Increases metabolic rate',
      'Improves body composition'
    ],
    instructions: [
      'Start with light weights and proper form',
      'Perform 8-12 repetitions per set',
      'Allow muscles to recover 48 hours between sessions',
      'Gradually increase weight as you get stronger'
    ],
    imageUrl: 'https://images.pexels.com/photos/38630/bodybuilder-weight-training-stress-38630.jpeg',
    duration: '20-45 minutes',
    difficulty: 'medium'
  },
  {
    id: 4,
    name: 'Swimming',
    description: 'A full-body workout that\'s gentle on joints while providing cardiovascular and strength benefits.',
    benefits: [
      'Works nearly all muscles in the body',
      'Improves cardiovascular health',
      'Low-impact, gentle on joints',
      'Helps maintain a healthy weight'
    ],
    instructions: [
      'Start with a comfortable stroke like breaststroke',
      'Use proper breathing techniques',
      'Begin with shorter sessions and gradually increase',
      'Consider taking lessons to improve technique'
    ],
    imageUrl: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg',
    duration: '30-45 minutes',
    difficulty: 'medium'
  },
  {
    id: 5,
    name: 'HIIT (High-Intensity Interval Training)',
    description: 'A training technique that involves intense bursts of exercise followed by short recovery periods.',
    benefits: [
      'Burns calories efficiently',
      'Improves metabolic rate for hours after exercise',
      'Can be completed in a short time',
      'Improves cardiovascular health'
    ],
    instructions: [
      'Warm up properly before starting',
      'Work at maximum effort during intense intervals',
      'Allow full recovery during rest periods',
      'Start with shorter sessions and build up gradually'
    ],
    imageUrl: 'https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg',
    duration: '15-30 minutes',
    difficulty: 'hard'
  }
];