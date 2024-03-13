import { useEffect, useState } from 'react';
import './index.scss';
import './index.css';
import CurrentForeCast from './components/CurrentForeCast';

function App() {
  const [data, setData] = useState();
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const [units, setUnits] = useState('metric');

  useEffect(() => {
    const getLocation = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
    };
    getLocation();
  }, []);

  useEffect(() => {
    if (lat !== '' && long !== '') {
      const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=${units}&appid=${
        import.meta.env.VITE_API_KEY
      }`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((info) => setData(info))
        .catch((error) => console.error('Error fetching weather data:', error));
    }
  }, [lat, long, units]);

  return (
    <div className='bg-main'>
      {data ? (
        <CurrentForeCast currentData={data} units={units} setUnits={setUnits} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
