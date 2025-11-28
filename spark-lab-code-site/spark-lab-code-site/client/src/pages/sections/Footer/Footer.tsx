// src/sections/Footer.tsx
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 px-6">
      <div className="container mx-auto text-center text-slate-500">
        <p>© {new Date().getFullYear()} João Pedro Costa Roblez. Todos os direitos reservados.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://github.com/jRoblxz" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/joão-pedro-costa-roblez-a87077227/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="mailto:joaopedro@example.com" className="text-slate-400 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}