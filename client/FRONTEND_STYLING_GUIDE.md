# CityFixer Frontend - Design System & Styling Guide

## 📋 Overview

Welcome to CityFixer's modern, user-friendly frontend! This directory (client/src) contains a complete React application with a professional design system focused on excellent user experience for a local service provider platform.

---

## 🎨 Design System

### Core Files

#### **Global.css** (New - Design System Foundation)
The master stylesheet containing all design system definitions:
- **CSS Variables**: Colors, typography, spacing, shadows, border radius
- **Form Elements**: Styled inputs, textareas, selects
- **Form Validation**: Error states, help text, success indicators
- **Buttons**: 5+ variants (primary, secondary, accent, danger, success)
- **Cards**: Consistent card component styling
- **Badges & Tags**: Status indicators with 6+ color variants
- **Alerts**: Notification styles (success, error, warning, info)
- **Modals & Overlays**: Modal dialog styling
- **Accessibility**: Focus states, keyboard navigation, screen reader support
- **Animations**: Utility animations (fade, slide, spin)
- **Responsive Grid**: Auto-fit responsive layouts
- **Utilities**: Spacing, typography, flex helpers

**Import in App.js automatically** ✅

#### **App.css** (Enhanced Global Styles)
Application-wide styling:
- Body and page background styles
- Global typography overrides
- Link styling
- General layout styles

#### Page-Specific Enhanced Stylesheets

1. **Services-Enhanced.css**
   - Service listing grid layout
   - Sidebar category filters with sticky positioning
   - Search and sort controls
   - Service card design with hover effects
   - Responsive filter sidebar collapsing
   - Empty state styling

2. **ServiceDetails-Enhanced.css**
   - Service header with breadcrumb
   - Provider selection cards with ratings and verification
   - Date/time picker interface
   - Sticky booking sidebar
   - Reviews section styling
   - Responsive provider grid

3. **Bookings-Enhanced.css**
   - Tab navigation for order status (Upcoming/Completed/Cancelled)
   - Booking card layout with service icon
   - Status badge color coding
   - Action buttons (View Details, Cancel, Reschedule)
   - Empty state for no bookings
   - Filter and sort controls

4. **Profile-Enhanced.css**
   - Profile header with avatar and statistics
   - Sidebar navigation menu with sections
   - Personal information form section
   - Settings with toggle switches
   - Activity statistics grid
   - Danger zone for account actions

5. **Pages-Enhanced.css**
   - **About Page**: Mission/Vision cards, values grid, statistics, team section
   - **Offers Page**: Promotional cards, discount badges, promo code copy UI
   - **Contact Page**: Contact form, info sidebar, FAQ accordion

6. **Payment.css**
   - Payment method selection tabs
   - Credit card form with validation
   - Order summary sidebar (sticky)
   - Pay button with loading state
   - Security information badge

7. **Home.css** (Enhanced)
   - Sticky navigation bar with animations
   - Hero section with animated gradient blobs
   - Service cards grid
   - "How It Works" section with numbers
   - Testimonials section
   - Call-to-action section
   - Professional footer
   - 15+ keyframe animations

---

## 🎯 Color System

### Primary Palette
```css
:root {
  --primary: #000000;              /* Pure black */
  --primary-light: #0d0d0d;        /* Dark black */
  --accent: #d4af37;               /* Gold accent */
  --accent-dark: #b8941d;          /* Dark gold */
}
```

### Status Colors
```css
--success: #10b981;    /* Green */
--warning: #f59e0b;    /* Amber */
--danger: #ef4444;     /* Red */
--info: #3b82f6;       /* Blue */
```

### Neutral Colors
```css
--bg-primary: #ffffff;     /* White */
--bg-secondary: #f8f9fa;   /* Light gray */
--bg-tertiary: #f3f4f6;    /* Lighter gray */
--text-primary: #1f2937;   /* Dark gray (text) */
--text-secondary: #6b7280; /* Medium gray (secondary text) */
--text-light: #9ca3af;     /* Light gray (muted text) */
--border: #e5e7eb;         /* Border color */
```

---

## 📐 Spacing Scale

```css
--space-1: 0.25rem    (4px)
--space-2: 0.5rem     (8px)
--space-3: 0.75rem    (12px)
--space-4: 1rem       (16px)   ← Standard padding
--space-6: 1.5rem     (24px)   ← Section spacing
--space-8: 2rem       (32px)   ← Large section spacing
--space-12: 3rem      (48px)   ← Major section spacing
--space-16: 4rem      (64px)   ← Hero section spacing
```

**Usage**: `padding: var(--space-6);` or `gap: var(--space-4);`

---

## 🔧 Typography

### Font Stack
```css
-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif
```

### Size Hierarchy
```
h1: 2.5rem (40px)     ← Hero/Main titles
h2: 2rem   (32px)     ← Section titles
h3: 1.5rem (24px)     ← Subsection titles
h4: 1.25rem (20px)    ← Small titles
h5: 1.125rem (18px)   ← Minor titles
h6: 1rem   (16px)     ← Secondary headings

body: 1rem (16px)
small: 0.875rem (14px)
xs: 0.75rem (12px)    ← Labels, captions
```

### Text Helpers
```html
<p class="text-muted">Secondary text color</p>
<p class="text-light">Light gray text</p>
<p class="text-small">Smaller font size</p>
<p class="text-bold">Bold text weight</p>
<p class="text-center">Center aligned text</p>
```

---

## 🎬 Component Reference

### Buttons

```html
<!-- Primary Button (Gold background) -->
<button class="btn btn-primary">Click Me</button>

<!-- Secondary Button (Gray background) -->
<button class="btn btn-secondary">Alternative</button>

<!-- Outline Button (Transparent with border) -->
<button class="btn btn-outline">Outline</button>

<!-- Danger Button (Red) -->
<button class="btn btn-danger">Delete</button>

<!-- Success Button (Green) -->
<button class="btn btn-success">Confirm</button>

<!-- Size Variants -->
<button class="btn btn-sm btn-primary">Small</button>
<button class="btn btn-lg btn-primary">Large</button>

<!-- Block Button (Full width) -->
<button class="btn btn-block btn-primary">Full Width</button>

<!-- Disabled State -->
<button class="btn btn-primary" disabled>Disabled</button>
```

### Forms

```html
<div class="form-group">
  <label for="name" class="form-label required">Full Name</label>
  <input 
    type="text" 
    id="name"
    class="form-input"
    placeholder="Enter your name"
    required
  />
  <span class="form-help">Your full legal name</span>
</div>

<div class="form-group">
  <label for="email" class="form-label required">Email</label>
  <input 
    type="email" 
    id="email"
    class="form-input"
    placeholder="your@email.com"
  />
  <span class="form-error">❌ Invalid email format</span>
</div>

<!-- Checkbox -->
<label class="checkbox">
  <input type="checkbox" />
  I agree to terms and conditions
</label>

<!-- Radio Button -->
<label class="radio">
  <input type="radio" name="option" />
  Option 1
</label>

<!-- Select -->
<select class="form-input">
  <option>Choose an option</option>
  <option>Option 1</option>
</select>

<!-- Textarea -->
<textarea class="form-input" placeholder="Enter your message..."></textarea>

<!-- Form Row (Multiple fields) -->
<div class="form-row">
  <div class="form-group">
    <label class="form-label">First Name</label>
    <input type="text" class="form-input" />
  </div>
  <div class="form-group">
    <label class="form-label">Last Name</label>
    <input type="text" class="form-input" />
  </div>
</div>
```

### Cards

```html
<div class="card">
  <div class="card-header">
    <h3>Card Title</h3>
  </div>
  <div class="card-body">
    <p>Card content goes here</p>
  </div>
  <div class="card-footer">
    <button class="btn btn-primary">Action</button>
  </div>
</div>
```

### Badges

```html
<!-- Color Variants -->
<span class="badge badge-success">✓ Success</span>
<span class="badge badge-danger">✗ Error</span>
<span class="badge badge-warning">⚠ Warning</span>
<span class="badge badge-info">ℹ Info</span>
<span class="badge badge-primary">Primary</span>
<span class="badge badge-accent">Accent</span>
```

### Alerts

```html
<!-- Success Alert -->
<div class="alert alert-success">
  <span class="alert-icon">✓</span>
  <span>Your changes have been saved successfully!</span>
</div>

<!-- Error Alert -->
<div class="alert alert-error">
  <span class="alert-icon">✕</span>
  <span>An error occurred. Please try again.</span>
</div>

<!-- Warning Alert -->
<div class="alert alert-warning">
  <span class="alert-icon">⚠</span>
  <span>Please review your information before proceeding.</span>
</div>

<!-- Info Alert -->
<div class="alert alert-info">
  <span class="alert-icon">ℹ</span>
  <span>New features available. Check them out!</span>
</div>
```

### Modals

```html
<div class="modal-overlay">
  <div class="modal">
    <div class="modal-header">
      <h2 class="modal-title">Dialog Title</h2>
      <button class="modal-close">&times;</button>
    </div>
    <div class="modal-body">
      <p>Modal content goes here</p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary">Cancel</button>
      <button class="btn btn-primary">Confirm</button>
    </div>
  </div>
</div>
```

### Loading Spinner

```html
<!-- Default Spinner -->
<div class="spinner"></div>

<!-- Small Spinner -->
<div class="spinner spinner-sm"></div>

<!-- Large Spinner -->
<div class="spinner spinner-lg"></div>
```

### Layouts

```html
<!-- Responsive Grid (2 columns desktop, 1 mobile) -->
<div class="grid grid-2">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
</div>

<!-- 3-Column Grid -->
<div class="grid grid-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Flexbox Helpers -->
<div class="flex">Flex container with gap</div>
<div class="flex-between">Space between items</div>
<div class="flex-center">Centered content</div>
<div class="flex flex-column">Vertical flex</div>

<!-- Container (Max width 1200px) -->
<div class="container">
  Max width 1200px, centered, padded
</div>
```

---

## 📱 Responsive Design

### Mobile-First Breakpoints

```css
/* Base: Mobile (320px - 480px) */
.grid { grid-template-columns: 1fr; }

/* Tablet (480px - 768px) */
@media (min-width: 480px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop (768px - 1024px) */
@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}

/* Large Desktop (1024px+) */
@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(4, 1fr); }
}
```

### Responsive Classes

```html
<!-- Hide on mobile, show on desktop -->
<div class="hidden-mobile visible-desktop">Desktop only</div>

<!-- Hide on desktop, show on mobile -->
<div class="visible-mobile hidden-desktop">Mobile only</div>

<!-- Responsive spacing -->
<div class="mb-4">Margin bottom on all sizes</div>
<div class="mt-6">Margin top all sizes</div>
```

---

## 🎬 Animations

### Predefined Animations

```css
/* Fade animations */
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } }
@keyframes fadeInLeft { from { opacity: 0; transform: translateX(-20px); } }
@keyframes fadeInRight { from { opacity: 0; transform: translateX(20px); } }

/* Slide animations */
@keyframes slideUp { from { transform: translateY(30px); } }

/* Utility animations */
@keyframes spin { to { transform: rotate(360deg); } }
@keyframes pulse { 50% { opacity: 0.5; } }
@keyframes float { /* Complex multi-step animation */ }
```

### Using Animations

```css
/* Apply animation to element */
.fade-in {
  animation: fadeInUp 0.6s ease;
}

/* Custom animation */
.my-element {
  animation: slideIn 0.3s ease-out;
}

/* Infinite animation */
.spinner {
  animation: spin 1s linear infinite;
}
```

### Transition Variables

```css
--transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);        /* Standard */
--transition-fast: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);  /* Quick */
--transition-slow: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);   /* Slow */

/* Usage */
.element {
  transition: var(--transition);
}

.element:hover {
  background: var(--accent);
}
```

---

## ♿ Accessibility

### Built-in a11y Features

- ✅ High contrast text (WCAG AA compliant)
- ✅ Focus indicators on interactive elements
- ✅ Keyboard navigation support
- ✅ Semantic HTML structure
- ✅ ARIA labels and descriptions
- ✅ Screen reader friendly

### Using a11y Classes

```html
<!-- Screen reader only text -->
<span class="sr-only">Additional info for screen readers</span>

<!-- Visible focus states -->
<button>Interactive elements get focus visible automatically</button>

<!-- Semantic form -->
<label for="name">Name</label>
<input id="name" type="text" required />
```

### Testing

- 🔍 Use browser DevTools accessibility inspector
- 🔊 Test with screen reader (NVDA on Windows, JAWS)
- ⌨️ Navigate with keyboard only (Tab, Shift+Tab, Enter)
- 👁️ Check color contrast ratios

---

## 🚀 Getting Started

### 1. Import Global Styles

The `Global.css` is already imported in `App.js` ✅

### 2. Use Design System Variables

```css
.my-component {
  background: var(--bg-primary);
  color: var(--text-primary);
  padding: var(--space-6);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: var(--transition);
}

.my-component:hover {
  color: var(--accent);
  box-shadow: var(--shadow-lg);
}
```

### 3. Use Utility Classes

```html
<div class="flex gap-4 p-6">
  <button class="btn btn-primary">Primary</button>
  <button class="btn btn-secondary">Secondary</button>
</div>
```

### 4. Create Page-Specific Styles

```css
/* src/styles/MyPage.css */
.my-page {
  background: var(--bg-secondary);
  padding: var(--space-16) 0;
}

.my-page h1 {
  color: var(--text-primary);
}
```

```jsx
// src/pages/MyPage.js
import '../styles/MyPage.css';

export default function MyPage() {
  return <div class="my-page">Content</div>;
}
```

---

## 📦 File Structure

```
client/src/
├── styles/
│   ├── Global.css                    # Design system (import in App.js)
│   ├── Services-Enhanced.css         # Services page
│   ├── ServiceDetails-Enhanced.css  # Service details page
│   ├── Bookings-Enhanced.css        # Bookings page
│   ├── Profile-Enhanced.css         # Profile page
│   ├── Pages-Enhanced.css           # About, Offers, Contact
│   ├── Payment.css                  # Payment page
│   ├── Home.css                     # Home page
│   ├── LoginForm.css                # Login styling
│   └── SignupForm.css               # Signup styling
├── App.css                           # App-wide styles
├── pages/                            # Page components
│   ├── Home.js
│   ├── Services.js
│   ├── ServiceDetails.js
│   ├── Bookings.js
│   ├── Profile.js
│   ├── About.js
│   ├── Offers.js
│   ├── Contact.js
│   └── Payment.js
├── components/                       # Reusable components
└── App.js                            # Main app component
```

---

## 💡 Pro Tips

### 1. Use CSS Variables in React

```jsx
// Access CSS variables in JavaScript
const accentColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--accent').trim();
// Result: #d4af37
```

### 2. Customize Theme

Edit CSS variables in `Global.css`:

```css
:root {
  --primary: #000000;           /* Change primary color */
  --accent: #d4af37;            /* Change accent color */
  /* ... modify other variables ... */
}
```

### 3. Responsive Images

```html
<img 
  src="image.jpg" 
  alt="Description"
  style="max-width: 100%; height: auto;"
/>
```

### 4. Optimize Performance

- Use `transform` and `opacity` for animations (GPU accelerated)
- Minimize reflows by grouping DOM changes
- Use lazy loading for images

### 5. Browser DevTools Tips

- **Inspect**: Right-click → Inspect → Styles tab
- **Toggle Classes**: Modify class in DevTools to preview
- **Accessibility**: DevTools → Accessibility tab
- **Responsive**: DevTools → Toggle device toolbar

---

## 🐛 Troubleshooting

### Styles Not Applying?

1. ✅ Check if `Global.css` is imported in `App.js`
2. ✅ Check CSS file path is correct
3. ✅ Check class names are spelled correctly
4. ✅ Clear browser cache (Ctrl+Shift+Delete)
5. ✅ Check browser DevTools for errors

### Color Not Changing?

1. ✅ Check if using CSS variables: `var(--accent)`
2. ✅ Check specificity (inline styles override classes)
3. ✅ Use `!important` as last resort: `color: var(--accent) !important;`

### Responsive Not Working?

1. ✅ Check `<meta name="viewport">` in `public/index.html`
2. ✅ Check media query breakpoints
3. ✅ Use mobile-first approach (mobile styles first, then `@media (min-width: ...)`)

### Animation Jittery?

1. ✅ Use `transform` instead of `top/left/width/height`
2. ✅ Use `will-change` for complex animations
3. ✅ Reduce animation duration if too fast

---

## 📚 Additional Resources

- **Design System Docs**: See [DESIGN_GUIDE.md](../DESIGN_GUIDE.md)
- **React Docs**: https://react.dev/
- **MDN CSS**: https://developer.mozilla.org/en-US/docs/Web/CSS
- **WCAG Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/

---

## ✅ Quality Checklist

Before deploying, verify:

- [ ] All pages use consistent styling
- [ ] Responsive design works on mobile (< 480px), tablet (768px), desktop (1024px+)
- [ ] Color contrast meets WCAG AA (4.5:1 for text)
- [ ] Focus indicators visible on keyboard navigation
- [ ] Forms have proper labels and validation
- [ ] Animations perform smoothly (60 FPS)
- [ ] Loading states show feedback
- [ ] Error messages are clear and actionable
- [ ] Empty states have helpful messaging
- [ ] All buttons and links are 44x44px minimum (mobile)

---

**Last Updated**: 2026-03-31
**Version**: 1.0.0

