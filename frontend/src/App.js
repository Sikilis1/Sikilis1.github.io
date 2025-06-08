import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Cherry Blossom Component
const CherryBlossoms = () => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const petalCount = 35; // Increased for more visibility
    const newPetals = [];
    
    for (let i = 0; i < petalCount; i++) {
      newPetals.push({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 15,
        duration: 12 + Math.random() * 8,
        size: 0.8 + Math.random() * 1.2, // Increased size
        opacity: 0.6 + Math.random() * 0.4 // Increased opacity
      });
    }
    setPetals(newPetals);
  }, []);

  return (
    <div className="cherry-blossoms">
      {petals.map(petal => (
        <div
          key={petal.id}
          className="petal"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            transform: `scale(${petal.size})`,
            opacity: petal.opacity
          }}
        >
          🌸
        </div>
      ))}
    </div>
  );
};

// Sidebar Navigation Component
const Sidebar = ({ activeTab, setActiveTab, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const menuItems = [
    { 
      id: 'about', 
      label: 'About Me', 
      icon: (
        <div className="nav-icon-img">
          <img src="https://images.pexels.com/photos/31729556/pexels-photo-31729556.jpeg" alt="About" />
        </div>
      )
    },
    { 
      id: 'skills', 
      label: 'Skills', 
      icon: (
        <div className="nav-icon-img">
          <img src="https://images.pexels.com/photos/7780214/pexels-photo-7780214.jpeg" alt="Skills" />
        </div>
      )
    },
    { 
      id: 'projects', 
      label: 'Projects', 
      icon: (
        <div className="nav-icon-img">
          <img src="https://images.unsplash.com/photo-1685279576959-e710bffbfe05" alt="Projects" />
        </div>
      )
    },
    { 
      id: 'github', 
      label: 'GitHub', 
      icon: (
        <div className="nav-icon-img">
          <img src="https://images.unsplash.com/photo-1652619136719-2ddf8e849a71" alt="GitHub" />
        </div>
      )
    }
  ];

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/sathariels', icon: 'GH' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/nithilan-kumaran', icon: 'LI' },
    { name: 'Medium', url: 'https://medium.com/@Sathariels', icon: 'MD' }
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="mobile-menu-btn"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span className="menu-icon"></span>
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isMobileMenuOpen ? 'sidebar-mobile-open' : ''}`}>
        <div className="sidebar-header">
          <h1 className="name-title">Nithilan</h1>
          <h2 className="name-subtitle">Kumaran</h2>
          <p className="title-subtitle">Software Engineer</p>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map(item => (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`nav-item ${activeTab === item.id ? 'nav-item-active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
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
          <button className="contact-btn">
            Contact
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}
    </>
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
          <h2 className="section-title">About Me</h2>
          <p className="hero-subtitle">The Path of the Software Samurai</p>
        </div>
      </div>
    </div>
    
    <div className="content-body">
      <div className="about-content">
        <div className="about-text">
          <p className="intro-text">
            Hi, I'm Nithilan Kumaran. I'm currently an Enterprise Business intern at Carrier, 
            where I'm expanding my experience in real-world development while continuing to 
            explore my passion for technology, programming, and problem-solving.
          </p>
          
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
        
        <div className="about-stats">
          <div className="stat-card">
            <h3>Current Role</h3>
            <p>Enterprise Business Intern at Carrier</p>
          </div>
          <div className="stat-card">
            <h3>Education</h3>
            <p>Computer Engineering at UW-Madison</p>
          </div>
          <div className="stat-card">
            <h3>Passion</h3>
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
    'Programming Languages': ['C++', 'Python', 'Java', 'C#', 'C', 'Kotlin', 'Lua'],
    'Game Development': ['Unreal Engine', 'Unity', 'Godot', 'Roblox Studio'],
    'Web Technologies': ['React', 'HTML', 'CSS', 'PHP'],
    'Tools & Technologies': ['Git', 'VS Code', 'JetBrains', 'Blender', 'Photoshop', 'SAP'],
    'Methodologies': ['Agile', 'Jira', 'Bash']
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
            <h2 className="section-title">Skills & Abilities</h2>
            <p className="hero-subtitle">Arsenal of a Digital Warrior</p>
          </div>
        </div>
      </div>
      
      <div className="content-body">
        <div className="skills-grid">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">{category}</h3>
              <div className="skills-list">
                {skills.map(skill => (
                  <div key={skill} className="skill-tag">
                    {skill}
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
      description: "Space Knights is an upcoming Roblox game launching in late 2025, and I had the opportunity to develop the in-game item shop where players can purchase weapons of varying rarities. Using Roblox Studio, I designed the shop's user interface and experience, uploaded hundreds of animations, and implemented key features using Lua—including a search function powered by the Levenshtein distance algorithm to improve usability.",
      technologies: ["Lua", "Roblox", "User Interface", "User Experience"],
      demoLink: "https://medium.com/@Sathariels/space-knights-items-shop-d3bd2bae76d1",
      image: "https://images.pexels.com/photos/8751515/pexels-photo-8751515.jpeg"
    },
    {
      id: 2,
      title: "One Suryan Website Creation",
      description: "As the Executive Director of Management for One Suryan, a student-led organization focused on empowering the global South Asian community, I led strategic operations and oversaw a diverse, creative team. One of my key contributions was designing and developing the organization's website using HTML, CSS, and PHP.",
      technologies: ["HTML", "CSS", "PHP"],
      demoLink: "https://medium.com/@Sathariels/one-suryan-website-creation-project-4efac8204e6b",
      image: "https://images.unsplash.com/photo-1685279576959-e710bffbfe05"
    },
    {
      id: 3,
      title: "2D Game Engine",
      description: "A custom-built 2D game engine written in C++, designed from the ground up to handle core gameplay systems such as rendering, input handling, entity management, and real-time collision detection.",
      technologies: ["C++", "Physics", "Game Engine"],
      image: "https://images.unsplash.com/photo-1652619136719-2ddf8e849a71"
    }
  ];

  if (selectedProject) {
    const project = projects.find(p => p.id === selectedProject);
    return (
      <div className="content-section">
        <div className="project-detail">
          <button 
            className="back-btn"
            onClick={() => setSelectedProject(null)}
          >
            ← Back to Projects
          </button>
          
          <div className="project-header">
            <img src={project.image} alt={project.title} className="project-detail-image" />
            <div className="project-detail-info">
              <h2 className="project-title">{project.title}</h2>
              <div className="project-tags">
                {project.technologies.map(tech => (
                  <span key={tech} className="project-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="project-description">
            <p>{project.description}</p>
            {project.demoLink && (
              <a 
                href={project.demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="demo-link"
              >
                View Project Details →
              </a>
            )}
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
            <h2 className="section-title">Projects</h2>
            <p className="hero-subtitle">Legendary Creations</p>
          </div>
        </div>
      </div>
      
      <div className="content-body">
        <div className="projects-container">
          <div className="projects-grid">
            {projects.map(project => (
              <div 
                key={project.id} 
                className="project-card"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description.substring(0, 100)}...</p>
                  <div className="project-tech">
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
        // Remove last 5 repos and show only the most recent ones
        const sortedRepos = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        const filteredRepos = sortedRepos.slice(0, -5); // Remove last 5
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
          <div className="loading-spinner">
            <img src="https://images.pexels.com/photos/31729556/pexels-photo-31729556.jpeg" alt="Loading" />
          </div>
          <p>Loading repositories...</p>
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
            <h2 className="section-title">GitHub Repositories</h2>
            <p className="hero-subtitle">Code Chronicles</p>
          </div>
        </div>
      </div>
      
      <div className="content-body">
        <div className="repos-container">
          <div className="repos-grid">
            {repos.map(repo => (
              <div key={repo.id} className="repo-card">
                <div className="repo-header">
                  <h3 className="repo-name">{repo.name}</h3>
                  <div className="repo-stats">
                    <span className="stat">★ {repo.stargazers_count}</span>
                    <span className="stat">⑃ {repo.forks_count}</span>
                  </div>
                </div>
                
                <p className="repo-description">
                  {repo.description || 'No description available'}
                </p>
                
                <div className="repo-footer">
                  <div className="repo-language">
                    {repo.language && (
                      <span className="language-tag">{repo.language}</span>
                    )}
                  </div>
                  <a 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="repo-link"
                  >
                    View Code →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const AppContent = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <CherryBlossoms />
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
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