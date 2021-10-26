import React, { useState, useEffect} from 'react';

//Reglas de los Hooks:
//no se llaman en loops, ni condiciones, ni while ni nada
//siempre son en el nivel mas alto del componente
//solo se llaman en 2 partes:
//componentes de react
//custom hooks
//cuando creemos un custom hooks siempre debe de comensar cn use...


const useContador = (initial) => {
  const [contador, setContador] = useState(initial)
  const incrementar = () => {
    setContador( contador + 1 )
  }

  return [contador, incrementar]
}

const App = () => {
  const [contador, incrementar] = useContador(0);

  useEffect(() => {
    document.title = contador
  }, [contador])

  //useEffect se ejecuta siempre que el DOM cambie a no ser que tenga el arreglo vacio []
  //cuando esta el arreglo vacio useEffect solo se ejecuta una vez que es cuando carga el componente
  //si ponemos un argumento dentro del arreglo [contador] useEffect se ejecutara cada vez que este argumento cambia

  return (
    <div>
      Contador: {contador}
      <button onClick={incrementar}>Incrementar</button>
    </div>
  )
}


export default App
