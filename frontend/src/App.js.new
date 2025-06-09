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