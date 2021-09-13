import './App.css';
import First from './Components/FirstComponent/FirstComponent';
import Message from './Components/MessageComponent/Message';
import Second from './Components/SecondComponent/SecondComponent';

const text = "Hello"

function App() {
  return (
    <div className="App">
      <p className="hola">Hola</p>
      <First />
      <Second />
      <Message textProp = {text} />
    </div>
  );
};

export default App;
