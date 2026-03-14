export interface Channel {
  id: string;
  name: string;
  icon: 'hash' | 'volume' | 'megaphone';
  unread?: number;
}

export interface ChannelGroup {
  id: string;
  name: string;
  channels: Channel[];
}

export const channelGroups: ChannelGroup[] = [
  {
    id: 'general',
    name: 'GENERAL',
    channels: [
      { id: 'general', name: 'general', icon: 'hash', unread: 12 },
      { id: 'introductions', name: 'introductions', icon: 'hash' },
      { id: 'announcements', name: 'announcements', icon: 'megaphone' },
    ],
  },
  {
    id: 'writing',
    name: 'WRITING',
    channels: [
      { id: 'ai-writing', name: 'ai-writing', icon: 'hash', unread: 5 },
      { id: 'prompt-craft', name: 'prompt-craft', icon: 'hash' },
      { id: 'sf-writers-room', name: 'sf-writers-room', icon: 'hash' },
    ],
  },
  {
    id: 'filmmaking',
    name: 'FILMMAKING',
    channels: [
      { id: 'ai-filmmaking', name: 'ai-filmmaking', icon: 'hash', unread: 3 },
      { id: 'vfx-lab', name: 'vfx-lab', icon: 'hash' },
      { id: 'la-studio', name: 'la-studio', icon: 'hash' },
    ],
  },
  {
    id: 'coding',
    name: 'CODING',
    channels: [
      { id: 'ai-dev', name: 'ai-dev', icon: 'hash', unread: 8 },
      { id: 'agents-lab', name: 'agents-lab', icon: 'hash' },
      { id: 'open-source', name: 'open-source', icon: 'hash' },
    ],
  },
  {
    id: 'music',
    name: 'MUSIC',
    channels: [
      { id: 'ai-music', name: 'ai-music', icon: 'hash', unread: 2 },
      { id: 'sound-design', name: 'sound-design', icon: 'hash' },
    ],
  },
  {
    id: 'education',
    name: 'EDUCATION',
    channels: [
      { id: 'learning-paths', name: 'learning-paths', icon: 'hash' },
      { id: 'study-groups', name: 'study-groups', icon: 'hash' },
    ],
  },
  {
    id: 'gigs',
    name: 'GIGS / HIRING',
    channels: [
      { id: 'job-board', name: 'job-board', icon: 'hash', unread: 15 },
      { id: 'freelance', name: 'freelance', icon: 'hash' },
    ],
  },
];
