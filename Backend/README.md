<!DOCTYPE html>
<html lang="en">
<body>
    <div class="container">
        <h1>Backend del Proyecto de Aplicación Web</h1>
        <p>Este documento describe la configuración, instalación y uso del backend del proyecto de aplicación web desarrollado por <strong>Diego Robertis</strong>.</p>
        <h2>Descripción</h2>
        <p>El backend de esta aplicación web está desarrollado utilizando Node.js y Express. Proporciona una API RESTful para interactuar con una base de datos MongoDB, permitiendo la gestión de items que se visualizan en el frontend. Las principales funcionalidades del backend incluyen:</p>
        <ul>
            <li>Crear, leer, actualizar y eliminar items.</li>
            <li>Autenticación y autorización de usuarios.</li>
            <li>Paginación y búsqueda de items.</li>
        </ul>
        <h2>Tecnologías Utilizadas</h2>
        <ul>
            <li><strong>Node.js</strong>: Entorno de ejecución para JavaScript en el servidor.</li>
            <li><strong>Express</strong>: Framework web para Node.js.</li>
            <li><strong>MongoDB</strong>: Base de datos NoSQL.</li>
            <li><strong>Mongoose</strong>: Biblioteca de modelado de datos de MongoDB para Node.js.</li>
            <li><strong>JSON Web Tokens (JWT)</strong>: Para la autenticación y autorización de usuarios.</li>
            <li><strong>Cors</strong>: Middleware para habilitar CORS (Cross-Origin Resource Sharing).</li>
        </ul>
        <h2>Instalación</h2>
        <ol>
            <li>Clona el repositorio del proyecto y navega al directorio del backend:</li>
            <pre><code>cd Backend/</code></pre>
            <li>Instala las dependencias del proyecto utilizando npm:</li>
            <pre><code>npm install</code></pre>
            <li>Configura las variables de entorno necesarias. Crea un archivo <code>.env</code> en la raíz del directorio del backend y añade las siguientes variables:</li>
            <pre><code>
DB_CONNECTION_STRING=<span style="color: #d63384;">tu-string-de-conexión-a-mongodb</span>
JWT_SECRET=<span style="color: #d63384;">tu-secreto-jwt</span>
PORT=5001
            </code></pre>
            <li>Inicia el servidor backend:</li>
            <pre><code>npm start</code></pre>
        </ol>
        <h2>Uso</h2>
        <p>Una vez iniciado el servidor, puedes interactuar con la API a través de las siguientes rutas:</p>
        <ul>
            <li><code>GET /api/items</code>: Obtener una lista de items con paginación.</li>
            <li><code>GET /api/items/:id</code>: Obtener los detalles de un item específico.</li>
            <li><code>POST /api/items</code>: Crear un nuevo item.</li>
            <li><code>PUT /api/items/:id</code>: Actualizar un item existente.</li>
            <li><code>DELETE /api/items/:id</code>: Eliminar un item.</li>
            <li><code>POST /api/users/signup</code>: Registrar un nuevo usuario.</li>
            <li><code>POST /api/users/login</code>: Iniciar sesión de usuario.</li>
        </ul>
        <h2>Componentes Principales</h2>
        <p>El backend se compone de varios componentes clave que facilitan la organización y reutilización del código. Algunos de los componentes principales incluyen:</p>
        <ul>
            <li><strong>Controllers</strong>: Contienen la lógica de negocio para manejar las solicitudes HTTP.</li>
            <li><strong>Models</strong>: Definen los esquemas de datos y se comunican con la base de datos MongoDB.</li>
            <li><strong>Routes</strong>: Definen las rutas de la API y las asocian con los controladores correspondientes.</li>
            <li><strong>Middleware</strong>: Funciones que se ejecutan durante el ciclo de vida de la solicitud, como la autenticación.</li>
        </ul>
        <h2>Licencia</h2>
        <p>Este proyecto está licenciado bajo la <a href="LICENSE">MIT License</a>.</p>
        <h2>Autor</h2>
        <p>Elaborado por <strong>Diego Robertis</strong>.</p>
        <p><em>Gracias por utilizar esta aplicación. Si tienes alguna pregunta o comentario, no dudes en contactar conmigo.</em></p>
    </div>
</body>
</html>
