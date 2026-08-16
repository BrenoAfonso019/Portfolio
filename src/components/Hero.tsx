import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
          Breno Afonso
        </h1>
        
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-zinc-400 mb-8">
          Desenvolvedor de Software | Estudante de Desenvolvimento de Sistemas na Etec
        </h2>
        
        <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Estudante focado em fundamentos sólidos de programação, lógica, desenvolvimento web e criação de interfaces modernas.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#projetos"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Ver Projetos
            <ArrowRight size={18} />
          </a>
          <a
            href="#contato"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Contato
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          <SocialLink href="https://github.com/BrenoAfonso019" icon={<Github size={22} />} label="GitHub" />
          <SocialLink href="https://linkedin.com/in/breno-afonso-ferreira-131612424" icon={<Linkedin size={22} />} label="LinkedIn" />
          <SocialLink href="mailto:brenoafonsoferreira@gmail.com" icon={<Mail size={22} />} label="E-mail" />
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-zinc-400 hover:text-indigo-400 transition-colors p-2 hover:bg-indigo-400/10 rounded-full"
      aria-label={label}
      title={label}
    >
      {icon}
    </a>
  );
}
