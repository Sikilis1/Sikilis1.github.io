# Setup Instructions for GitHub Pages

## Method 1: Direct GitHub Upload (Easiest)

1. **Create a new repository** on GitHub named `yourusername.github.io` (replace `yourusername` with your actual GitHub username)

2. **Upload all files** from the `jekyll-theme` folder to your repository:
   - You can drag and drop files directly in GitHub's web interface
   - Or clone the repository and copy files locally

3. **Edit `_config.yml`** with your information:
   ```yaml
   title: "Your Name"
   description: "Your Title"
   email: your.email@example.com
   url: "https://yourusername.github.io"
   github_username: yourusername
   linkedin_username: your-linkedin-username
   medium_username: your-medium-username
   ```

4. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click Save

5. **Your site will be live** at `https://yourusername.github.io` in a few minutes!

## Method 2: Local Development (For Advanced Users)

1. **Install Ruby and Jekyll**:
   ```bash
   # On macOS
   brew install ruby
   gem install jekyll bundler
   
   # On Ubuntu/Debian
   sudo apt-get install ruby-full build-essential zlib1g-dev
   gem install jekyll bundler
   
   # On Windows
   # Download and install Ruby from https://rubyinstaller.org/
   gem install jekyll bundler
   ```

2. **Clone and setup**:
   ```bash
   git clone https://github.com/yourusername/yourusername.github.io.git
   cd yourusername.github.io
   bundle install
   ```

3. **Run locally**:
   ```bash
   bundle exec jekyll serve
   ```
   Visit http://localhost:4000

4. **Deploy**: Push changes to GitHub and they'll automatically deploy

## Customization Guide

### 1. Update Your Information
- Edit `_config.yml` with your details
- Modify `_includes/sections/about.html` with your story
- Update skills in `sections/skills.html`
- Add your projects in `sections/projects.html`

### 2. Change Colors/Styling
- Edit `assets/css/main.css`
- Main color variables are at the top
- Search and replace color codes to change theme

### 3. Add Projects
Create markdown files in `_projects/` folder:
```markdown
---
layout: project
title: "My Awesome Project"
technologies: ["React", "Node.js", "MongoDB"]
demo_link: "https://example.com"
image: "path/to/image.jpg"
---

Project description here...
```

### 4. Customize Cherry Blossoms
In `index.html`, find the JavaScript section and modify:
- `petalCount` for number of petals
- Animation duration and timing

### 5. Change Background Images
Replace image URLs in the HTML files with your preferred images

## Troubleshooting

**Site not loading?**
- Check that repository name is exactly `yourusername.github.io`
- Ensure GitHub Pages is enabled in settings
- Wait 5-10 minutes for first deployment

**Ruby/Jekyll errors?**
- Make sure you have the correct Ruby version (2.7+)
- Run `bundle update` to update dependencies

**GitHub API not working?**
- Check that `github_username` in `_config.yml` is correct
- Repositories might take a moment to load

**Mobile layout issues?**
- The theme is fully responsive, try clearing browser cache
- Check that viewport meta tag is present

## Need Help?

1. Check the README.md for detailed information
2. Look at GitHub Issues for common problems
3. Contact: nithilan.p.kumaran@gmail.com

**Your beautiful Ghost of Tsushima portfolio is ready! 🌸**
