import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import UserPage from './UserPage';

function App() {
  return (
    <main>
      <Header />
      <Switch>
        <Route path='/'                 component={Home}      exact />
        <Route path='/user/:username'   component={UserPage}        />
      </Switch>
    </main>
  );
}

export default App;
