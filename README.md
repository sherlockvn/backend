# Backend

# RUN WITHOUT DOCKER
1. Install dependencies
    ```npm i ```

2. Copy env file
    ```cp .env.example .env```

3. Run API GATEWAY
    ```npm run start```


# SET UP FOR DOCKER
1. Download Docker Desktop:
2. Create new network to services communicate with each other:
    Run ```sudo docker network create project-management-network```
# RUN DOCKER
Run ```./docker_deploy.sh```


