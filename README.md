# docker-cheat

### CI/CD of Docker with Travis CI in AWS Beanstalk
```
We used Travis CI. We have written .travis.yml
```

## EXPOSE 80
```
We need this in Dockerfile as AWS needs to know which port needs to map.
This is not automatically possible in localhost. In Localhost we need run
somehow(command line pr docker-compose) port map command.  
```
