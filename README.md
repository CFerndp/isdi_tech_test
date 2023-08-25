# Tech test for ISDI
* **Author:** Cristian Fernandez
* **e-mail:** [cristian.fernandez.del.pozo@gmail.com](mailto:cristian.fernandez.del.pozo@gmail.com) 

## Description
This repo follows the monorepo structure. It contains the following packages:

*  frontend: React index based on VITE 
    + Technologies in use:
        - Redux Toolkit Query (RTK Query)
        - React Hook Forms 
        - Tailwind CSS 
        - Vitest for testing
*  backend: NodeJS Server based on Mongo + Express, using Typescript.
    + Technologies in use:
      + mongoose  (MongoDB ORM)
      + mockingoose (mock mongo models)
      + supertest (execute http requests)
 
* db: File in order to populate init data into Mongo database 


## Installation
This repo cames with a docker compose file, so you can run the following command in order to start the project:

```bash 
docker-compose up
```

This will expose 2 UIs:
* Frontend: http://localhost:5173
* Mongo Express: http://localhost:8081

Also, will expose the backend API
* Backend: http://localhost:8000
* DB connection is only accessible from the backend container

For development purposes, read the README.md file inside each package.
