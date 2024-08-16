<!DOCTYPE html>
<html lang="en">

<body>
    <div class="container">
        <h1>Proyecto de Aplicación Web</h1>
        <p>Este proyecto de aplicación web ha sido desarrollado por <strong>Diego Robertis</strong>. La aplicación está organizada en dos secciones principales: el frontend y el backend. A continuación, se detallan las funcionalidades, tecnologías utilizadas, y pasos para la configuración e instalación del proyecto.</p>
        
  <h2>Descripción del Proyecto</h2>
        <p>La aplicación web permite a los usuarios gestionar una lista de items a través de una interfaz intuitiva. Entre las principales funcionalidades se encuentran:</p>
        <ul>
            <li><strong>Listado de Items</strong>: Presenta una lista paginada de todos los items almacenados en la base de datos.</li>
            <li><strong>Búsqueda de Items</strong>: Facilita la búsqueda de items específicos por su nombre o descripción.</li>
            <li><strong>Añadir Item</strong>: Permite a los usuarios agregar nuevos items a la lista.</li>
            <li><strong>Editar Item</strong>: Función que permite la modificación de los detalles de un item existente.</li>
            <li><strong>Eliminar Item</strong>: Opción para eliminar items no deseados de la lista.</li>
        </ul>
        <p>El frontend está desarrollado utilizando React para crear una experiencia de usuario dinámica y reactiva. El backend está construido con Node.js y Express, y utiliza MongoDB para el almacenamiento de datos.</p>
        
  <h2>Funcionalidades</h2>
        <ul>
            <li><strong>Listado de Items</strong>: La lista de items se presenta en páginas, mejorando la navegación y carga de datos.</li>
            <li><strong>Detalles del Item</strong>: Cada item muestra su nombre y descripción, proporcionando una vista rápida de la información.</li>
            <li><strong>Búsqueda en Tiempo Real</strong>: Los usuarios pueden buscar items por nombre o descripción, con resultados que se actualizan en tiempo real.</li>
            <li><strong>Añadir Item</strong>: Un formulario permite a los usuarios agregar nuevos items a la lista.</li>
            <li><strong>Editar Item</strong>: Los usuarios pueden actualizar el nombre y la descripción de los items existentes.</li>
            <li><strong>Eliminar Item</strong>: Los items pueden ser eliminados de la lista de forma permanente.</li>
        </ul>
        
  <h2>Estructura del Proyecto</h2>
        <pre><code>
      .
      ├── backend
      │   ├── README.md
      │   ├── package.json
      │   ├── src
      │   │   ├── controllers
      │   │   ├── models
      │   │   ├── routes
      │   │   └── ...
      │   └── ...
      └── frontend
          ├── README.md
          ├── package.json
          ├── src
          │   ├── components
          │   ├── pages
          │   ├── App.tsx
          │   └── ...
          └── ...
              </code></pre>
        
  <h2>Tecnologías Utilizadas</h2>
        <h3>Frontend</h3>
        <ul>
            <li><strong>React</strong>: Biblioteca para construir interfaces de usuario.</li>
            <li><strong>Axios</strong>: Cliente HTTP para realizar peticiones al backend.</li>
            <li><strong>Tailwind CSS</strong>: Framework CSS para estilizar la aplicación.</li>
        </ul>
        <h3>Backend</h3>
        <ul>
            <li><strong>Node.js</strong>: Entorno de ejecución para JavaScript en el servidor.</li>
            <li><strong>Express</strong>: Framework para construir aplicaciones web y APIs.</li>
            <li><strong>MongoDB</strong>: Base de datos NoSQL utilizada para almacenar los datos de los items.</li>
            <li><strong>Mongoose</strong>: ODM para MongoDB, facilita la interacción con la base de datos.</li>
        </ul>
        
  <h2>Configuración e Instalación</h2>
        <h3>Requisitos Previos</h3>
        <p>Asegúrate de tener instalados los siguientes programas en tu sistema:</p>
        <ul>
            <li>Node.js</li>
            <li>npm (Node Package Manager)</li>
            <li>MongoDB</li>
        </ul>
        
  <h3>Clonar el Repositorio</h3>
        <p>Clona este repositorio en tu máquina local utilizando el siguiente comando:</p>
        <pre><code>git clone https://github.com/Dars2000/Project-react.git</code></pre>
        
   <h3>Configuración del Backend</h3>
        <ol>
            <li>Navega al directorio del backend:</li>
            <pre><code>cd backend</code></pre>
            <li>Instala las dependencias del backend:</li>
            <pre><code>npm install</code></pre>
            <li>Configura las variables de entorno. Crea un archivo <code>.env</code> en el directorio del backend y añade las siguientes variables:</li>
            <pre><code>PORT=5001
            MONGODB_URI=&lt;tu_uri_de_mongodb&gt;</code></pre>
            <li>Inicia el servidor backend:</li>
            <pre><code>npm start</code></pre>
        </ol>
        
  <h3>Configuración del Frontend</h3>
        <ol>
            <li>Navega al directorio del frontend:</li>
            <pre><code>cd frontend</code></pre>
            <li>Instala las dependencias del frontend:</li>
            <pre><code>npm install</code></pre>
            <li>Inicia la aplicación frontend:</li>
            <pre><code>npm start</code></pre>
        </ol>
  <h2>Uso de la Aplicación</h2>
        <ol>
            <li>Accede a la aplicación en tu navegador en la dirección <code>http://localhost:3000</code>.</li>
            <li>Utiliza la barra de búsqueda para encontrar items por nombre o descripción.</li>
            <li>Añade nuevos items utilizando el botón "Add Item".</li>
            <li>Edita y elimina items directamente desde la lista, con botones de acción rápida.</li>
            <li>Navega entre las páginas de items utilizando los botones de paginación.</li>
        </ol>
  <h2>Licencia</h2>
        <p>Este proyecto está licenciado bajo la <a href="LICENSE">MIT License</a>.</p>
        
  <h2>Autor</h2>
        <p>Elaborado por <strong>Diego Robertis</strong>.</p>
        
  <p><em>¡Gracias por utilizar esta aplicación! Si tienes alguna pregunta o comentario, no dudes en contactar conmigo.</em></p>
    </div>
</body>
</html>
