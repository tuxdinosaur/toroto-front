import React from 'react'

import Navbar from './components/Navbar'
import HomeDescription from './components/HomeDescription'
import LogForm from './components/LogForm'
// import logo from './logo.svg';

// import './assets/styles/App.css';

// IMPORTA VISTA HOME
// import Home from './views/Home'

function App () {
  return (
    <div className='App'>

      <Navbar />

      <div class='container-fluid'>
        <main className='container home'>
          <section className='row home__section'>

            <div className='col-12 col-md-6 mb-3'>
              <HomeDescription />
            </div>

            <div className='col-12 col-md-6 log'>
              <LogForm />
            </div>

          </section>
        </main>

      </div>

    </div>
  )
}

export default App
