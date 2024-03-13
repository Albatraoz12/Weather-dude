import { formatedDate, getCity } from '../lib/helper';

const CurrentForeCast = ({ currentData, units, setUnits }) => {
  return (
    <section className='mx-auto w-[90%] mt-10 border border-white'>
      <figure className='w-[80%] mx-auto'>
        <img
          className='h-48 w-full object-cover'
          src={`http://openweathermap.org/img/wn/${currentData.current.weather[0].icon}@2x.png`}
          alt={`${currentData.current.weather[0].description}`}
        />
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
