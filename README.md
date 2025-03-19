# Solvative Demo - React Application

This project is a React-based application built with Vite. It includes components for searching and displaying a list of places with country flags and names. The application is designed to be fast, responsive, and user-friendly.

## Features

- **Search Functionality**: A search bar with a keyboard shortcut (`Ctrl + /`) for quick access and the ability to trigger searches by pressing `Enter`.
- **Dynamic Table**: Displays a list of places with their names, countries, and flags. Supports loading and empty states.
- **Keyboard Shortcuts**: Enhances user experience with intuitive shortcuts.
- **Responsive Design**: Uses accessible and responsive table layouts.

## Technologies Used

- **React**: For building the user interface.
- **Vite**: For fast development and build tooling.
- **CSS**: For styling components.
- **Flags API**: Dynamically fetches country flags based on country codes.

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/solvative-demo.git

2. cd solvative-demo

3. npm install

4. npm run dev

### Building for Production
### To create a production build:
npm run build



### Project Structure
src/
├── components/
│   ├── SearchBar.jsx       # Search bar component
│   ├── TableListing.jsx    # Table listing component
├── App.jsx                 # Main application component
├── main.jsx                # Entry point
├── styles/                 # CSS styles
