import { GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <section id="formacao" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Formação Acadêmica</h2>
          <div className="w-16 h-1 bg-indigo-500 rounded-full"></div>
        </div>

        <div className="relative border-l border-zinc-800 ml-3 md:ml-0 md:pl-0">
          <div className="mb-10 ml-8 md:ml-12 relative group">
            <span className="absolute -left-12 md:-left-16 flex items-center justify-center w-8 h-8 rounded-full bg-zinc-900 border border-indigo-500 ring-4 ring-zinc-950">
              <GraduationCap className="text-indigo-500 w-4 h-4" />
            </span>
            
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-colors">
              <h3 className="text-xl font-bold text-white mb-4">
                Curso Técnico em Desenvolvimento de Sistemas - Etec
              </h3>
              
              <p className="text-zinc-400 leading-relaxed">
                Foco em algoritmos, lógica de programação, estrutura de dados e desenvolvimento de software.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
