export type CourseCategory = 'Writing' | 'Filmmaking' | 'Coding' | 'Music' | 'Art';
export type CourseLevel = 'beginner' | 'intermediate' | 'advanced';

export interface Course {
  id: string;
  title: string;
  description: string;
  category: CourseCategory;
  level: CourseLevel;
  hours: number;
  provider: string;
}

export const courses: Course[] = [
  {
    id: 'prompt-engineering',
    title: 'Prompt Engineering Masterclass',
    description: 'Learn to craft effective prompts for any AI model. From basic techniques to advanced chain-of-thought strategies.',
    category: 'Writing',
    level: 'beginner',
    hours: 6,
    provider: 'prettyparasites.ai',
  },
  {
    id: 'ai-filmmaking',
    title: 'AI Filmmaking: From Script to Screen',
    description: 'Complete workflow for creating short films with AI. Covers Runway, Pika, Sora, and post-production.',
    category: 'Filmmaking',
    level: 'intermediate',
    hours: 12,
    provider: 'prettyparasites.ai',
  },
  {
    id: 'langchain-agents',
    title: 'Building AI Agents with LangChain',
    description: 'Deep dive into autonomous AI agents. Build, deploy, and monitor agents that can perform complex tasks.',
    category: 'Coding',
    level: 'advanced',
    hours: 20,
    provider: 'prettyparasites.ai',
  },
  {
    id: 'ai-music',
    title: 'AI Music Production Fundamentals',
    description: 'Get started with AI music tools. Create melodies, arrangements, and full tracks using Suno and Udio.',
    category: 'Music',
    level: 'beginner',
    hours: 4,
    provider: 'prettyparasites.ai',
  },
  {
    id: 'creative-coding',
    title: 'Creative Coding with AI',
    description: 'Use AI as a creative partner in coding. Build generative art, interactive installations, and creative tools.',
    category: 'Coding',
    level: 'intermediate',
    hours: 10,
    provider: 'prettyparasites.ai',
  },
  {
    id: 'ai-art-direction',
    title: 'AI Art Direction & Visual Design',
    description: 'Master the art of directing AI image generators. Consistent styles, brand identity, and professional workflows.',
    category: 'Art',
    level: 'intermediate',
    hours: 8,
    provider: 'prettyparasites.ai',
  },
  {
    id: 'voice-cloning',
    title: 'Voice Cloning & AI Audio',
    description: 'Advanced techniques for voice synthesis, cloning, and AI-driven audio production.',
    category: 'Music',
    level: 'advanced',
    hours: 15,
    provider: 'prettyparasites.ai',
  },
  {
    id: 'ai-game-dev',
    title: 'AI for Game Development',
    description: 'Integrate AI into game development. NPC behavior, procedural generation, and AI-assisted asset creation.',
    category: 'Coding',
    level: 'intermediate',
    hours: 18,
    provider: 'prettyparasites.ai',
  },
];

export const levelColors: Record<CourseLevel, string> = {
  beginner: '#10b981',
  intermediate: '#eab308',
  advanced: '#8b5cf6',
};

export const categoryIcons: Record<CourseCategory, string> = {
  Writing: '✍️',
  Filmmaking: '🎬',
  Coding: '💻',
  Music: '🎵',
  Art: '🎨',
};
