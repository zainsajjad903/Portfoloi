const ProgressSection = () => {
  const skills = [
    { title: "Wordpress", percent: 90 },
    { title: "UI/UX Design", percent: 50 },
    { title: "Front End Development", percent: 70 },
    { title: "Backend Development", percent: 30 },
  ];

  return (
    <section className="py-16" data-aos="fade-up">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold  mb-12">Progress</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
          {skills.map((skill, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="relative w-32 h-32">
                <svg className="w-32 h-32">
                  <circle
                    className="text-gray-200"
                    strokeWidth="8"
                    stroke="currentColor"
                    fill="transparent"
                    r="50"
                    cx="64"
                    cy="64"
                  />
                  <circle
                    className="text-indigo-600"
                    strokeWidth="8"
                    strokeDasharray={2 * Math.PI * 50}
                    strokeDashoffset={
                      2 * Math.PI * 50 -
                      (2 * Math.PI * 50 * skill.percent) / 100
                    }
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="50"
                    cx="64"
                    cy="64"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-xl font-bold">
                  {skill.percent}%
                </span>
              </div>
              <p className="mt-4 text-lg font-medium">{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;
