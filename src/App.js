import React, {Fragment, useState} from 'react';
import Header from './components/Header';
import Footer from  './components/Footer'
import Producto from  './components/Producto'
import Carrito from  './components/Carrito'

function App() {

  // ?Crear/cargar listado de productos
  // el primer valor es el estado de lo que quiere guardarse el estado, y el segundo
  // es una función que actúa sobre el estado
  // como parámetro del useState se cargan los valores iniciales
  const [ productos, guardarProductos ] = useState([
    {id: 1, nombre: 'camisa ReactJS', precio: 50},
    {id: 2, nombre: 'camisa ReactNode', precio: 40},
    {id: 3, nombre: 'camisa ReactVue', precio: 35},
    {id: 4, nombre: 'camisa ReactMongo', precio: 45},
    {id: 5, nombre: 'camisa ReactServerless', precio: 50}
  ]);
  const[ carrito, agregarProducto ] = useState([]);

  const fecha = new Date().getFullYear()


  return (
    <Fragment>
      <header className="App-header">
        <Header
          titulo='Tienda Virtual'
        />
        <h1>Lista de Productos</h1>
        { productos.map( producto => {
          return <Producto
          key={producto.id}
          producto={producto}
          productos={productos}
          carrito= {carrito}
          agregarProducto={agregarProducto}
          />
        })}

        <Carrito 
          carrito={carrito}
          agregarProducto= {agregarProducto}
        />


        <Footer
          fecha={fecha}
        />
      </header>
    </Fragment>
  );
}

export default App;