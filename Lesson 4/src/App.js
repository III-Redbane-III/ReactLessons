import './App.css';
import { Main } from './Components/Main/Main';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import ChatsPage from './Components/ChatsPage/ChatsPage';
import { Profile } from './Components/Profile/Profile';


function App() {

  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route path="/chatlist" component={ChatsPage} />
      <Route path="/profile" component={Profile} />
    </Router>
  );
}

export default App;
