import { GraduationCap, BookOpen } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface EducationItemProps {
  school: string;
  degree: string;
  location: string;
  period: string;
  details?: string[];
  index: number;
  isLast: boolean;
}

function EducationItem({ school, degree, location, period, details, index, isLast }: EducationItemProps) {
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
      className={`relative transform transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="flex gap-8">
        <div className="relative flex flex-col items-center">
          <div className="group relative z-10 flex items-center justify-center w-12 h-12 bg-slate-900 border-2 border-emerald-500 rounded-full transition-all duration-300 hover:scale-110 hover:border-blue-400 hover:shadow-lg hover:shadow-emerald-500/50">
            <GraduationCap size={20} className="text-emerald-400 group-hover:text-blue-400 transition-colors" />
          </div>
          {!isLast && (
            <div className="w-0.5 h-full bg-gradient-to-b from-emerald-500 to-slate-800 mt-2"></div>
          )}
        </div>

        <div className="flex-1 pb-12">
          <div className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative">
              <div className="flex items-start justify-between mb-3 flex-wrap gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-100 mb-1 group-hover:text-emerald-400 transition-colors">
                    {school}
                  </h3>
                  <p className="text-emerald-400 font-medium text-lg group-hover:text-blue-400 transition-colors mb-2">
                    {degree}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <span>{location}</span>
                    <span>•</span>
                    <span>{period}</span>
                  </div>
                </div>
              </div>

              {details && (
                <ul className="space-y-2 mt-4">
                  {details.map((detail, i) => (
                    <li key={i} className="flex gap-3 text-slate-300">
                      <span className="text-emerald-400 mt-1 flex-shrink-0">▹</span>
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Education() {
  const education = [
    {
      school: 'Yeshiva University',
      degree: 'Master of Science in Artificial Intelligence',
      location: 'New York, NY',
      period: 'Expected 2025',
      details: [
        'Relevant coursework: Machine Learning, Neural Networks, Data Science, Cloud Computing',
      ],
    },
    {
      school: 'University of Zimbabwe',
      degree: 'B.Sc. Business Studies and Computing Science (Honors)',
      location: 'Harare, Zimbabwe',
      period: 'Graduated 2021',
    },
  ];

  return (
    <section id="education" className="min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <GraduationCap className="text-emerald-400" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold">Education</h2>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full"></div>
          <p className="text-slate-400 mt-4">Academic background and qualifications</p>
        </div>

        <div className="mt-12">
          {education.map((edu, index) => (
            <EducationItem
              key={index}
              {...edu}
              index={index}
              isLast={index === education.length - 1}
            />
          ))}
        </div>

        <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-500/20 rounded-xl backdrop-blur-sm group hover:border-blue-500/40 transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-blue-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="text-blue-400" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">
                Current Focus
              </h3>
              <p className="text-slate-300 leading-relaxed">
                Pursuing a Master's in AI and focused on combining data infrastructure, systems
                thinking, and model deployment to support scalable ML systems in production.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
