import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./Components/Cart";
import GlobalState from "./context/GlobalState";

import Mainpage from "./Components/Mainpage";
class App extends Component {
  render() {
    return (
      <GlobalState>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Mainpage} exact />
            <Route path="/Cart" component={Cart} exact />
          </Switch>
        </BrowserRouter>
      </GlobalState>
    );
  }
}
export default App;
