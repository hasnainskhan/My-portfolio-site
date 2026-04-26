'use client';

import { useState } from 'react';

interface MainContentProps {
  activeSection: string;
}

const MainContent = ({ activeSection }: MainContentProps) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [activeTab, setActiveTab] = useState('completed');
  const renderContent = () => {
    switch (activeSection) {
      case 'frontend':
        return (
          <div className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Front-End Development</h2>
            <div className="space-y-6">
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">React & Next.js Projects</h3>
                <p className="text-text-muted mb-4">
                  Modern web applications built with React and Next.js, featuring responsive design and optimal performance.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Next.js</span>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">TypeScript</span>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Tailwind CSS</span>
                </div>
              </div>
              
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">UI/UX Design</h3>
                <p className="text-text-muted mb-4">
                  Creating intuitive and beautiful user interfaces with modern design principles and accessibility in mind.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Figma</span>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">CSS3</span>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">HTML5</span>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">JavaScript</span>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'devops':
        return (
          <div className="p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">DevOps Engineering</h2>
            <div className="space-y-6">
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">Cloud Infrastructure</h3>
                <p className="text-text-muted mb-4">
                  Setting up and managing cloud infrastructure on AWS and Azure with automated deployment pipelines.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">AWS</span>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Azure</span>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Docker</span>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Kubernetes</span>
                </div>
              </div>
              
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">CI/CD Pipelines</h3>
                <p className="text-text-muted mb-4">
                  Implementing continuous integration and deployment workflows for efficient software delivery.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">GitHub Actions</span>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Jenkins</span>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">Azure DevOps</span>
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm">GitLab CI</span>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'allwork':
      default:
        return (
          <div>
            {/* Profile Header */}
            <div className="pt-4 sm:pt-8 px-4 sm:px-8 pb-4 sm:pb-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 space-y-2 sm:space-y-0">
                  <h1 className="text-lg sm:text-2xl font-bold text-foreground">Full Stack Engineer | DevOps Engineer</h1>
                </div>
              
              
              <div className="overflow-hidden">
                <div 
                  className={`transition-all duration-500 ease-in-out ${
                    showFullDescription 
                      ? 'max-h-[1500px]' 
                      : 'max-h-24'
                  }`}
                >
                  <div className={`transition-all duration-500 ease-in-out ${
                    showFullDescription 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-100 translate-y-0'
                  }`}>
                    {!showFullDescription ? (
                      <div>
                                 <p className="text-foreground text-base leading-relaxed">
                                   Hello! I'm Hasnain, a Full Stack Developer & DevOps Engineer with 6+ years of experience building modern web applications and managing cloud infrastructure. I specialize in delivering complete solutions from clean and responsive front-ends to powerful back-ends and automated deployments...
                                 </p>
                        <button 
                          className="underline cursor-pointer transition-colors duration-200 hover:text-accent/80"
                          style={{color: '#177803', textDecorationColor: '#177803'}}
                          onClick={() => setShowFullDescription(true)}
                        >
                          more
                        </button>
                      </div>
                    ) : (
                      <div className="text-foreground text-base leading-relaxed space-y-4">
                        <p>
                          Hello! I'm Hasnain, a Full Stack Developer & DevOps Engineer with 6+ years of experience building modern web applications and managing cloud infrastructure. I specialize in delivering complete solutions from clean and responsive front-ends to powerful back-ends and automated deployments.
                        </p>
                        
                        <div>
                          <p className="font-semibold mb-2">What I Do:</p>
                          <div className="space-y-1">
                            <div>✅ Build web apps with React.js, Next.js, and TypeScript</div>
                            <div>✅ Create backends & APIs with Node.js, Express, MongoDB</div>
                            <div>✅ Design responsive UI with TailwindCSS & modern frameworks</div>
                            <div>✅ Deploy and scale apps using AWS, Google Cloud, Vercel</div>
                            <div>✅ Set up CI/CD pipelines, Docker, GitHub Actions for smooth workflows</div>
                            <div>✅ Work with databases: MongoDB, PostgreSQL, MySQL, Firebase, Supabase</div>
                          </div>
                        </div>
                        
                        <div>
                          <p className="font-semibold mb-2">Why Clients Hire Me:</p>
                          <div className="space-y-1">
                            <div>✅ End-to-end development (frontend + backend + deployment)</div>
                            <div>✅ Reliable, deadline-focused, and detail-oriented</div>
                            <div>✅ Strong communication—clear and simple updates</div>
                            <div>✅ Scalable and secure solutions for businesses</div>
                          </div>
                        </div>
                        
                        <p>
                          Whether you need a landing page, a full SaaS app, or DevOps automation for cloud hosting, I can help bring your ideas to life.
                        </p>
                        
                        <p>
                          Let's build something amazing!
                        </p>
                        
                        <p>
                          Best,<br />
                          Hasnain
                        </p>
                        
                        <button 
                          className="text-accent underline cursor-pointer transition-colors duration-200 hover:text-accent/80"
                          style={{textDecorationColor: '#177803'}}
                          onClick={() => setShowFullDescription(false)}
                        >
                          less
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Border after profile section */}
            <div className="w-full h-px bg-border"></div>
            
            {/* Work History Section */}
            <div className="p-4 sm:p-8">
              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground">Work history</h2>
              </div>
              
              {/* Tabs */}
              <div className="mb-6">
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8">
                  <button 
                    className={`relative cursor-pointer transition-colors ${
                      activeTab === 'completed' 
                        ? 'text-foreground font-bold' 
                        : 'text-text-muted font-medium hover:text-foreground'
                    }`}
                    onClick={() => setActiveTab('completed')}
                  >
                    <span>Completed jobs (4)</span>
                    {activeTab === 'completed' && (
                      <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white"></div>
                    )}
                  </button>
                  <button 
                    className={`relative cursor-pointer transition-colors ${
                      activeTab === 'inprogress' 
                        ? 'text-foreground font-bold' 
                        : 'text-text-muted font-medium hover:text-foreground'
                    }`}
                    onClick={() => setActiveTab('inprogress')}
                  >
                    <span>In progress (1)</span>
                    {activeTab === 'inprogress' && (
                      <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-white"></div>
                    )}
                  </button>
                </div>
                <div className="mt-2 h-px bg-border"></div>
              </div>
              
              {/* Job Entries */}
              {activeTab === 'completed' && (
                <>
                  {/* Job Entry 1 */}
                  <div className="rounded-lg pl-0 pr-0 pt-0 pb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-accent text-lg font-bold mb-2">NextJS Developer Needed</h3>
                    <div className="flex items-center space-x-4 mb-2">
                      <div className="flex items-center space-x-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-text-muted text-sm">5.0</span>
                      </div>
                      <span className="text-text-muted text-sm">Jul 4, 2025 - Aug 19, 2025</span>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-foreground text-sm leading-relaxed">
                        "I found him to be highly efficient, courteous, and above all, extremely patient with me at all times. He is an awesome, talented, and experienced frontend developer. He delivered work on time and of amazing quality."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Entry 2 */}
              <div className="rounded-lg pl-0 pr-0 pt-0 pb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-accent text-lg font-bold mb-2">React Frontend Developer</h3>
                    <div className="flex items-center space-x-4 mb-2">
                      <div className="flex items-center space-x-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-text-muted text-sm">5.0</span>
                      </div>
                      <span className="text-text-muted text-sm">May 15, 2025 - Jun 30, 2025</span>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-foreground text-sm leading-relaxed">
                        "Excellent developer with great attention to detail. He delivered exactly what was requested and went above and beyond to ensure the project was perfect. Highly recommend for any React development work."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Entry 3 */}
              <div className="rounded-lg pl-0 pr-0 pt-0 pb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-accent text-lg font-bold mb-2">Full Stack Web Application</h3>
                    <div className="flex items-center space-x-4 mb-2">
                      <div className="flex items-center space-x-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-text-muted text-sm">5.0</span>
                      </div>
                      <span className="text-text-muted text-sm">Mar 10, 2025 - Apr 25, 2025</span>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-foreground text-sm leading-relaxed">
                        "Outstanding work! He built a complete web application from scratch with modern technologies. The code quality is excellent and the application runs smoothly. Will definitely hire again."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Job Entry 4 */}
              <div className="rounded-lg pl-0 pr-0 pt-0 pb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-accent text-lg font-bold mb-2">DevOps & Deployment Setup</h3>
                    <div className="flex items-center space-x-4 mb-2">
                      <div className="flex items-center space-x-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-text-muted text-sm">5.0</span>
                      </div>
                      <span className="text-text-muted text-sm">Jan 20, 2025 - Feb 28, 2025</span>
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-foreground text-sm leading-relaxed">
                        "Professional and knowledgeable DevOps engineer. He set up our entire deployment pipeline and cloud infrastructure perfectly. The system is now running smoothly and efficiently."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
                </>
              )}

              {/* In Progress Jobs */}
              {activeTab === 'inprogress' && (
                <div className="rounded-lg pl-0 pr-0 pt-0 pb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-accent text-lg font-bold mb-2">DevOps Engineer for CI/CD Pipelines</h3>
                      <div className="flex items-center space-x-4 mb-2">
                        <span className="text-text-muted text-sm">Sep 1, 2025 - Ongoing</span>
                      </div>
                      
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Border after work history section */}
            <div className="w-full h-px bg-border"></div>

            {/* Skills Section */}
            <div className="p-4 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Skills</h2>
              <div className="flex flex-wrap gap-3">
                {/* Full Stack Skills */}
                <span className="bg-secondary text-foreground px-4 py-2 rounded-full text-sm">Ecommerce Website</span>
                <span className="bg-secondary text-foreground px-4 py-2 rounded-full text-sm">Web Application</span>
                <span className="bg-secondary text-foreground px-4 py-2 rounded-full text-sm">Web Development</span>
                <span className="bg-secondary text-foreground px-4 py-2 rounded-full text-sm">Node.js</span>
                <span className="bg-secondary text-foreground px-4 py-2 rounded-full text-sm">React</span>
                <span className="bg-secondary text-foreground px-4 py-2 rounded-full text-sm">Next.js</span>
                <span className="bg-secondary text-foreground px-4 py-2 rounded-full text-sm">WordPress</span>
                
                {/* DevOps Skills */}
                <span className="bg-secondary text-foreground px-4 py-2 rounded-full text-sm">DevOps</span>
                <span className="bg-secondary text-foreground px-4 py-2 rounded-full text-sm">Terraform</span>
                <span className="bg-secondary text-foreground px-4 py-2 rounded-full text-sm">Jenkins</span>
                <span className="bg-secondary text-foreground px-4 py-2 rounded-full text-sm">Docker</span>
                <span className="bg-secondary text-foreground px-4 py-2 rounded-full text-sm">Kubernetes</span>
                <span className="bg-secondary text-foreground px-4 py-2 rounded-full text-sm">Linux</span>
                <span className="bg-secondary text-foreground px-4 py-2 rounded-full text-sm">AWS Application</span>
                <span className="bg-secondary text-foreground px-4 py-2 rounded-full text-sm">Azure DevOps</span>
                
                {/* Cloud Skills */}
                <span className="bg-secondary text-foreground px-4 py-2 rounded-full text-sm">AWS</span>
                <span className="bg-secondary text-foreground px-4 py-2 rounded-full text-sm">Google Cloud</span>
                <span className="bg-secondary text-foreground px-4 py-2 rounded-full text-sm">Azure</span>
                <span className="bg-secondary text-foreground px-4 py-2 rounded-full text-sm">Vercel</span>
                <span className="bg-secondary text-foreground px-4 py-2 rounded-full text-sm">Cloud Infrastructure</span>
                <span className="bg-secondary text-foreground px-4 py-2 rounded-full text-sm">Cloud Deployment</span>
              </div>
            </div>

          </div>
        );
    }
  };

  return (
    <main className="flex-1 bg-background">
      {renderContent()}
    </main>
  );
};

export default MainContent;