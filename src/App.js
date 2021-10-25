import React from 'react';

/* const impura = () => {new Date().toLocaleString()} */

//funcion pura nunca cambia su valor de retorno
const MiComponente = ({miprop}) => {
  return (
    <div>
      nombre: {miprop}
    </div>
  )
}

const App = () => {
  return (
    <MiComponente miprop={"lalala"}/>
  )
}

export default App
