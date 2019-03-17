# docker-cheat

### What we did (To Establish a CI/CD with AWS)
```
We used Travis CI. We have written .travis.yml
```

## docker run image_ID/name npm run test -- --coverage
```
This will run the test and exit otherwise it will exit the test process. Please keep in mind that
this image ID here is baed on Dockerfile.dev. In production build we do not have test suit built.
But during running of test suit there is no way to coming out of the test-suit automatically (no
button press). It waits for input from us or machine. That is why we ran the above command.
Travis CI will consider the status code coming from that command to determine whether the
test is successful or not.   
```
