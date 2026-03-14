import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { channelGroups, type ChannelGroup } from '../data/channels';

interface SidebarProps {
  isOpen: boolean;
}

function ChannelGroupSection({ group }: { group: ChannelGroup }) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="mb-1">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-1 w-full px-2 py-1.5 text-[11px] font-semibold text-gray-500 hover:text-gray-300 uppercase tracking-wider transition-colors"
      >
        <svg
          className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-0' : '-rotate-90'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        {group.name}
      </button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            {group.channels.map((channel) => (
              <button
                key={channel.id}
                className="flex items-center justify-between w-full px-2 py-1 mx-1 rounded text-sm text-gray-400 hover:text-white hover:bg-bloom-panel/60 transition-colors group"
              >
                <div className="flex items-center gap-1.5">
                  <span className="text-gray-500 text-xs">
                    {channel.icon === 'hash' && '#'}
                    {channel.icon === 'volume' && '🔊'}
                    {channel.icon === 'megaphone' && '📢'}
                  </span>
                  <span className="truncate">{channel.name}</span>
                </div>
                {channel.unread && (
                  <span className="px-1.5 py-0.5 text-[10px] font-bold bg-bloom-red rounded-full text-white min-w-[18px] text-center">
                    {channel.unread}
                  </span>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Sidebar({ isOpen }: SidebarProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ x: -280, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -280, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed top-14 left-0 bottom-0 w-[240px] z-40 bg-bloom-dark/95 backdrop-blur-md border-r border-bloom-border/30 flex flex-col"
        >
          {/* Header */}
          <div className="px-4 py-3 border-b border-bloom-border/30">
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Channels</h2>
            <p className="text-[10px] text-bloom-teal mt-0.5">8,459 members online</p>
          </div>

          {/* Channel list */}
          <div className="flex-1 overflow-y-auto py-2 px-1">
            {channelGroups.map((group) => (
              <ChannelGroupSection key={group.id} group={group} />
            ))}
          </div>

          {/* User section */}
          <div className="px-3 py-3 border-t border-bloom-border/30 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-bloom-panel flex items-center justify-center border border-bloom-border">
              <span className="text-xs text-gray-500">👤</span>
            </div>
            <div>
              <p className="text-sm text-gray-300 font-medium">Guest User</p>
              <p className="text-[10px] text-gray-500">Sign in to chat</p>
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
