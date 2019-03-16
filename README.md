# docker-cheat

## docker build -f Dockerfile.dev .

```
-f is to specify the filename other than default Dockerfile
```

### What we did (avoiding duplicate copies)
```
We deleted the node_modules folder as we are running Docker in dev environment and there is no point of
keeping both node_modules folder. It is showing 150 MB because it copies node_modules in the container
```


## docker run -p 3000:3000 image_id/name
```
Port Mapping
```


### What we did (volume mapping)
```
It is not updating when we update anything in the file, like it does in case of regular react. So, we map
the volume of docker container to volume of our local machine. That we made a reference of /src and /public
folder of our local machine in the docker container. So, now if we change anything it works.  
```


## docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app image_id/name
```
By $(pwd):/app image_id/name we mapped present working directory to container app directory. However we deleted
our node_modules folder. So, the app can not really run inside the container because the is no reference of
node_modules. To fix this, we use additional -v with one argument, which is the folder that we do not want to map
outside of the container.    
```


## docker-compose up
```
We created docker-compose.yml. We defined the build context and override the docker file. Now do we need COPY . .?
Because even we are telling to copy everything, we are referencing the volume from our local machine. That is true.
We do not need that line and delete that. But In production we need that line. As we will create Dockerfile with
the inspiration of Dockerfile.dev, we are keeping that line.     
```
