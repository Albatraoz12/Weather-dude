import { formatedDate } from '../lib/helper';

const CurrentForeCast = ({ currentData }) => {
  return (
    <section>
      <div className='location'>
        <h1>{currentData.timezone}</h1>
        <p>Today | {formatedDate(currentData.current.dt)}</p>
      </div>
    </section>
  );
};

export default CurrentForeCast;
