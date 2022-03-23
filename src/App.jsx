import './App.css';
import Clothes from './components/Clothes';

export default function App() {
  return (
    <>
      <h1>
        Добавь свой товар, <br /> чтобы его могли купить миллионы людей!
      </h1>
      <div className="mainblock">
        <h2 className="mainblock_h2">Форма для заполнения:</h2>
        <Clothes />
      </div>
    </>
  );
}
