import { MapPin, GraduationCap, Globe, BookOpen, TrendingUp, User } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function About() {
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

  const quickFacts = [
    '5+ years of backend and data engineering experience',
    'Worked with international teams across 3 continents',
    'Published open-source tools with 40+ weekly downloads',
    'Teaching 30+ students data analytics and programming',
    'Focus on ML operations and cloud-native architectures',
  ];

  const currentlyLearning = [
    { name: 'PyTorch', color: 'from-orange-500 to-red-500' },
    { name: 'Neural Networks', color: 'from-blue-500 to-cyan-500' },
    { name: 'MLOps', color: 'from-emerald-500 to-teal-500' },
    { name: 'Kubernetes', color: 'from-blue-600 to-indigo-600' },
    { name: 'Terraform', color: 'from-purple-600 to-pink-600' },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4 md:px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950"></div>

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <div
          className={`mb-12 md:mb-16 text-center transform transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <User className="text-blue-400" size={40} />
            <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 via-emerald-500 to-blue-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div
            className={`space-y-6 lg:order-1 order-2 transform transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div>
              <p className="text-slate-300 leading-relaxed mb-4">
                Hello! I'm Sean, a Data Engineer passionate about building robust data infrastructure and deploying scalable ML systems. My journey in tech began with backend development, where I honed my skills in optimizing databases, building APIs, and creating efficient data workflows.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                Throughout my career, I've worked across international teams in the UK, Zimbabwe, and the US, contributing to diverse projects from financial platforms to payment systems. I've optimized SQL queries that reduced API latency by 10%, built NPM packages with thousands of downloads, and refactored legacy systems to improve reliability and maintainability.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Currently, I'm pursuing my Master's in AI at Yeshiva University, where I'm deepening my expertise in machine learning, neural networks, and cloud computing. My goal is to bridge the gap between data engineering and ML operations, building systems that not only process data efficiently but also support intelligent decision-making at scale.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <MapPin className="text-blue-400 flex-shrink-0" size={20} />
                <div>
                  <p className="text-xs text-slate-400">Location</p>
                  <p className="text-sm text-slate-100 font-medium">New York, NY</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                <Globe className="text-emerald-400 flex-shrink-0" size={20} />
                <div>
                  <p className="text-xs text-slate-400">Work Status</p>
                  <p className="text-sm text-slate-100 font-medium">Open to Remote</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <GraduationCap className="text-blue-400 flex-shrink-0" size={20} />
                <div>
                  <p className="text-xs text-slate-400">Education</p>
                  <p className="text-sm text-slate-100 font-medium">MS in AI (2025)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:order-2">
            <div
              className={`bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 transform transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="text-emerald-400" size={24} />
                <h3 className="text-xl font-bold text-slate-100">Quick Facts</h3>
              </div>
              <ul className="space-y-4">
                {quickFacts.map((fact, index) => (
                  <li key={index} className="flex gap-3 text-slate-300 text-sm">
                    <span className="text-emerald-400 mt-1.5 flex-shrink-0">▹</span>
                    <span className="leading-relaxed">{fact}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 transform transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="text-blue-400" size={24} />
                <h3 className="text-xl font-bold text-slate-100">Currently Learning</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {currentlyLearning.map((item, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-10 group-hover:opacity-20 transition-opacity rounded-lg`}></div>
                    <div className={`relative px-4 py-2 border border-slate-700 group-hover:border-transparent rounded-lg transition-all duration-300`}>
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity rounded-lg`}></div>
                      <span className="relative text-sm font-medium text-slate-300 group-hover:text-white transition-colors">
                        {item.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
