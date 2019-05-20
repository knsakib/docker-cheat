# docker-cheat

### K8S Local Deployment(if all the images are already created and Pushed)
```
 1. kubectl apply k8s-templates/
 2. Create Secret: kubectl create secret generic pgpassword --from-literal PGPASSWORD=asdf
 3. kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/mandatory.yaml
 4. For Docker for desktop: kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/provider/cloud-generic.yaml
 4. Or for Minikube: minikube addons enable ingress
```

### K8S Local Deployment(if all the images are NOT created and Pushed)
```
 1. Test in Local: docker-compose up --build
 2. For a Specific or new build: docker build -t knsakib/react-client ./client
 3. Push the image: docker push knsakib/react-client
 4. kubectl apply k8s-templates/
 5. Create Secret: kubectl create secret generic pgpassword --from-literal PGPASSWORD=asdf
 6. kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/mandatory.yaml
 7. For Docker for desktop: kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/provider/cloud-generic.yaml
 7. Or for Minikube: minikube addons enable ingress
```