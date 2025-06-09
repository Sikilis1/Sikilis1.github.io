# Modern Xenon Portfolio - Jekyll Theme

A sleek, futuristic portfolio website inspired by modern tech company designs with purple/magenta accents and smooth animations.

![Portfolio Preview](https://via.placeholder.com/800x400/9d4edd/ffffff?text=Modern+Xenon+Portfolio)

## ✨ Features

- 🚀 **Modern Design** - Clean, futuristic aesthetic inspired by Xenon
- 🌟 **Purple/Magenta Theme** - Beautiful gradient accents throughout
- 📱 **Fully Responsive** - Perfect on all devices and screen sizes
- ⚡ **Fast Loading** - Optimized for GitHub Pages
- 🎯 **Interactive Navigation** - Smooth dropdown menu system
- 🔗 **GitHub Integration** - Automatically displays your repositories
- 💫 **Particle Effects** - Subtle floating geometric elements
- 📧 **Contact Integration** - Direct email contact functionality
- 🎨 **Customizable** - Easy to personalize with your information

## 🚀 Quick Setup for GitHub Pages

### Method 1: One-Click Deploy
1. **Fork this repository** or **download the files**
2. **Rename the repository** to `yourusername.github.io`
3. **Edit `_config.yml`** with your information
4. **Enable GitHub Pages** in repository settings
5. **Your site will be live** at `https://yourusername.github.io`

### Method 2: Upload Files
1. **Create a new repository** named `yourusername.github.io`
2. **Upload all files** from this theme to your repository
3. **Configure your site** (see configuration section below)
4. **Enable GitHub Pages** in Settings → Pages → Source: Deploy from a branch → main

## ⚙️ Configuration

Edit `_config.yml` to customize your portfolio:

```yaml
# Personal Information
title: "Your Name"
description: "Your Title/Role"
email: your.email@example.com

author:
  name: "Your Name"
  role: "Your Role"
  bio: "Your bio description here..."

# Social Links
social:
  github: yourusername
  linkedin: your-linkedin-username
  medium: your-medium-username
  email: your.email@example.com

# Current Role
current_role:
  title: "Your Current Position"
  company: "Your Company"

# Education
education:
  degree: "Your Degree"
  school: "Your School"

# Skills (customize these arrays)
skills:
  programming: ["Python", "JavaScript", "Java"]
  # ... add your skills
```

## 📁 Project Structure

```
modern-xenon-portfolio/
├── _config.yml          # Site configuration
├── _layouts/
│   └── default.html     # Base layout
├── assets/css/
│   └── main.css         # All styling
├── index.html           # Main page
├── Gemfile              # Dependencies
├── README.md            # This file
└── .gitignore          # Git ignore rules
```

## 🎨 Customization

### Colors
The theme uses CSS custom properties for easy color customization. Edit `assets/css/main.css`:

```css
:root {
  --primary-purple: #9d4edd;
  --secondary-magenta: #c77dff;
  --accent-pink: #e0aaff;
  /* ... other colors */
}
```

### Content Sections
The main content is in `index.html`. Key sections:

1. **Hero Section** - Your main introduction
2. **About** - Detailed background information  
3. **Skills** - Technical abilities organized by category
4. **Projects** - Featured work (customize the project cards)
5. **GitHub** - Automatically loads your repositories

### Adding Projects
Projects are defined directly in `index.html`. Update the project cards with your own:

```html
<div class="project-card" data-project="your-project">
  <div class="card-image">
    <img src="your-image-url" alt="Project Name" />
    <!-- ... -->
  </div>
  <div class="card-content">
    <span class="card-category">PROJECT CATEGORY</span>
    <h3 class="card-title">Project Name</h3>
    <!-- ... -->
  </div>
</div>
```

## 🛠️ Local Development

If you want to develop locally:

```bash
# Install dependencies
bundle install

# Run Jekyll server
bundle exec jekyll serve

# Open http://localhost:4000
```

## 📧 Contact Functionality

The contact button automatically opens the user's default email client with:
- **To**: Your email address
- **Subject**: "Portfolio Contact"
- **Body**: Pre-filled message template

Configure your email in `_config.yml`:

```yaml
social:
  email: your.email@example.com
```

## 🌟 GitHub Integration

The theme automatically fetches and displays your GitHub repositories using the GitHub API. Features:

- **Live Data** - Shows real repository information
- **Smart Filtering** - Excludes less relevant repositories
- **Responsive Cards** - Beautiful repository showcase
- **Direct Links** - Links to repository pages

Configure your GitHub username in `_config.yml`:

```yaml
social:
  github: yourusername
```

## 📱 Responsive Design

The theme is fully responsive with breakpoints for:
- **Desktop** - Full layout with sidebar navigation
- **Tablet** - Adapted layout with optimized spacing
- **Mobile** - Stack layout with hamburger menu

## ⚡ Performance

- **Optimized Assets** - Minimal CSS and JavaScript
- **Fast Loading** - Efficient resource loading
- **SEO Ready** - Proper meta tags and structure
- **GitHub Pages Optimized** - Built for Jekyll 3.9.x

## 🎯 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📄 License

MIT License - feel free to use this theme for your personal portfolio!

## 🆘 Support

If you encounter any issues:

1. Check the [GitHub Issues](../../issues) page
2. Review the configuration in `_config.yml`
3. Ensure GitHub Pages is enabled in your repository settings
4. Contact: [your-email@example.com]

## 🎉 Credits

- **Fonts**: Inter & Space Grotesk (Google Fonts)
- **Inspiration**: Modern tech company designs
- **Built with**: Jekyll, CSS Grid, Flexbox
- **Hosted on**: GitHub Pages

---

**Made with ❤️ for developers who want a stunning, modern portfolio**

### Quick Start Checklist

- [ ] Fork or download the repository
- [ ] Edit `_config.yml` with your information
- [ ] Update project information in `index.html`
- [ ] Enable GitHub Pages in repository settings
- [ ] Customize colors and styling if desired
- [ ] Add your own project images and descriptions
- [ ] Test the contact functionality
- [ ] Share your amazing new portfolio! 🚀
