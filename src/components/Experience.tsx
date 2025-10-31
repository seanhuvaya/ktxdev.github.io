import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface ExperienceItemProps {
  company: string;
  role: string;
  location: string;
  period: string;
  achievements: string[];
  index: number;
  isLast: boolean;
}

function ExperienceItem({ company, role, location, period, achievements, index, isLast }: ExperienceItemProps) {
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
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex gap-8">
        <div className="relative flex flex-col items-center">
          <div className="group relative z-10 flex items-center justify-center w-12 h-12 bg-slate-900 border-2 border-blue-500 rounded-full transition-all duration-300 hover:scale-110 hover:border-emerald-400 hover:shadow-lg hover:shadow-blue-500/50">
            <Briefcase size={20} className="text-blue-400 group-hover:text-emerald-400 transition-colors" />
          </div>
          {!isLast && (
            <div className="w-0.5 h-full bg-gradient-to-b from-blue-500 to-slate-800 mt-2"></div>
          )}
        </div>

        <div className="flex-1 pb-12">
          <div className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-emerald-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative">
              <div className="flex items-start justify-between mb-3 flex-wrap gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-100 mb-1 group-hover:text-blue-400 transition-colors">
                    {company}
                  </h3>
                  <p className="text-blue-400 font-medium group-hover:text-emerald-400 transition-colors mb-2">
                    {role}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-400">
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

              <ul className="space-y-3 mt-4">
                {achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-3 text-slate-300">
                    <span className="text-emerald-400 mt-1.5 flex-shrink-0">▹</span>
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const experiences = [
    {
      company: 'Yeshiva University',
      role: 'Supplementary Instructor, Introduction to Information Systems',
      location: 'New York, NY',
      period: 'Aug 2024 – June 2025',
      achievements: [
        'Provide technical guidance to 30+ students in R programming and statistical data manipulation, reinforcing foundational data concepts used in real-world analytics and engineering workflows',
        'Design and lead weekly mentoring sessions on topics such as data cleaning, visualization, and basic SQL',
        'Collaborate with course instructors to refine teaching materials and align exercises with industry-relevant tools and concepts, including reproducibility and version control',
      ],
    },
    {
      company: 'CGA Technologies',
      role: 'Software Developer',
      location: 'Cheshire, UK',
      period: 'Oct 2022 - Sep 2023',
      achievements: [
        'Optimized MySQL queries within the SCTP backend platform, reducing API latency by over 10% and improving system responsiveness for critical operations',
        'Implemented 10+ backend and UI enhancements for SCTP using Java and Vue.js, improving system functionality across financial tracking and case management modules',
        'Built and tested 2 reusable Vue.js components, reducing code duplication and streamlining frontend logic for consistent data display',
        'Presented development updates to cross-functional teams and contributed to technical planning aligned with program requirements and stakeholder needs',
      ],
    },
    {
      company: 'Code Virtus',
      role: 'Backend Developer',
      location: 'Harare, Zimbabwe',
      period: 'Jun 2021 – Nov 2022',
      achievements: [
        'Developed and published an NPM package to simplify integration with Pesepay APIs, streamlining developer adoption with an average of 40+ downloads per week',
        'Spearheaded the design for automated image processing features for Claro Images, enabling consistent metadata generation and secure asset storage for downstream workflows',
        'Customized SpringBoot-based open-source platforms to support diverse data models and system architectures across multiple client environments',
        'Collaborated with backend engineers and product stakeholders to diagnose and resolve system-level issues impacting data consistency and platform reliability',
      ],
    },
    {
      company: 'Invenico',
      role: 'Software Developer',
      location: 'Harare, Zimbabwe',
      period: 'Jun 2018 – May 2021',
      achievements: [
        'Redesigned core backend workflows in collaboration with clients and engineers to optimize system functionality and streamline internal data operations',
        'Refactored legacy Java code and implemented comprehensive unit testing, increasing test coverage to 72% and significantly reducing production issues',
        'Modernized the MyNhaka life assurance portal by improving backend architecture for cleaner data flow and easier maintenance',
        'Delivered 3 full-cycle backend systems using Java and SQL, supporting customer records, transactional data, and reporting tools',
      ],
    },
    {
      company: 'Invenico',
      role: 'Android Developer',
      location: 'Harare, Zimbabwe',
      period: 'Jun 2018 – Mar 2019',
      achievements: [
        'Built secure POS and wallet applications for enterprise clients, enabling mobile payments, receipt printing, and NFC card integration',
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <Briefcase className="text-blue-400" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"></div>
          <p className="text-slate-400 mt-4">My professional journey and key achievements</p>
        </div>

        <div className="mt-12">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              {...exp}
              index={index}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
