# docker-cheat

### Multi Docker App
```
Frontend: React

Backend: 
1. Express will store permanent list of indexes that have been received
2. Express will store all the "indexes" and "calculated values" as key-pairs
3. Worker watches redis for new indexes, pulls each new indexes, calcualtes 
new value then puts back it into redis

```
