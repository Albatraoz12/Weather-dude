import { formatedDate, getCity } from '../lib/helper';
const CurrentForeCast = ({ currentData, units, setUnits }) => {
  return (
    <section className='mx-auto w-[90%] mt-10 border border-white'>
      <figure>
        <img
          src={`http://openweathermap.org/img/wn/${currentData.current.weather[0].icon}@2x.png`}
          alt={`${currentData.current.weather[0].description}`}
        ></img>
      </figure>
      <div className='location'>
        <span>
          {currentData.current.temp.toFixed()} {units === 'metric' ? 'C' : 'F'}{' '}
        </span>
        <h1>{getCity(currentData.timezone)}</h1>
        <p>Today | {formatedDate(currentData.current.dt)}</p>
      </div>
      <div>
        <button type='button' onClick={() => setUnits('metric')}>
          C
        </button>
        <button type='button' onClick={() => setUnits('imperial')}>
          F
        </button>
      </div>
    </section>
  );
};

export default CurrentForeCast;
