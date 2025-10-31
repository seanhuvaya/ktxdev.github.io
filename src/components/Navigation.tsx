import { Home, User, Briefcase, Code, Mail } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Journey', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <aside className="hidden lg:fixed lg:flex left-0 top-0 h-screen w-24 flex-col items-center z-50">
        <div className="pt-8 pb-12">
          <button
            onClick={() => scrollToSection('hero')}
            className="hover:scale-110 transition-all duration-300 group"
          >
            <svg width="48" height="48" viewBox="0 0 100 100" className="transition-transform group-hover:rotate-12 drop-shadow-2xl">
              <defs>
                <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#60A5FA" />
                  <stop offset="100%" stopColor="#34D399" />
                </linearGradient>
              </defs>
              <polygon
                points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
                fill="none"
                stroke="url(#hexGradient)"
                strokeWidth="3"
              />
              <text
                x="50"
                y="60"
                textAnchor="middle"
                fill="url(#hexGradient)"
                fontSize="32"
                fontWeight="bold"
                fontFamily="system-ui, -apple-system, sans-serif"
              >
                SH
              </text>
            </svg>
          </button>
        </div>

        <nav className="flex-1 flex items-center">
          <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl shadow-slate-950/50 px-4 py-6">
            <div className="flex flex-col items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative p-3 rounded-xl transition-all duration-300 hover:scale-110 group ${
                    activeSection === item.id
                      ? 'bg-gradient-to-br from-blue-500/20 to-emerald-500/20'
                      : 'hover:bg-slate-800/50'
                  }`}
                  title={item.label}
                >
                  <Icon
                    size={20}
                    className={`transition-colors ${
                      activeSection === item.id
                        ? 'text-blue-400'
                        : 'text-slate-400 group-hover:text-slate-100'
                    }`}
                  />
                  {activeSection === item.id && (
                    <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full"></div>
                  )}
                </button>
              );
            })}
            </div>
          </div>
        </nav>
      </aside>

      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 pb-4 px-4">
        <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl shadow-slate-950/50 px-6 py-3">
          <div className="flex items-center justify-center gap-1">
            <button
              onClick={() => scrollToSection('hero')}
              className="p-3 hover:scale-110 transition-all duration-300 group"
              title="Home"
            >
              <svg width="24" height="24" viewBox="0 0 100 100" className="transition-transform group-hover:rotate-12">
                <defs>
                  <linearGradient id="hexGradientMobile" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#60A5FA" />
                    <stop offset="100%" stopColor="#34D399" />
                  </linearGradient>
                </defs>
                <polygon
                  points="50,5 90,27.5 90,72.5 50,95 10,72.5 10,27.5"
                  fill="none"
                  stroke="url(#hexGradientMobile)"
                  strokeWidth="4"
                />
                <text
                  x="50"
                  y="62"
                  textAnchor="middle"
                  fill="url(#hexGradientMobile)"
                  fontSize="38"
                  fontWeight="bold"
                  fontFamily="system-ui, -apple-system, sans-serif"
                >
                  SH
                </text>
              </svg>
            </button>

            <div className="h-8 w-px bg-gradient-to-b from-transparent via-slate-600 to-transparent mx-1"></div>

            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative p-3 rounded-xl transition-all duration-300 hover:scale-125 hover:-translate-y-1 group ${
                    activeSection === item.id
                      ? 'bg-gradient-to-br from-blue-500/20 to-emerald-500/20 -translate-y-1 scale-110'
                      : 'hover:bg-slate-800/50'
                  }`}
                  title={item.label}
                >
                  <Icon
                    size={20}
                    className={`transition-colors ${
                      activeSection === item.id
                        ? 'text-blue-400'
                        : 'text-slate-400 group-hover:text-slate-100'
                    }`}
                  />
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
}
