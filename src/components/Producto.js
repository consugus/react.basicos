import React from 'react';

function Producto({producto, productos , carrito, agregarProducto}) {

    const comprarProducto = (id) => {
        const producto = productos.filter( producto => producto.id === id )[0];
        agregarProducto([ ...carrito, producto ])
    }

    const eliminarProducto = (id) => {
        const productos = carrito.filter( producto => producto.id !== id)
        //Colocar los productos en el state
        agregarProducto( productos )
    }

    const {id, nombre, precio } = producto
    return (
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>

            {
                productos ?
                <button type="button" onClick={ () => comprarProducto(id) } >Comprar</button>
                :
                <button type="button" onClick={ () => eliminarProducto(id) } >Eliminar</button>
            }

        </div>
    );
}

export default Producto;