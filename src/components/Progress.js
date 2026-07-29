import { motion } from "framer-motion";

const ProgressSection = () => {
  const skills = [
    { title: "WordPress", percent: 90 },
    { title: "UI/UX Design", percent: 50 },
    { title: "Front End Development", percent: 70 },
    { title: "Backend Development", percent: 30 },
  ];

  return (
    <motion.section
      id="progress-section"
      className="py-24 text-center bg-gradient-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold tracking-[0.16em] uppercase mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Progress
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center rounded-3xl border border-gray-200/80 dark:border-gray-700/80 bg-white/90 dark:bg-gray-800/90 p-8 shadow-[0_20px_50px_-20px_rgba(79,70,229,0.35)]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
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
                <svg className="w-28 h-28 transform -rotate-90">
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
                    className="text-indigo-600"
                    strokeWidth="8"
                    stroke="currentColor"
                    fill="transparent"
                    r="50"
                    cx="56"
                    cy="56"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 50}
                    strokeDashoffset={2 * Math.PI * 50}
                    animate={{
                      strokeDashoffset:
                        2 * Math.PI * 50 -
                        (2 * Math.PI * 50 * skill.percent) / 100,
                    }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProgressSection;
