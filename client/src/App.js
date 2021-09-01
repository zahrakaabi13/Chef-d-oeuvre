import './App.css'
import 'boxicons'
import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import { Cursor } from "./components/CustomCursor";
import { DiscoverUs } from './pages/DiscoverUs'
import { Shop } from './pages/Shop'
import { Contact } from "./pages/Contact";
import { Landing } from './pages/Landing'
import { Menu } from './components/Menu';
import { Dashbord } from './pages/Admin/Dashbord'


// Routing
import { PrivateRoute } from "./components/routing_auth/PrivateRoute";
// Screens
import { PrivateScreen } from "./components/AuthViews/PrivateScreen";
import { Login } from './components/AuthViews/Login'
import { Register } from './components/AuthViews/Register'
import { ForgotPassword } from './components/AuthViews/ForgetPassword'
import { ResetPassword } from './components/AuthViews/ResetPassword'


// const routes = [
//   { path:"/", name : "Home", Component : Landing},
//   { path:"/Menu", name : "Menu", Component : Menu},
//   { path:"/Discover us", name : "DiscoverUs", Component : DiscoverUs},
//   { path:"/Shop", name : "Shop", Component : Shop},
//   { path:"/Contact", name : "Contact", Component : Contact}
// ];

const App = () =>{

  return (
    <>
    {/* {routes.map(({path, Component}) => (
      <BrowserRouter>
      <Route key={path} path={path} exact>
        <div className="page">
          <Component/>
        </div>
      </Route> 
      </BrowserRouter>
    ))} */}
    <BrowserRouter>
        <Cursor/>

      <Switch>
        <Route exact path="/" component={ Landing } />
        <Route exact path="/Menu" component={ Menu } />
        <Route path="/Discover us" component= {DiscoverUs } />
        <Route path="/Shop" component={ Shop } />
        <Route path="/Get in touch" component={ Contact } />
        <Route path="/dashbord" component={ Dashbord } />
  
       

        {/* authentification */}
        <PrivateRoute exact path="/private" component={PrivateScreen} />
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/forgetpassword" component={ ForgotPassword } />
        <Route path="/passwordreset/:resetToken" component={ ResetPassword } />

      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
