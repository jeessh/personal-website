import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import Home from './pages/Home';
import ResumePage from './pages/resume';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/resume' component={ResumePage} exact />
      </Switch>
    </Router>
  );
}

export default App;
