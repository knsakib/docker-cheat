docker build -t knsakib/react-client:latest -t knsakib/react-client:$SHA -f ./client/Dockerfile ./client
docker build -t knsakib/express-api-server:latest -t knsakib/express-api-server:$SHA -f ./server/Dockerfile ./server
docker build -t knsakib/fib-worker:latest -t knsakib/fib-worker:$SHA -f ./worker/Dockerfile ./worker
# docker build -t knsakib/nginx-router:latest knsakib/nginx-router:$SHA -f ./nginx-router/Dockerfile ./nginx-router
# Remeber that we are not doing it because in K8S we are implementing the routing using ingress-service 

docker push knsakib/react-client:latest
docker push knsakib/express-api-server:latest
docker push knsakib/fib-worker:latest
# docker push knsakib/nginx-router:latest

docker push knsakib/react-client:$SHA
docker push knsakib/express-api-server:$SHA
docker push knsakib/fib-worker:$SHA
# docker push knsakib/nginx-router:$SHA

kubectl apply -f k8s-template/

kubectl set image deployments/server-deployment server=knsakib/express-api-server:$SHA
kubectl set image deployments/client-deployment client=knsakib/react-client:$SHA
kubectl set image deployments/worker-deployment worker=knsakib/fib-worker:$SHA
