# pull official base image
FROM node

# set working directory
WORKDIR /app

# Copies package.json and package-lock.json to Docker environment
COPY package*.json ./

# Installs all node packages
RUN npm install

# Copies everything over to Docker environment
COPY . .

# Build for production.
RUN npm run build

# Install `serve` to run the application.
RUN npm install -g serve

# Uses port which is used by the actual application
EXPOSE 5173

# Run application
CMD serve -l 5173 -s dist
