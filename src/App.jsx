import { useEffect, useState } from 'react';
import './index.scss';

function App() {
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  useEffect(() => {
    const getLocation = async () => {
      navigator.geolocation.getCurrentPosition(function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      });
      console.log(lat, long);
    };
    getLocation();
  }, [lat, long]);

  return (
    <>
      <div>
        <h1>Hello Weather App</h1>
      </div>
    </>
  );
}

export default App;
