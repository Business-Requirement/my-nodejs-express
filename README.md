
# First Setup  
* run app  
  Debug : https://www.jetbrains.com/help/phpstorm/running-and-debugging-node-js.html#1c1299  
  ```shell script
  npm install
  npm run start:dev
  ```
  
# Docker  
 * Build image   
 ```docker build --no-cache --rm -f "./Dockerfile" -t star-wars-be:latest .```  
 * Run docker  
    ```docker run -p 3000:3000 star-wars-be```
 * Stop docker  
    ```shell script
    docker ps -a
    docker stop <container_id>
    docker rm <container_id>
    ```   
 * Remove all  
 ```docker system prune -a```
 
 
# APIs

    
    
