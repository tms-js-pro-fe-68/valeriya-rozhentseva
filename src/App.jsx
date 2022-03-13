import './App.css';
import SeasonButton from './components/SeasonButton';
import StatefulComponents from './components/StatefulComponents';

const user = {
  name: 'Valeriya',
  city: 'Minsk',
  age: 19,
  hobby: 'programming',
  courses: 'TeachMeSkills',
};

function Greetings() {
  const fullName = `my name is ${user.name}`;
  return fullName;
}

function PersonalInformation() {
  return (
    <div className="div_personal-inf">
      <h2 style={{ textAlign: 'center', fontSize: '40px', color: '#92054D' }}>
        Hello, <Greetings />!
      </h2>
      <h3 style={{ textAlign: 'center', fontSize: '27px', color: '#92054D' }}>
        I live in {user.city}. I like {user.hobby}. I take courses at{' '}
        <span style={{ color: 'white' }}>{user.courses}.</span>
      </h3>
      <button
        className="button_personal-inf"
        type="button"
        // eslint-disable-next-line no-alert
        onClick={() => alert(`I'm ${user.age} years old!`)}
      >
        <b>Do you want to know my age? CLICK!</b>
      </button>
    </div>
  );
}

function SeasonInf() {
  return (
    <div className='div_seasons'>
      <h2 style={{ fontSize: '40px', textAlign: 'center', color: 'white' }}>
        Information about seasons
      </h2>
      <SeasonButton season="winter" weather="морозная, снежная" />
      <SeasonButton season="spring" weather="тёплая, солечная" />
      <SeasonButton season="summer" weather="солнечная" />
      <SeasonButton season="autumn" weather="дождливая, пасмурная" />
    </div>
  );
}

export default function App() {
  return (
    <>
      <PersonalInformation />
      <SeasonInf />
      <StatefulComponents />
    </>
  );
}
