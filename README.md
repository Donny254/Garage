# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# Garage


# Garage  Hub – Services & Online Store

Modern single-page React application combining wellness/service information with a product store.  
Built with React, React Router and Context API for lightweight global state.

## Current Features

- Client-side routing with **React Router v6**
- Global user context (`username` + `total` counter for bookings/purchases)
- Persistent navigation bar
- Main sections / pages:
  - Home (`/`)
  - Services (`/services`)
  - Store (`/store`) – product showcase
  - Contact (`/contact`)
  - About Us (`/about`) – routed but **not linked in nav yet**
- Always-visible signup form (possibly for newsletter / early access)
- Basic CSS styling (`App.css`)

## Project Structure (key files)

src/
├── components/
│   ├── SignUpForm/
│   │   └── SignUp.jsx
│   ├── ProductCard/
│   │   └── ProductCard.jsx
│   ├── ProductCardList/
│   │   └── ProductCardList.jsx
│   ├── Home/                 → Home.jsx
│   ├── Service/              → Service.jsx
│   ├── Store/                → Store.jsx
│   ├── AboutUs/              → AboutUs.jsx
│   └── Contact/              → Contact.jsx
├── UserContext.jsx
├── App.jsx
├── App.css
└── main.jsx


 ## Concepts Used
useState for local state

BrowserRouter, Routes, Route, Link for routing

React.createContext for shared/global state

Component-based architecture

CSS styling via App.css

Navigation

## Navigation 
A simple navigation bar is included using Link from react-router-dom:

Home

Service

Store

Contact

## Sign up Form

A SignupForm component is rendered globally, allowing users to register or update user-related data (implementation depends on the component logic).

## Dependencies

React

react-router-dom


## Future Improvements 

Add authentication

Protect routes

Persist state with localStorage

Improve UI with a component library

Add error handling & loading states