# docker-cheat

### SECRET BY IMPERATIVE DECLERATION
```
kubectl create secret <type_of_secret>(generic) <secret_name> --from-literal key=value
kubectl create secret generic pgpassword --from-literal PGPASSWORD=....
```

### TYPES OF SECRETS
 ```
 There are two types of secret:
 1. generic
 2. dokcrer-registry
 3. tls
 ```

 ### --from-literal 
 ```
 It means that we are going to add information into this command, as opposed to from . file
 ```

