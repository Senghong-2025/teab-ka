# Use official Node image
FROM node:20

# Work directory inside the container
WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

# Expose Nuxt dev server port
EXPOSE 3000

# Run in dev mode with HMR
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
