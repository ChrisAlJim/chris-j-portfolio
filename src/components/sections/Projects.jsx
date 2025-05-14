import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects ◝(ᵔᗜᵔ)◜
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-black/10 dark:border-white/10 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl text-black dark:text-white font-bold mb-2">BrainBud</h3>
              <p className="text-black dark:text-gray-400 mb-4">
                BrainBud is a full-stack web application designed to help users engage more deeply with the YouTube content they watch. By entering a YouTube URL, a custom prompt, and a desired number of responses, users receive AI-generated insights, summaries, or creative ideas based on the video.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React {JavaScript}", "Django {Python}", "SQLite", "Google Gemini"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-cyan-500/10 text-cyan-500 py-1 px-3 rounded-full text-sm hover:bg-cyan-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Chris-Al-Jim-Capstone/Capstone-Project-BrainBud"
                  target="__blank"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              p-6 rounded-xl border border-black/10 dark:border-white/10
              hover:-translate-y-1 hover:border-cyan-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl text-black dark:text-white font-bold mb-2">Benevolo</h3>
              <p className="text-black dark:text-gray-400 mb-4">
                Benevolo is a community-driven web application that connects homebound individuals with local volunteers. Users can post tasks such as errands, household help, or deliveries while volunteers browse and accept tasks within their ZIP code. The platform fosters compassion and accessibility by making it easy for volunteers to offer help where it’s needed most.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React {JavaScript}", "Express {JavaScript}", "PostgreSQL"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-cyan-500/10 text-cyan-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-cyan-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Benevoloo/Benevolo-CivTech"
                  target="__blank"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};