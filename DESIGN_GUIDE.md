# CityFixer - Design System & UX Guide

## Overview

CityFixer Frontend is built with a **modern, clean, and user-friendly design** focused on providing an exceptional local service provider experience. This guide documents the design system, UX patterns, and best practices used throughout the application.

---

## 🎨 Color Palette

### Primary Colors
- **Primary Black** (#000000) - Main backgrounds, text
- **Primary Light** (#0d0d0d) - Dark variants
- **Accent Gold** (#d4af37) - CTAs, highlights, premium feel
- **Accent Dark** (#b8941d) - Hover states

### Secondary Colors
- **Success Green** (#10b981) - Success states, confirmations
- **Warning Amber** (#f59e0b) - Alerts, warnings
- **Danger Red** (#ef4444) - Errors, destructive actions
- **Info Blue** (#3b82f6) - Information, help

### Neutral Colors
- **White** (#ffffff) - Primary background
- **Light Gray** (#f8f9fa) - Secondary background
- **Lighter Gray** (#f3f4f6) - Tertiary background
- **Gray** (#6b7280) - Secondary text
- **Dark Gray** (#1f2937) - Primary text
- **Border** (#e5e7eb) - Borders, dividers

---

## 📐 Typography

### Font Family
- **Primary Font**: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif
- **Monospace**: 'Courier New' (for code, promo codes)

### Font Sizes
```
xs:   0.75rem   (12px)
sm:   0.875rem  (14px)
base: 1rem      (16px)
lg:   1.125rem  (18px)
xl:   1.25rem   (20px)
2xl:  1.5rem    (24px)
3xl:  2rem      (32px)
4xl:  2.5rem    (40px)
```

### Font Weights
- **Regular**: 400
- **Medium**: 500
- **Semi-bold**: 600
- **Bold**: 700
- **Extra Bold**: 800 (for headings)

### Line Heights
- **Headings**: 1.2
- **Body**: 1.6
- **Dense**: 1.5

---

## 🎯 Components

### Buttons

#### Button Types
1. **Primary Button** - Main Actions (Gold background, black text)
2. **Secondary Button** - Alternative Actions (Light gray, black text)
3. **Outline Button** - Subtle Actions (Transparent, black border)
4. **Danger Button** - Destructive Actions (Red background)
5. **Success Button** - Positive Actions (Green background)

#### Button States
- **Default**: Full opacity, normal cursor
- **Hover**: Enhanced shadow, slight elevation
- **Active**: Reduced shadow, no elevation
- **Disabled**: Reduced opacity, not-allowed cursor
- **Loading**: Spinner inside, disabled state

#### Button Sizes
- **Small**: 0.5rem vertical, 1rem horizontal padding
- **Medium**: 0.75rem vertical, 1.5rem horizontal padding (default)
- **Large**: 1rem vertical, 2rem horizontal padding

### Forms

#### Input Elements
- **Padding**: 0.75rem vertical, 1rem horizontal
- **Border**: 2px solid #e5e7eb (default)
- **Border Radius**: 0.5rem
- **Focus State**: Gold border, 3px gold shadow (10% opacity)
- **Error State**: Red border with error message
- **Disabled State**: Gray background, reduced opacity

#### Labels
- **Font Weight**: 600
- **Font Size**: 0.9rem - 0.95rem
- **Margin Bottom**: 0.5rem
- **Required Indicator**: Red asterisk (*)

#### Validation Feedback
- **Success**: Green checkmark icon
- **Error**: Red error message below field
- **Info**: Blue info message below field

### Cards

#### Card Container
- **Background**: White
- **Border Radius**: 1rem
- **Padding**: 1.5rem - 2rem
- **Box Shadow**: 0 2px 8px rgba(0,0,0,0.08) (default)
- **Hover Shadow**: 0 8px 24px rgba(0,0,0,0.12)
- **Border**: 1px solid #e5e7eb (light)

#### Card Sections
- **Header**: Top section with title, optional actions
- **Body**: Main content area
- **Footer**: Bottom section with actions or metadata

### Badges

#### Badge Types
- **Success**: Green background with green text (10% opacity)
- **Warning**: Amber background with amber text (10% opacity)
- **Danger**: Red background with red text (10% opacity)
- **Info**: Blue background with blue text (10% opacity)
- **Primary**: Black background with gray text (10% opacity)
- **Accent**: Gold background with gold text (10% opacity)

#### Badge Size
- **Default**: 0.75rem padding vertical, 1rem horizontal

### Alerts

#### Alert Types
- **Success**: Green text, green left border
- **Error**: Red text, red left border
- **Warning**: Amber text, amber left border
- **Info**: Blue text, blue left border

#### Alert Animation
- **Entrance**: Slide down from top (0.3s ease)
- **Display**: Full opacity with shadow
- **Exit**: Fade out (auto-dismiss after 5s optional)

---

## 🎬 Animations & Transitions

### Standard Transitions
- **Fast**: 0.15s cubic-bezier(0.4, 0, 0.2, 1)
- **Standard**: 0.3s cubic-bezier(0.4, 0, 0.2, 1)
- **Slow**: 0.5s cubic-bezier(0.4, 0, 0.2, 1)

### Keyframe Animations

#### Fade Animations
- `fadeIn` - Opacity 0 to 1
- `fadeInUp` - Opacity 0→1, transform Y: 20px→0
- `fadeInLeft` - Opacity 0→1, transform X: -20px→0
- `fadeInRight` - Opacity 0→1, transform X: 20px→0

#### Transform Animations
- `slideUp` - Transform Y: 30px→0
- `float` - Multiple transforms for floating effect
- `pulse` - Scale 1→1.05→1

#### Loading States
- `shimmer` - Gradient animation for skeleton loaders
- `spin` - Rotation animation for spinners

### Interaction Patterns

#### Hover Effects
- **Buttons**: `translateY(-2px)` + shadow enhancement
- **Cards**: `translateY(-4px)` + shadow enhancement
- **Links**: Color change + underline

#### Active States
- **Buttons**: `translateY(0)` + reduced shadow
- **Form Inputs**: Gold border highlight
- **Tab Navigation**: Gold background

---

## 📐 Spacing System

### Scale (in rem)
```
1:   0.25rem   (4px)
2:   0.5rem    (8px)
3:   0.75rem   (12px)
4:   1rem      (16px)
6:   1.5rem    (24px)
8:   2rem      (32px)
12:  3rem      (48px)
16:  4rem      (64px)
```

### Padding Guidelines
- **Compact**: 0.5rem - 1rem (lists, dense areas)
- **Regular**: 1rem - 1.5rem (cards, sections)
- **Spacious**: 2rem - 3rem (major sections)

### Margin Guidelines
- **Elements**: 0.5rem - 1rem
- **Components**: 1rem - 2rem
- **Sections**: 2rem - 4rem
- **Page**: 0 (handled by container max-width)

---

## 🔲 Sizing System

### Border Radius
```
sm:    0.25rem  (4px)
md:    0.5rem   (8px)
lg:    0.75rem  (12px)
xl:    1rem     (16px)
2xl:   1.5rem   (24px)
full:  9999px   (circles, pills)
```

### Shadows
- **xs**: 0 1px 2px rgba(0,0,0,0.05)
- **sm**: 0 1px 3px rgba(0,0,0,0.1)
- **md**: 0 4px 6px rgba(0,0,0,0.1)
- **lg**: 0 10px 15px rgba(0,0,0,0.1)
- **xl**: 0 20px 25px rgba(0,0,0,0.1)

---

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: 768px - 1024px
- **Large Desktop**: > 1024px

### Mobile-First Approach
1. Design base styles for mobile (320px - 480px)
2. Add tablet adjustments (480px+)
3. Add desktop enhancements (768px+)
4. Add large screen optimizations (1024px+)

### Responsive Patterns

#### Layout Changes
- **Three columns → Two columns → One column** (grid-template-columns)
- **Sidebar moves below content** (grid-column-direction)
- **Navigation reduces in size** (font-size, padding)

#### Typography Adjustments
- **Headings**: Reduce by 20-30% on mobile
- **Body**: Reduce by 5-10% on mobile
- **Line height**: May increase on mobile for readability

#### Spacing Adjustments
- **Padding**: Reduce by 30-50% on mobile
- **Margin**: Reduce by 30-50% on mobile
- **Gap**: Reduce by 20-30% on mobile

---

## 🎭 Accessibility (A11y)

### Color Contrast
- **Minimum**: WCAG AA (4.5:1 for text, 3:1 for graphics)
- **Preferred**: WCAG AAA (7:1 for text)

### Focus States
- **Visible focus**: 2px solid gold outline, 2px offset
- **Keyboard navigation**: Tabable on all interactive elements

### Semantic HTML
- Use `<button>` for buttons (not `<div>`)
- Use `<label>` for form fields
- Use `<nav>` for navigation
- Use heading hierarchy (h1, h2, h3, etc.)

### ARIA Attributes
- `aria-label` for icon buttons
- `aria-describedby` for form error messages
- `aria-hidden="true"` for decorative elements
- `role="alert"` for notifications

### Screen Reader Tips
- Provide descriptive link text (not "click here")
- Use semantic form markup
- Test with screen readers (NVDA, JAWS)

---

## 🧩 Layout Patterns

### Container
- **Max Width**: 1200px
- **Padding**: 0 1.5rem (desktop), 1rem (tablet), 0.75rem (mobile)
- **Margin**: 0 auto (centered)

### Section
- **Padding**: 4rem 0 (desktop), 2rem 0 (mobile)
- **Borders**: Optional top/bottom dividers

### Grid Layouts
- **2-Column**: `minmax(300px, 1fr)` (desktop 2, mobile 1)
- **3-Column**: `minmax(250px, 1fr)` (desktop 3, tablet 2, mobile 1)
- **4-Column**: `minmax(200px, 1fr)` (desktop 4, tablet 2, mobile 1)

### Flexbox Patterns
- **Navigation**: `flex`, `gap: 1rem`, `align-items: center`
- **Footer**: `flex`, `flex-wrap: wrap`, `justify-content: space-between`

---

## 📋 Form Best Practices

### Input Design
- ✅ Clear labels above inputs
- ✅ Visible placeholder text (60% opacity)
- ✅ Error messages below field
- ✅ Helper text for additional info
- ✅ Required field indicators (*)
- ✅ Adequate padding for touch targets (min 44x44px)

### Validation
- ✅ Real-time validation feedback
- ✅ Clear error messages
- ✅ Suggest corrections
- ✅ Keep user data if validation fails
- ✅ Disable submit on errors

### Required Fields
- 🎨 Mark with gold asterisk or badge
- 🎨 or use "Required" label
- 🎨 No mixed approaches

---

## 🔄 User Feedback

### Loading States
- **Spinner**: Centered with "Loading..." text
- **Skeleton**: Gray gradient shimmer skeleton
- **Progress**: Progress bar for long operations
- **Button**: Loading state within button

### Success States
- ✅ **Toast**: Brief confirmation message (auto-dismiss)
- ✅ **Page**: Success alert at top of form
- ✅ **Icon**: Green checkmark confirmation

### Error States
- ❌ **Toast**: Error message (persist until dismissed)
- ❌ **Inline**: Field highlight + error message
- ❌ **Page**: Error alert at top of form
- ❌ **Icon**: Red error indicator

### Empty States
- 📭 **Icon**: Large icon (4rem font-size, 30% opacity)
- 📭 **Title**: "No items found" or similar
- 📭 **Description**: Brief explanation
- 📭 **Action**: "Create new" or "Go back" button

---

## 🎯 Page-Specific Patterns

### Home Page
- Hero section with large typography and CTA buttons
- Feature cards grid showcasing services
- Testimonials with ratings
- Call-to-action section with strong contrast

### Services Page
- Sidebar filter panel (sticky on desktop)
- Search bar with category/sort controls
- Service grid with consistent card design
- Price and rating on card

### Service Details Page
- Large hero header with service info
- Provider selection cards with ratings
- Date/time picker for booking
- Sticky booking summary sidebar
- Reviews section below

### Bookings Page
- Tab navigation (Upcoming/Completed/Cancelled)
- Service info with icon
- Status badges with color coding
- Action buttons (View Details, Cancel)
- Empty state with CTA

### Payment Page
- Order summary (sticky sidebar)
- Multiple payment method tabs
- Form fields matching provider UI
- Security badge
- Cancel/Back button

### Profile Page
- Header with avatar and statistics
- Sidebar navigation menu
- Content sections (Personal Info, Settings, Activity)
- Danger zone for destructive actions

---

## 📝 CSS Architecture

### Organization
```
1. CSS Variables (Colors, Fonts, Shadows, Spacing)
2. Global Reset (*, html, body)
3. Typography (Headings, Body, Links)
4. Components (Buttons, Forms, Cards, Badges)
5. Layouts (Containers, Sections, Grids)
6. Pages (Page-specific styles)
7. Responsive (Mobile-first breakpoints)
8. Animations (Keyframes, Transitions)
9. Utilities (Helper classes, Accessibility)
```

### Variable Naming
```css
/* Colors */
--primary, --primary-light, --accent, --success, --danger

/* Typography */
--font-family, --font-size-base, --font-size-xl

/* Spacing */
--space-4, --space-6, --space-8

/* Sizing */
--radius-lg, --radius-xl, --radius-full

/* Shadows */
--shadow-md, --shadow-lg

/* Transitions */
--transition, --transition-fast, --transition-slow
```

### File Organization
```
src/styles/
├── Global.css              (Global design system)
├── Services-Enhanced.css   (Services page)
├── ServiceDetails-Enhanced.css
├── Bookings-Enhanced.css
├── Profile-Enhanced.css
├── Pages-Enhanced.css      (About, Offers, Contact)
├── Payment.css             (Payment page)
└── Home.css                (Home/Hero page)
```

---

## 🚀 Best Practices

### Performance
- ✅ Use CSS variables for consistency
- ✅ Minimize reflows/repaints
- ✅ Hardware-accelerated transforms
- ✅ Lazy load images
- ✅ Optimize animations (use transform, opacity)

### Maintainability
- ✅ Use descriptive class names
- ✅ Comment complex sections
- ✅ Group related styles together
- ✅ Use CSS variables for theming
- ✅ Follow consistent naming conventions

### Browser Support
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS 14+, Android 10+)

### Testing
- ✅ Test on actual devices (mobile, tablet, desktop)
- ✅ Test keyboard navigation
- ✅ Test with screen readers
- ✅ Test form validation
- ✅ Test animations for performance

---

## 🎓 Design Principles

### 1. Consistency
- Use consistent spacing, colors, and typography
- Repeat patterns for familiarity
- Maintain visual hierarchy

### 2. Clarity
- Clear labels and instructions
- Obvious interactive elements
- Minimize cognitive load

### 3. Efficiency
- Minimize clicks to complete action
- Smart defaults
- Quick access to common actions

### 4. Feedback
- Immediate response to user actions
- Clear success/error messages
- Loading states for async operations

### 5. Aesthetics
- Clean, modern design
- Proper whitespace
- Visual balance
- Professional color scheme

### 6. Accessibility
- Keyboard navigable
- Screen reader friendly
- High contrast text
- Descriptive labels

---

## 📚 Reference Resources

### CSS
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [CSS Tricks](https://css-tricks.com/)
- [Can I Use](https://caniuse.com/)

### Design
- [Material Design](https://material.io/design)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)

### Accessibility
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM](https://webaim.org/)

---

## 🔄 Version History

**v1.0.0** - Initial Design System
- Complete color palette
- Typography scale
- Component library
- Responsive breakpoints
- Animation guidelines
- Accessibility standards
- Best practices documentation

---

## 📧 Questions?

For design system updates, component requests, or accessibility improvements, please document your needs and the reasoning behind them.

**Remember**: A good design system is flexible, extensible, and easy to maintain.

