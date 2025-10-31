import { Code, Database, Cloud, Workflow } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface SkillCategoryProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  index: number;
}

function SkillCategory({ icon, title, skills, index }: SkillCategoryProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 h-full hover:-translate-y-2">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500/20 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-slate-100 group-hover:text-blue-400 transition-colors">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1.5 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-slate-300 hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-200 hover:scale-105 cursor-default"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: 'Languages & Frameworks',
      skills: ['Python', 'SQL (PostgreSQL)', 'Java', 'R', 'JavaScript (Vue.js)', 'Bash'],
    },
    {
      icon: <Database size={24} />,
      title: 'Data & ML Tools',
      skills: ['Pandas', 'NumPy', 'Scikit-learn', 'PyTorch', 'Jupyter', 'Matplotlib'],
    },
    {
      icon: <Cloud size={24} />,
      title: 'Cloud & Infrastructure',
      skills: ['AWS (EC2, S3, Lambda)', 'Docker', 'REST APIs', 'GitHub', 'Linux'],
    },
    {
      icon: <Workflow size={24} />,
      title: 'Workflow & Operations',
      skills: ['CI/CD', 'Containerization', 'Data Pipelines', 'Agile/SCRUM'],
    },
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-6 bg-slate-950/50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <Code className="text-emerald-400" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold">Technical Skills</h2>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
