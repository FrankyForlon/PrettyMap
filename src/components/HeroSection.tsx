import { motion } from 'framer-motion';

interface HeroSectionProps {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  backgroundClass?: string;
}

export default function HeroSection({
  badge,
  title,
  titleHighlight,
  subtitle,
  backgroundClass = 'from-bloom-purple/20 via-bloom-teal/10 to-bloom-black',
}: HeroSectionProps) {
  return (
    <div className={`relative overflow-hidden bg-gradient-to-b ${backgroundClass}`}>
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 3 === 0 ? '#00d4aa' : i % 3 === 1 ? '#8b5cf6' : '#ec4899',
              opacity: 0.2,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xs font-bold uppercase tracking-[0.2em] text-bloom-teal mb-4"
        >
          {badge}
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          {title}{' '}
          <span className="text-bloom-teal text-glow-teal">{titleHighlight}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 max-w-2xl text-lg"
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
}
