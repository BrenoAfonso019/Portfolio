import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

const projects = [
  {
    title: 'Finance Manager Web App',
    description:
      'Interface web intuitiva para controle financeiro pessoal com dashboard de fluxo de caixa, gestão de orçamentos por categoria e simulação interativa de metas.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    demoUrl: 'https://finance-manager-ui.vercel.app',
    githubUrl: 'https://github.com/BrenoAfonso019/Finance-manager-ui',
    featured: true,
  },
  {
    title: 'Próximo Projeto',
    description:
      'Projeto em fase de planejamento e desenvolvimento prático.',
    tags: [],
    status: 'Em Breve',
    featured: false,
  },
];

export function Projects() {
  return (
    <section id="projetos" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projetos</h2>
          <div className="w-16 h-1 bg-indigo-500 rounded-full"></div>
        </div>

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-zinc-900 border ${
                project.featured ? 'border-indigo-500/30' : 'border-zinc-800'
              } rounded-2xl p-6 md:p-8 hover:border-indigo-500/50 transition-all duration-300 group relative overflow-hidden`}
            >
              {project.featured && (
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
              )}

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 relative z-10">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <FolderGit2 className="text-indigo-500" size={24} />
                    <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  
                  {project.status && (
                    <span className="inline-block px-3 py-1 bg-zinc-800 text-zinc-300 text-xs font-medium rounded-full mb-4 border border-zinc-700">
                      {project.status}
                    </span>
                  )}

                  <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-6 max-w-3xl">
                    {project.description}
                  </p>

                  {project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-8 md:mb-0">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-zinc-950 text-zinc-300 text-sm font-medium rounded-md border border-zinc-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {project.featured && (
                  <div className="flex flex-row md:flex-col gap-3 shrink-0">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-sm w-full md:w-auto"
                      >
                        <ExternalLink size={18} />
                        Demo Online
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700 hover:border-zinc-600 px-5 py-2.5 rounded-lg font-medium transition-colors text-sm w-full md:w-auto"
                      >
                        <Github size={18} />
                        Repositório GitHub
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
