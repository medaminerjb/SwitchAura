#  react-theme-animation

A lightweight React library that adds **smooth animated theme switching** (light/dark mode) using the modern `startViewTransition` API. Perfect for creating delightful user experiences with seamless visual transitions.

---

## ✨ Features

- 🎨 **Smooth Transitions** - Leverages the modern `startViewTransition` API for fluid theme changes
- 🌓 **Light/Dark Mode** - Toggle between light and dark themes effortlessly
- ⚡ **Zero Dependencies** - Lightweight and framework-friendly
- 🎯 **TypeScript Ready** - Full TypeScript support out of the box
- 📱 **Progressive Enhancement** - Works on all browsers (animated on supported ones)
- 🔧 **Flexible Integration** - Works with any button or element reference

---

## 📦 Installation

```bash
npm install react-theme-animation
```

or

```bash
yarn add react-theme-animation
```

or

```bash
pnpm add react-theme-animation
```

---

## 🚀 Quick Start

### 1. Wrap Your App with ThemeProvider

```tsx
import React from "react";
import { ThemeProvider } from "react-theme-animation";
import AppContent from "./AppContent";

const App = () => (
  <ThemeProvider defaultTheme="light">
    <AppContent />
  </ThemeProvider>
);

export default App;
```

### 2. Use the Hook to Toggle Theme

```tsx
import React, { useRef } from "react";
import { useThemeAnimation } from "react-theme-animation";

const ThemeToggleButton = () => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const { colorMode, toggle } = useThemeAnimation();

  return (
    <button 
      ref={btnRef} 
      onClick={() => toggle(btnRef)}
      className="theme-toggle"
      aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
    >
      {colorMode === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggleButton;
```

### 3. Complete Example with Styling

```tsx
import React, { useRef } from "react";
import { useThemeAnimation } from "react-theme-animation";
import "./App.css";

function App() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const { colorMode, toggle } = useThemeAnimation();

  return (
    <div className={`app ${colorMode}`}>
      <header className="header">
        <h1>Welcome to My App</h1>
        <button
          ref={btnRef}
          onClick={() => toggle(btnRef)}
          className="toggle-btn"
        >
          {colorMode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </button>
      </header>
      
      <main className="content">
        <p>
          Experience smooth theme transitions with react-theme-animation!
        </p>
        <div className="card">
          <h2>Current Theme: {colorMode}</h2>
          <p>This content smoothly transitions between themes.</p>
        </div>
      </main>
    </div>
  );
}

export default App;
```

---

## 🎨 Custom CSS Variables

The library automatically sets CSS variables for theming. Here's how to use them in your CSS:

```css
/* Define your theme variables */
:root {
  --bg-color: #ffffff;
  --text-color: #333333;
  --primary-color: #007bff;
}

[data-theme="dark"] {
  --bg-color: #1a1a1a;
  --text-color: #f0f0f0;
  --primary-color: #66b3ff;
}

/* Use the variables in your components */
.app {
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.button {
  background-color: var(--primary-color);
  color: white;
}
```

---

## 📖 API Reference

### ThemeProvider Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultTheme` | `'light' \| 'dark'` | `'light'` | Initial theme for the application |
| `storageKey` | `string` | `'theme'` | Key for localStorage persistence |

### useThemeAnimation Hook

```typescript
const { colorMode, toggle, setTheme } = useThemeAnimation();
```

| Property | Type | Description |
|----------|------|-------------|
| `colorMode` | `'light' \| 'dark'` | Current theme mode |
| `toggle` | `(ref: React.RefObject<HTMLElement>) => void` | Toggles theme with animation (uses provided element as transition anchor) |
| `setTheme` | `(theme: 'light' \| 'dark') => void` | Directly set theme without animation |

---

## 🔧 Advanced Usage

### Custom Transition Anchor

```tsx
const CustomComponent = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { toggle } = useThemeAnimation();

  // Animate from the container instead of a button
  return (
    <div ref={containerRef} className="theme-container">
      <button onClick={() => toggle(containerRef)}>
        Toggle Theme
      </button>
    </div>
  );
};
```

### Programmatic Theme Control

```tsx
const ThemeControls = () => {
  const { colorMode, setTheme } = useThemeAnimation();

  const switchToLight = () => setTheme('light');
  const switchToDark = () => setTheme('dark');

  return (
    <div>
      <p>Current: {colorMode}</p>
      <button onClick={switchToLight}>Force Light</button>
      <button onClick={switchToDark}>Force Dark</button>
    </div>
  );
};
```

---

## 🌐 Browser Support

- **Modern Browsers** (Chrome 111+, Edge 111+, Safari 16.4+): Smooth animated transitions
- **Legacy Browsers**: Instant theme switching (no animation, graceful degradation)

The library uses `startViewTransition` when available and falls back to immediate theme changes on unsupported browsers.

---

## 🎯 Best Practices

1. **Provide a ref** to the element where the animation should originate from
2. **Use CSS variables** for theming to ensure smooth transitions
3. **Test both themes** to ensure all elements transition properly
4. **Consider accessibility** - provide sufficient contrast in both themes
5. **Persist user preference** using the built-in localStorage support

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

MIT © medaminerjb

---

## 🙏 Acknowledgments

- Built with the modern [`startViewTransition` API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API)
- Inspired by the need for better theme transition experiences
- Thanks to all contributors and users

---

## ⭐ Support

If you find this library helpful, please consider giving it a star on GitHub!