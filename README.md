# docker-cheat

### LoadBalancer
 ```
 K8s LoadBalancer will give outside world access only a specific pod. 
 In Cloud Provider when we setup LB it also setup a classic LB and route
 traffic to K8S LB. Here we need access to Client and Server. So, we 
 need Ingress ervice which will give us access to both client and server.  
 ```
### Ingress
```
Ingress will give us access to Multiple Pods. .
There two repo regarding that which are,
1. https://github.com/nginxinc/kubernetes-ingress [by nginx]
2. https://github.com/kubernetes/ingress-nginx [by k8s]
```

### API Gateway
```
We can also replace this ingress by API Gateway like 'Ambassador'
https://blog.getambassador.io/kubernetes-ingress-nodeport-load-balancers-and-ingress-controllers-6e29f1c44f2d

```

### We will Create the Ingress Controller
```
In this project, we will create the Nginx ingress controller and ingress config that will route our traffic. 
```

### Nginx Pod vs Nginx Ingress Controller
```
We are using Nginx Pod. Why not route the traffic like we did when using nginx router by 
customizing it.  For example customizing default.conf. We can use that but Nginx Ingress has 
Extra feature like sticky seesion, direcltly routing traffic to pods instead of Cluster IP 
service and it is built for specially handing kubernetes traffic.
```