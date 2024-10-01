FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm i

# Copy the rest of the frontend code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Use an environment variable to determine the command
CMD ["sh", "-c", "if [ \"$NODE_ENV\" = \"production\" ]; then npm run build && npm start; else npm run dev; fi"]