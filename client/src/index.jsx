import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

import "styles/index.scss";

import Todos from "pages/Todos";
import About from "pages/About";
import Head from "layouts/Head";
import Footer from "layouts/Footer";
import Signup from "pages/Signup";
import Signin from "pages/Signin";

import reducers from "./reducers";

const storeEnhancers = compose(
  applyMiddleware(reduxThunk),
  window && window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(reducers, {}, storeEnhancers);

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.Fragment>
        <header>
          <Head />
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={Signin} />
            <Route path="/signup" component={Signup} />
            <Route path="/about" component={About} />
          </Switch>
        </main>
        <footer>
          <Footer />
        </footer>
      </React.Fragment>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
