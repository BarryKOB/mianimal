import React from 'react'
import Ficha from "./components/Ficha"


function App() {
      const animals = [{
        id: 0,
        animal: 'Gato',
        atribute: 'Ágil y curioso',
        imageUrl: 'src/assets/cat.jpg',
        width: "25rem",
        height: "25rem",
        description: 'Los gatos son animales independientes y muy curiosos.'
    
      },

      {
        id: 1,
        animal: 'Perro',
        atribute: 'Bello',
        imageUrl: 'src/assets/dog.jpg',
        width: "25rem",
        height: "25rem",
        description: 'Perro callejero'
    
      },

      {
        id: 2,
        animal: 'loro',
        atribute: 'Hablador',
        imageUrl: 'src/assets/loro.jpg',
        width: "25rem",
        height: "25rem",
        description: 'Loro de la jungla'
      },

      {
        id: 3,
        animal: 'tortuga',
        atribute: 'perezosa',
        imageUrl: 'src/assets/tortuga.jpg',
        width: "25rem",
        height: "25rem",
        description: 'Tortuga'
      }]

  return (
    <>
      <Ficha animals={animals}/>
     </>
  );
}

export default App
