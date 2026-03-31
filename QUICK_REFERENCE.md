# CityFixer Design System - Quick Reference Card

## 🎨 Colors

### Primary Palette
- **Black**: `#000000` (backgrounds, text)
- **Dark Black**: `#0d0d0d` (hover, variants)
- **Gold**: `#d4af37` (buttons, accents)
- **Dark Gold**: `#b8941d` (hover)

### Status Colors
- **Green**: `#10b981` (success, confirmed)
- **Amber**: `#f59e0b` (warning, pending)
- **Red**: `#ef4444` (danger, error)
- **Blue**: `#3b82f6` (info, cancelled)

### Neutral Colors
- **White**: `#ffffff` (backgrounds)
- **Light Gray**: `#f8f9fa` (secondary bg)
- **Medium Gray**: `#6b7280` (secondary text)
- **Dark Gray**: `#1f2937` (primary text)
- **Border**: `#e5e7eb` (borders, dividers)

## 📐 Typography

### Font Family
```
-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif
```

### Sizes
- `xs: 0.75rem` (12px) - Labels
- `sm: 0.875rem` (14px) - Small text
- `base: 1rem` (16px) - Body text
- `lg: 1.125rem` (18px) - Buttons
- `xl: 1.25rem` (20px) - Small titles
- `2xl: 1.5rem` (24px) - Subsection
- `3xl: 2rem` (32px) - Section title
- `4xl: 2.5rem` (40px) - Main title

### Weights
- **Regular**: 400
- **Semi-bold**: 600
- **Bold**: 700

## 🎯 Buttons

```html
<!-- Primary (Gold) -->
<button class="btn btn-primary">Click Me</button>

<!-- Secondary (Gray) -->
<button class="btn btn-secondary">Alternative</button>

<!-- Outline -->
<button class="btn btn-outline">Outline</button>

<!-- Danger (Red) -->
<button class="btn btn-danger">Delete</button>

<!-- Success (Green) -->
<button class="btn btn-success">Save</button>

<!-- Sizes -->
<button class="btn btn-sm btn-primary">Small</button>
<button class="btn btn-primary">Medium (default)</button>
<button class="btn btn-lg btn-primary">Large</button>

<!-- Block -->
<button class="btn btn-block btn-primary">Full Width</button>
```

## 📋 Forms

```html
<!-- Input -->
<div class="form-group">
  <label for="name" class="form-label required">Name</label>
  <input type="text" id="name" class="form-input" />
  <span class="form-help">Helper text</span>
  <span class="form-error">❌ Error message</span>
</div>

<!-- Checkbox -->
<label class="checkbox">
  <input type="checkbox" />
  I agree
</label>

<!-- Radio -->
<label class="radio">
  <input type="radio" name="option" />
  Option 1
</label>

<!-- Form Row (Multiple columns) -->
<div class="form-row">
  <div class="form-group">
    <label class="form-label">Field 1</label>
    <input class="form-input" />
  </div>
  <div class="form-group">
    <label class="form-label">Field 2</label>
    <input class="form-input" />
  </div>
</div>
```

## 🃏 Cards

```html
<div class="card">
  <div class="card-header">
    <h3>Title</h3>
  </div>
  <div class="card-body">
    Content...
  </div>
  <div class="card-footer">
    <button class="btn btn-primary">Action</button>
  </div>
</div>
```

## 🏷️ Badges

```html
<span class="badge badge-success">✓ Success</span>
<span class="badge badge-danger">✗ Error</span>
<span class="badge badge-warning">⚠ Warning</span>
<span class="badge badge-info">ℹ Info</span>
<span class="badge badge-primary">Primary</span>
<span class="badge badge-accent">Accent</span>
```

## ⚠️ Alerts

```html
<!-- Success -->
<div class="alert alert-success">
  <span class="alert-icon">✓</span>
  Success message
</div>

<!-- Error -->
<div class="alert alert-error">
  <span class="alert-icon">✕</span>
  Error message
</div>

<!-- Warning -->
<div class="alert alert-warning">
  <span class="alert-icon">⚠</span>
  Warning message
</div>

<!-- Info -->
<div class="alert alert-info">
  <span class="alert-icon">ℹ</span>
  Info message
</div>
```

## 📐 Spacing

```
--space-1: 0.25rem    (4px)
--space-2: 0.5rem     (8px)
--space-3: 0.75rem    (12px)
--space-4: 1rem       (16px)    ← Standard
--space-6: 1.5rem     (24px)    ← Section
--space-8: 2rem       (32px)    ← Large
--space-12: 3rem      (48px)    ← XL
--space-16: 4rem      (64px)    ← XXL
```

## 🔲 Border Radius

```
--radius-sm: 0.25rem
--radius-md: 0.5rem
--radius-lg: 0.75rem    ← Standard cards
--radius-xl: 1rem       ← Large components
--radius-2xl: 1.5rem    ← Extra large
--radius-full: 9999px   ← Circles, pills
```

## 💫 Shadows

```
--shadow-xs: 0 1px 2px rgba(0,0,0,0.05)
--shadow-sm: 0 1px 3px rgba(0,0,0,0.1)
--shadow-md: 0 4px 6px rgba(0,0,0,0.1)    ← Standard
--shadow-lg: 0 10px 15px rgba(0,0,0,0.1)
--shadow-xl: 0 20px 25px rgba(0,0,0,0.1)
```

## 🎬 Transitions

```css
/* Speed options */
--transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);         /* Standard */
--transition-fast: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);   /* Quick */
--transition-slow: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);    /* Slow */

/* Usage */
.element {
  transition: var(--transition);
}

.element:hover {
  color: var(--accent);
}
```

## 📱 Responsive Breakpoints

```
Mobile:         < 480px
Tablet:         480px - 768px
Desktop:        768px - 1024px
Large Desktop:  > 1024px
```

```css
/* Mobile-first approach */
.grid { grid-template-columns: 1fr; }         /* Mobile */

@media (min-width: 480px) {
  .grid { grid-template-columns: repeat(2, 1fr); }    /* Tablet */
}

@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(3, 1fr); }    /* Desktop */
}

@media (min-width: 1024px) {
  .grid { grid-template-columns: repeat(4, 1fr); }    /* Large */
}
```

## 🏗️ Layouts

```html
<!-- Container (max-width: 1200px) -->
<div class="container">Content</div>

<!-- Grid (2 columns, responsive) -->
<div class="grid grid-2">
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<!-- Grid (3 columns) -->
<div class="grid grid-3">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

<!-- Flex helpers -->
<div class="flex">          <!-- Center aligned -->
  <div>Item 1</div>
  <div>Item 2</div>
</div>

<div class="flex-between">  <!-- Space between -->
  <div>Left</div>
  <div>Right</div>
</div>

<div class="flex-center">   <!-- Centered -->
  <div>Content</div>
</div>

<div class="flex flex-column">  <!-- Vertical -->
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

## 🎨 CSS Variables Usage

```css
.my-component {
  background: var(--bg-primary);
  color: var(--text-primary);
  padding: var(--space-6);
  margin-bottom: var(--space-8);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  border: 1px solid var(--border);
  transition: var(--transition);
}

.my-component:hover {
  background: var(--bg-secondary);
  color: var(--accent);
  box-shadow: var(--shadow-lg);
}

.my-component.active {
  border-color: var(--accent);
  color: var(--accent);
}
```

## 🔤 Text Utilities

```html
<p class="text-muted">Secondary text</p>
<p class="text-light">Light gray text</p>
<p class="text-small">Smaller font</p>
<p class="text-bold">Bold text</p>
<p class="text-center">Centered</p>
```

## 🎭 Animations

```css
/* Predefined animations */
@keyframes fadeIn { 
  from { opacity: 0; } 
  to { opacity: 1; } 
}

@keyframes fadeInUp { 
  from { opacity: 0; transform: translateY(20px); } 
  to { opacity: 1; transform: translateY(0); } 
}

@keyframes slideUp { 
  from { transform: translateY(30px); } 
  to { transform: translateY(0); } 
}

/* Usage */
.element {
  animation: fadeInUp 0.6s ease;
}

.spinner {
  animation: spin 1s linear infinite;
}
```

## ♿ Accessibility

```html
<!-- Screen reader only text -->
<span class="sr-only">Additional info for screen readers</span>

<!-- Form with label -->
<label for="email" class="form-label">Email</label>
<input id="email" type="email" class="form-input" />

<!-- Required field -->
<label class="form-label required">Name</label>

<!-- Focus visible -->
<button>Button gets outline on tab</button>

<!-- ARIA labels -->
<button aria-label="Close dialog">×</button>
```

## 📦 File Structure

```
client/src/
├── styles/
│   ├── Global.css                    ← Design system (imported in App.js)
│   ├── Services-Enhanced.css         ← Services page
│   ├── ServiceDetails-Enhanced.css   ← Service details
│   ├── Bookings-Enhanced.css         ← Bookings page
│   ├── Profile-Enhanced.css          ← Profile page
│   ├── Pages-Enhanced.css            ← About/Offers/Contact
│   ├── Payment.css                   ← Payment page
│   └── Home.css                      ← Home page
├── App.css                           ← App-wide styles
└── App.js                            ← Main component (imports Global.css)
```

## 🚀 Quick Start

```jsx
// 1. Import Global.css in App.js (✅ already done)
import './styles/Global.css';

// 2. Use in CSS
.my-component {
  background: var(--bg-primary);
  padding: var(--space-6);
  border-radius: var(--radius-lg);
}

// 3. Use in HTML
<div class="flex gap-4">
  <button class="btn btn-primary">Save</button>
  <button class="btn btn-secondary">Cancel</button>
</div>

// 4. Import page CSS
import '../styles/MyPage.css';

// 5. All styling automatically applied! ✅
```

## 📊 Component Inventory

| Component | Variants | States |
|-----------|----------|--------|
| Button | 5 types | Default, Hover, Active, Disabled, Loading |
| Input | 1 type | Default, Focus, Error, Disabled |
| Badge | 6 colors | All filled |
| Alert | 4 types | All animated |
| Card | Multiple | Base, Hover, Active |
| Modal | 1 type | Open, Closed |
| Loading | 3 sizes | Spinning animation |

## ✅ Checklist for New Components

- [ ] Use CSS variables for colors
- [ ] Follow spacing scale for consistency
- [ ] Add responsive breakpoints
- [ ] Include focus states for accessibility
- [ ] Test on mobile (480px), tablet (768px), desktop (1024px)
- [ ] Add hover/active states
- [ ] Document in DESIGN_GUIDE.md

## 📚 Documentation Files

1. **DESIGN_GUIDE.md** - Complete design system reference
2. **FRONTEND_STYLING_GUIDE.md** - Implementation guide with examples
3. **FRONTEND_ENHANCEMENT_SUMMARY.md** - Overview of all improvements
4. **This file** - Quick reference card

## 🎯 Key Principles

1. **Consistency** - Use CSS variables, follow patterns
2. **Clarity** - Clear labels, obvious interactive elements
3. **Efficiency** - Minimize clicks, smart defaults
4. **Feedback** - Immediate user response, clear messages
5. **Aesthetics** - Professional design, proper whitespace
6. **Accessibility** - WCAG AA compliant, keyboard navigable

---

**Last Updated**: March 31, 2026 | **Version**: 1.0.0 | **Status**: Production Ready ✅

