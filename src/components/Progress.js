import { motion } from "framer-motion";

const ProgressSection = () => {
  const skills = [
    { title: "WordPress", percent: 90 },
    { title: "UI/UX Design", percent: 50 },
    { title: "Front End Development", percent: 90 },
    { title: "Backend Development", percent: 80 },
  ];

  return (
    <motion.section
      id="progress-section"
      className="relative overflow-hidden py-24 text-center bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 bg-indigo-300/25 dark:bg-indigo-600/20 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 bg-purple-300/25 dark:bg-purple-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-screen-xl mx-auto px-4">
        <motion.div
          className="max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/40 px-4 py-1.5 rounded-full mb-5">
            My Growth
          </span>
          <h2 className="relative text-3xl md:text-4xl font-semibold tracking-[0.16em] uppercase text-gray-900 dark:text-white after:mx-auto after:mt-4 after:block after:h-1 after:w-20 after:rounded-full after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500">
            Skill{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Progress
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="group flex flex-col items-center rounded-3xl border border-gray-200/80 dark:border-gray-700/80 bg-white/90 dark:bg-gray-800/90 p-8 shadow-[0_20px_50px_-20px_rgba(79,70,229,0.35)]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: idx * 0.15,
                duration: 0.8,
                type: "spring",
                stiffness: 80,
              }}
              whileHover={{ scale: 1.03, y: -4 }}
            >
              <motion.div
                className="relative w-28 h-28"
                whileHover={{
                  rotate: [0, 4, -4, 0],
                  transition: { duration: 0.8 },
                }}
              >
                {/* soft glow behind ring, blooms on hover */}
                <div className="absolute inset-0 rounded-full bg-indigo-500/0 group-hover:bg-indigo-500/15 blur-xl transition-all duration-500" />

                <svg className="relative w-28 h-28 transform -rotate-90">
                  <defs>
                    <linearGradient
                      id={`ring-gradient-${idx}`}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#4f46e5" />
                      <stop offset="100%" stopColor="#9333ea" />
                    </linearGradient>
                  </defs>
                  <circle
                    className="text-gray-200 dark:text-gray-700"
                    strokeWidth="8"
                    stroke="currentColor"
                    fill="transparent"
                    r="50"
                    cx="56"
                    cy="56"
                  />
                  <motion.circle
                    stroke={`url(#ring-gradient-${idx})`}
                    strokeWidth="8"
                    fill="transparent"
                    r="50"
                    cx="56"
                    cy="56"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 50}
                    strokeDashoffset={2 * Math.PI * 50}
                    whileInView={{
                      strokeDashoffset:
                        2 * Math.PI * 50 -
                        (2 * Math.PI * 50 * skill.percent) / 100,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                      delay: idx * 0.15,
                    }}
                  />
                </svg>

                <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-gray-900 dark:text-white">
                  {skill.percent}%
                </span>
              </motion.div>

              <p className="mt-5 text-lg font-semibold text-gray-800 dark:text-gray-300">
                {skill.title}
              </p>

              {/* thin gradient underline, expands on hover */}
              <div className="mt-2 h-0.5 w-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full group-hover:w-14 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProgressSection;
