// 'use client';

// import React, { useState, useEffect } from 'react';
// import { Github, Mail, Phone, ExternalLink, Award, Code, Briefcase, GraduationCap, BookOpen, Users, Zap, Star, ChevronDown, ChevronRight, Calendar, MapPin, Trophy, Target, Rocket, Brain, Database, Smartphone, Globe, TrendingUp, Linkedin, Facebook } from 'lucide-react';

// export default function Portfolio() {
//   const [activeSection, setActiveSection] = useState('about');
//   const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});
//   const [currentRoadmapIndex, setCurrentRoadmapIndex] = useState(0);
//   const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
//   const [isHovering, setIsHovering] = useState(false);

//   // Data arrays
//   const roadmapData = [
//     {
//       year: "2022-2025",
//       title: "Computer Engineering",
//       subtitle: "Fr. CRCE",
//       description: "CGPA: 9.24",
//       status: "current"
//     },
//     {
//       year: "2024-Present",
//       title: "Mobond (M-Indicator)",
//       subtitle: "Software Development Intern",
//       description: "Contributing to Mumbai's leading transport app",
//       status: "current"
//     },
//     {
//       year: "2024",
//       title: "University of Mumbai",
//       subtitle: "Software Development Intern",
//       description: "Centralized exam portal for 900+ colleges",
//       status: "completed"
//     },
//     {
//       year: "2023-2024",
//       title: "GDSC",
//       subtitle: "Mobile Dev Lead",
//       description: "Led BitNBuild International",
//       status: "completed"
//     },
//     {
//       year: "2019-2022",
//       title: "VES Polytechnic",
//       subtitle: "Diploma",
//       description: "Aggregate: 93.14%",
//       status: "completed"
//     }
//   ];

//   const skills = [
//     { name: 'C++', level: 90 },
//     { name: 'Java', level: 85 },
//     { name: 'Python', level: 88 },
//     { name: 'Kotlin', level: 85 },
//     { name: 'React/Next.js', level: 90 },
//     { name: 'Android Development', level: 92 },
//     { name: 'AI/ML & RAG', level: 85 },
//     { name: 'Firebase/MongoDB', level: 88 }
//   ];

//   const internships = [
//     {
//       company: "Mobond (M-Indicator)",
//       role: "Software Development Intern",
//       period: "Feb 2024 - Present",
//       description: "Contributing to Mumbai's most widely used public transport app with 10M+ users. Enhanced live train location tracking system and developed web version.",
//       achievements: [
//         "Improved real-time accuracy by 8%",
//         "Launched LandReport web version - 42% traffic increase",
//         "Optimized backend for high-volume concurrent users"
//       ],
//       tech: ["Android", "Backend", "Real-time Systems", "Web Development"],
//       image: "/mobond.jpg"
//     },
//     {
//       company: "University of Mumbai",
//       role: "Software Development Intern",
//       period: "Jun 2024 - Sep 2024",
//       description: "Developed centralized exam management portal for 900+ affiliated colleges, digitizing paper-based workflows.",
//       achievements: [
//         "Reduced processing time by 60%",
//         "Eliminated 70% of logistical errors",
//         "Served 20,000+ faculty/admin users"
//       ],
//       tech: ["Next.js", "Pocketbase", "System Architecture"],
//       image: "mu.jpg"
//     }
//   ];

//   const projects = [
//     {
//       title: "ZapUPI: UPI Payments for Foreign Tourists",
//       client: "Innovation Week @ JPMC",
//       description: "Bridging the gap for international travelers in India by enabling seamless UPI payments via foreign cards. Built for speed, security, and real-world utility.",
//       tech: ["UPI", "Razorpay", "Firebase", "Kotlin", "Android"],
//       status: "Prototype Launched",
//       image: "/zap.jpg.png",
//       link: ""
//     },
//     {
//       title: "AI-Powered VR Interview Simulator",
//       client: "DRDO (RAC)",
//       description: "Revolutionary VR platform featuring 3D AI interviewer with emotional intelligence, real-time response analysis, and immersive board room simulations for comprehensive candidate assessment.",
//       tech: ["Virtual Reality", "AI/ML", "OpenCV", "RAG", "Emotion Detection"],
//       status: "In Development",
//       image: "/image.png",
//       link: "https://www.youtube.com/watch?v=e__HKpsfqpk&ab_channel=SohamParab"
//     },
//     {
//       title: "ArthVeda: Portfolio Optimizer",
//       client: "TIAA Hackathon Winner",
//       description: "Award-winning investment platform utilizing Monte Carlo simulations, AI-powered stock analysis, and personalized recommendations.",
//       tech: ["Django", "Android", "Monte Carlo", "Financial APIs"],
//       status: "Completed",
//       image: "/arthved.png",
//       link: ""
//     }
//   ];

//   const hackathons = [
//     {
//       position: "Winner",
//       event: "TIAA Retire-a-thon",
//       venue: "TIAA Mumbai",
//       project: "ArthVeda: Portfolio Optimizer",
//       description: "Built comprehensive investment optimization platform using Monte Carlo simulations",
//       image: "/api/placeholder/400/250"
//     },
//     {
//       position: "Winner",
//       event: "Technovate 2.0",
//       venue: "Sardar Patel Institute of Technology",
//       project: "Innovation Challenge",
//       description: "Developed cutting-edge solution for technology innovation",
//       image: "/api/placeholder/400/250"
//     },
//     {
//       position: "Winner",
//       event: "Stratagem",
//       venue: "Technical Competition",
//       project: "Instalytics",
//       description: "Built innovative strategic solution addressing the challemnge of social media analytics all at one place.",
//       image: "/api/placeholder/400/250"
//     },
//     {
//       position: "Winner",
//       event: "Technothon VESP",
//       venue: "Vivekanand Education Society",
//       project: "Technical Innovation",
//       description: "Developed comprehensive technical solution for real-world problems",
//       image: "/api/placeholder/400/250"
//     },
//     {
//       position: "Winner",
//       event: "Algoholic 2.0",
//       venue: "Fr. Conceicao Rodrigues College of Engineering",
//       project: "Algorithmic Solution",
//       description: "Created efficient algorithmic solution in the given time frame",
//       image: "/api/placeholder/400/250"
//     },
//     {
//       position: "Winner",
//       event: "Hack-Mania",
//       venue: "Atharva College of Engineering",
//       project: "Technical Solution",
//       description: "Built innovative technical solution addressing real-world problems",
//       image: "/api/placeholder/400/250"
//     },
//     {
//       position: "Winner",
//       event: "Ingenious Hackathon",
//       venue: "Fr. Conceicao Rodrigues College of Engineering",
//       project: "Creative Innovation",
//       description: "Developed ingenious solution combining creativity with technical excellence",
//       image: "/api/placeholder/400/250"
//     },
//     {
//       position: "Winner",
//       event: "InnoQuest",
//       venue: "K. J. Somaiya College of Engineering",
//       project: "Quest Innovation",
//       description: "Created innovative solution for technological advancement challenge",
//       image: "/api/placeholder/400/250"
//     },
//     {
//       position: "Winner",
//       event: "Unfold by CoinDCX",
//       venue: "CoinDCX at Marriott Bangalore",
//       project: "Doccrypt: Blockchain-based Document Verification",
//       description: "Successfully completed bounty challenge with innovative technical approach",
//       image: "/api/placeholder/400/250"
//     }
//   ];

//   const freelanceProjects = [
//     {
//       title: "A. S. Engineering Works Website",
//       client: "A. S. Engineering Works",
//       description: "Crafted a responsive website showcasing industrial food-processing machines, product catalog, and contact info — helping them reach customers online.",
//       tech: ["Next.js", "React", "CSS", "Firebase"],
//       timeline: "About 1 month",
//       image: "/as.png",
//       link: "https://asengineeringworks.in/"
//     },
//     {
//       title: "Prabhat Steel Website",
//       client: "Prabhat Steel",
//       description: "Built a clean, modern homepage for a steel business, highlighting services, gallery, and contact — deployed to Vercel for quick live updates.",
//       tech: ["Next.js", "React", "Vercel", "Supabase"],
//       timeline: "Couple weeks",
//       image: "/prabhat.png",
//       link: "https://prabhat-steel.vercel.app/"
//     }
//   ];


//   // Custom cursor tracking
//   useEffect(() => {
//     const updateCursor = (e: MouseEvent) => {
//       setCursorPosition({ x: e.clientX, y: e.clientY });

//       const target = e.target as HTMLElement;
//       const isInteractive =
//         target.tagName === 'BUTTON' ||
//         target.tagName === 'A' ||
//         target.tagName === 'IMG' ||
//         target.classList.contains('interactive') ||
//         !!target.closest('button') ||
//         !!target.closest('a') ||
//         !!target.closest('.interactive') ||
//         target.hasAttribute('data-interactive') ||
//         window.getComputedStyle(target).cursor === 'pointer';

//       setIsHovering(isInteractive);
//     };

//     const handleMouseEnter = (e: MouseEvent) => {
//       const target = e.target as HTMLElement;
//       if (target.classList.contains('interactive') || target.tagName === 'BUTTON' || target.tagName === 'A') {
//         setIsHovering(true);
//       }
//     };

//     const handleMouseLeave = () => {
//       setIsHovering(false);
//     };

//     document.addEventListener('mousemove', updateCursor);
//     document.addEventListener('mouseenter', handleMouseEnter, true);
//     document.addEventListener('mouseleave', handleMouseLeave, true);

//     return () => {
//       document.removeEventListener('mousemove', updateCursor);
//       document.removeEventListener('mouseenter', handleMouseEnter, true);
//       document.removeEventListener('mouseleave', handleMouseLeave, true);
//     };
//   }, []);

//   // Roadmap animation effect
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentRoadmapIndex((prev) => (prev + 1) % roadmapData.length);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   // Intersection Observer for animations
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           setIsVisible((prev) => ({
//             ...prev,
//             [entry.target.id]: entry.isIntersecting,
//           }));
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const sections = document.querySelectorAll('section[id]');
//     sections.forEach((section) => observer.observe(section));

//     return () => observer.disconnect();
//   }, []);

//   // Simple scroll to section
//   const scrollToSection = (sectionId: string) => {
//     setActiveSection(sectionId);
//   };

//   return (
//     <div className="min-h-screen text-white overflow-hidden" style={{ backgroundColor: '#161616' }}>
//       {/* Custom cursor */}
//       <div
//         className={`fixed w-6 h-6 rounded-full pointer-events-none z-[9999] transition-all duration-150 ease-out ${isHovering ? 'bg-blue-500 scale-150' : 'bg-white'
//           }`}
//         style={{
//           left: cursorPosition.x - 12,
//           top: cursorPosition.y - 12,
//           transform: 'translate(0, 0)',
//           mixBlendMode: isHovering ? 'screen' : 'difference'
//         }}
//       />

//       {/* Background text effect */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-[0.02]">
//         <div className="absolute inset-0 text-[8px] leading-tight text-gray-700 p-4 whitespace-pre-wrap font-mono animate-pulse">
//           {Array(200).fill(null).map((_, i) => (
//             <span key={i}>
//               sohamparab softwareengineer fullstackdeveloper androiddevelopment artificialintelligence machinelearning react nextjs kotlin java python mongodb firebase hackathonwinner drdo blockchain chainex arthveda tiaa computerengineering frcrce universitymumbai gdsc technicaladvisor mobiledevelopment ragsystems opencv emotiondetection virtualreality interviewsimulator portfoliooptimization montecarlosimulation django restfulapis systemarchitecture backenddevelopment frontenddevelopment databasemanagement continuousintegration agilemethodology cleancode scalablesolutions userexperiencedesign innovation collaboration performanceoptimization{' '}
//             </span>
//           ))}
//         </div>
//       </div>

//       {/* Left Sidebar */}
//       <div className="w-64 fixed h-full z-50 pl-8 pt-12" style={{ backgroundColor: '#161616' }}>
//         <div className="space-y-8">
//           <div className="mb-16 animate-fade-in">
//             <h1 className="text-2xl text-gray-400 font-light tracking-wide">Soham Parab</h1>
//           </div>

//           <nav className="space-y-12">
//             {[
//               { name: 'Home', key: 'about' },
//               { name: 'Work Experience', key: 'experience' },
//               { name: 'Skills and Projects', key: 'skills-projects' },
//               { name: 'Hackathons', key: 'hackathons' },
//               { name: 'Freelance', key: 'freelance' }
//             ].map((item, index) => (
//               <button
//                 key={item.key}
//                 onClick={() => scrollToSection(item.key)}
//                 className={`interactive block text-left text-3xl font-light transition-all duration-500 tracking-wide relative group transform hover:translate-x-2 ${activeSection === item.key
//                   ? 'text-blue-500 translate-x-2'
//                   : 'text-gray-500 hover:text-gray-300'
//                   }`}
//                 style={{
//                   animationDelay: `${index * 200}ms`,
//                   animation: 'slideInLeft 0.8s ease-out forwards',
//                   cursor: 'pointer',
//                   pointerEvents: 'auto',
//                   zIndex: 60
//                 }}
//                 data-interactive="true"
//                 onMouseEnter={() => setIsHovering(true)}
//                 onMouseLeave={() => setIsHovering(false)}
//               >
//                 {item.name}
//               </button>
//             ))}
//           </nav>
//         </div>
//       </div>

//       {/* Right Sidebar - Roadmap */}
//       <div className="w-80 fixed right-0 top-0 h-full overflow-y-auto z-50 pr-8 pt-12" style={{ backgroundColor: '#161616' }}>
//         <div className="flex items-center justify-end mb-12 animate-fade-in">
//           <div className="flex items-center space-x-3">
//             <div className="w-8 h-px bg-gray-600 animate-expand"></div>
//             <div className="w-2 h-2 bg-gray-600 rounded-full animate-pulse"></div>
//             <span className="text-gray-400 text-sm font-light tracking-wider">Roadmap</span>
//           </div>
//         </div>

//         <div className="space-y-12 pl-8">
//           {roadmapData.map((item, index) => (
//             <div
//               key={index}
//               className={`relative transition-all duration-1000 ${index <= currentRoadmapIndex ? 'opacity-100 translate-x-0' : 'opacity-30 translate-x-4'
//                 }`}
//               style={{
//                 animationDelay: `${index * 300}ms`,
//                 animation: index <= currentRoadmapIndex ? 'typewriter 1.5s ease-out forwards' : 'none'
//               }}
//             >
//               {index !== roadmapData.length - 1 && (
//                 <div className={`absolute left-2 top-12 w-px h-20 bg-gray-700 transition-all duration-800 ${index < currentRoadmapIndex ? 'scale-y-100' : 'scale-y-0'
//                   }`} style={{ transformOrigin: 'top' }}></div>
//               )}
//               <div className="flex items-start space-x-4">
//                 <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 mt-1 transition-all duration-500 ${item.status === 'current'
//                   ? 'bg-blue-500 border-blue-500 scale-110 animate-pulse'
//                   : index <= currentRoadmapIndex
//                     ? 'bg-gray-600 border-gray-600 scale-100'
//                     : 'bg-transparent border-gray-600 scale-90'
//                   }`}></div>
//                 <div className="flex-1">
//                   <div className="text-sm text-gray-400 mb-2 font-light">{item.year}</div>
//                   <div className="text-green-400 text-sm font-light mb-1">{item.title}</div>
//                   <div className="text-red-400 text-xs font-light mb-2">{item.subtitle}</div>
//                   <div className="text-gray-500 text-xs leading-relaxed font-light">{item.description}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="ml-64 mr-80 h-screen overflow-y-hidden relative main-content-font">
//         {/* Subtle Notebook Lines Background */}
//         <div className="absolute inset-0 pointer-events-none z-0">
//           <div className="w-full h-full" style={{
//             backgroundImage: `
//               linear-gradient(to bottom, transparent 0px, transparent 31px, rgba(156, 163, 175, 0.08) 32px, rgba(156, 163, 175, 0.08) 32.5px, transparent 33px),
//               linear-gradient(to right, transparent 0px, transparent 59px, rgba(239, 68, 68, 0.12) 60px, rgba(239, 68, 68, 0.12) 60.5px, transparent 61px)
//             `,
//             backgroundSize: '100% 34px, 100% 100%'
//           }}>
//           </div>
//         </div>

//         {/* Content Sections */}
//         {activeSection === 'about' && (
//           <section className="h-screen flex items-center px-16 pl-24 relative z-10">
//             <div className="max-w-6xl w-full mx-auto">
//               {/* Personal Note */}
//               <div className="mb-12 p-6 bg-gray-800/30 border-l-4 border-blue-400 rounded-r-lg backdrop-blur-sm">
//                 <p className="text-gray-300 italic font-light leading-relaxed text-xl">
//                   📝 <strong className="text-blue-400">Hey there!</strong> This isn’t just a portfolio, it’s my space. A mix of everything I’ve built, learned, messed up, and figured out along the way. It’s as much about who I am as what I’ve done.
//                 </p>
//               </div>

//               <div className="grid lg:grid-cols-2 gap-16 items-center">
//                 <div className="relative">
//                   <img
//                     src="/soham.jpg"
//                     alt="Profile"
//                     className="interactive w-full h-96 object-cover rounded-lg shadow-xl transition-transform duration-700 hover:scale-105"
//                     data-interactive="true"
//                     onMouseEnter={() => setIsHovering(true)}
//                     onMouseLeave={() => setIsHovering(false)}
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <h2 className="text-3xl font-light text-white leading-relaxed tracking-wide animate-fade-in-up" style={{ animationDelay: '200ms' }}>
//                     I'm Soham a <span className="text-blue-400 ">software engineer</span> from
//                     Mumbai, India. I build, I break, I learn, and somewhere in that loop I find myself.
//                   </h2>

//                   <p className="text-gray-400 text-base font-light animate-fade-in-up" style={{ animationDelay: '600ms' }}>
//                     Find out more about my technical expertise and development journey.
//                   </p>
//                   <div className="grid grid-cols-3 gap-6 pt-2 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
//                     <div className="text-center">
//                       <div className="text-3xl font-light text-blue-400 mb-1">4+</div>
//                       <div className="text-sm text-gray-400 font-light">Years of Experience</div>
//                     </div>
//                     <div className="text-center">
//                       <div className="text-3xl font-light text-green-400 mb-1">9+</div>
//                       <div className="text-sm text-gray-400 font-light">Hackathon Wins</div>
//                     </div>
//                     <div className="text-center">
//                       <div className="text-3xl font-light text-yellow-400 mb-1">20+</div>
//                       <div className="text-sm text-gray-400 font-light">Projects Impacted</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         )}

//         {activeSection === 'experience' && (
//           <section className="h-screen py-20 px-16 pl-24 overflow-y-auto relative z-10">
//             <div className="max-w-6xl mx-auto">
//               {/* Personal Note */}
//               <div className="mb-12 p-6 bg-gray-800/30 border-l-4 border-green-400 rounded-r-lg backdrop-blur-sm">
//                 <p className="text-gray-300 italic font-light leading-relaxed text-xl">
//                   🚀 <strong className="text-green-400">The Real World Journey!</strong> Somehow got thrown into the corporate world, ended up building stuff people actually use. M-Indicator, Mumbai University... wild ride tbh. Realized making things that make a difference? Yeah, that’s my thing.
//                 </p>
//               </div>

//               <div className="space-y-16">
//                 {internships.map((internship, index) => (
//                   <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 300}ms` }}>
//                     <div className="grid lg:grid-cols-2 gap-12 items-center">
//                       <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
//                         <div className="interactive relative overflow-hidden rounded-lg transform transition-all duration-700 hover:scale-105 hover:shadow-2xl">
//                           <img
//                             src={internship.image}
//                             alt={internship.company}
//                             className="w-full h-80 object-cover transition-transform duration-700 hover:scale-110"
//                           />
//                           <div className="absolute inset-0 bg-black/60 flex items-end transition-all duration-500 hover:bg-black/50">
//                             <div className="p-6 text-white transform transition-all duration-500 hover:translate-y-[-4px]">
//                               <h3 className="text-2xl font-light mb-2">{internship.company}</h3>
//                               <p className="text-sm text-gray-300">{internship.period}</p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''} animate-fade-in-left`} style={{ animationDelay: `${index * 300 + 200}ms` }}>
//                         <div>
//                           <h3 className="text-2xl font-light text-white mb-2 transform transition-all duration-500 hover:translate-x-2">{internship.role}</h3>
//                           <p className="text-gray-400 font-light leading-relaxed text-lg">{internship.description}</p>
//                         </div>

//                         <div>
//                           <h4 className="text-lg font-light text-white mb-4">Key Achievements:</h4>
//                           <ul className="space-y-2">
//                             {internship.achievements.map((achievement, idx) => (
//                               <li key={idx} className="flex items-start space-x-3 transform transition-all duration-300 hover:translate-x-2">
//                                 <div className="w-1 h-1 bg-gray-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
//                                 <span className="text-gray-300 font-light text-sm">{achievement}</span>
//                               </li>
//                             ))}
//                           </ul>
//                         </div>

//                         <div className="flex flex-wrap gap-2">
//                           {internship.tech.map((tech, idx) => (
//                             <span
//                               key={idx}
//                               className="interactive text-xs text-gray-400 bg-gray-700/50 px-3 py-1 rounded font-light transform transition-all duration-300 hover:bg-gray-600/50 hover:scale-105"
//                             >
//                               {tech}
//                             </span>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>
//         )}

//         {activeSection === 'skills-projects' && (
//           <section className="h-screen py-20 px-16 pl-24 overflow-y-auto relative z-10">
//             <div className="max-w-6xl mx-auto">
//               {/* Personal Note */}
//               <div className="mb-12 p-6 bg-gray-800/30 border-l-4 border-purple-400 rounded-r-lg backdrop-blur-sm">
//                 <p className="text-gray-300 italic font-light leading-relaxed  text-xl">
//                   🛠️ <strong className="text-purple-400">Skills and Projects</strong> Everything I’ve poked, prodded, broken, and finally figured out (after sleepless nights). Code I wrote when I was just vibing, some of it won hackathons, some of it just made life easier. All of it? 100% me.
//                 </p>
//               </div>
//               <div className="mb-20 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
//                 <h3 className="text-2xl font-light text-white mb-8">Technical Expertise</h3>
//                 <div className="grid md:grid-cols-2 gap-6">
//                   {skills.map((skill, index) => (
//                     <div key={skill.name} className="space-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
//                       <div className="flex justify-between text-sm">
//                         <span className="text-gray-300 font-light">{skill.name}</span>
//                         <span className="text-gray-500 text-xs">{skill.level}%</span>
//                       </div>
//                       <div className="w-full bg-gray-700 h-0.5 rounded overflow-hidden">
//                         <div
//                           className="bg-gray-400 h-0.5 rounded transition-all duration-2000 ease-out transform"
//                           style={{
//                             width: activeSection === 'skills-projects' ? `${skill.level}%` : '0%',
//                             transitionDelay: `${index * 150}ms`
//                           }}
//                         ></div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
//                 <h3 className="text-2xl font-light text-white mb-8">Major Projects</h3>
//                 <div className="space-y-16">
//                   {projects.map((project, index) => (
//                     <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
//                       <div className="grid lg:grid-cols-3 gap-8 items-center">
//                         <div className={`lg:col-span-2 space-y-4 ${index % 2 === 1 ? 'lg:order-2' : ''} animate-fade-in-left`}>
//                           <div className="flex justify-between items-start">
//                             <h4 className="text-xl font-light text-white transform transition-all duration-500 hover:translate-x-2">{project.title}</h4>
//                             <span className="text-xs text-gray-500 font-light animate-pulse">{project.status}</span>
//                           </div>
//                           <p className="text-sm text-gray-400 font-light">{project.client}</p>
//                           <p className="text-gray-300 font-light leading-relaxed text-sm">{project.description}</p>
//                           <div className="flex flex-wrap gap-2 items-center">
//                             {project.tech.map((tech, idx) => (
//                               <span
//                                 key={idx}
//                                 className="interactive text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded font-light transform transition-all duration-300 hover:bg-gray-600/50 hover:scale-105"
//                               >
//                                 {tech}
//                               </span>
//                             ))}
//                             <a
//                               href={project.link || '#'}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="interactive text-gray-400 text-xl ml-4 hover:text-gray-300 transition-colors duration-300"
//                             >
//                               view
//                             </a>
//                           </div>
//                         </div>

//                         <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''} animate-fade-in-right`}>
//                           <div className="interactive relative overflow-hidden rounded-lg transform transition-all duration-700 hover:scale-105 hover:shadow-2xl">
//                             <img
//                               src={project.image}
//                               alt={project.title}
//                               className="w-full h-48 object-cover transition-transform duration-700 hover:scale-110"
//                             />
//                             <div className="absolute inset-0 bg-black/40 transition-all duration-500 hover:bg-black/20"></div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//               </div>

//               <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
//                 <p className="text-gray-300 font-light text-2xl">
//                   I've built more projects view them on{' '}
//                   <a
//                     href="https://github.com/Soham-03"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="interactive text-blue-400 hover:text-blue-300 transition-colors duration-300"
//                   >
//                     github
//                   </a>
//                 </p>
//               </div>

//             </div>
//           </section>
//         )}

//         {activeSection === 'hackathons' && (
//           <section className="h-screen py-20 px-16 pl-24 overflow-y-auto relative z-10">
//             <div className="max-w-6xl mx-auto">
//               {/* Personal Note */}
//               <div className="mb-12 p-6 bg-gray-800/30 border-l-4 border-yellow-400 rounded-r-lg backdrop-blur-sm">
//                 <p className="text-gray-300 italic font-light leading-relaxed text-xl">
//                   🏆 <strong className="text-yellow-400">Hackathons</strong> Started off for the free food and 24 hours of chaos, now it's my weekend staycation. <strong className="text-yellow-400">Won 9 (and counting)</strong>, but honestly? It's just my happy place to build, break, vibe, and win a little.
//                 </p>
//               </div>
//               <div className="grid lg:grid-cols-2 gap-8">
//                 {hackathons.map((hackathon, index) => (
//                   <div
//                     key={index}
//                     className="interactive relative group animate-fade-in-up"
//                     style={{ animationDelay: `${index * 150}ms` }}
//                   >
//                     <div className="w-full h-64 relative overflow-hidden rounded-lg transform transition-all duration-700 hover:scale-105 hover:shadow-2xl">
//                       {/* <img
//                         src={hackathon.image || ''}
//                         className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
//                       /> */}
//                       <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-6 transition-all duration-500 group-hover:bg-black/60">
//                         <div className="text-2xl font-light text-yellow-400 mb-2 transform transition-all duration-500 group-hover:translate-y-[-4px] animate-pulse">{hackathon.position}</div>
//                         <h3 className="text-lg font-light text-white mb-1 transform transition-all duration-500 group-hover:translate-y-[-4px]">{hackathon.event}</h3>
//                         <p className="text-sm text-gray-300 mb-2 transform transition-all duration-500 group-hover:translate-y-[-4px]">{hackathon.venue}</p>
//                         <p className="text-xs text-gray-400 font-light transform transition-all duration-500 group-hover:translate-y-[-4px]">{hackathon.description}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>
//         )}

//         {activeSection === 'freelance' && (
//           <section className="h-screen py-20 px-16 pl-24 overflow-y-auto relative z-10">
//             <div className="max-w-6xl mx-auto">
//               {/* Personal Note */}
//               <div className="mb-12 p-6 bg-gray-800/30 border-l-4 border-cyan-400 rounded-r-lg backdrop-blur-sm">
//                 <p className="text-gray-300 italic font-light leading-relaxed text-xl">
//                   💼 <strong className="text-cyan-400">Freelance Projects</strong> Took a few side quests, helped brands get their tech game on. Kinda wild seeing something you made actually work in the wild. Real impact, real fun.
//                 </p>
//               </div>

//               {/* <h2 className="text-4xl font-light text-white mb-16 text-center tracking-wide animate-fade-in-up">
//                 Freelance Projects
//               </h2> */}

//               <div className="space-y-16">
//                 {freelanceProjects.map((project, index) => (
//                   <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 300}ms` }}>
//                     <div className="grid lg:grid-cols-2 gap-12 items-center">
//                       <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
//                         <div className="interactive relative overflow-hidden rounded-lg transform transition-all duration-700 hover:scale-105 hover:shadow-2xl">
//                           <img
//                             src={project.image}
//                             alt={project.title}
//                             className="w-full h-72 object-cover transition-transform duration-700 hover:scale-110"
//                           />
//                           <div className="absolute inset-0 bg-black/50 flex items-end transition-all duration-500 hover:bg-black/40">
//                             <div className="p-6 text-white transform transition-all duration-500 hover:translate-y-[-4px]">
//                               <h3 className="text-xl font-light mb-2">{project.title}</h3>
//                               <p className="text-sm text-gray-300">{project.timeline}</p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''} animate-fade-in-left`} style={{ animationDelay: `${index * 300 + 200}ms` }}>
//                         <div>
//                           <h3 className="text-2xl font-light text-white mb-2 transform transition-all duration-500 hover:translate-x-2">{project.title}</h3>
//                           <p className="text-sm text-gray-400 mb-4 font-light">Client: {project.client}</p>
//                           <p className="text-gray-300 font-light leading-relaxed text-lg">{project.description}</p>
//                         </div>

//                         <div className="flex flex-wrap gap-2">
//                           {project.tech.map((tech, idx) => (
//                             <span
//                               key={idx}
//                               className="interactive text-xs text-gray-400 bg-gray-700/50 px-3 py-1 rounded font-light transform transition-all duration-300 hover:bg-gray-600/50 hover:scale-105"
//                             >
//                               {tech}
//                             </span>
//                           ))}
//                         </div>

//                         <div className="text-sm text-gray-400">
//                           <span className="font-light">Timeline: {project.timeline}</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>
//         )}
//       </div>

//       {/* Footer */}
//       <div className="fixed bottom-0 left-0 right-0 border-t border-gray-700 px-8 py-3 z-40" style={{ backgroundColor: '#161616' }}>
//         <div className="flex items-center justify-between text-xs text-gray-400 font-light">
//           <div className="flex items-center space-x-8">
//             <a
//               href="mailto:sohamparab1003@gmail.com"
//               className="interactive flex items-center space-x-2 transform transition-all duration-300 hover:translate-y-[-2px] hover:text-gray-300"
//             >
//               <Mail size={12} />
//               <span className="uppercase tracking-wide">sohamparab1003@gmail.com</span>
//             </a>
//             <a
//               href="https://github.com/Soham-03"
//               className="interactive flex items-center space-x-2 transform transition-all duration-300 hover:translate-y-[-2px] hover:text-gray-300"
//             >
//               <Github size={12} />
//               <span className="uppercase tracking-wide">github</span>
//             </a>
//             <a
//               href="https://www.linkedin.com/in/sohamm-parab/"
//               className="interactive flex items-center space-x-2 transform transition-all duration-300 hover:translate-y-[-2px] hover:text-gray-300"
//             >
//               <Linkedin size={12} />
//               <span className="uppercase tracking-wide">linkedin</span>
//             </a>
//             <div className="flex items-center space-x-2 transform transition-all duration-300 hover:translate-y-[-2px] hover:text-gray-300">
//               <Phone size={12} />
//               <span className="uppercase tracking-wide">+91-9307377878 • soham parab</span>
//             </div>
//           </div>
//           <button
//             className="interactive px-4 py-1 bg-blue-600 text-white rounded text-xs font-medium uppercase tracking-wide transform transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg"
//             data-interactive="true"
//             onMouseEnter={() => setIsHovering(true)}
//             onMouseLeave={() => setIsHovering(false)}
//           >
//             contact me
//           </button>
//         </div>
//       </div>

//       {/* Custom CSS for animations */}
//       <style jsx>{`
//         * {
//           cursor: none !important;
//         }

//         html, body {
//           cursor: none !important;
//         }

//         .interactive:hover {
//           cursor: none !important;
//         }

//         .cursor-blue {
//           background-color: #3b82f6 !important;
//           mix-blend-mode: difference !important;
//           transform: scale(1.5) !important;
//         }

//         .cursor-element {
//           will-change: transform;
//           backface-visibility: hidden;
//           perspective: 1000px;
//         }

//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fadeInLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @font-face {
//           font-family: 'YourFontName';
//           src: url('/ff.ttf') format('opentype');
//           font-weight: normal;
//           font-style: normal;
//         }

//         /* Apply to main content */
//         .main-content-font {
//           font-family: 'YourFontName', sans-serif;
//         }

//         .main-content-font * {
//           font-family: 'YourFontName', sans-serif;
//         }

//         @keyframes fadeInRight {
//           from {
//             opacity: 0;
//             transform: translateX(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes slideInLeft {
//           from {
//             opacity: 0;
//             transform: translateX(-50px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes typewriter {
//           from {
//             opacity: 0.3;
//             transform: translateX(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes expand {
//           from {
//             width: 0;
//           }
//           to {
//             width: 32px;
//           }
//         }

//         .animate-fade-in {
//           animation: fadeInUp 0.8s ease-out forwards;
//         }

//         .animate-fade-in-up {
//           animation: fadeInUp 0.8s ease-out forwards;
//         }

//         .animate-fade-in-left {
//           animation: fadeInLeft 0.8s ease-out forwards;
//         }

//         .animate-fade-in-right {
//           animation: fadeInRight 0.8s ease-out forwards;
//         }

//         .animate-expand {
//           animation: expand 1s ease-out forwards;
//         }
//       `}</style>
//     </div>
//   );
// }

'use client';

import React, { useState, useEffect } from 'react';
import { Github, Mail, Phone, ExternalLink, Award, Code, Briefcase, GraduationCap, BookOpen, Users, Zap, Star, ChevronDown, ChevronRight, Calendar, MapPin, Trophy, Target, Rocket, Brain, Database, Smartphone, Globe, TrendingUp, Linkedin, Facebook, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('about');
  const [isVisible, setIsVisible] = useState({});
  const [currentRoadmapIndex, setCurrentRoadmapIndex] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Data arrays
  const roadmapData = [
    {
      year: "2022-2025",
      title: "Computer Engineering",
      subtitle: "Fr. CRCE",
      description: "CGPA: 9.24",
      status: "current"
    },
    {
      year: "2024-Present",
      title: "Mobond (M-Indicator)",
      subtitle: "Software Development Intern",
      description: "Contributing to Mumbai's leading transport app",
      status: "current"
    },
    {
      year: "2024",
      title: "University of Mumbai",
      subtitle: "Software Development Intern",
      description: "Centralized exam portal for 900+ colleges",
      status: "completed"
    },
    {
      year: "2023-2024",
      title: "GDSC",
      subtitle: "Mobile Dev Lead",
      description: "Led BitNBuild International",
      status: "completed"
    },
    {
      year: "2019-2022",
      title: "VES Polytechnic",
      subtitle: "Diploma",
      description: "Aggregate: 93.14%",
      status: "completed"
    }
  ];

  const skills = [
    { name: 'C++', level: 90 },
    { name: 'Java', level: 85 },
    { name: 'Python', level: 88 },
    { name: 'Kotlin', level: 85 },
    { name: 'React/Next.js', level: 90 },
    { name: 'Android Development', level: 92 },
    { name: 'AI/ML & RAG', level: 85 },
    { name: 'Firebase/MongoDB', level: 88 }
  ];

  const internships = [
    {
      company: "Mobond (M-Indicator)",
      role: "Software Development Intern",
      period: "Feb 2024 - Present",
      description: "Contributing to Mumbai's most widely used public transport app with 10M+ users. Enhanced live train location tracking system and developed web version.",
      achievements: [
        "Improved real-time accuracy by 8%",
        "Launched LandReport web version - 42% traffic increase",
        "Optimized backend for high-volume concurrent users"
      ],
      tech: ["Android", "Backend", "Real-time Systems", "Web Development"],
      image: "/mobond.jpg"
    },
    {
      company: "University of Mumbai",
      role: "Software Development Intern",
      period: "Jun 2024 - Sep 2024",
      description: "Developed centralized exam management portal for 900+ affiliated colleges, digitizing paper-based workflows.",
      achievements: [
        "Reduced processing time by 60%",
        "Eliminated 70% of logistical errors",
        "Served 20,000+ faculty/admin users"
      ],
      tech: ["Next.js", "Pocketbase", "System Architecture"],
      image: "mu.jpg"
    }
  ];

  const projects = [
    {
      title: "ZapUPI: UPI Payments for Foreign Tourists",
      client: "Innovation Week @ JPMC",
      description: "Bridging the gap for international travelers in India by enabling seamless UPI payments via foreign cards. Built for speed, security, and real-world utility.",
      tech: ["UPI", "Razorpay", "Firebase", "Kotlin", "Android"],
      status: "Prototype Launched",
      image: "/zap.jpg.png",
      link: ""
    },
    {
      title: "AI-Powered VR Interview Simulator",
      client: "DRDO (RAC)",
      description: "Revolutionary VR platform featuring 3D AI interviewer with emotional intelligence, real-time response analysis, and immersive board room simulations for comprehensive candidate assessment.",
      tech: ["Virtual Reality", "AI/ML", "OpenCV", "RAG", "Emotion Detection"],
      status: "In Development",
      image: "/image.png",
      link: "https://www.youtube.com/watch?v=e__HKpsfqpk&ab_channel=SohamParab"
    },
    {
      title: "ArthVeda: Portfolio Optimizer",
      client: "TIAA Hackathon Winner",
      description: "Award-winning investment platform utilizing Monte Carlo simulations, AI-powered stock analysis, and personalized recommendations.",
      tech: ["Django", "Android", "Monte Carlo", "Financial APIs"],
      status: "Completed",
      image: "/arthved.png",
      link: ""
    }
  ];

  const hackathons = [
    {
      position: "Winner",
      event: "TIAA Retire-a-thon",
      venue: "TIAA Mumbai",
      project: "ArthVeda: Portfolio Optimizer",
      description: "Built comprehensive investment optimization platform using Monte Carlo simulations",
      image: "/api/placeholder/400/250"
    },
    {
      position: "Winner",
      event: "Technovate 2.0",
      venue: "Sardar Patel Institute of Technology",
      project: "Innovation Challenge",
      description: "Developed cutting-edge solution for technology innovation",
      image: "/api/placeholder/400/250"
    },
    {
      position: "Winner",
      event: "Stratagem",
      venue: "Technical Competition",
      project: "Instalytics",
      description: "Built innovative strategic solution addressing the challemnge of social media analytics all at one place.",
      image: "/api/placeholder/400/250"
    },
    {
      position: "Winner",
      event: "Technothon VESP",
      venue: "Vivekanand Education Society",
      project: "Technical Innovation",
      description: "Developed comprehensive technical solution for real-world problems",
      image: "/api/placeholder/400/250"
    },
    {
      position: "Winner",
      event: "Algoholic 2.0",
      venue: "Fr. Conceicao Rodrigues College of Engineering",
      project: "Algorithmic Solution",
      description: "Created efficient algorithmic solution in the given time frame",
      image: "/api/placeholder/400/250"
    },
    {
      position: "Winner",
      event: "Hack-Mania",
      venue: "Atharva College of Engineering",
      project: "Technical Solution",
      description: "Built innovative technical solution addressing real-world problems",
      image: "/api/placeholder/400/250"
    },
    {
      position: "Winner",
      event: "Ingenious Hackathon",
      venue: "Fr. Conceicao Rodrigues College of Engineering",
      project: "Creative Innovation",
      description: "Developed ingenious solution combining creativity with technical excellence",
      image: "/api/placeholder/400/250"
    },
    {
      position: "Winner",
      event: "InnoQuest",
      venue: "K. J. Somaiya College of Engineering",
      project: "Quest Innovation",
      description: "Created innovative solution for technological advancement challenge",
      image: "/api/placeholder/400/250"
    },
    {
      position: "Winner",
      event: "Unfold by CoinDCX",
      venue: "CoinDCX at Marriott Bangalore",
      project: "Doccrypt: Blockchain-based Document Verification",
      description: "Successfully completed bounty challenge with innovative technical approach",
      image: "/api/placeholder/400/250"
    }
  ];

  const freelanceProjects = [
    {
      title: "A. S. Engineering Works Website",
      client: "A. S. Engineering Works",
      description: "Crafted a responsive website showcasing industrial food-processing machines, product catalog, and contact info — helping them reach customers online.",
      tech: ["Next.js", "React", "CSS", "Firebase"],
      timeline: "About 1 month",
      image: "/as.png",
      link: "https://asengineeringworks.in/"
    },
    {
      title: "Prabhat Steel Website",
      client: "Prabhat Steel",
      description: "Built a clean, modern homepage for a steel business, highlighting services, gallery, and contact — deployed to Vercel for quick live updates.",
      tech: ["Next.js", "React", "Vercel", "Supabase"],
      timeline: "Couple weeks",
      image: "/prabhat.png",
      link: "https://prabhat-steel.vercel.app/"
    }
  ];

  // Custom cursor tracking (disabled on mobile)
  useEffect(() => {
    if (isMobile) return;

    const updateCursor = (e: { clientX: any; clientY: any; target: any; }) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });

      const target = e.target;
      const isInteractive =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.tagName === 'IMG' ||
        target.classList.contains('interactive') ||
        !!target.closest('button') ||
        !!target.closest('a') ||
        !!target.closest('.interactive') ||
        target.hasAttribute('data-interactive') ||
        window.getComputedStyle(target).cursor === 'pointer';

      setIsHovering(isInteractive);
    };

    const handleMouseEnter = (e: { target: any; }) => {
      const target = e.target;
      if (target.classList.contains('interactive') || target.tagName === 'BUTTON' || target.tagName === 'A') {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, [isMobile]);

  // Roadmap animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoadmapIndex((prev) => (prev + 1) % roadmapData.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Simple scroll to section
  const scrollToSection = (sectionId: React.SetStateAction<string>) => {
    setActiveSection(sectionId);
    if (isMobile) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen text-white overflow-hidden" style={{ backgroundColor: '#161616' }}>
      {/* Custom cursor - only show on desktop */}
      {!isMobile && (
        <div
          className={`fixed w-6 h-6 rounded-full pointer-events-none z-[9999] transition-all duration-150 ease-out ${isHovering ? 'bg-blue-500 scale-150' : 'bg-white'
            }`}
          style={{
            left: cursorPosition.x - 12,
            top: cursorPosition.y - 12,
            transform: 'translate(0, 0)',
            mixBlendMode: isHovering ? 'screen' : 'difference'
          }}
        />
      )}

      {/* Background text effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-[0.02]">
        <div className="absolute inset-0 text-[8px] leading-tight text-gray-700 p-4 whitespace-pre-wrap font-mono animate-pulse">
          {Array(200).fill(null).map((_, i) => (
            <span key={i}>
              sohamparab softwareengineer fullstackdeveloper androiddevelopment artificialintelligence machinelearning react nextjs kotlin java python mongodb firebase hackathonwinner drdo blockchain chainex arthveda tiaa computerengineering frcrce universitymumbai gdsc technicaladvisor mobiledevelopment ragsystems opencv emotiondetection virtualreality interviewsimulator portfoliooptimization montecarlosimulation django restfulapis systemarchitecture backenddevelopment frontenddevelopment databasemanagement continuousintegration agilemethodology cleancode scalablesolutions userexperiencedesign innovation collaboration performanceoptimization{' '}
            </span>
          ))}
        </div>
      </div>

      {/* Mobile Header */}
      {isMobile && (
        <div className="fixed top-0 left-0 right-0 z-50 bg-[#161616] border-b border-gray-700 px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-lg text-gray-400 font-light tracking-wide">Soham Parab</h1>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      )}

      {/* Mobile Navigation Menu */}
      {isMobile && isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#161616] pt-16">
          <nav className="px-4 py-8 space-y-6">
            {[
              { name: 'Home', key: 'about' },
              { name: 'Work Experience', key: 'experience' },
              { name: 'Skills and Projects', key: 'skills-projects' },
              { name: 'Hackathons', key: 'hackathons' },
              { name: 'Freelance', key: 'freelance' }
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.key)}
                className={`block w-full text-left text-2xl font-light transition-all duration-300 tracking-wide ${
                  activeSection === item.key
                    ? 'text-blue-500'
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* Desktop Left Sidebar */}
      {!isMobile && (
        <div className="w-64 fixed h-full z-50 pl-8 pt-12" style={{ backgroundColor: '#161616' }}>
          <div className="space-y-8">
            <div className="mb-16 animate-fade-in">
              <h1 className="text-2xl text-gray-400 font-light tracking-wide">Soham Parab</h1>
            </div>

            <nav className="space-y-12">
              {[
                { name: 'Home', key: 'about' },
                { name: 'Work Experience', key: 'experience' },
                { name: 'Skills and Projects', key: 'skills-projects' },
                { name: 'Hackathons', key: 'hackathons' },
                { name: 'Freelance', key: 'freelance' }
              ].map((item, index) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  className={`interactive block text-left text-3xl font-light transition-all duration-500 tracking-wide relative group transform hover:translate-x-2 ${
                    activeSection === item.key
                      ? 'text-blue-500 translate-x-2'
                      : 'text-gray-500 hover:text-gray-300'
                  }`}
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animation: 'slideInLeft 0.8s ease-out forwards',
                    cursor: 'pointer',
                    pointerEvents: 'auto',
                    zIndex: 60
                  }}
                  data-interactive="true"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Desktop Right Sidebar - Roadmap */}
      {!isMobile && (
        <div className="w-80 fixed right-0 top-0 h-full overflow-y-auto z-50 pr-8 pt-12" style={{ backgroundColor: '#161616' }}>
          <div className="flex items-center justify-end mb-12 animate-fade-in">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-px bg-gray-600 animate-expand"></div>
              <div className="w-2 h-2 bg-gray-600 rounded-full animate-pulse"></div>
              <span className="text-gray-400 text-sm font-light tracking-wider">Roadmap</span>
            </div>
          </div>

          <div className="space-y-12 pl-8">
            {roadmapData.map((item, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ${
                  index <= currentRoadmapIndex ? 'opacity-100 translate-x-0' : 'opacity-30 translate-x-4'
                }`}
                style={{
                  animationDelay: `${index * 300}ms`,
                  animation: index <= currentRoadmapIndex ? 'typewriter 1.5s ease-out forwards' : 'none'
                }}
              >
                {index !== roadmapData.length - 1 && (
                  <div className={`absolute left-2 top-12 w-px h-20 bg-gray-700 transition-all duration-800 ${
                    index < currentRoadmapIndex ? 'scale-y-100' : 'scale-y-0'
                  }`} style={{ transformOrigin: 'top' }}></div>
                )}
                <div className="flex items-start space-x-4">
                  <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 mt-1 transition-all duration-500 ${
                    item.status === 'current'
                      ? 'bg-blue-500 border-blue-500 scale-110 animate-pulse'
                      : index <= currentRoadmapIndex
                        ? 'bg-gray-600 border-gray-600 scale-100'
                        : 'bg-transparent border-gray-600 scale-90'
                  }`}></div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-400 mb-2 font-light">{item.year}</div>
                    <div className="text-green-400 text-sm font-light mb-1">{item.title}</div>
                    <div className="text-red-400 text-xs font-light mb-2">{item.subtitle}</div>
                    <div className="text-gray-500 text-xs leading-relaxed font-light">{item.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`${isMobile ? 'pt-16' : 'ml-64 mr-80'} ${isMobile ? 'min-h-screen' : 'h-screen'} ${isMobile ? 'overflow-y-auto' : 'overflow-y-hidden'} relative main-content-font`}>
        {/* Subtle Notebook Lines Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(to bottom, transparent 0px, transparent 31px, rgba(156, 163, 175, 0.08) 32px, rgba(156, 163, 175, 0.08) 32.5px, transparent 33px),
              linear-gradient(to right, transparent 0px, transparent 59px, rgba(239, 68, 68, 0.12) 60px, rgba(239, 68, 68, 0.12) 60.5px, transparent 61px)
            `,
            backgroundSize: '100% 34px, 100% 100%'
          }}>
          </div>
        </div>

        {/* Content Sections */}
        {activeSection === 'about' && (
          <section className={`${isMobile ? 'min-h-screen pb-20' : 'h-screen'} flex items-center ${isMobile ? 'px-4 py-8' : 'px-16 pl-24'} relative z-10`}>
            <div className="max-w-6xl w-full mx-auto">
              {/* Personal Note */}
              <div className="mb-12 p-6 bg-gray-800/30 border-l-4 border-blue-400 rounded-r-lg backdrop-blur-sm">
                <p className={`text-gray-300 italic font-light leading-relaxed ${isMobile ? 'text-base' : 'text-xl'}`}>
                  📝 <strong className="text-blue-400">Hey there!</strong> This isn't just a portfolio, it's my space. A mix of everything I've built, learned, messed up, and figured out along the way. It's as much about who I am as what I've done.
                </p>
              </div>

              <div className={`grid ${isMobile ? 'grid-cols-1 gap-8' : 'lg:grid-cols-2 gap-16'} items-center`}>
                <div className="relative">
                  <img
                    src="/soham.jpg"
                    alt="Profile"
                    className={`interactive w-full ${isMobile ? 'h-64' : 'h-96'} object-cover rounded-lg shadow-xl transition-transform duration-700 hover:scale-105`}
                    data-interactive="true"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  />
                </div>

                <div className="space-y-2">
                  <h2 className={`${isMobile ? 'text-2xl' : 'text-3xl'} font-light text-white leading-relaxed tracking-wide animate-fade-in-up`} style={{ animationDelay: '200ms' }}>
                    I'm Soham a <span className="text-blue-400">software engineer</span> from
                    Mumbai, India. I build, I break, I learn, and somewhere in that loop I find myself.
                  </h2>

                  <p className="text-gray-400 text-base font-light animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                    Find out more about my technical expertise and development journey.
                  </p>
                  <div className={`grid ${isMobile ? 'grid-cols-1 gap-4' : 'grid-cols-3 gap-6'} pt-2 animate-fade-in-up`} style={{ animationDelay: '800ms' }}>
                    <div className="text-center">
                      <div className="text-3xl font-light text-blue-400 mb-1">4+</div>
                      <div className="text-sm text-gray-400 font-light">Years of Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-light text-green-400 mb-1">9+</div>
                      <div className="text-sm text-gray-400 font-light">Hackathon Wins</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-light text-yellow-400 mb-1">20+</div>
                      <div className="text-sm text-gray-400 font-light">Projects Impacted</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Roadmap */}
              {isMobile && (
                <div className="mt-12">
                  <h3 className="text-xl font-light text-white mb-6">My Journey</h3>
                  <div className="space-y-6">
                    {roadmapData.map((item, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className={`w-3 h-3 rounded-full border-2 flex-shrink-0 mt-1 ${
                          item.status === 'current'
                            ? 'bg-blue-500 border-blue-500'
                            : 'bg-gray-600 border-gray-600'
                        }`}></div>
                        <div className="flex-1">
                          <div className="text-xs text-gray-400 mb-1 font-light">{item.year}</div>
                          <div className="text-green-400 text-sm font-light mb-1">{item.title}</div>
                          <div className="text-red-400 text-xs font-light mb-1">{item.subtitle}</div>
                          <div className="text-gray-500 text-xs leading-relaxed font-light">{item.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {activeSection === 'experience' && (
          <section className={`${isMobile ? 'min-h-screen' : 'h-screen'} ${isMobile ? 'py-8 px-4' : 'py-20 px-16 pl-24'} overflow-y-auto relative z-10`}>
            <div className="max-w-6xl mx-auto">
              {/* Personal Note */}
              <div className="mb-12 p-6 bg-gray-800/30 border-l-4 border-green-400 rounded-r-lg backdrop-blur-sm">
                <p className={`text-gray-300 italic font-light leading-relaxed ${isMobile ? 'text-base' : 'text-xl'}`}>
                  🚀 <strong className="text-green-400">The Real World Journey!</strong> Somehow got thrown into the corporate world, ended up building stuff people actually use. M-Indicator, Mumbai University... wild ride tbh. Realized making things that make a difference? Yeah, that's my thing.
                </p>
              </div>

              <div className="space-y-16">
                {internships.map((internship, index) => (
                  <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 300}ms` }}>
                    <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'lg:grid-cols-2 gap-12'} items-center`}>
                      <div className={`relative ${!isMobile && index % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <div className="interactive relative overflow-hidden rounded-lg transform transition-all duration-700 hover:scale-105 hover:shadow-2xl">
                          <img
                            src={internship.image}
                            alt={internship.company}
                            className={`w-full ${isMobile ? 'h-48' : 'h-80'} object-cover transition-transform duration-700 hover:scale-110`}
                          />
                          <div className="absolute inset-0 bg-black/60 flex items-end transition-all duration-500 hover:bg-black/50">
                            <div className="p-6 text-white transform transition-all duration-500 hover:translate-y-[-4px]">
                              <h3 className={`${isMobile ? 'text-lg' : 'text-2xl'} font-light mb-2`}>{internship.company}</h3>
                              <p className="text-sm text-gray-300">{internship.period}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className={`space-y-6 ${!isMobile && index % 2 === 1 ? 'lg:order-1' : ''} animate-fade-in-left`} style={{ animationDelay: `${index * 300 + 200}ms` }}>
                        <div>
                          <h3 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-light text-white mb-2 transform transition-all duration-500 hover:translate-x-2`}>{internship.role}</h3>
                          <p className={`text-gray-400 font-light leading-relaxed ${isMobile ? 'text-base' : 'text-lg'}`}>{internship.description}</p>
                        </div>

                        <div>
                          <h4 className={`${isMobile ? 'text-base' : 'text-lg'} font-light text-white mb-4`}>Key Achievements:</h4>
                          <ul className="space-y-2">
                            {internship.achievements.map((achievement, idx) => (
                              <li key={idx} className="flex items-start space-x-3 transform transition-all duration-300 hover:translate-x-2">
                                <div className="w-1 h-1 bg-gray-500 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                                <span className="text-gray-300 font-light text-sm">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {internship.tech.map((tech, idx) => (
                            <span
                              key={idx}
                              className="interactive text-xs text-gray-400 bg-gray-700/50 px-3 py-1 rounded font-light transform transition-all duration-300 hover:bg-gray-600/50 hover:scale-105"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeSection === 'skills-projects' && (
          <section className={`${isMobile ? 'min-h-screen' : 'h-screen'} ${isMobile ? 'py-8 px-4' : 'py-20 px-16 pl-24'} overflow-y-auto relative z-10`}>
            <div className="max-w-6xl mx-auto">
              {/* Personal Note */}
              <div className="mb-12 p-6 bg-gray-800/30 border-l-4 border-purple-400 rounded-r-lg backdrop-blur-sm">
                <p className={`text-gray-300 italic font-light leading-relaxed ${isMobile ? 'text-base' : 'text-xl'}`}>
                  🛠️ <strong className="text-purple-400">Skills and Projects</strong> Everything I've poked, prodded, broken, and finally figured out (after sleepless nights). Code I wrote when I was just vibing, some of it won hackathons, some of it just made life easier. All of it? 100% me.
                </p>
              </div>
              <div className="mb-20 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                <h3 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-light text-white mb-8`}>Technical Expertise</h3>
                <div className={`grid ${isMobile ? 'grid-cols-1' : 'md:grid-cols-2'} gap-6`}>
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300 font-light">{skill.name}</span>
                        <span className="text-gray-500 text-xs">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 h-0.5 rounded overflow-hidden">
                        <div
                          className="bg-gray-400 h-0.5 rounded transition-all duration-2000 ease-out transform"
                          style={{
                            width: activeSection === 'skills-projects' ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 150}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <h3 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-light text-white mb-8`}>Major Projects</h3>
                <div className="space-y-16">
                  {projects.map((project, index) => (
                    <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                      <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'lg:grid-cols-3 gap-8'} items-center`}>
                        <div className={`${isMobile ? '' : 'lg:col-span-2'} space-y-4 ${!isMobile && index % 2 === 1 ? 'lg:order-2' : ''} animate-fade-in-left`}>
                          <div className="flex justify-between items-start">
                            <h4 className={`${isMobile ? 'text-lg' : 'text-xl'} font-light text-white transform transition-all duration-500 hover:translate-x-2`}>{project.title}</h4>
                            <span className="text-xs text-gray-500 font-light animate-pulse">{project.status}</span>
                          </div>
                          <p className="text-sm text-gray-400 font-light">{project.client}</p>
                          <p className="text-gray-300 font-light leading-relaxed text-sm">{project.description}</p>
                          <div className="flex flex-wrap gap-2 items-center">
                            {project.tech.map((tech, idx) => (
                              <span
                                key={idx}
                                className="interactive text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded font-light transform transition-all duration-300 hover:bg-gray-600/50 hover:scale-105"
                              >
                                {tech}
                              </span>
                            ))}
                            <a
                              href={project.link || '#'}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="interactive text-gray-400 text-xl ml-4 hover:text-gray-300 transition-colors duration-300"
                            >
                              view
                            </a>
                          </div>
                        </div>

                        <div className={`relative ${!isMobile && index % 2 === 1 ? 'lg:order-1' : ''} animate-fade-in-right`}>
                          <div className="interactive relative overflow-hidden rounded-lg transform transition-all duration-700 hover:scale-105 hover:shadow-2xl">
                            <img
                              src={project.image}
                              alt={project.title}
                              className={`w-full ${isMobile ? 'h-40' : 'h-48'} object-cover transition-transform duration-700 hover:scale-110`}
                            />
                            <div className="absolute inset-0 bg-black/40 transition-all duration-500 hover:bg-black/20"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                <p className="text-gray-300 font-light">
                  I've built more projects view them on{' '}
                  <a
                    href="https://github.com/Soham-03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    github
                  </a>
                </p>
              </div>

            </div>
          </section>
        )}

        {activeSection === 'hackathons' && (
          <section className={`${isMobile ? 'min-h-screen' : 'h-screen'} ${isMobile ? 'py-8 px-4' : 'py-20 px-16 pl-24'} overflow-y-auto relative z-10`}>
            <div className="max-w-6xl mx-auto">
              {/* Personal Note */}
              <div className="mb-12 p-6 bg-gray-800/30 border-l-4 border-yellow-400 rounded-r-lg backdrop-blur-sm">
                <p className={`text-gray-300 italic font-light leading-relaxed ${isMobile ? 'text-base' : 'text-xl'}`}>
                  🏆 <strong className="text-yellow-400">Hackathons</strong> Started off for the free food and 24 hours of chaos, now it's my weekend staycation. Won 9 (and counting), but honestly? It's just my happy place to build, break, vibe, and win a little.
                </p>
              </div>
              <div className={`grid ${isMobile ? 'grid-cols-1' : 'lg:grid-cols-2'} gap-8`}>
                {hackathons.map((hackathon, index) => (
                  <div
                    key={index}
                    className="interactive relative group animate-fade-in-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className={`w-full ${isMobile ? 'h-48' : 'h-64'} relative overflow-hidden rounded-lg transform transition-all duration-700 hover:scale-105 hover:shadow-2xl`}>
                      <div className="absolute inset-0 bg-black/70 flex flex-col justify-end p-6 transition-all duration-500 group-hover:bg-black/60">
                        <div className={`${isMobile ? 'text-xl' : 'text-2xl'} font-light text-yellow-400 mb-2 transform transition-all duration-500 group-hover:translate-y-[-4px] animate-pulse`}>{hackathon.position}</div>
                        <h3 className={`${isMobile ? 'text-base' : 'text-lg'} font-light text-white mb-1 transform transition-all duration-500 group-hover:translate-y-[-4px]`}>{hackathon.event}</h3>
                        <p className="text-sm text-gray-300 mb-2 transform transition-all duration-500 group-hover:translate-y-[-4px]">{hackathon.venue}</p>
                        <p className="text-xs text-gray-400 font-light transform transition-all duration-500 group-hover:translate-y-[-4px]">{hackathon.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {activeSection === 'freelance' && (
          <section className={`${isMobile ? 'min-h-screen' : 'h-screen'} ${isMobile ? 'py-8 px-4' : 'py-20 px-16 pl-24'} overflow-y-auto relative z-10`}>
            <div className="max-w-6xl mx-auto">
              {/* Personal Note */}
              <div className="mb-12 p-6 bg-gray-800/30 border-l-4 border-cyan-400 rounded-r-lg backdrop-blur-sm">
                <p className={`text-gray-300 italic font-light leading-relaxed ${isMobile ? 'text-base' : 'text-xl'}`}>
                  💼 <strong className="text-cyan-400">Freelance Projects</strong> Took a few side quests, helped brands get their tech game on. Kinda wild seeing something you made actually work in the wild. Real impact, real fun.
                </p>
              </div>

              <div className="space-y-16">
                {freelanceProjects.map((project, index) => (
                  <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 300}ms` }}>
                    <div className={`grid ${isMobile ? 'grid-cols-1 gap-6' : 'lg:grid-cols-2 gap-12'} items-center`}>
                      <div className={`relative ${!isMobile && index % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <div className="interactive relative overflow-hidden rounded-lg transform transition-all duration-700 hover:scale-105 hover:shadow-2xl">
                          <img
                            src={project.image}
                            alt={project.title}
                            className={`w-full ${isMobile ? 'h-48' : 'h-72'} object-cover transition-transform duration-700 hover:scale-110`}
                          />
                          <div className="absolute inset-0 bg-black/50 flex items-end transition-all duration-500 hover:bg-black/40">
                            <div className="p-6 text-white transform transition-all duration-500 hover:translate-y-[-4px]">
                              <h3 className={`${isMobile ? 'text-lg' : 'text-xl'} font-light mb-2`}>{project.title}</h3>
                              <p className="text-sm text-gray-300">{project.timeline}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className={`space-y-6 ${!isMobile && index % 2 === 1 ? 'lg:order-1' : ''} animate-fade-in-left`} style={{ animationDelay: `${index * 300 + 200}ms` }}>
                        <div>
                          <h3 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-light text-white mb-2 transform transition-all duration-500 hover:translate-x-2`}>{project.title}</h3>
                          <p className="text-sm text-gray-400 mb-4 font-light">Client: {project.client}</p>
                          <p className={`text-gray-300 font-light leading-relaxed ${isMobile ? 'text-base' : 'text-lg'}`}>{project.description}</p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, idx) => (
                            <span
                              key={idx}
                              className="interactive text-xs text-gray-400 bg-gray-700/50 px-3 py-1 rounded font-light transform transition-all duration-300 hover:bg-gray-600/50 hover:scale-105"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="text-sm text-gray-400">
                          <span className="font-light">Timeline: {project.timeline}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <div className={`fixed bottom-0 left-0 right-0 border-t border-gray-700 ${isMobile ? 'px-4 py-2' : 'px-8 py-3'} z-40`} style={{ backgroundColor: '#161616' }}>
        <div className={`flex ${isMobile ? 'flex-col space-y-2' : 'items-center justify-between'} text-xs text-gray-400 font-light`}>
          <div className={`flex ${isMobile ? 'flex-col space-y-2' : 'items-center space-x-8'}`}>
            <a
              href="mailto:sohamparab1003@gmail.com"
              className="interactive flex items-center space-x-2 transform transition-all duration-300 hover:translate-y-[-2px] hover:text-gray-300"
            >
              <Mail size={12} />
              <span className="uppercase tracking-wide">sohamparab1003@gmail.com</span>
            </a>
            <a
              href="https://github.com/Soham-03"
              className="interactive flex items-center space-x-2 transform transition-all duration-300 hover:translate-y-[-2px] hover:text-gray-300"
            >
              <Github size={12} />
              <span className="uppercase tracking-wide">github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/sohamm-parab/"
              className="interactive flex items-center space-x-2 transform transition-all duration-300 hover:translate-y-[-2px] hover:text-gray-300"
            >
              <Linkedin size={12} />
              <span className="uppercase tracking-wide">linkedin</span>
            </a>
            <div className="flex items-center space-x-2 transform transition-all duration-300 hover:translate-y-[-2px] hover:text-gray-300">
              <Phone size={12} />
              <span className="uppercase tracking-wide">+91-9307377878 • soham parab</span>
            </div>
          </div>
          <button
            className={`interactive px-4 py-1 bg-blue-600 text-white rounded text-xs font-medium uppercase tracking-wide transform transition-all duration-300 hover:bg-blue-700 hover:scale-105 hover:shadow-lg ${isMobile ? 'self-start' : ''}`}
            data-interactive="true"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            contact me
          </button>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        ${!isMobile ? `
        * {
          cursor: none !important;
        }

        html, body {
          cursor: none !important;
        }

        .interactive:hover {
          cursor: none !important;
        }
        ` : ''}

        .cursor-blue {
          background-color: #3b82f6 !important;
          mix-blend-mode: difference !important;
          transform: scale(1.5) !important;
        }

        .cursor-element {
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000px;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @font-face {
          font-family: 'YourFontName';
          src: url('/ff.ttf') format('opentype');
          font-weight: normal;
          font-style: normal;
        }

        /* Apply to main content */
        .main-content-font {
          font-family: 'YourFontName', sans-serif;
        }

        .main-content-font * {
          font-family: 'YourFontName', sans-serif;
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes typewriter {
          from {
            opacity: 0.3;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 32px;
          }
        }

        .animate-fade-in {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .animate-expand {
          animation: expand 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}