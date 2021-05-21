import { Switch,Route } from 'react-router-dom';
import './App.css';
import Checkout from './pages/checkout'
import Main from './pages/main'
import Shop from './pages/shop'
import Nav from './components/nav'


function App() {
  
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/shop">
          <Shop />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
      </Switch>
      <h1>Frozzy</h1>
    </div>
  );
}

export default App;
