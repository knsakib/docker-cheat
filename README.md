# docker-cheat

### PVC: Persistent Volume Claim
```
- We never use multiple replicas without extra configuration 
to make them aware of each other. 
```

### Volume
```
- Volume is a K8s Object
- There are two types:
1. Volumes(K8s Object): Acssociated to a Pod If the container 
dies inside the podthe new container has access to all 
the data. If the pod dies, volume dies. 
2. Persistent Volumes: Volume outside the pods. If the Pod
crashes, it persists, when new pod is created.  
3. PVC: The volume sample/sets that are avialble inside the cluster 
for pods when it is created.
4. Statistically Porvisioned PVC: PVC that are created /defined 
ahead of the time of clainms.  
5. Dynamically Porvisioned PVC: Persistent Volume that is created 
on the fly of during the volume claim.  
```

 ### accessModes: 
 ```
 - ReadWriteOnce: can be used single node at a time
 - ReadOnlyMany: multiple nodes can read from this persistent volumes
 - ReadWriteMany: Multiple nodes can read and write on that volume at the same time. 
 ```

 ### subPath: 
 ```
 - volume path will saved under subPath = postgres specific for Postgres
 ```