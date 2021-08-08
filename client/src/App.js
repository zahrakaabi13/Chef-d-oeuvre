import { BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css';
import 'boxicons'
import { DiscoverUs } from './pages/DiscoverUs'
import { Shop } from './pages/Shop'

function  App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path="/Discover us"><DiscoverUs/></Route>
        <Route path="/Shop"><Shop/></Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
