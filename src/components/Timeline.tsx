import { Briefcase, GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface TimelineItemProps {
  type: 'experience' | 'education';
  title: string;
  subtitle: string;
  location: string;
  period: string;
  details: string[];
  index: number;
  isLast: boolean;
}

function TimelineItem({ type, title, subtitle, location, period, details, index, isLast }: TimelineItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isLeft = index % 2 === 0;

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

  const Icon = type === 'experience' ? Briefcase : GraduationCap;
  const borderColor = type === 'experience' ? 'border-blue-500' : 'border-emerald-500';
  const hoverBorderColor = type === 'experience' ? 'hover:border-emerald-400' : 'hover:border-blue-400';
  const iconColor = type === 'experience' ? 'text-blue-400' : 'text-emerald-400';
  const hoverIconColor = type === 'experience' ? 'group-hover:text-emerald-400' : 'group-hover:text-blue-400';
  const shadowColor = type === 'experience' ? 'hover:shadow-blue-500/50' : 'hover:shadow-emerald-500/50';
  const cardHoverBorder = type === 'experience' ? 'hover:border-blue-500/50' : 'hover:border-emerald-500/50';
  const cardHoverShadow = type === 'experience' ? 'hover:shadow-blue-500/20' : 'hover:shadow-emerald-500/20';
  const titleHoverColor = type === 'experience' ? 'group-hover:text-blue-400' : 'group-hover:text-emerald-400';
  const subtitleColor = type === 'experience' ? 'text-blue-400' : 'text-emerald-400';
  const subtitleHoverColor = type === 'experience' ? 'group-hover:text-emerald-400' : 'group-hover:text-blue-400';
  const gradientFrom = type === 'experience' ? 'from-blue-500/5' : 'from-emerald-500/5';
  const gradientTo = type === 'experience' ? 'to-emerald-500/5' : 'to-blue-500/5';

  return (
    <div
      ref={ref}
      className={`relative transform transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`flex items-center gap-4 md:gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        <div className={`hidden md:block flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
          <div className={`group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 ${cardHoverBorder} transition-all duration-300 hover:shadow-lg ${cardHoverShadow} hover:-translate-y-1`}>
            <div className={`absolute inset-0 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

            <div className="relative">
              <div className={`flex items-start justify-between mb-3 flex-wrap gap-4 ${isLeft ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}>
                <div className="flex-1">
                  <h3 className={`text-xl font-bold text-slate-100 mb-1 ${titleHoverColor} transition-colors`}>
                    {title}
                  </h3>
                  <p className={`${subtitleColor} font-medium ${subtitleHoverColor} transition-colors mb-2`}>
                    {subtitle}
                  </p>
                  <div className={`flex flex-wrap gap-4 text-sm text-slate-400 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      <span>{location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <ul className={`space-y-3 mt-4 ${isLeft ? 'text-right' : 'text-left'}`}>
                {details.map((detail, i) => (
                  <li key={i} className={`flex gap-3 text-slate-300 ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}>
                    <span className="text-emerald-400 mt-1.5 flex-shrink-0">▹</span>
                    <span className="leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="relative flex md:flex-col items-center flex-shrink-0">
          <div className={`group relative z-10 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-slate-900 border-2 ${borderColor} rounded-full transition-all duration-300 hover:scale-110 ${hoverBorderColor} hover:shadow-lg ${shadowColor}`}>
            <Icon size={20} className={`md:hidden ${iconColor} ${hoverIconColor} transition-colors`} />
            <Icon size={22} className={`hidden md:block ${iconColor} ${hoverIconColor} transition-colors`} />
          </div>
          {!isLast && (
            <div className={`w-0.5 h-full bg-gradient-to-b ${type === 'experience' ? 'from-blue-500' : 'from-emerald-500'} to-slate-800 mt-2 absolute top-12 md:top-14`}></div>
          )}
        </div>

        <div className="flex-1 md:hidden">
          <div className={`group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-4 md:p-6 ${cardHoverBorder} transition-all duration-300 hover:shadow-lg ${cardHoverShadow}`}>
            <div className={`absolute inset-0 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

            <div className="relative">
              <div className="mb-3">
                <h3 className={`text-lg font-bold text-slate-100 mb-1 ${titleHoverColor} transition-colors`}>
                  {title}
                </h3>
                <p className={`${subtitleColor} text-sm font-medium ${subtitleHoverColor} transition-colors mb-2`}>
                  {subtitle}
                </p>
                <div className="flex flex-col gap-1 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={12} />
                    <span>{period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={12} />
                    <span>{location}</span>
                  </div>
                </div>
              </div>

              {details.length > 0 && (
                <ul className="space-y-2 mt-3">
                  {details.map((detail, i) => (
                    <li key={i} className="flex gap-2 text-slate-300 text-sm">
                      <span className="text-emerald-400 mt-1 flex-shrink-0">▹</span>
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        <div className="hidden md:block flex-1"></div>
      </div>
    </div>
  );
}

export default function Timeline() {
  const timelineData = [
    {
      type: 'experience' as const,
      title: 'Yeshiva University',
      subtitle: 'Supplementary Instructor, Introduction to Information Systems',
      location: 'New York, NY',
      period: 'Aug 2024 – June 2025',
      details: [
        'Provide technical guidance to 30+ students in R programming and statistical data manipulation, reinforcing foundational data concepts used in real-world analytics and engineering workflows',
        'Design and lead weekly mentoring sessions on topics such as data cleaning, visualization, and basic SQL',
        'Collaborate with course instructors to refine teaching materials and align exercises with industry-relevant tools and concepts, including reproducibility and version control',
      ],
    },
    {
      type: 'education' as const,
      title: 'Yeshiva University',
      subtitle: 'Master of Science in Artificial Intelligence',
      location: 'New York, NY',
      period: 'Expected 2025',
      details: [
        'Relevant coursework: Machine Learning, Neural Networks, Data Science, Cloud Computing',
      ],
    },
    {
      type: 'experience' as const,
      title: 'CGA Technologies',
      subtitle: 'Software Developer',
      location: 'Cheshire, UK',
      period: 'Oct 2022 - Sep 2023',
      details: [
        'Optimized MySQL queries within the SCTP backend platform, reducing API latency by over 10% and improving system responsiveness for critical operations',
        'Implemented 10+ backend and UI enhancements for SCTP using Java and Vue.js, improving system functionality across financial tracking and case management modules',
        'Built and tested 2 reusable Vue.js components, reducing code duplication and streamlining frontend logic for consistent data display',
        'Presented development updates to cross-functional teams and contributed to technical planning aligned with program requirements and stakeholder needs',
      ],
    },
    {
      type: 'experience' as const,
      title: 'Code Virtus',
      subtitle: 'Backend Developer',
      location: 'Harare, Zimbabwe',
      period: 'Jun 2021 – Nov 2022',
      details: [
        'Developed and published an NPM package to simplify integration with Pesepay APIs, streamlining developer adoption with an average of 40+ downloads per week',
        'Spearheaded the design for automated image processing features for Claro Images, enabling consistent metadata generation and secure asset storage for downstream workflows',
        'Customized SpringBoot-based open-source platforms to support diverse data models and system architectures across multiple client environments',
        'Collaborated with backend engineers and product stakeholders to diagnose and resolve system-level issues impacting data consistency and platform reliability',
      ],
    },
    {
      type: 'education' as const,
      title: 'University of Zimbabwe',
      subtitle: 'B.Sc. Business Studies and Computing Science (Honors)',
      location: 'Harare, Zimbabwe',
      period: 'Graduated 2021',
      details: [],
    },
    {
      type: 'experience' as const,
      title: 'Invenico',
      subtitle: 'Software Developer',
      location: 'Harare, Zimbabwe',
      period: 'Jun 2018 – May 2021',
      details: [
        'Redesigned core backend workflows in collaboration with clients and engineers to optimize system functionality and streamline internal data operations',
        'Refactored legacy Java code and implemented comprehensive unit testing, increasing test coverage to 72% and significantly reducing production issues',
        'Modernized the MyNhaka life assurance portal by improving backend architecture for cleaner data flow and easier maintenance',
        'Delivered 3 full-cycle backend systems using Java and SQL, supporting customer records, transactional data, and reporting tools',
      ],
    },
    {
      type: 'experience' as const,
      title: 'Invenico',
      subtitle: 'Android Developer',
      location: 'Harare, Zimbabwe',
      period: 'Jun 2018 – Mar 2019',
      details: [
        'Built secure POS and wallet applications for enterprise clients, enabling mobile payments, receipt printing, and NFC card integration',
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16 text-center">
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-4">
            <Briefcase className="text-blue-400" size={28} />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">My Journey</h2>
            <GraduationCap className="text-emerald-400" size={28} />
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 via-emerald-500 to-blue-500 rounded-full mx-auto"></div>
          <p className="text-slate-400 mt-4 text-sm md:text-base">Experience and education combined</p>
        </div>

        <div className="mt-12 space-y-6 md:space-y-8">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              {...item}
              index={index}
              isLast={index === timelineData.length - 1}
            />
          ))}
        </div>

        <div className="mt-8 md:mt-12 p-4 md:p-6 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 border border-blue-500/20 rounded-xl backdrop-blur-sm group hover:border-blue-500/40 transition-all duration-300">
          <div className="flex items-start gap-3 md:gap-4">
            <div className="p-2 bg-blue-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="text-blue-400" size={20} />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-bold text-slate-100 mb-2 group-hover:text-blue-400 transition-colors">
                Current Focus
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm md:text-base">
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
