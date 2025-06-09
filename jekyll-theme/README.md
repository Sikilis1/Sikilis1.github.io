# Nithilan Kumaran - Personal Portfolio Jekyll Theme

A stunning Ghost of Tsushima-inspired personal portfolio website with handwritten fonts, falling cherry blossom animations, and beautiful Japanese aesthetics.

![Portfolio Preview](preview.png)

## Features

- 🌸 **Falling Cherry Blossom Animation** - Beautiful petals falling throughout the site
- 🎨 **Ghost of Tsushima Aesthetic** - Elegant white theme with brown/gold accents
- ✍️ **Handwritten Fonts** - Beautiful paintbrush-style typography using Kalam, Dancing Script, and Caveat
- 📱 **Fully Responsive** - Works perfectly on all devices
- 🚀 **GitHub API Integration** - Automatically displays your latest repositories
- 🎯 **Interactive Navigation** - Smooth single-page application experience
- 🏯 **Japanese-themed Backgrounds** - Unique hero images for each section

## Sections

1. **About Me** - Personal introduction and background
2. **Skills** - Technical abilities organized by category
3. **Projects** - Featured projects with detailed views
4. **GitHub** - Live repository showcase

## Quick Setup

### 1. Fork or Download
Fork this repository or download the files to your local machine.

### 2. Configure `_config.yml`
Update the configuration file with your information:

```yaml
title: "Your Name"
description: "Your Title"
email: your.email@example.com
url: "https://yourusername.github.io"

github_username: yourusername
linkedin_username: your-linkedin-username
medium_username: your-medium-username
```

### 3. Install Dependencies (Local Development)
```bash
bundle install
```

### 4. Run Locally
```bash
bundle exec jekyll serve
```

### 5. Deploy to GitHub Pages
1. Push to a repository named `yourusername.github.io`
2. Enable GitHub Pages in repository settings
3. Your site will be live at `https://yourusername.github.io`

## Customization

### Personal Information
Update the content in:
- `_includes/sections/about.html` - Your personal story
- `sections/skills.html` - Your technical skills
- `sections/projects.html` - Your featured projects

### Styling
Modify `assets/css/main.css` to customize:
- Color schemes
- Fonts
- Animations
- Layout

### Background Images
Replace the image URLs in the HTML files with your preferred backgrounds:
- About: Japanese landscape
- Skills: Japanese art  
- Projects: Zen garden
- GitHub: Bamboo forest

### Cherry Blossom Animation
Adjust the animation in the JavaScript section of `index.html`:
- `petalCount` - Number of petals (default: 35)
- `duration` - Fall speed
- `size` - Petal size range

## GitHub API Integration

The theme automatically fetches your GitHub repositories using the public API. No authentication required - just update your `github_username` in `_config.yml`.

### Features:
- Displays repository name, description, and language
- Shows stars and forks count
- Filters out the last 5 repositories (usually less relevant)
- Links directly to repository

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Performance

- Optimized CSS with efficient animations
- Lazy-loaded GitHub API calls
- Minimal JavaScript footprint
- Responsive images

## Credits

- **Fonts**: Google Fonts (Kalam, Dancing Script, Caveat)
- **Images**: Pexels and Unsplash
- **Inspiration**: Ghost of Tsushima game aesthetics
- **Icons**: Custom Japanese-themed imagery

## License

MIT License - feel free to use this theme for your personal portfolio!

## Support

If you encounter any issues or have questions:
1. Check the [Issues](../../issues) page
2. Create a new issue with details
3. Contact: nithilan.p.kumaran@gmail.com

---

**Made with ❤️ and inspired by the beauty of Ghost of Tsushima**
