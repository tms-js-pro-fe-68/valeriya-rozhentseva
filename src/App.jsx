import './App.css';
import Buttons from './components/Buttons';
import BruteForce from './components/getPassword';


const user = {
  name: 'Valeriya',
  city: 'Minsk',
  age: 19,
  hobby: 'programming',
  courses: 'TeachMeSkills',
};

const divStylePersonal = {
  width: '600px',
  background: '#FFBCD0',
  margin: 'auto',
  padding: '70px',
};

function Greetings() {
  const fullName = `my name is ${user.name}`;

  return fullName;
}


function PersonalInformation() {
  return (
    <div style={divStylePersonal}>
      <h2 style={{ textAlign: 'center', fontSize: '40px', color: '#92054D' }}>
        Hello, <Greetings />!
      </h2>
      <h3 style={{ textAlign: 'center', fontSize: '27px', color: '#92054D' }}>
        I live in {user.city}. I like {user.hobby}. I take courses at{' '}
        <span style={{ color: 'black' }}>{user.courses}.</span>
      </h3>
      <button
        type="button"
        // eslint-disable-next-line no-alert
        onClick={() => alert(`I'm ${user.age} years old!`)}
        style={{
          display: 'block',
          width: '300px',
          background: '#FA608D',
          fontSize: '19px',
          margin: '0 auto',
          color: '#92054D',
        }}
      >
        <b>Do you want to know my age? CLICK!</b>
      </button>
    </div>
  );
}

const divStyleSeasons = {
  width: '600px',
  background: '#92054D',
  margin: '40px auto',
  padding: '70px',
};

function SeasonInf() {
  return (
    <div style={divStyleSeasons}>
      <h2 style={{ fontSize: '40px', textAlign: 'center', color: 'white' }}>
        Information about seasons
      </h2>
      <Buttons season="winter" weather="морозная, снежная" />
      <Buttons season="spring" weather="тёплая, солечная" />
      <Buttons season="summer" weather="солнечная" />
      <Buttons season="autumn" weather="дождливая, пасмурная" />
    </div>
  );
}

export default function App() {
  return (
    <>
      <BruteForce />
      <PersonalInformation />
      <SeasonInf />
    </>
  );
}
