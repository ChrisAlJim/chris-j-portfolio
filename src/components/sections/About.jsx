import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const languagesDatabases = ["JavaScript (ES6+)", "Python",  "PostgreSQL", "HTML5", "CSS3"];

  const frameworksLibraries = ["React", "Node.js", "Express.js", "Django"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me ٩(^ᗜ^ )و ´-
          </h2>

          <div className="rounded-xl p-8 border-black/10 dark:border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-black dark:text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl text-black dark:text-white font-bold mb-4"> Languages & Databases</h3>
                <div className="flex flex-wrap gap-2">
                  {languagesDatabases.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-cyan-500/10 text-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-cyan-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl text-black dark:text-white font-bold mb-4"> Frameworks & Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {frameworksLibraries.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-cyan-500/10 text-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-cyan-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-black/10 dark:border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl text-black dark:text-white font-bold mb-4"> (⌐⊙_⊙) Education </h3>
              <ul className="list-disc list-inside text-black dark:text-gray-300 space-y-2">
                <a>
                  <strong> Software Engineering Certificate </strong> - The Marcy Lab School
                  (2024-2025)
                </a>
                <li>
                  Relevant Coursework: Web Development, CS Fundamentals, Leadership Development
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-black/10 dark:border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl text-black dark:text-white font-bold mb-4"> ( ◡̀_◡́)ᕤ Relevant Experience </h3>
              <div className="space-y-4 text-black dark:text-gray-300">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Google Software Engineering Program  (2025 - Present){" "}
                  </h4>
                  <p>
                    Selected as 1 of 15 fellows for a 10-week mentorship program, receiving 1:1 technical interview coaching and professional guidance.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Marcy Capstone Project - Apprenticeship (Nov 2024 - Feb 2025){" "}
                  </h4>
                  <p>
                    Completed a capstone apprenticeship, independently learning a new programming language and framework within four weeks.
                  </p>
                  <p>
                    Designed and developed a full-stack application from concept to launch in six weeks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};