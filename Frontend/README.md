<!DOCTYPE html>
<html lang="en">
<body>
    <div class="container">
        <h1>Frontend del Proyecto de Aplicación Web</h1>
        <p>Este documento describe la configuración, instalación y uso del frontend del proyecto de aplicación web desarrollado por <strong>Diego Robertis</strong>.</p>
        
  <h2>Descripción</h2>
        <p>El frontend de esta aplicación web está desarrollado utilizando React y proporciona una interfaz de usuario interactiva y amigable. Las principales funcionalidades del frontend incluyen:</p>
        <ul>
            <li>Visualización de una lista paginada de items.</li>
            <li>Búsqueda en tiempo real de items por nombre o descripción.</li>
            <li>Formulario para agregar nuevos items a la lista.</li>
            <li>Opciones para editar y eliminar items existentes.</li>
            <li>Navegación intuitiva a través de diferentes páginas de la aplicación.</li>
        </ul>      
  <h2>Tecnologías Utilizadas</h2>
        <ul>
            <li><strong>React</strong>: Biblioteca para construir interfaces de usuario.</li>
            <li><strong>Axios</strong>: Cliente HTTP para realizar peticiones al backend.</li>
            <li><strong>Tailwind CSS</strong>: Framework CSS para estilizar la aplicación.</li>
            <li><strong>TypeScript</strong>: Lenguaje de programación que añade tipos estáticos a JavaScript.</li>
        </ul>
  <h2>Instalación</h2>
        <ol>
            <li>Clona el repositorio del proyecto y navega al directorio del frontend:</li>
            <pre><code>cd /Frontend</code></pre>
            <li>Instala las dependencias del proyecto utilizando npm:</li>
            <pre><code>npm install</code></pre>
            <li>Inicia la aplicación frontend:</li>
            <pre><code>npm start</code></pre>
        </ol>
  <h2>Uso</h2>
        <p>Una vez iniciada la aplicación, puedes acceder a ella desde tu navegador en la dirección <code>http://localhost:3000</code>. Desde la interfaz de usuario, puedes:</p>
        <ul>
            <li>Ver una lista paginada de items.</li>
            <li>Buscar items por nombre o descripción utilizando la barra de búsqueda.</li>
            <li>Añadir nuevos items a la lista.</li>
            <li>Editar los detalles de items existentes.</li>
            <li>Eliminar items de la lista.</li>
            <li>Navegar entre las diferentes páginas de la aplicación.</li>
        </ul>
        <h2>Componentes Principales</h2>
        <p>El frontend se compone de varios componentes React que facilitan la organización y reutilización del código. Algunos de los componentes principales incluyen:</p>
        <ul>
            <li><strong>ItemList</strong>: Muestra la lista de items con opciones para editar y eliminar.</li>
            <li><strong>ItemForm</strong>: Formulario para agregar o editar items.</li>
            <li><strong>HomePage</strong>: Página principal que contiene el listado de items y la barra de búsqueda.</li>
            <li><strong>AddItemPage</strong>: Página para agregar nuevos items.</li>
        </ul>
        <h2>Licencia</h2>
        <p>Este proyecto está licenciado bajo la <a href="LICENSE">MIT License</a>.</p>
        <h2>Autor</h2>
        <p>Elaborado por <strong>Diego Robertis</strong>.</p>
        <p><em>Gracias por utilizar esta aplicación. Si tienes alguna pregunta o comentario, no dudes en contactar conmigo.</em></p>
    </div>
</body>
</html>
