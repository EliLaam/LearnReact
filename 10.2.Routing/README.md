### This project will explain the following issues:

- What is React Router.
- How to set up a new application.
- Structure React Router
- The core Component.
- Dynamic Routes & Nested Routes & Layout
- Loading Data: Client vs Server
- Programmatic Navigation.
- Pending UI for Navigation
- Summary

## What is React Router.

- React Router is the most popular library nowadays for handling navigation in React apps. It helps keep the user interface (UI) in sync with the browser's URL without having to reload the page.

## How to set up a application.

_Method 1: React Plain_

- Create a new vite app in terminal
- npm install react-router-dom

_Method 2: React Router_

- Create a new project
- npx create-react-router@latest .

## Structure React Router

- You can delete folder welcome
- The main app is located in folder routes -> home.tsx
- The route paths are in file routes.ts

## The core Component.

- BrowserRouter, Routes, Route, Link, NavLink, Nested Routes, Data Loading, Layouts...

## Dynamic Routes & Nested Routes & Layout

- **Dynamic Routes:** Create dynamic routes with params (e.g., /users/:userId).
- **Programmatic Navigation:** Use the useNavigate hook to navigate pages by code.
- **Nested Routes:** Allows displaying child components inside a parent component based on the URL path (Sidebar, Navbar, etc.)
- The lesson will be clearly explained in file _post.tsx part 1 and routes.ts_

## Loading Data: Client vs Server

- Used to fetch API from the server or the client.
- The lesson will be clearly explained in file _post.tsx part 2 & 3_

## Programmatic Navigation

- Link to another component
- Use Link and NavLink Component in component App (root.tsx) to create nav bar

## Pending UI for Navigation

- Create Navigating and Deleting State in post.tsx

## Summary

- The files that contain the lessons include:
  _root.tsx_
  _folder routes_
  _routes.ts_
  _react-router.config.ts_
