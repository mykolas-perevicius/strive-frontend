# Strive Frontend

This repository contains the frontend codebase for the StriveFIT application, built with React, TypeScript, and Tailwind CSS. The project utilizes Vite for an optimized development experience and is containerized with Docker for easy setup and deployment.

## Features

- **React**: For building a modern interactive UI.
- **TypeScript**: For strong typing and maintainability.
- **Tailwind CSS**: For utility-first styling and responsive design.
- **Vite**: For fast build times and hot module replacement.
- **Docker**: For consistent development and production environments.
- **Nginx**: Used in production for serving static files efficiently.

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
    cd frontend```
3. Install dependencies:
    ``` bash
    npm install```
4. Run the development server:
    ```bash
    npm run dev```
This will start the Vite development server, typically available at http://localhost:5173. The port can differ, so check the output of the command.

## Building and Running with Docker

To build and run the application using Docker and Docker Compose:

1. Build the Docker containers:
    ```bash
    docker-compose build```
2. Start the services:
      ```bash
      docker-compose up -d```
This will start the frontend service, running on http://localhost:3000, served by Nginx.

## Configuration

- Tailwind CSS: Modify tailwind.config.js to customize your styles.
- Nginx: Adjust nginx.conf in the Docker configuration if you need custom server settings.

## Development Tools

Tailwind CSS IntelliSense: Highly recommend installing the [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) plugin for Visual Studio Code to enhance your development experience. It provides autocomplete suggestions for Tailwind classes and can help you maintain consistency across your design.


## Troubleshooting

Tailwind CSS not generating styles: Ensure the content paths in tailwind.config.js are correctly set to match your project files.
Docker performance issues: Especially on Windows, Docker might run slower. Consider adjusting Docker's resource settings in Docker Desktop.

## Contributing

Contributions are welcome! Please read our Contributing Guide for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

