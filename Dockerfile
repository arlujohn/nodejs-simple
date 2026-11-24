# Use Node.js Alpine image
FROM node:26.13.0-alpine3.24

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application source code
COPY . .

# Expose application port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]