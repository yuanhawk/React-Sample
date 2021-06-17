import './App.css';
import License from './Components/License';

const image = require('./assets/pokeball.png')

function App() {
  return (
    <div className="App">
      <License
        image={image} alt=""
        name="Pokeball"
        streetAddress="NA"
        state="test"
        age={25} />
    </div>
  );
}

export default App;
