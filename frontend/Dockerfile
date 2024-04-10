# Base image with Node.js
FROM node:alpine  

# Working directory
WORKDIR /app

# Copy package.json first for efficient caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your frontend project
COPY . . 

# Build your frontend
RUN npm run build

# Expose a port 
EXPOSE 3000 

# Use Nginx to serve static content
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
