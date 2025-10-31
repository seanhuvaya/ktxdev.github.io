import { MapPin, Mail, Linkedin, Github, Globe, ChevronDown, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-slate-950 to-emerald-500/5 animate-gradient-slow"></div>

      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div
        className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none transition-all duration-300"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div className="max-w-5xl mx-auto px-6 py-20 relative z-10">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full animate-pulse"></div>
            <p className="text-blue-400 font-medium tracking-wider">Hi, my name is</p>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="inline-block bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent animate-gradient hover:scale-110 transition-transform duration-300 cursor-default">
              Sean Huvaya
            </span>
          </h1>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-300 mb-6">
            I build data systems that scale.
          </h2>

          <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-3xl leading-relaxed">
            I'm a Data Engineer with a backend engineering foundation and growing expertise in machine learning operations. Currently pursuing a Master's in AI at Yeshiva University, focused on combining data infrastructure, systems thinking, and model deployment to support scalable ML systems in production.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12 text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-emerald-400" />
              <span>New York, NY</span>
            </div>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span className="text-sm">Open to remote & relocation</span>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:shuvaya@mail.yu.edu"
              className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-lg transition-all hover:scale-105 font-medium shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
            >
              <Mail size={18} className="group-hover:rotate-12 transition-transform" />
              <span>Get in Touch</span>
            </a>
            <a
              href="https://linkedin.com/in/seanhuvaya"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-blue-500 rounded-lg transition-all hover:scale-105 hover:bg-blue-500/10"
            >
              <Linkedin size={18} className="group-hover:scale-110 transition-transform" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/seanhuvaya"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-blue-500 rounded-lg transition-all hover:scale-105 hover:bg-blue-500/10"
            >
              <Github size={18} className="group-hover:rotate-12 transition-transform" />
              <span>GitHub</span>
            </a>
            <a
              href="https://seanhuvaya.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-6 py-3 border border-slate-700 hover:border-blue-500 rounded-lg transition-all hover:scale-105 hover:bg-blue-500/10"
            >
              <Globe size={18} className="group-hover:rotate-180 transition-transform duration-500" />
              <span>Portfolio</span>
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-400 hover:text-blue-400 transition-colors"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
