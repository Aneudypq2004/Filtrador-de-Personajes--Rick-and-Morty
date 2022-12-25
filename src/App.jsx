import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Card from './components/Card';
import Spinner from './components/Spinner';
import useFiltros from './hook/useFiltros';

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
