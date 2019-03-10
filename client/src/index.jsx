import React, { Component } from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalState from "context/GlobalState";

import "styles/index.scss";

import Head from "layouts/Head";
import Footer from "layouts/Footer";
import Signup from "pages/Signup";
import Signin from "pages/Signin";
import Home from "pages/Home";

class App extends Component {
  render() {
    return (
      <GlobalState>
        <BrowserRouter>
          <React.Fragment>
            <Head />
            <main>
              <Switch>
                <Route exact path="/" component={Signin} />
                <Route path="/signup" component={Signup} />
                <Route path="/home" component={Home} />
              </Switch>
            </main>
            <footer>
              <Footer />
            </footer>
          </React.Fragment>
        </BrowserRouter>
      </GlobalState>
    );
  }
}

ReactDom.render(<App />, document.getElementById("root"));
