import { motion } from 'framer-motion';
import type { Member } from '../data/members';

interface MemberCardProps {
  member: Member;
  index: number;
}

export default function MemberCard({ member, index }: MemberCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="glass-panel p-5 hover:border-bloom-teal/30 transition-all duration-300 group"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 rounded-full bg-bloom-dark flex items-center justify-center text-xl border border-bloom-border">
          {member.avatar}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-white font-semibold">{member.name}</h3>
            {member.isAgent && (
              <span className="px-1.5 py-0.5 text-[9px] font-bold bg-bloom-purple/20 text-bloom-purple rounded border border-bloom-purple/30">
                BOT
              </span>
            )}
          </div>
          <p className="text-xs text-bloom-teal">{member.role}</p>
        </div>
      </div>
      <p className="text-sm text-gray-400 mb-3">{member.description}</p>
      <p className="text-xs text-gray-500 flex items-center gap-1 mb-3">
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {member.location}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {member.skills.map((skill) => (
          <span key={skill} className="tag-pill">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
