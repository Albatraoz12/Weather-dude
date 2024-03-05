import { useEffect, useState } from 'react';
import './index.scss';
import CurrentForeCast from './components/CurrentForeCast';

function App() {
  const [data, setData] = useState([]);
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  useEffect(() => {
    const getLocation = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      if (lat && long) {
        const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${
          import.meta.env.VITE_API_KEY
        }`;
        const response = await fetch(apiUrl);
        const info = await response.json();
        setData(info);
      }
    };
    getLocation();
  }, [lat, long]);

  return (
    <>
      <div>
        <CurrentForeCast currentData={data} />
      </div>
    </>
  );
}

export default App;
