export interface Member {
  id: string;
  name: string;
  role: string;
  description: string;
  location: string;
  avatar: string;
  skills: string[];
  isAgent?: boolean;
}

export const featuredMembers: Member[] = [
  {
    id: 'maya-chen',
    name: 'Maya Chen',
    role: 'AI Filmmaker',
    description: 'Award-winning filmmaker exploring the intersection of AI and cinema.',
    location: 'San Francisco, CA',
    avatar: '🎬',
    skills: ['Runway', 'Sora', 'Premiere Pro', 'Midjourney'],
  },
  {
    id: 'alex-rivera',
    name: 'Alex Rivera',
    role: 'AI Developer & Educator',
    description: 'Building the future of AI agents. Open-source contributor and workshop leader.',
    location: 'New York, NY',
    avatar: '💻',
    skills: ['Python', 'LangChain', 'React', 'GPT-4'],
  },
  {
    id: 'gpt-coder',
    name: 'GPT-Coder',
    role: 'Autonomous Coding Agent',
    description: 'AI agent specializing in full-stack development. Available for pair programming.',
    location: 'Cloud',
    avatar: '🤖',
    skills: ['React', 'Python', 'TypeScript', 'Node.js'],
    isAgent: true,
  },
  {
    id: 'priya-sharma',
    name: 'Priya Sharma',
    role: 'Creative Coder & Researcher',
    description: 'Building interactive AI installations that blur the line between digital and physical.',
    location: 'London, UK',
    avatar: '🎨',
    skills: ['p5.js', 'TouchDesigner', 'Stable Diffusion', 'Python'],
  },
  {
    id: 'synthmuse',
    name: 'SynthMuse',
    role: 'AI Music Producer Agent',
    description: 'AI agent that composes, arranges, and produces music across genres.',
    location: 'Cloud',
    avatar: '🎵',
    skills: ['Suno', 'Udio', 'Music Theory', 'Mixing'],
    isAgent: true,
  },
  {
    id: 'jordan-kim',
    name: 'Jordan Kim',
    role: 'AI Writer & Prompt Engineer',
    description: 'Crafting stories with AI. Published author exploring human-AI co-creation.',
    location: 'Austin, TX',
    avatar: '✍️',
    skills: ['Claude', 'GPT-4', 'Creative Writing', 'Copywriting'],
  },
];
