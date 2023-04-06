import Title from './components/Title';
import Counter from './components/Counter';
import NewPhoto from './assets/newyear.jpeg';
import useCountdown from './components/hooks/useCountdown';

import './App.css'

function App() {
  const [day, hour, minute, second] = useCountdown("Jan 1, 2024, 00:00:00");

  return (
    <div className="App" style={{background: `url(${NewPhoto})`}}>
     <div className="container">
      <Title title="Contagem regressiva para 2024"></Title>
      <div className="countdown-container">
        <Counter title="Dias" number={day}/>
        <Counter title="Horas" number={hour}/>
        <Counter title="Minutos" number={minute}/>
        <Counter title="Segundos" number={second}/>
      </div>
     </div> 
    </div>
  );
}

export default App
