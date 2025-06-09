import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Futuristic Particles Component
const FuturisticParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particleCount = 30;
    const newParticles = [];
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 20,
        duration: 15 + Math.random() * 10,
        size: 0.3 + Math.random() * 0.7,
        opacity: 0.2 + Math.random() * 0.5,
        type: Math.floor(Math.random() * 3) // Different particle types
      });
    }
    setParticles(newParticles);
  }, []);

  const getParticle = (type) => {
    const particles = ['●', '◆', '✦']; // Simple geometric shapes
    return particles[type];
  };

  return (
    <div className="futuristic-particles">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            transform: `scale(${particle.size})`,
            opacity: particle.opacity
          }}
        >
          {getParticle(particle.type)}
        </div>
      ))}
    </div>
  );
};

// Modern Sidebar Component
const ModernSidebar = ({ activeTab, setActiveTab, isMenuOpen, setIsMenuOpen }) => {
  const menuItems = [
    { id: 'about', label: 'About Me', description: 'My journey and background' },
    { id: 'skills', label: 'Skills', description: 'Technical expertise' },
    { id: 'projects', label: 'Projects', description: 'Featured work' },
    { id: 'github', label: 'GitHub', description: 'Code repositories' }
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/sathariels', icon: 'GH' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nithilan-kumaran', icon: 'LI' },
    { name: 'Medium', url: 'https://medium.com/@Sathariels', icon: 'MD' }
  ];

  return (
    <>
      {/* Top Navigation Bar */}
      <nav className="top-nav">
        <div className="nav-brand">
          <span className="brand-text">NITHILAN</span>
        </div>
        
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>
      </nav>

      {/* Dropdown Menu */}
      <div className={`dropdown-menu ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="menu-content">
          <div className="menu-header">
            <h2>NAVIGATION</h2>
          </div>
          
          <div className="menu-items">
            {menuItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMenuOpen(false);
                }}
                className={`menu-item ${activeTab === item.id ? 'item-active' : ''}`}
              >
                <div className="item-content">
                  <span className="item-label">{item.label}</span>
                  <span className="item-description">{item.description}</span>
                </div>
                <div className="item-arrow">→</div>
              </button>
            ))}
          </div>

          <div className="menu-footer">
            <div className="social-section">
              <h3>CONNECT</h3>
              <div className="social-links">
                {socialLinks.map(link => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
            
            <button className="contact-button">
              CONTACT ME
            </button>
          </div>
        </div>
      </div>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="menu-overlay"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </>
  );
};

// About Me Component
const AboutMe = () => (
  <div className="content-section">
    <div className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            STEP INTO<br />
            <span className="highlight">THE FUTURE</span>
          </h1>
          <p className="hero-description">
            Hi, I'm Nithilan Kumaran. I'm currently an Enterprise Business intern at Carrier, 
            where I'm expanding my experience in real-world development while continuing to 
            explore my passion for technology, programming, and problem-solving.
          </p>
          <button className="learn-more-btn">
            LEARN MORE
            <span className="btn-arrow">↓</span>
          </button>
        </div>
        <div className="hero-visual">
          <div className="floating-elements">
            <div className="element element-1"></div>
            <div className="element element-2"></div>
            <div className="element element-3"></div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="content-body">
      <div className="about-grid">
        <div className="about-text">
          <h2 className="section-heading">MY JOURNEY</h2>
          <p>
            I recently completed my first year at the University of Wisconsin–Madison, where 
            I'm pursuing a degree in Computer Engineering. I love sharing what I learn through 
            technical blogs and tutorials, especially on topics like game development and 
            developer tools.
          </p>
          <p>
            Outside of academics and work, I'm an avid gamer—a hobby that often inspires my 
            creative projects and deepens my interest in how technology shapes interactive experiences.
          </p>
        </div>
        
        <div className="stats-grid">
          <div className="stat-card">
            <h3>CURRENT ROLE</h3>
            <p>Enterprise Business Intern at Carrier</p>
          </div>
          <div className="stat-card">
            <h3>EDUCATION</h3>
            <p>Computer Engineering at UW-Madison</p>
          </div>
          <div className="stat-card">
            <h3>PASSION</h3>
            <p>Game Development & Interactive Experiences</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Skills Component
const Skills = () => {
  const skillCategories = {
    'PROGRAMMING': ['C++', 'Python', 'Java', 'C#', 'C', 'Kotlin', 'Lua'],
    'GAME DEVELOPMENT': ['Unreal Engine', 'Unity', 'Godot', 'Roblox Studio'],
    'WEB TECHNOLOGIES': ['React', 'HTML', 'CSS', 'PHP'],
    'TOOLS': ['Git', 'VS Code', 'JetBrains', 'Blender', 'Photoshop', 'SAP'],
    'METHODOLOGIES': ['Agile', 'Jira', 'Bash']
  };

  return (
    <div className="content-section">
      <div className="page-header">
        <h1 className="page-title">SKILLS & EXPERTISE</h1>
        <p className="page-subtitle">Technical arsenal for digital innovation</p>
      </div>
      
      <div className="content-body">
        <div className="skills-container">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">{category}</h3>
              <div className="skills-grid">
                {skills.map(skill => (
                  <div key={skill} className="skill-item">
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Projects Component
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: "Space Knights Items Shop",
      category: "GAME DEVELOPMENT",
      description: "Space Knights is an upcoming Roblox game launching in late 2025, and I had the opportunity to develop the in-game item shop where players can purchase weapons of varying rarities. Using Roblox Studio, I designed the shop's user interface and experience, uploaded hundreds of animations, and implemented key features using Lua—including a search function powered by the Levenshtein distance algorithm to improve usability.",
      technologies: ["Lua", "Roblox", "UI/UX", "Animation"],
      demoLink: "https://medium.com/@Sathariels/space-knights-items-shop-d3bd2bae76d1",
      image: "https://images.pexels.com/photos/8751515/pexels-photo-8751515.jpeg"
    },
    {
      id: 2,
      title: "One Suryan Website",
      category: "WEB DEVELOPMENT",
      description: "As the Executive Director of Management for One Suryan, a student-led organization focused on empowering the global South Asian community, I led strategic operations and oversaw a diverse, creative team. One of my key contributions was designing and developing the organization's website using HTML, CSS, and PHP.",
      technologies: ["HTML", "CSS", "PHP", "Leadership"],
      demoLink: "https://medium.com/@Sathariels/one-suryan-website-creation-project-4efac8204e6b",
      image: "https://images.unsplash.com/photo-1685279576959-e710bffbfe05"
    },
    {
      id: 3,
      title: "2D Game Engine",
      category: "ENGINE DEVELOPMENT",
      description: "A custom-built 2D game engine written in C++, designed from the ground up to handle core gameplay systems such as rendering, input handling, entity management, and real-time collision detection.",
      technologies: ["C++", "Physics", "Rendering", "Architecture"],
      image: "https://images.unsplash.com/photo-1652619136719-2ddf8e849a71"
    }
  ];

  if (selectedProject) {
    const project = projects.find(p => p.id === selectedProject);
    return (
      <div className="content-section">
        <div className="project-detail">
          <button 
            className="back-button"
            onClick={() => setSelectedProject(null)}
          >
            ← BACK TO PROJECTS
          </button>
          
          <div className="project-showcase">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            
            <div className="project-info">
              <span className="project-category">{project.category}</span>
              <h1 className="project-title">{project.title}</h1>
              <div className="project-tech">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
              <p className="project-description">{project.description}</p>
              {project.demoLink && (
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  VIEW PROJECT →
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="content-section">
      <div className="page-header">
        <h1 className="page-title">FEATURED PROJECTS</h1>
        <p className="page-subtitle">Innovative solutions and creative implementations</p>
      </div>
      
      <div className="content-body">
        <div className="projects-grid">
          {projects.map(project => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="card-image">
                <img src={project.image} alt={project.title} />
                <div className="card-overlay">
                  <span className="view-project">VIEW PROJECT</span>
                </div>
              </div>
              
              <div className="card-content">
                <span className="card-category">{project.category}</span>
                <h3 className="card-title">{project.title}</h3>
                <p className="card-preview">{project.description.substring(0, 120)}...</p>
                
                <div className="card-tech">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// GitHub Component
const GitHub = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/sathariels/repos');
        const data = await response.json();
        const sortedRepos = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        const filteredRepos = sortedRepos.slice(0, -5);
        setRepos(filteredRepos);
      } catch (error) {
        console.error('Error fetching repos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div className="content-section">
        <div className="loading-container">
          <div className="modern-loader">
            <div className="loader-ring"></div>
            <div className="loader-ring"></div>
            <div className="loader-ring"></div>
          </div>
          <p className="loading-text">LOADING REPOSITORIES...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="content-section">
      <div className="page-header">
        <h1 className="page-title">GITHUB REPOSITORIES</h1>
        <p className="page-subtitle">Open source contributions and personal projects</p>
      </div>
      
      <div className="content-body">
        <div className="repos-grid">
          {repos.map(repo => (
            <div key={repo.id} className="repo-card">
              <div className="repo-header">
                <h3 className="repo-name">{repo.name}</h3>
                <div className="repo-stats">
                  <span className="stat">★ {repo.stargazers_count}</span>
                  <span className="stat">⚡ {repo.forks_count}</span>
                </div>
              </div>
              
              <p className="repo-description">
                {repo.description || 'No description available'}
              </p>
              
              <div className="repo-footer">
                {repo.language && (
                  <span className="language-badge">{repo.language}</span>
                )}
                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="repo-link"
                >
                  VIEW CODE →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main App Component
const AppContent = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutMe />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'github':
        return <GitHub />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="app-container">
      <FuturisticParticles />
      <ModernSidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AppContent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
const AboutMe = () => (
  <div className="content-section">
    <div className="hero-section">
      <div className="hero-image">
        <img 
          src="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg" 
          alt="Japanese landscape"
          className="hero-bg"
        />
        <div className="hero-overlay">
          <div className="title-container">
            <h2 className="section-title">About Me</h2>
            <div className="title-runes">
              <span className="rune">ᚨᛒᛟᚢᛏ</span>
            </div>
            <p className="hero-subtitle">The Path of the Digital Samurai</p>
          </div>
          <div className="hero-effects">
            <div className="floating-symbols">
              <span>⚔️</span>
              <span>🌸</span>
              <span>⚓</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="content-body">
      <div className="about-content">
        <div className="story-scroll"> {/* One Piece inspired scroll design */}
          <div className="scroll-header">
            <span className="scroll-title">My Journey</span>
            <div className="compass-small">N</div>
          </div>
          
          <div className="about-text">
            <p className="intro-text">
              Ahoy! I'm Nithilan Kumaran, a digital adventurer currently navigating the seas of 
              technology as an Enterprise Business intern at Carrier. Like a samurai perfecting 
              their craft, I'm expanding my experience in real-world development while pursuing 
              the grand line of innovation.
            </p>
            
            <p>
              Currently charting my course through the University of Wisconsin–Madison, where 
              I'm pursuing Computer Engineering like seeking the One Piece of knowledge. I share 
              my discoveries through technical blogs and tutorials, especially about game 
              development - my true treasure.
            </p>
            
            <p>
              When I'm not coding, I'm an avid gamer whose adventures in virtual worlds fuel 
              my passion for creating interactive experiences. Each game is a new island to 
              explore, a new technique to master.
            </p>
          </div>
        </div>
        
        <div className="stats-constellation"> {/* Skyrim inspired skill trees */}
          <div className="stat-orb">
            <div className="orb-inner">
              <h3>Current Quest</h3>
              <p>Enterprise Business Intern at Carrier</p>
              <div className="skill-rune">ᚲ</div>
            </div>
          </div>
          
          <div className="stat-orb">
            <div className="orb-inner">
              <h3>Academy</h3>
              <p>Computer Engineering at UW-Madison</p>
              <div className="skill-rune">ᚦ</div>
            </div>
          </div>
          
          <div className="stat-orb">
            <div className="orb-inner">
              <h3>Passion</h3>
              <p>Game Development & Digital Adventures</p>
              <div className="skill-rune">ᚹ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Skills Component
const Skills = () => {
  const skillCategories = {
    'Warrior Arts': ['C++', 'Python', 'Java', 'C#', 'C', 'Kotlin', 'Lua'],
    'Mystic Crafts': ['Unreal Engine', 'Unity', 'Godot', 'Roblox Studio'],
    'Web Sorcery': ['React', 'HTML', 'CSS', 'PHP'],
    'Ancient Tools': ['Git', 'VS Code', 'JetBrains', 'Blender', 'Photoshop', 'SAP'],
    'Guild Methods': ['Agile', 'Jira', 'Bash']
  };

  const getSkillIcon = (category) => {
    const icons = {
      'Warrior Arts': '⚔️',
      'Mystic Crafts': '🔮',
      'Web Sorcery': '🌐',
      'Ancient Tools': '🛠️',
      'Guild Methods': '📋'
    };
    return icons[category] || '✨';
  };

  return (
    <div className="content-section">
      <div className="hero-section">
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1622544841811-2ae2d424b069" 
            alt="Japanese art"
            className="hero-bg"
          />
          <div className="hero-overlay">
            <div className="title-container">
              <h2 className="section-title">Skills & Abilities</h2>
              <div className="title-runes">
                <span className="rune">ᛋᚲᛁᛚᛚᛋ</span>
              </div>
              <p className="hero-subtitle">Arsenal of a Digital Warrior</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="content-body">
        <div className="skills-constellation">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="skill-tree">
              <div className="tree-header">
                <span className="tree-icon">{getSkillIcon(category)}</span>
                <h3 className="tree-title">{category}</h3>
                <div className="tree-glow"></div>
              </div>
              <div className="skill-branches">
                {skills.map(skill => (
                  <div key={skill} className="skill-node">
                    <span className="skill-name">{skill}</span>
                    <div className="node-glow"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Projects Component
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: "Space Knights Items Shop",
      subtitle: "The Legendary Armory",
      description: "Like forging weapons in Skyrim's ancient forges, I crafted an in-game item shop for Space Knights using Roblox Studio. This treasure vault features hundreds of animations, UI/UX design, and a search algorithm powered by the Levenshtein distance - as precise as a samurai's blade.",
      technologies: ["Lua", "Roblox", "User Interface", "User Experience"],
      demoLink: "https://medium.com/@Sathariels/space-knights-items-shop-d3bd2bae76d1",
      image: "https://images.pexels.com/photos/8751515/pexels-photo-8751515.jpeg",
      rune: "ᛋᛈ",
      treasure: "⚔️"
    },
    {
      id: 2,
      title: "One Suryan Website",
      subtitle: "The Digital Compass",
      description: "As Executive Director, I navigated the creation of One Suryan's digital presence like charting unknown waters. Using HTML, CSS, and PHP, I built a platform to empower the South Asian community - a true nakama spirit bringing people together.",
      technologies: ["HTML", "CSS", "PHP"],
      demoLink: "https://medium.com/@Sathariels/one-suryan-website-creation-project-4efac8204e6b",
      image: "https://images.unsplash.com/photo-1685279576959-e710bffbfe05",
      rune: "ᛟᛋ",
      treasure: "🌐"
    },
    {
      id: 3,
      title: "2D Game Engine",
      subtitle: "The Dragon's Heart",
      description: "Forged from pure C++ like dragonbone armor, this custom 2D game engine handles rendering, input, entity management, and collision detection. A legendary artifact capable of bringing digital worlds to life.",
      technologies: ["C++", "Physics", "Game Engine"],
      image: "https://images.unsplash.com/photo-1652619136719-2ddf8e849a71",
      rune: "ᚷᛖ",
      treasure: "🐉"
    }
  ];

  if (selectedProject) {
    const project = projects.find(p => p.id === selectedProject);
    return (
      <div className="content-section">
        <div className="project-detail">
          <button 
            className="adventure-back-btn"
            onClick={() => setSelectedProject(null)}
          >
            <span className="btn-icon">⬅️</span>
            <span className="btn-text">Return to Port</span>
            <div className="btn-glow"></div>
          </button>
          
          <div className="project-showcase">
            <div className="showcase-image">
              <img src={project.image} alt={project.title} />
              <div className="image-overlay">
                <span className="project-rune">{project.rune}</span>
              </div>
            </div>
            
            <div className="showcase-info">
              <div className="project-header">
                <span className="project-treasure">{project.treasure}</span>
                <h2 className="project-title">{project.title}</h2>
                <p className="project-subtitle">{project.subtitle}</p>
              </div>
              
              <div className="project-tags">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-orb">{tech}</span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="project-story">
            <div className="story-content">
              <p>{project.description}</p>
              {project.demoLink && (
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="treasure-link"
                >
                  <span className="link-text">Discover the Treasure</span>
                  <span className="link-arrow">→</span>
                  <div className="link-glow"></div>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="content-section">
      <div className="hero-section">
        <div className="hero-image">
          <img 
            src="https://images.pexels.com/photos/327483/pexels-photo-327483.jpeg" 
            alt="Zen garden"
            className="hero-bg"
          />
          <div className="hero-overlay">
            <div className="title-container">
              <h2 className="section-title">Projects</h2>
              <div className="title-runes">
                <span className="rune">ᛈᚱᛟᛃᛖᚲᛏᛋ</span>
              </div>
              <p className="hero-subtitle">Legendary Creations</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="content-body">
        <div className="treasure-map">
          {projects.map(project => (
            <div 
              key={project.id} 
              className="treasure-chest"
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="chest-image">
                <img src={project.image} alt={project.title} />
                <div className="chest-overlay">
                  <span className="chest-rune">{project.rune}</span>
                  <span className="chest-treasure">{project.treasure}</span>
                </div>
              </div>
              
              <div className="chest-info">
                <h3 className="chest-title">{project.title}</h3>
                <p className="chest-subtitle">{project.subtitle}</p>
                <p className="chest-preview">{project.description.substring(0, 120)}...</p>
                
                <div className="chest-gems">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="gem">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="chest-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// GitHub Component
const GitHub = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/sathariels/repos');
        const data = await response.json();
        const sortedRepos = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        const filteredRepos = sortedRepos.slice(0, -5);
        setRepos(filteredRepos);
      } catch (error) {
        console.error('Error fetching repos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div className="content-section">
        <div className="loading-realm">
          <div className="mystical-loader">
            <div className="loader-orb">
              <span className="loader-rune">ᚷ</span>
              <div className="loader-rings">
                <div className="ring ring-1"></div>
                <div className="ring ring-2"></div>
                <div className="ring ring-3"></div>
              </div>
            </div>
            <p className="loading-text">Summoning Repositories...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="content-section">
      <div className="hero-section">
        <div className="hero-image">
          <img 
            src="https://images.pexels.com/photos/54601/bamboo-damyang-sunshine-54601.jpeg" 
            alt="Bamboo forest"
            className="hero-bg"
          />
          <div className="hero-overlay">
            <div className="title-container">
              <h2 className="section-title">GitHub Repositories</h2>
              <div className="title-runes">
                <span className="rune">ᚷᛁᛏᚺᚢᛒ</span>
              </div>
              <p className="hero-subtitle">Code Scrolls & Digital Artifacts</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="content-body">
        <div className="code-library">
          {repos.map(repo => (
            <div key={repo.id} className="code-scroll">
              <div className="scroll-seal">
                <span className="seal-rune">ᚲ</span>
              </div>
              
              <div className="scroll-header">
                <h3 className="scroll-name">{repo.name}</h3>
                <div className="scroll-stats">
                  <span className="stat">
                    <span className="stat-icon">⭐</span>
                    <span className="stat-value">{repo.stargazers_count}</span>
                  </span>
                  <span className="stat">
                    <span className="stat-icon">⚡</span>
                    <span className="stat-value">{repo.forks_count}</span>
                  </span>
                </div>
              </div>
              
              <div className="scroll-content">
                <p className="scroll-description">
                  {repo.description || 'An ancient artifact awaiting description...'}
                </p>
              </div>
              
              <div className="scroll-footer">
                {repo.language && (
                  <div className="language-crystal">
                    <span className="crystal-name">{repo.language}</span>
                    <div className="crystal-glow"></div>
                  </div>
                )}
                
                <a 
                  href={repo.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="explore-link"
                >
                  <span className="link-text">Explore Scroll</span>
                  <span className="link-arrow">→</span>
                  <div className="link-trail"></div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Main App Component
const AppContent = () => {
  const [activeTab, setActiveTab] = useState('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutMe />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'github':
        return <GitHub />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div className="app-container">
      <GeometricPetals />
      <FloatingNav activeTab={activeTab} setActiveTab={setActiveTab} />
      <SocialPanel />
      <main className="main-content">
        <div className="content-wrapper">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AppContent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;