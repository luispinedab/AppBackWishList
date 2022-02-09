# appWishList-Server
Aplicación Servidor de Listas de Deseo utilizando NodeJS y express
## Configuración Base de Datos
En el archivo ormconfig.json ubicado en la raiz se encuentra la configuración de la base de datos:
## 
{
    "type": "mysql",
    "host": "db4free.net",
    "port": 3306,
    "username": "luipinba",
    "password": "alejo1234",
    "database": "dbpruebacarvajal",
    "entities" : ["dist/entity/**/*.js"],
    "synchronize":true,
    "options": {
        "encrypt": true,
        "enableArithAbort": true
        }
 }.
 
Se esta usando una base de datos relacional `mssql` online , si desea PostgreSQL deberá ejecutar el comando `npm install pg --save`, y cambiar en la configuración `mssql` por `pg`. 
## INICIAR
Se debe ubicar en la carpeta raiz y ejecutar `npm install`, para instalar todas las dependencias.
Se debe ubicar en la carpeta raiz y ejecutar `npm run start`, este comando guardara los cambios realizados e iniciara el servidor.
## SCRIPTS
En este caso debido a que la base de datos es online no es necesario correr scripts antes de iniciar la aplicación. 

