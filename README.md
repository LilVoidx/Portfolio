# Portfolio Application - Refactored

A modern, responsive portfolio website built with React, Framer Motion, and Tailwind CSS. The application has been refactored into a clean, modular component structure for better maintainability and code organization.

## 🚀 Features

- **Interactive Star Background**: Animated stars that respond to mouse movement
- **Responsive Design**: Optimized for all device sizes
- **Smooth Animations**: Powered by Framer Motion
- **Modern UI**: Clean, minimalist design with dark theme
- **Component-Based Architecture**: Modular and reusable components

## 📁 Project Structure

```
src/
├── components/
│   ├── index.js                 # Component exports
│   ├── StarBackground.jsx       # Interactive animated background
│   ├── Header.jsx              # Navigation and language selector
│   ├── Profile.jsx             # User profile and points display
│   ├── CurrentRole.jsx         # Current job information
│   ├── PreviousRoles.jsx       # Expandable previous roles
│   ├── Timeline.jsx            # Work/Education timeline with tabs
│   ├── ProjectCarousel.jsx     # Animated project showcase
│   ├── TechStack.jsx           # Technology stack display
│   ├── LastPlayedSong.jsx      # Music widget
│   └── Footer.jsx              # Social media links
├── App.jsx                     # Main application component
├── main.jsx                    # Application entry point
└── index.css                   # Global styles and Tailwind imports
```

## 🧩 Components Overview

### StarBackground
- Interactive animated stars background
- Responds to mouse movement
- Optimized performance with reduced star count
- Smooth animations and glow effects

### Header
- Brand logo and navigation
- Schedule call button
- Language selector
- Clean, minimal design

### Profile
- User profile image and information
- Animated entrance effects
- Points display with hover interactions

### CurrentRole
- Current job information
- Technology stack display
- Expandable previous roles section
- Company status indicators

### Timeline
- Tabbed interface for Work/Education
- Animated timeline items
- Technology icons for each entry
- Smooth transitions between tabs

### ProjectCarousel
- Animated project cards
- Navigation controls
- Project images with overlays
- Smooth slide transitions

### TechStack
- Interactive technology cards
- Hover animations
- Icon-based display
- Responsive grid layout

### LastPlayedSong
- Music widget component
- Album cover display
- Song information
- Refresh functionality

### Footer
- Social media links
- Hover animations
- Accessible design

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks
- **Framer Motion**: Smooth animations and transitions
- **Tailwind CSS**: Utility-first CSS framework
- **React Icons**: Icon library
- **Vite**: Fast build tool

## 🎨 Design Features

- **Dark Theme**: True black background with white text
- **Glass Morphism**: Subtle transparency effects
- **Micro-interactions**: Hover effects and animations
- **Typography**: Clean, readable font hierarchy
- **Spacing**: Consistent spacing system

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader friendly
- High contrast design

## 🔧 Customization

### Adding New Projects
Edit the `projects` array in `ProjectCarousel.jsx`:
```javascript
const projects = [
  {
    title: "Your Project",
    logo: "path/to/logo.png",
    image: "path/to/image.jpg",
    description: "Project description"
  }
];
```

### Updating Technologies
Edit the `technologies` array in `TechStack.jsx`:
```javascript
const technologies = [
  { name: "Technology Name", icon: <IconComponent size={24} /> }
];
```

### Modifying Timeline Data
Update the `education` and `work` arrays in `Timeline.jsx` with your information.

## 🎯 Performance Optimizations

- **Lazy Loading**: Components load as needed
- **Optimized Animations**: Reduced motion for accessibility
- **Efficient Re-renders**: Proper React hooks usage
- **Image Optimization**: Compressed images and proper sizing
- **CSS Optimization**: Tailwind purge for production

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Contact

For questions or support, please open an issue in the repository. 