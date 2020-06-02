# Phone catalogue application

## Information
1. The API is build with NodeJS and it doesn't use a database, it only retrieves the .json.
2. The Front-end is built with NodeJS and Redux. It uses additional libraries as Axios, React Router, Saas and Bootstrap.
3. The "discount" and "reviews" components are random numbers generated. Their use is only to make the web prettier.

## Run with docker
1 - Clone the project on your computer. 
```sh
git clone https://github.com/susmaycan/phone-catalogue-full.git
```
2 - On the root folder on the project, open a terminal and type: 
```sh 
cd phone-catalogue-full
docker-compose up --build
```

**Note: You need docker, docker-compose and npm to be installed**

3 - Open in the browser:
[http://localhost:3000/](http://localhost:3000/)

## URLS:
Both projects have been developed in different repositories, so here you can find both the back-end and front-end urls where they are deployed:
1. Front-end deployed in [Netlify](https://phone-catalogue.netlify.com/)
2. Back-end deployed in [Heroku](https://phone-catalogue-api.herokuapp.com/)
