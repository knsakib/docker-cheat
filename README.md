# docker-cheat

### kubernetes Imperative Approach 
```
Create 3 containers 
Create another 2 containers 
Delete 1 container
Those X number of containers should use v1.23
```
### kubernetes Declerative Approach 
```
There should be 3 containers
There shoudl be 5 containers
There shoudl be 4 containers
There should X number of containers with v1.23
```
### Updating Pods by Deployment
```
- We can update images in a running pods by 
kubectl apply -f file.yaml command by 'pod' object
but we can not update ports by 'pod' object like this
- So, we need to update these kind of information in pods
by 'deployment' object. 
```
### Imperative Update only during the update of image
```
1. docker build -t knsakib/client:v3 .
2. docker puash knsakib/client:v3
3. kubectl set image deployment/client-deployment client=knsakib/client:v3
[ kubectl set image <object_type>/<object_name> <container_name>=<new_image> ]
```