import { useEffect, useState } from 'react';
import './index.scss';
import CurrentForeCast from './components/CurrentForeCast';

function App() {
  const [data, setData] = useState();
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
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
      const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=${
        import.meta.env.VITE_API_KEY
      }`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((info) => setData(info))
        .catch((error) => console.error('Error fetching weather data:', error));
    }
  }, [lat, long]);

  return (
    <div>
      {data ? <CurrentForeCast currentData={data} /> : <p>Loading...</p>}
    </div>
  );
}

export default App;
