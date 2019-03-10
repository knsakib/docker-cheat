# Specify a base image
FROM alpine

# Install Some dependencies
RUN npm install

# Default Command 
CMD ["npm", "start"]
