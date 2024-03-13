import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './Gallery';
import Home from './Home';

function App() {
return (
  <Router>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/gallery" component={Gallery} />
    </Switch>
  </Router>
);
}

export default App;