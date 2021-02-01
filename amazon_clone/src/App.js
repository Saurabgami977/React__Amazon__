import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './Components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>login</h1>
          </Route>
          <Route path="/">
            <Header />
            <h1>Homepage</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
