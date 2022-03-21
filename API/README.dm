## **DB Docker**
*Los datos obtenidos de los sensores seran almacenados en una base de datos mongo , esta se ubicara dentro de un conteiner en docker
* docker run -d -p 27017:27017 --name dbmongo -v "/c/Users/edson/Desktop/Proyectos/Arqui2/API/API/Volumenes:/data/db" -e MONGO_INITDB_ROOT_USERNAME=mongoadmin -e MONGO_INITDB_ROOT_PASSWORD=Arqui2022_2022 mongo