import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import * as serviceWorker from "./serviceWorker";
import Context from "./Component/Context";
import StyledComponents from "./Component/StyledComponents";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route exact path="/context" component={Context}></Route>
      <Route exact path="/styled" component={StyledComponents}></Route>
    </Switch>
  </BrowserRouter>
);
ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
