
import './App.css';
import UygaVazifa_1 from "./companents/uygaVazifalar/UygaVazifa_1.jsx";
import UygaVazifaUstozBilan from "./companents/uygaVazifalar/UygaVazifaUstozBilan.jsx";
import USD_USE_valyuta from './companents/lesson_4/USD_USE_valyuta';
import Calcul from './companents/lesson_4/Calcul';

// import Section from "./lesson_3/Section/index.jsx";

function App() {
  return (
    <div className="App">
        <USD_USE_valyuta/>
        <Calcul/>
    </div>
  );
}

export default App;
