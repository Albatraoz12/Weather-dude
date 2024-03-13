import { formatedDate, getCity } from '../lib/helper';

const CurrentForeCast = ({ currentData, units, setUnits }) => {
  return (
    <section className='mx-auto w-[90%] mt-10 flex justify-center items-center flex-col text-center gap-3'>
      <figure className='w-[80%] mx-auto'>
        <img
          className='h-48 w-full object-cover'
          src={`http://openweathermap.org/img/wn/${currentData.current.weather[0].icon}@2x.png`}
          alt={`${currentData.current.weather[0].description}`}
        />
      </figure>
      <div className='location'>
        <p className='text-6xl'>
          {currentData.current.temp.toFixed()}° {units === 'metric' ? 'C' : 'F'}{' '}
        </p>
        <h1 className='text-3xl font-bold my-2'>
          {getCity(currentData.timezone)}
        </h1>
        <p className='text-xl'>
          Today | {formatedDate(currentData.current.dt)}
        </p>
      </div>
      <div className='flex justify-center items-center gap-3'>
        <button
          type='button'
          onClick={() => setUnits('metric')}
          className='rounded-full border border-white px-4 py-2'
        >
          C
        </button>
        <button
          type='button'
          onClick={() => setUnits('imperial')}
          className='rounded-full border border-white px-4 py-2'
        >
          F
        </button>
      </div>
    </section>
  );
};

export default CurrentForeCast;
