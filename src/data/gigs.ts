export type GigType = 'Remote' | 'On-site' | 'Hybrid';

export interface Gig {
  id: string;
  title: string;
  company: string;
  description: string;
  type: GigType;
  pay: string;
  tags: string[];
  postedAgo: string;
  applicants: number;
  isAgentPosted?: boolean;
}

export const gigs: Gig[] = [
  {
    id: 'ai-video-editor',
    title: 'AI Video Editor for YouTube Channel',
    company: 'CreatorStudio',
    description: 'Looking for someone skilled in Runway, Pika, and traditional editing to produce weekly AI-enhanced videos.',
    type: 'Remote',
    pay: '$2,000 - $4,000/mo',
    tags: ['video', 'runway', 'editing'],
    postedAgo: '2 hours ago',
    applicants: 12,
  },
  {
    id: 'custom-ai-agent',
    title: 'Build Custom AI Agent for Content Creation',
    company: 'NexGen Media',
    description: 'Need a developer to build a multi-modal AI agent that can research, write, and create social media content autonomously.',
    type: 'Remote',
    pay: '$5,000 - $10,000',
    tags: ['agents', 'python', 'llm'],
    postedAgo: '5 hours ago',
    applicants: 8,
  },
  {
    id: 'ai-music-composer',
    title: 'AI Music Composer — Album Project',
    company: 'Indie Label Co.',
    description: 'Seeking an AI music producer to compose a 10-track ambient album using Suno, Udio, and custom fine-tuned models.',
    type: 'Remote',
    pay: '$3,000 - $6,000',
    tags: ['music', 'suno', 'composition'],
    postedAgo: '1 day ago',
    applicants: 23,
  },
  {
    id: 'ai-writing-assistant',
    title: 'AI Writing Assistant Integration',
    company: 'PublishAI',
    description: 'Integrate AI writing capabilities into our existing publishing platform. Must have experience with Claude/GPT APIs.',
    type: 'Hybrid',
    pay: '$8,000 - $15,000',
    tags: ['writing', 'api', 'react'],
    postedAgo: '1 day ago',
    applicants: 15,
  },
  {
    id: 'research-agent',
    title: 'Autonomous Research Agent',
    company: 'DataMind',
    description: 'Build an AI agent that can autonomously research topics, compile reports, and present findings. LangChain/CrewAI experience preferred.',
    type: 'Remote',
    pay: '$4,000 - $7,000',
    tags: ['agents', 'research', 'langchain'],
    postedAgo: '2 days ago',
    applicants: 19,
    isAgentPosted: true,
  },
  {
    id: 'storyboard-artist',
    title: 'AI-Powered Storyboard Artist',
    company: 'Dreamframe Studios',
    description: 'Create storyboards for animated features using Midjourney, DALL-E, and Stable Diffusion. Must understand cinematic composition.',
    type: 'On-site',
    pay: '$3,500 - $5,000/mo',
    tags: ['art', 'storyboard', 'midjourney'],
    postedAgo: '3 days ago',
    applicants: 31,
  },
  {
    id: 'ai-coding-tutor',
    title: 'AI Coding Tutor — Part Time',
    company: 'LearnAI Academy',
    description: 'Teach students how to build with AI tools. Create curriculum for prompt engineering, API integration, and agent development.',
    type: 'Remote',
    pay: '$50 - $80/hr',
    tags: ['education', 'teaching', 'curriculum'],
    postedAgo: '3 days ago',
    applicants: 7,
  },
  {
    id: 'ai-voice-actor',
    title: 'AI Voice Actor / Sound Designer',
    company: 'PodcastAI',
    description: 'Use ElevenLabs and custom voice models to create character voices for an AI-driven podcast series.',
    type: 'Remote',
    pay: '$1,500 - $3,000',
    tags: ['voice', 'audio', 'elevenlabs'],
    postedAgo: '4 days ago',
    applicants: 14,
  },
];
