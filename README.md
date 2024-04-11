# Strive Frontend

This repository contains the frontend codebase for the StriveFIT application. Built with React, TypeScript, Tailwind CSS, and the shadcn/ui component library, it leverages Vite for fast development and Docker for seamless deployment.

## Features

- **React**: For building a modern interactive UI.
- **TypeScript**: For strong typing and maintainability.
- **Tailwind CSS**: For utility-first styling and responsive design.
- **Vite**: For fast build times and hot module replacement.
- **Docker**: For consistent development and production environments.
- **Nginx**: Used in production for serving static files efficiently.
- **shadcn/ui**: Provides well-designed, pre-built components to accelerate development. Read more at [the shadcn/ui documentation](https://ui.shadcn.com/docs).


## Prerequisites

Before you begin, ensure you have installed the following on your local machine:
- [Node.js](https://nodejs.org/en/) (v14 or later)
- [Docker Desktop](https://www.docker.com/products/docker-desktop) for building and running the Dockerized environment.

## Local Development

To set up and run this project locally for development:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd strive-frontend```
2. Navigate to the frontend directory:
    ```bash
    Copy code
    cd frontend```
3. Install dependencies:
    ``` bash
    Copy code
    npm install```
4. Run the development server:
    ```bash
    Copy code
    npm run dev```
This will start the Vite development server. The port can differ, so check the output of the command.

## Building and Running with Docker

To build and run the application using Docker and Docker Compose:

1. Build the Docker containers:
    ```bash
    Copy code
    docker-compose build```
2. Start the services:
      ```bash
      Copy code
      docker-compose up -d```
This will start the frontend service, served by Nginx.

## Configuration

### vite.config.ts

- Purpose: Manages Vite's build and development server settings.
- Key Elements:
  - alias: Streamlines import paths with shortcuts (e.g., @).

### tsconfig.json

- Purpose: Defines TypeScript compiler options.
- Key Elements:
  - paths: Sets up import aliases for improved organization.
  - include: Specifies the files and folders TypeScript should process.

### tailwind.config.js

- Purpose: Customizes Tailwind CSS for your app's design.
- Key Elements:
  - content: Informs Tailwind which files to scan to avoid purging unused styles.
  - theme: Extends Tailwind's defaults with your project's colors, spacing, fonts, etc.
  - plugins: Includes add-ons (e.g., tailwindcssAnimate) for extended functionality.
### components.json

- Purpose: Configures the integration of the shadcn/ui component library.
- Key Elements:
  - tailwind: Coordinates shadcn/ui components with your Tailwind configuration.
  - aliases: Defines shortcuts for importing from commonly used directories.

### index.css

 - Purpose: Contains global CSS styles and Tailwind's base layers.
 - Key Elements:
     - Color scheme handling: Defines light/dark mode styles.
     - Basic styling for global elements (fonts, links).
  
### globals.css

- Purpose: Houses CSS custom properties (variables) for theming and Tailwind integration.
- Key Elements:
  - Theme variables (`--background`, `--foreground`, etc.): Defines your app's color palette.
  - Dark mode styling: Configures styles for the `.dark` class.

## Development Tools

Tailwind CSS IntelliSense: Highly recommend installing the [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) plugin for Visual Studio Code to enhance your development experience. It provides autocomplete suggestions for Tailwind classes and can help you maintain consistency across your design.


## Troubleshooting

Tailwind CSS not generating styles: Ensure the content paths in tailwind.config.js are correctly set to match your project files.
Docker performance issues: Especially on Windows, Docker might run slower. Consider adjusting Docker's resource settings in Docker Desktop.

## Contributing

Contributions are welcome! Please read our Contributing Guide for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

