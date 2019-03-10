# Specify a base image
FROM node:alpine

WORKDIR /usr/app

# Install Some dependencies
COPY ./ ./
RUN npm install

# Default Command
CMD ["npm", "start"]


# docker build -t docker_or_repository_id/app_name_or_build_context_or_folder:version .
# docker run -p 8080:8080 docker_or_repository_id/app_name_or_build_context_or_folder:version
