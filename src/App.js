import {Switch, Route} from 'react-router-dom'
import DevOverview from './DevOverview';
import Home from './Home';

function App() {
  return (
    <main>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/developer' component={DevOverview} />
      </Switch>
    </main>
  );
}

export default App;
