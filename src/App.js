import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./Components/Cart";
import GlobalState from "./context/GlobalState";
import Admin from "./Components/Admin";

import Mainpage from "./Components/Mainpage";
class App extends Component {
  render() {
    return (
      <GlobalState>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Admin} exact />
            <Route path="/Cart" component={Cart} exact />
            <Route path="/Mainpage" component={Mainpage} exact />
          </Switch>
        </BrowserRouter>
      </GlobalState>
    );
  }
}
export default App;
