# Shop.co - E-commerce Demo Application

![Pharmelites Graduating Class of 2024 Yearbook - Google Chrome 12_31_2024 1_55_57 AM](https://github.com/user-attachments/assets/02cee920-66e8-4648-819c-9e13c34dcc6a)

![Pharmelites Graduating Class of 2024 Yearbook - Google Chrome 12_31_2024 1_56_43 AM](https://github.com/user-attachments/assets/1cd6f00e-4161-4f9a-bfef-dc8e9edab1c7)
a)

![Pharmelites Graduating Class of 2024 Yearbook - Google Chrome 12_31_2024 1_56_14 AM](https://github.com/user-attachments/assets/dc7b592b-d620-40eb-b909-b3db527fd762)

![Pharmelites Graduating Class of 2024 Yearbook - Google Chrome 12_31_2024 1_57_04 AM](https://github.com/user-attachments/assets/58b991a7-bd5b-4403-993e-1db6e1465048)


A modern, responsive e-commerce application built with Next.js 14 and TypeScript, demonstrating React best practices, modern design patterns, and efficient state management.


## 🌟 Key Features

- Responsive design (mobile-first approach)
- Product filtering and search
- Shopping cart with persistent storage
- Category-based navigation
- Product details with image gallery
- Dynamic pagination
- Smooth animations and transitions

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **State Management:** Redux Toolkit + IndexedDB (in progress...) for persistence
- **UI Components:** shadcn/ui (Radix UI primitives)
- **Animations:** Framer Motion
- **HTTP Client:** Axios
- **Data Source:** DummyJSON API

## 🏗 Project Structure

```text
src/
├── 📱 app/               # Next.js app router pages
├── 🧩 components/        # Reusable UI components
│   ├── layout/           # Navbar and Footer components
│   ├── sections/         # Page-specific sections
│   ├── ui/               # Base UI components (shadcn)
│   └── ui-build/         # UI block components (built with or without shadcn)
├── ✴️ constants/         # Constant values used
├── 🎣 hooks/             # Custom React hooks
├── 🛠️ lib/               # Utility functions and configurations from dependencies
├── 🔄 provider/          # React context providers
│   ├── filter-context/   # Filter Provider built using ContextAPI
│   └── redux/            # Redux Provider built using redux and it's toolkit
├── 🏪 store/             # Redux store setup and slices
│   ├── features/         # Redux slices and reducers
│   ├── hooks/            # Redux hooks
│   └── middleware/       # Custom Redux middleware
├── 🖼️ svgs/             # JSX SVG components
├── 🔧 utils/             # Custom Utility functions
└── 📝 types/             # TypeScript type definitions
```

## 🎨 Design Patterns & Best Practices

### React Patterns

- Custom hooks for reusable logic (useCart, useProducts, useSearch)
- Context API for feature-specific state (FilterContext)
- Compound Components for complex UI elements
- Render Props for component composition
- Higher Order Components for shared functionality

### State Management

- Redux Toolkit for global state management
- IndexedDB for cart persistence
- Context API for localized state
- URL-based state for shareable filters and pagination

### Component Architecture

- Atomic Design principles
- Composition over inheritance
- Single Responsibility Principle
- Controlled vs Uncontrolled components
- Error Boundaries for fallback UI

## 🎯 Performance Optimizations

- Image optimization with Next.js Image component
- Dynamic imports for code splitting
- Memoization of expensive computations
- Debounced search functionality
- IndexedDB for offline capabilities
- Proper key usage in lists for efficient rendering

## 📱 Responsive Design

- Mobile-first approach
- Fluid typography and spacing
- Responsive images and grids
- Touch-friendly interactions
- Adaptive layouts using Tailwind breakpoints

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/AJ1732/shop.co.git
```

2. Install dependencies:

```bash
cd shop.co
npm install
```

3. Run the development server:

```bash
npm run dev
```

## 🎨 Design Credits

This project implements the [E-commerce Website Template](https://www.figma.com/community/file/1273571982885059508) from Figma Community.

## 📦 Dependencies

### 🛠️ Core

| Package                | Version | Description        |
| ---------------------- | ------- | ------------------ |
| **`next`**             | ^14.2.5 | React framework    |
| **`react`**            | ^18.0.0 | JavaScript library |
| **`typescript`**       | ^5.0.0  | Type system        |
| **`@reduxjs/toolkit`** | ^2.5.0  | State management   |
| **`tailwindcss`**      | ^3.4.1  | CSS framework      |

### 🎨 UI Components

| Package             | Version  | Description       |
| ------------------- | -------- | ----------------- |
| **`@radix-ui/*`**   | ^1.0.0   | UI primitives     |
| **`shadcn/ui`**     | latest   | Component library |
| **`framer-motion`** | ^11.15.0 | Animation library |
| **`lucide-react`**  | ^0.426.0 | Icon library      |

### 🔧 Utilities

| Package                        | Version | Description           |
| ------------------------------ | ------- | --------------------- |
| **`axios`**                    | ^1.7.9  | HTTP client           |
| **`class-variance-authority`** | ^0.7.0  | CSS-in-JS utilities   |
| **`clsx`**                     | ^2.1.1  | Class names utility   |
| **`tailwind-merge`**           | ^2.4.0  | Tailwind class merger |

## 🛣 Future Improvements

- Implement checkout process
- Implement user profiles
<!-- - Add authentication system -->
<!-- - Enhance search with filters -->
<!-- - Add wishlist functionality -->

<!-- ## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details. -->
