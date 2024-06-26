# Blog Application

## Description
A blog application built using React.js, Material-UI (MUI) for styling, Redux for state management, and a rich text editor for creating and editing blog posts. The application includes a theme switcher to toggle between light and dark modes.

## Features
- Create, edit, and delete blog posts.
- Rich text editor for blog post content.
- Theme switcher to toggle between light and dark modes.
- Centralized state management using Redux.
- Responsive UI that works seamlessly across different screen sizes.

## Setup Instructions

### Prerequisites
- Node.js and npm installed on your machine. You can download and install them from [Node.js official website](https://nodejs.org/).

### Installation
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/<your-github-username>/<repository-name>.git
   ```

2. Navigate to the project directory:
   ```bash
   cd <repository-name>
   ```

3. Install the project dependencies:
   ```bash
   npm install
   ```

### Running the Application
1. Start the development server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000` to view the application.

### Building the Application
To create a production-ready build of the application:
```bash
npm run build
```

### Deploying to GitHub Pages
1. Install the `gh-pages` package if it's not already installed:
   ```bash
   npm install gh-pages --save-dev
   ```

2. Add the following scripts to your `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy the application to GitHub Pages:
   ```bash
   npm run deploy
   ```

### Deployment URL
Access the deployed application at:https://samikshakadam19.github.io/BlogApp/
