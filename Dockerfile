FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy source code (including public folder for static assets)
COPY . .

# Build the application
RUN npm run build

# Install a lightweight static file server
RUN npm install -g serve

# Expose a default port (Heroku usa a variável de ambiente $PORT)
EXPOSE 3000

# Serve the built app from the dist folder usando a porta $PORT (ou 3000 localmente)
CMD ["sh", "-c", "serve -s dist -l ${PORT:-3000}"]

