import { Code2, Monitor, Database } from 'lucide-react';

const skillCategories = [
  {
    title: 'Linguagens de Programação',
    icon: <Code2 className="text-indigo-500 mb-4" size={32} />,
    skills: ['C', 'C++', 'C#', 'JavaScript', 'TypeScript'],
  },
  {
    title: 'Desenvolvimento Web',
    icon: <Monitor className="text-indigo-500 mb-4" size={32} />,
    skills: ['HTML5', 'CSS3', 'React', 'Tailwind CSS'],
  },
  {
    title: 'Banco de Dados & Versionamento',
    icon: <Database className="text-indigo-500 mb-4" size={32} />,
    skills: ['MySQL', 'Git', 'GitHub'],
  },
];

export function Skills() {
  return (
    <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Habilidades Técnicas</h2>
          <div className="w-16 h-1 bg-indigo-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8 hover:border-indigo-500/50 transition-colors group"
            >
              {category.icon}
              <h3 className="text-xl font-bold text-white mb-6 group-hover:text-indigo-400 transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-zinc-800 text-zinc-300 text-sm font-medium rounded-md border border-zinc-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
