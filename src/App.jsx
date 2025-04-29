import { useState } from 'react';
import './App.css'
import Cars from './components/cars/Cars'
import Navbar from './components/navbar/Navbar';
import Loading from './components/loading/Loading';

function App() {
  const [cars, setCars] = useState([]);
  const [limit] = useState(6);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [error, setError] = useState(null);
  const addCars = () => {
    setSkip((prev) => {
      return prev + limit
    })
  }
  return (
    <div className='app'>
      <Navbar carsLength={cars.length} />
      {
        error && <div className='error'>
          <p>{error}</p>
        </div>
      }
      {
        error || <Cars cars={cars}
          setCars={setCars}
          limit={limit}
          skip={skip}
          setSkip={setSkip}
          addCars={addCars}
          setLoading={setLoading}
          showButton={showButton}
          setShowButton={setShowButton}
          setError={setError}
          error={error} />
      }
      {
        loading && <Loading />
      }
    </div>
  )
}

export default App
