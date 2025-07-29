# North Light Website

A modern, responsive website for North Light - a digital solutions and innovation company.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Performance Optimized**: Fast loading with optimized assets and code
- **SEO Friendly**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant with keyboard navigation support
- **PWA Ready**: Service worker for offline functionality
- **Cross-browser Compatible**: Works on all modern browsers

## Sections

1. **Hero Section**: Eye-catching introduction with animated elements
2. **About**: Company information with statistics
3. **Services**: Comprehensive service offerings with icons
4. **Portfolio**: Showcase of work and projects
5. **Contact**: Contact form and company information
6. **Footer**: Additional links and social media

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Interactive functionality and animations
- **Font Awesome**: Icons
- **Google Fonts**: Inter font family
- **Service Worker**: PWA functionality

## File Structure

```
northlight/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # Main stylesheet
├── js/
│   └── script.js      # JavaScript functionality
├── logo/
│   └── northlight-logo-transparent.png
├── sw.js              # Service worker
└── README.md          # This file
```

## Setup and Usage

1. **Local Development**:
   ```bash
   # Clone or download the repository
   cd northlight
   
   # Serve using any local server
   python -m http.server 8000
   # or
   npx serve .
   # or
   php -S localhost:8000
   ```

2. **Open in browser**:
   Navigate to `http://localhost:8000`

## Customization

### Colors and Branding
Edit the CSS custom properties in `css/style.css`:

```css
:root {
    --primary-color: #3b82f6;
    --secondary-color: #1e40af;
    --accent-color: #fbbf24;
    /* ... other variables */
}
```

### Content
- Update company information in `index.html`
- Replace placeholder content with actual company details
- Add real portfolio items and testimonials
- Update contact information

### Logo
- Replace `logo/northlight-logo-transparent.png` with your actual logo
- Update logo references in HTML if filename changes

## Features in Detail

### Navigation
- Fixed navigation bar with smooth scrolling
- Mobile-responsive hamburger menu
- Active section highlighting
- Smooth scroll to sections

### Animations
- Intersection Observer for scroll animations
- CSS animations for loading states
- Hover effects on interactive elements
- Parallax scrolling effects

### Form Handling
- Client-side form validation
- Success/error notifications
- Responsive form design
- Accessibility features

### Performance
- Optimized images and assets
- Minified CSS and JavaScript (in production)
- Service worker for caching
- Lazy loading for images

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Deployment

### Static Hosting
The website can be deployed to any static hosting service:

- **Netlify**: Drag and drop deployment
- **Vercel**: Git-based deployment
- **GitHub Pages**: Free hosting for public repositories
- **AWS S3**: Scalable static hosting
- **Cloudflare Pages**: Fast global deployment

### Build Process
For production deployment:

1. Optimize images
2. Minify CSS and JavaScript
3. Enable gzip compression
4. Set up proper caching headers
5. Configure SSL certificate

## SEO Optimization

- Meta tags for search engines
- Open Graph tags for social sharing
- Structured data markup
- Semantic HTML structure
- Alt tags for images
- Fast loading speeds

## Accessibility

- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader friendly
- High contrast color scheme
- Focus indicators
- Alt text for images

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For questions or support, please contact:
- Email: hello@northlight.com
- Website: [North Light](https://northlight.com)

## Changelog

### Version 1.0.0
- Initial release
- Responsive design implementation
- Core functionality
- PWA features
- Performance optimizations
