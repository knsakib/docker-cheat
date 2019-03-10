# Specify a base image
FROM node:alpine

# Install Some dependencies
COPY ./ ./
RUN npm install

# Default Command
CMD ["npm", "start"]
