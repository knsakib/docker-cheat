# docker-cheat

### kubernetes Api version
```
apiversion: v1 
means: componentStatus, configMap, Endpoints, 
Event, Namespace, Pod, Service, Deployment, 
ReplicaSet, ReplicationController etc.

apiVersion: apps/v1
means: ControllerRevision, StatefulSet
```
### Pop Properties
```
conrainers name property will used for network
mapping. 
```
### object types
```
Project types service means that we want to do
some networking in a K8s Cluster. 4 types of 
services: 
ClusterIP: 
NodePort: expose to outside world. 
Only Good for Development. 
LoadBalancer: 
Ingress:
```
### Kube Proxy
```
Kube Proxy will defined how to route
the request. 
```
### service ports and label selector
```
We use posrts and label selector to define
which servcice will route the traffic to which
pod. We defined selector: ###:### to define the 
name of the pod, which is metaDate: labels: ###:### 
section. Then we use 'target port' to target 
the ports of the pod. 'port' is how other pods
will communicate to this port. NodePort is 
exposing the service with the NodePosrt

```

### kubectl config use-context
```
If we use minikube then we should run, kubectl 
config use-context minikube If we use latest 
docker for desktop that comes with kubernetes 
then we should run, kubectl config 
use-context docker-for-desktop 
```