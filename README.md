# docker-cheat

### travis
```
command = docker run -it -v $(pwd):/app ruby:2.3 sh
pwd = present working directory mapping to app directory inside the container 
command inside the container = 
1. gem install travis --no-document
2. ls; cd app;
3. travis login
4. travis encrypt-file docker-cheat-service-account.json -r knsakib/docker-cheat
-> knsakib/docker-cheat is the git repo name
5. Put the filename in the gitignore
6. exit
```

### Unique image Tag
```
1. git rev-parse HEAD
1. OR git log
2. We will tag the image with git SHA
3. When there will any issue in the deployed version, we can just -> 'git checkout that-SHA' and then we can debug. 
4. We are also tagging by 'latest' because if we want to clone (not pull) the code or rebuild the cluster completely
from scratch we can always pull the latest image.   
```

### Secret creation in GCP K8S engine by imperative command 
```
1. Open the Cloud Shell
2. then run -> glcoud set project 
3. gcloud config set project knsakib4521
4. gcloud config set compute/zone us-central1-a
5. gcloud container clusters get-credentials docker-cheat
6. Secret Creation: kubectl create secret generic pgpassword --from-literal PGPASSWORD=blahblah!!123
```

### RBAC
```
User Accounts: identifies as a Person
Service Accounts: identifies a POD/program/service running inside the cluster. 
ClusterRoleBinding: it is the authrorization. It authorizes an account to change anything across the entire Clsuter.
RoleBinding: it is the authrorization. It authorizes an account to change anything only inside a NameSpace. 
NameSpaces: kubectl get namespaces -> will show all the namespaces. So, the practice is create RoleBinding that will allow a servic eaccount to make some chanes 
inside a specific namespace. So, we will 
1. create a service account 
2. Create a ClusterRoleBinding and ties that with the service account; it can change anything clusterwise
2. Or create a RoleBinding and ties that with the service account anything in a perticular namespace. 
3. Assign the service account to the tiller pod.
```

### Install helm
```
1. kubectl create serviceaccount --namespace kube-system tiller
2. kubectl create clusterrolebinding tiller-cluster-rule --clusterrole=cluster-admin --serviceaccount=kube-system:tiller
cluster-admin is a preset cluster role. And --serviceaccount=kube-system:tiller means that "tiller" service account in "kube-system" namespace 
3. curl -LO https://git.io/get_helm.sh  
4. chmod 700 get_helm.sh
5. ./get_helm.sh
6. helm init --service-account tiller --upgrade
```

### Kubenetes ingress installation using  helm
```
Helm is a program that we can use install outside software in K8S. Instead of kubectl apply we can use helm that will 
do the same automatic. 
Helm client: a CLI tooll used to send the command.
Tiller: It is a server that will run inside K8S clsuter. 
Install helm from script:
1. RBAC prohibits any pod to change any configuration inside K8S or change any pther pods. Helm will run as a pod. SO we may need change RBAC for helm. That is why
we did the steps in the above section.
2. helm install stable/nginx-ingress --name my-nginx --set rbac.create=true 
```

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