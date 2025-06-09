import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Abstract Geometric Cherry Blossoms Component
const GeometricPetals = () => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const petalCount = 25;
    const newPetals = [];
    
    for (let i = 0; i < petalCount; i++) {
      newPetals.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 15,
        duration: 15 + Math.random() * 10,
        size: 0.6 + Math.random() * 1.0,
        opacity: 0.4 + Math.random() * 0.6,
        shape: Math.floor(Math.random() * 4), // Different geometric shapes
        rotation: Math.random() * 360
      });
    }
    setPetals(newPetals);
  }, []);

  const getShape = (shapeType) => {
    const shapes = [
      '◆', // Diamond (Ghost of Tsushima inspired)
      '❅', // Nordic snowflake (Skyrim inspired)
      '⚓', // Anchor (One Piece inspired)
      '✧'  // Star (Futuristic)
    ];
    return shapes[shapeType];
  };

  return (
    <div className="geometric-petals">
      {petals.map(petal => (
        <div
          key={petal.id}
          className="geometric-petal"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            transform: `scale(${petal.size}) rotate(${petal.rotation}deg)`,
            opacity: petal.opacity
          }}
        >
          {getShape(petal.shape)}
        </div>
      ))}
    </div>
  );
};

// Floating Navigation Component
const FloatingNav = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { 
      id: 'about', 
      label: 'About', 
      icon: '⚔️',
      rune: 'ᚨ' // Skyrim-style rune
    },
    { 
      id: 'skills', 
      label: 'Skills', 
      icon: '🔮',
      rune: 'ᛋ'
    },
    { 
      id: 'projects', 
      label: 'Projects', 
      icon: '🗾',
      rune: 'ᛈ'
    },
    { 
      id: 'github', 
      label: 'GitHub', 
      icon: '📜',
      rune: 'ᚷ'
    }
  ];

  return (
    <nav className="floating-nav">
      <div className="nav-compass"> {/* One Piece inspired compass */}
        <div className="compass-ring">
          {menuItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`nav-orb ${activeTab === item.id ? 'nav-orb-active' : ''}`}
              style={{
                transform: `rotate(${index * 90}deg) translateX(80px) rotate(-${index * 90}deg)`
              }}
              title={item.label}
            >
              <div className="orb-content">
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-rune">{item.rune}</span>
              </div>
              <div className="holographic-ring"></div>
            </button>
          ))}
        </div>
        <div className="compass-center">
          <div className="center-logo">
            <span className="logo-text">NK</span>
            <div className="logo-ring"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Social Links Floating Panel
const SocialPanel = () => {
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/sathariels', icon: '⚡', color: '#9d4edd' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nithilan-kumaran', icon: '🔗', color: '#c77dff' },
    { name: 'Medium', url: 'https://medium.com/@Sathariels', icon: '📝', color: '#e0aaff' }
  ];

  return (
    <div className="social-panel">
      <div className="panel-header">
        <span className="panel-title">Connect</span>
      </div>
      <div className="social-orbs">
        {socialLinks.map(link => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-orb"
            style={{ '--orb-color': link.color }}
            title={link.name}
          >
            <span className="social-icon">{link.icon}</span>
            <div className="orb-glow"></div>
          </a>
        ))}
      </div>
      <button className="contact-orb">
        <span className="contact-text">Contact</span>
        <div className="pulse-ring"></div>
      </button>
    </div>
  );
};

// About Me Component
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