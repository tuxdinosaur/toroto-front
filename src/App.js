import React from 'react'

import Navbar from './components/Navbar'
import HomeDescription from './components/HomeDescription'
import LogForm from './components/LogForm'

import { Line } from 'react-chartjs-2'
// import logo from './logo.svg';

// import './assets/styles/App.css';

// IMPORTA VISTA HOME
// import Home from './views/Home'

function App () {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  }

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

      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <Line
              data={data}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
