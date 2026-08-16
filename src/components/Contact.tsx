import { Mail, Linkedin, Github } from 'lucide-react';

export function Contact() {
  return (
    <section id="contato" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Contato</h2>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Sinta-se à vontade para entrar em contato através das minhas redes ou diretamente por e-mail.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:brenoafonsoferreira@gmail.com"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-medium transition-colors"
          >
            <Mail size={20} />
            Enviar E-mail
          </a>
          <a
            href="www.linkedin.com/in/breno-afonso-ferreira-131612424"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 px-8 py-4 rounded-xl font-medium transition-colors"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
          <a
            href="https://github.com/BrenoAfonso019"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 px-8 py-4 rounded-xl font-medium transition-colors"
          >
            <Github size={20} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-8 border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Breno Afonso. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
