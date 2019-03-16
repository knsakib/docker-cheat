# docker-cheat


# docker build -f Dockerfile.dev .
# -f is to specify the filename other than default Dockerfile

# We deleted the node_modules folder as we are running Docker in dev environment and there is no point of
# keeping both node_modules folder. It is showing 150 MB because it copies node_modules in the container

# docker run -p 3000:3000 image_id/name
