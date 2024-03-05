import { formatedDate, getCity } from '../lib/helper';
const CurrentForeCast = ({ currentData }) => {
  return (
    <section>
      <figure>
        <img
          src={`http://openweathermap.org/img/wn/${currentData.current.weather[0].icon}@2x.png`}
          alt={`${currentData.current.weather[0].description}`}
        ></img>
      </figure>
      <div className='location'>
        <span>{currentData.current.temp.toFixed()}</span>
        <h1>{getCity(currentData.timezone)}</h1>
        <p>Today | {formatedDate(currentData.current.dt)}</p>
      </div>
    </section>
  );
};

export default CurrentForeCast;
