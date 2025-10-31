import { Mail, Linkedin, Github, Globe, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'shuvaya@mail.yu.edu',
      link: 'mailto:shuvaya@mail.yu.edu',
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: '+1 (347) 759-1641',
      link: 'tel:+13477591641',
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'New York, NY, USA',
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/seanhuvaya',
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      link: 'https://github.com/seanhuvaya',
    },
    {
      icon: <Globe size={24} />,
      label: 'Website',
      link: 'https://seanhuvaya.dev',
    },
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-6 flex items-center bg-slate-950/50">
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <Mail className="text-blue-400" size={32} />
            <h2 className="text-4xl md:text-5xl font-bold">Get In Touch</h2>
          </div>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Open to opportunities in data engineering, backend development, and ML operations.
              Currently based in New York and available for remote work or relocation.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  {item.link ? (
                    <a
                      href={item.link}
                      className="flex items-center gap-4 p-4 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 flex-1 group"
                    >
                      <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-sm text-slate-400">{item.label}</div>
                        <div className="text-slate-100 font-medium">{item.value}</div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-lg flex-1">
                      <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-sm text-slate-400">{item.label}</div>
                        <div className="text-slate-100 font-medium">{item.value}</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="relative bg-gradient-to-br from-blue-500/10 to-emerald-500/10 border border-blue-500/20 rounded-xl p-8 h-full flex flex-col justify-between overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
                  <p className="text-slate-300 mb-8">
                    I'm always interested in hearing about new opportunities, collaborations, or
                    just connecting with fellow engineers and data professionals.
                  </p>
                </div>

                <div>
                  <div className="text-sm text-slate-400 mb-4">Find me on</div>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link flex items-center gap-2 px-4 py-3 bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-lg hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                        aria-label={social.label}
                      >
                        <span className="group-hover/link:scale-110 group-hover/link:rotate-12 transition-transform duration-300">{social.icon}</span>
                        <span className="font-medium">{social.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center text-slate-400 text-sm">
          <p>Copyright © 2025 Sean Huvaya. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}
