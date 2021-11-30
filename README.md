## SP ecommerce BackEnd
UCAMP Proyecto 5
BackEnd para una página de comercio electrónico

## Intro
Generar un servidor que permita la comunicación entre la página de comercio electrónico **SP ecommerce**

## BackEnd

- Definición de Modelos

  > Define los atributos que un usuario tendrá dentro **SP ecommerce** con la finalidad de poder identificarlo y autentificarlo, además permitirá obtener los datos mínimos necesarios para poder realizar el envio de productos y conocer el nivel y tipo de usuario.
  > 
  * Modelo de usuarios
    - id
    - firstname
    - lastname
    - username
    - email
    - password
    - address
    - city
    - state
    - zipcode
    - phonenumber
    - profile
    - usertype
    
  
  > Definir las características esenciales de un producto como identificador único, descripción y algunos otros atributos que permitan dar relevancia o posicionamiento al mismo.
  > 
  * Modelo de Productos
    - id
    - sku
    - product_name
    - description
    - image
    - price
    - quantity
    - category
    - review
    - likes
    
  
  > Define los productos que cada usuario a integrado a su ShoppingCart, el estatus de la compra y el identificador del dueño del ShoppingCart a través del email
  > 
  * Modelo de ShoppingCarts
    - idShoppingCart
    - statusCart
    - storage
      - id
      - sku
      - product_name
      - price
      - product_quantity
      - total_price

- **Conexión a la base de datos**

      MongooDB: base de datos no relacional o nosql en la cual se pueden generar colecciones sin un esquema predefinido,
      aunque la mejor forma de normalizar la información es a través de un esquema y facilita la administración de la 
      información.
  
      Mongoose: librería para Node.js que permite hacer consultas a MongooDB, con uso de validaciones, queries, conversión
      de tipos, etc.
      
      Axios: libreria que permite consumir servicios web y APIs REST, se puede configurar y realizar solicitudes a un
      servidor y obtener respuestas faciles de procesar.
  
      Cors: permite usar cabeceras HTTP adicionales para permitir que un user-agent obtenga el permiso para acceder
      recursos seleccionados de un servidor.
  
      DotEnv: se utiliza para configurar variables de entorno.
  
      Express: es un framework que permite estructurar una aplicación de una manera ágil, nos proporciona funcionalidades
      como el enrutamiento, opciones para gestionar sesiones y cookies, etc.
  
      bcryptjs: es una función de hashing de passwords basado en el cifrado de Blowfish.
      
      jsonwebtoken ( JWT ): es un estándar abierto (RFC-7519) basado en JSON para crear un token que sirva para enviar
      datos entre aplicaciones o servicios y garantizar que sean válidos y seguros. El caso más común de uso de los JWT
      es para manejar la autenticación en aplicaciones móviles o web.


    - [X] Uso de base de datos no relacional -> Mongo BD
    - [X] Utilizar puerto 5000 para iniciar la conexión a la BD
    - [X] Instalación de librerias

  - Para instalar las librerias puedes utilizar alguna de esta opciones
    - npm install [libreria]
    - npm i [libreria]
    - npm i [librería1 librería2 ... libreríaN]
    
  - Ejemplo:
      #### **npm i mongoose axios cors dotenv express bcryptjs jsonwebtoken**
      
## Opciones para la ruta de usuarios
- [X] Crear Usuarios
  - Método POST
  - Ruta /users 
- [X] Autenticar usuarios
  - Método POST
  - Ruta /auth/login
- [X] Obtener información del usuario
  - Método GET
  - Ruta /getInfo/:email

  
## Opciones para la ruta de productos
- [X] Crear producto
  - Método POST
  - Ruta /
- [X] Actualizar producto
  - Método PUT
  - Ruta /:id
- [X] Borrar producto
  - Método DELETE
  - Ruta /:id
- [X] Obtener todos los productos
  - Método GET
  - Ruta /
- [X] Obtener producto por sku
  - Método GET
  - Ruta /sku/:id
- [X] Obtener producto por categoría
  - Método GET
  - Ruta /search/:category

## Opciones para la ruta del ShoppingCart
- [X] Crear ShoppingCart
  - Método POST
  - Ruta /carts
- [X] Obtener el ShoppingCart por email
  - Método GET
  - Ruta /getCart/:email
- [X] Borrar ShoppingCart/Producto
  - Método DELETE
  - Ruta /deleteCart/:id



## ¿Cómo ejecutar servidor de BackEnd?

En el archivo package.json dentro de la sección **"scripts"** se pueden agregar opciones de ejecución:

`"scripts": {
     "start": "node index.js"
  }`
  
  Teclear el siguiente comando en una terminal
  
    npm run start


  <img src="/images/runserver.png" alt="Ejecución Server BackEnd" style="height: 200px; width:700px;"/>
 
 
 ## Obtener proyecto
 
 - [X] Clonar el respositorio
  - En una terminal ejecutar lo siguiente:

        git clone https://github.com/jantoniosalinas/SPcommerce.git
        
 - [X] Instalar los modulos
  - Ejecutar la siguiente instrucción

        npm install

## Para realizar las pruebas de funcionamiento
Para testear el server de BackEnd **products.http**


#### UCAMP - UTEL
`UCAMP @2021`
`José Antonio Salinas Ochoa`
`https://www.instagram.com/jasosalinas/`
 
