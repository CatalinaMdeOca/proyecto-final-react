# Libros CM

Este es un proyecto desarrollado para el curso de React JS de Coderhouse. Su finalidad es mostrar un catálogo de productos y permitir la generación de una orden de compra.

## Instalación

Para clonar el proyecto en su dispositivo, se deben ejecutar las siguientes líneas en la terminal:

````sh
git clone https://github.com/CatalinaMdeOca/proyecto-final-react.git

npm install

npm start
````

Dato: la URL que usarás para clonar el repositorio se encuentra en la página principal del repositorio, en el botón que dice "code".

## Breve descripción de los componentes

Al ingresar en la página, te encontrarás con la página de inicio, con la ruta "/". Aquí encontrarás el componente "NavBar", que muestra las categorías como links que permiten filtrar los productos por categoría, y el "ItemListContainer", que muestra una lista de items, donde cada "Item" es una card que muestra una breve información sobre un producto. Además, cada "Item" contiene un botón que dirige al "ItemDetailContainer".

El "ItemDetailContainer" muestra, según el ID, el detalle ("ItemDetail") de un producto. El "ItemDetail" muestra una foto de la portada del libro sleccionado, su título, su autor, su precio, su sinopsis y la cantidad de ejemplares en stock. Además, muestra el "ItemCount" que permite seleccionar la cantidad de ejemplares que se desean añadir al carrito ("Cart"). Una vez agregado el producto, un botón permite navegar hacia el "Cart". También puede accederse al  Cart a través del "CartWidget", el ícono que se muestra en la "NavBar" cuando hay al menos un producto en el carrito.

El carrito muestra un resumen de la compra, detallando por cada producto título, cantidad, precio unitario, subtotal, y un botón para eliminar el producto. Además hay un botón para vaciar el carrito y otro para finalizar la compra, que conduce al componente "Form". El componente "Form" solicita nombre, email y teléfono del comprador, información que se sube a firebase en la colección "orders", junto con la fecha y un resumen de la compra.