import React, {Fragment} from 'react';
import Header from './components/Header';
import Footer from  './components/Footer'

function App() {

  const fecha = new Date().getFullYear()


  return (
    <Fragment>
      <header className="App-header">
        <Header 
          titulo='Tienda Virtual'
        />


        <Footer 
          fecha={fecha}
        />
      </header>
    </Fragment>
  );
}

export default App;