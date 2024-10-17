import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Kontakt from "../pages/Kontakt/Kontakt";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";
import Ydelser from "../pages/ydelser/ydelser";

export default class Main extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) =>
              settings.isSplash ? (
                <Splash {...props} theme={this.props.theme} />
              ) : (
                <Home {...props} theme={this.props.theme} />
              )
            }
          />
          <Route
            path="/ydelser"
            render={(props) => <Ydelser {...props} theme={this.props.theme} />}
          />
          <Route
            path="/kontakt"
            exact
            render={(props) => <Kontakt {...props} theme={this.props.theme} />}
          />
          <Route
            path="*"
            render={(props) => <Error404 {...props} theme={this.props.theme} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
