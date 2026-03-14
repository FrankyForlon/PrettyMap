import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import { courses, levelColors, categoryIcons, type CourseCategory } from '../data/courses';

const categories: (CourseCategory | 'All')[] = ['All', 'Writing', 'Filmmaking', 'Coding', 'Music', 'Art'];

export default function EducationPage() {
  const [activeCategory, setActiveCategory] = useState<CourseCategory | 'All'>('All');

  const filteredCourses = activeCategory === 'All'
    ? courses
    : courses.filter((c) => c.category === activeCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-full w-full overflow-y-auto"
    >
      <Navbar />

      <div className="pt-14">
        <HeroSection
          badge="Learning Hub"
          title="AI"
          titleHighlight="Education"
          subtitle="Curated learning paths for every creative discipline. From prompt engineering to AI filmmaking — level up your skills."
          backgroundClass="from-bloom-purple/20 via-bloom-green/10 to-bloom-black"
        />

        <section className="max-w-6xl mx-auto px-6 py-12">
          {/* Category filters */}
          <div className="flex gap-2 mb-8 flex-wrap">
            <span className="text-gray-500 flex items-center mr-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-bloom-teal/20 text-bloom-teal border border-bloom-teal/30'
                    : 'bg-bloom-panel border border-bloom-border text-gray-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Course grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredCourses.map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="glass-panel p-5 hover:border-bloom-teal/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{categoryIcons[course.category]}</span>
                    <span className="text-xs text-gray-500">{course.category}</span>
                  </div>
                  <span
                    className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: `${levelColors[course.level]}20`,
                      color: levelColors[course.level],
                    }}
                  >
                    {course.level}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{course.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{course.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {course.hours} hours
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {course.provider}
                    </span>
                  </div>
                  <button className="flex items-center gap-1 text-sm text-bloom-teal hover:text-bloom-teal/80 transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                    Start
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center glass-panel p-8"
          >
            <h3 className="text-xl font-bold text-white mb-2">Want to contribute a course?</h3>
            <p className="text-gray-400 text-sm mb-6">
              We're always looking for educators and AI experts to share their knowledge with the community.
            </p>
            <button className="btn-primary">Submit a Resource</button>
          </motion.div>
        </section>

        <Footer />
      </div>
    </motion.div>
  );
}
