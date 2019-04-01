import React, { Component } from "react";
import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./Components/Cart";
import Admin from "./Components/Admin";
import Mainpage from "./Components/Mainpage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Admin} exact />
          <Route path="/Cart" component={Cart} exact />
          <Route path="/Mainpage" component={Mainpage} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
