'use client';

import React, { useState, useEffect } from 'react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar = ({ activeSection, onSectionChange }: SidebarProps) => {
  const [githubData, setGithubData] = useState({
    username: 'codesphire',
    followers: 3,
    avatar_url: '/profile.png',
    created_at: '2024-01-01T00:00:00Z'
  });

  const [linkedinData, setLinkedinData] = useState({
    username: 'Hasnain Babar',
    connections: 500,
    avatar_url: '/linkedin-profile.png',
    created_at: '2024-01-01T00:00:00Z'
  });

  const [upworkData, setUpworkData] = useState({
    username: 'Hasnain Babar',
    jobs_completed: 5,
    avatar_url: '/upwork-profile.png',
    created_at: '2024-01-01T00:00:00Z'
  });

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch('https://api.github.com/users/bluesphires');
        if (response.ok) {
          const data = await response.json();
          setGithubData({
            username: data.login,
            followers: data.followers,
            avatar_url: data.avatar_url,
            created_at: data.created_at
          });
        }
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      }
    };

    const fetchLinkedInData = async () => {
      try {
        // Since LinkedIn API requires authentication, we'll use a mock approach
        // You can replace this with actual LinkedIn API calls if you have access
        setLinkedinData({
          username: 'Hasnain Babar',
          connections: 500,
          avatar_url: '/linkedin-profile.png', // LinkedIn profile image
          created_at: '2024-01-01T00:00:00Z'
        });
      } catch (error) {
        console.error('Error fetching LinkedIn data:', error);
      }
    };

    const fetchUpworkData = async () => {
      try {
        // Upwork API requires authentication, using mock data with realistic values
        // You can update these values to match your actual Upwork profile
        setUpworkData({
          username: 'Hasnain Babar',
          jobs_completed: 5,
          avatar_url: '/upwork-profile.png', // Upwork profile image
          created_at: '2024-01-01T00:00:00Z'
        });
      } catch (error) {
        console.error('Error fetching Upwork data:', error);
      }
    };

    fetchGitHubData();
    fetchLinkedInData();
    fetchUpworkData();
  }, []);
  const skills = [
    'Front-End Development', 'HTML', 'CSS', 'JavaScript', 'React', 'Next.js',
    'Bootstrap', 'CI/CD', 'Tailwind CSS', 'Amazon EC2', 'Amazon Web Services',
    'Docker', 'DevOps', 'Azure DevOps', 'DevOps Engineering'
  ];

  return (
    <aside className="w-full lg:w-80 bg-background border-r-0 lg:border-r border-border min-h-screen lg:min-h-0">
      {/* Navigation */}
      <div className="p-4 sm:p-6">
        <div className="space-y-1">
          <div className="text-foreground py-2">
            <span className="text-base font-medium">View profile</span>
          </div>
          <div 
            className={`flex items-center justify-between py-2 pl-6 text-base cursor-pointer rounded transition-colors ${
              activeSection === 'frontend' 
                ? 'bg-secondary text-foreground' 
                : 'text-text-muted hover:bg-secondary'
            }`}
            onClick={() => onSectionChange('frontend')}
          >
            <span>Front-End Development</span>
            {activeSection === 'frontend' && (
              <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </div>
          <div 
            className={`flex items-center justify-between py-2 pl-6 text-base cursor-pointer rounded transition-colors ${
              activeSection === 'devops' 
                ? 'bg-secondary text-foreground' 
                : 'text-text-muted hover:bg-secondary'
            }`}
            onClick={() => onSectionChange('devops')}
          >
            <span>DevOps Engineering</span>
            {activeSection === 'devops' && (
              <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </div>
          <div 
            className={`flex items-center justify-between w-full py-2 rounded transition-colors cursor-pointer ${
              activeSection === 'allwork' 
                ? 'bg-secondary text-foreground' 
                : 'text-text-muted hover:bg-secondary'
            }`}
            onClick={() => onSectionChange('allwork')}
          >
            <span className="text-base pl-6">All work</span>
            {activeSection === 'allwork' && (
              <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            )}
          </div>
        </div>
      </div>

      {/* Border after navigation */}
      <div className="w-full h-px bg-border"></div>

      {/* Jobs and Hours Summary */}
      <div className="p-4 sm:p-6">
        <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">21</div>
              <div className="text-xs text-text-muted">Total jobs</div>
            </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">2155</div>
            <div className="text-xs text-text-muted">Total hours</div>
          </div>
        </div>
      </div>

      {/* Border after jobs and hours summary */}
      <div className="w-full h-px bg-border"></div>

      {/* Promotional Section */}
      <div className="space-y-3 p-4 sm:p-6">
        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3">
          <div className="flex items-center justify-between">
            <span className="text-blue-300 text-sm font-medium">Available now</span>
            <div className="w-3 h-3 rounded-full" style={{backgroundColor: '#61d161'}}></div>
          </div>
        </div>
      </div>

      {/* Border after promotional section */}
      <div className="w-full h-px bg-border"></div>

      {/* Education Section */}
      <div className="p-4 sm:p-6">
              <h3 className="text-base font-medium text-foreground mb-3">Education</h3>
              <div className="space-y-2">
                <div>
                  <div className="text-foreground text-base font-medium">Virtual University Of Pakistan</div>
                  <div className="text-text-muted text-sm">Computer science</div>
                  <div className="text-text-muted text-sm">2024-2028 (expected)</div>
                </div>
              </div>
            </div>

            {/* Border after Education section */}
            <div className="w-full h-px bg-border"></div>

      {/* Linked accounts Section */}
      <div className="p-4 sm:p-6">
              <h3 className="text-base font-medium text-foreground mb-3">Linked accounts</h3>
              <div className="space-y-3">
                {/* GitHub Card */}
                <div className="bg-secondary rounded-lg p-4">
                  <div className="flex items-end justify-between mb-3">
                    <div className="text-foreground text-lg font-bold">GitHub</div>
                    <img 
                      src={githubData.avatar_url} 
                      alt="Profile" 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  </div>
                  <div className="text-foreground text-sm mb-3">{githubData.username}</div>
                  <div className="space-y-2">
                    <a 
                      href="https://github.com/bluesphires" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm hover:underline"
                      style={{color: '#177803'}}
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#177803'}}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                      <span>View profile</span>
                    </a>
                    <div className="flex items-center text-sm text-text-muted">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span>{githubData.followers} followers</span>
                    </div>
                  </div>
                </div>

                {/* LinkedIn Card */}
                <div className="bg-secondary rounded-lg p-4">
                  <div className="flex items-end justify-between mb-3">
                    <div className="text-foreground text-lg font-bold">LinkedIn</div>
                  </div>
                  <div className="text-foreground text-sm mb-3">{linkedinData.username}</div>
                  <div className="space-y-2">
                    <a 
                      href="https://www.linkedin.com/in/hasnain-babar-2b9b26306" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm hover:underline"
                      style={{color: '#177803'}}
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#177803'}}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                      <span>View profile</span>
                    </a>
                    <div className="flex items-center text-sm text-text-muted">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <span>{linkedinData.connections}+ connections</span>
                    </div>
                  </div>
                </div>

                {/* Upwork Card */}
                <div className="bg-secondary rounded-lg p-4">
                  <div className="flex items-end justify-between mb-3">
                    <div className="text-foreground text-lg font-bold">Upwork</div>
                  </div>
                  <div className="text-foreground text-sm mb-3">{upworkData.username}</div>
                  <div className="space-y-2">
                    <a 
                      href="https://www.upwork.com/freelancers/~01fb2e25952112c610?viewMode=1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-sm hover:underline"
                      style={{color: '#177803'}}
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{color: '#177803'}}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                      <span>View profile</span>
                    </a>
                    <div className="flex items-center text-sm text-text-muted">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                      </svg>
                      <span>{upworkData.jobs_completed} jobs completed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Border after Linked accounts section */}
            <div className="w-full h-px bg-border"></div>

    </aside>
  );
};

export default Sidebar;
