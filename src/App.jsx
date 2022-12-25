import { useState, useEffect } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import axios from 'axios';
import Card from './components/Card';
import useFiltros from './context/useFiltros';
import Spinner from './components/Spinner';

function App() {

  const {categoria, datos} = useFiltros()


  return (
    <>
      <Header />

      <div className='dis'>
        <Sidebar />

        <main className='main' >

          <h1 className='personaje'>Characters</h1>

          <div className='contenido'>

            {datos && datos.length ? datos.map(personajes => (
              
              <Card
                key={personajes.id}
                personajes={personajes}
              />
            )

            ) : <Spinner />

            }


          </div>


        </main>

      </div>



    </>

  )
}

export default App
