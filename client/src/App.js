import { BrowserRouter, Route, Switch} from "react-router-dom";
import './App.css'
import 'boxicons'
import { Cursor } from "./components/CustomCursor";
import { DiscoverUs } from './pages/DiscoverUs'
import { Shop } from './pages/Shop'
import { Contact } from "./pages/Contact";
import React from "react";
import { Landing } from './pages/Landing'



const App = () =>{

  return (
    <>
    <BrowserRouter>
        <Cursor/>
      <Switch>
        <Route exact path="/"><Landing/></Route>
        <Route path="/Discover us"><DiscoverUs/></Route>
        <Route path="/Shop"><Shop/></Route>
        <Route path="/Get in touch"><Contact/></Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
