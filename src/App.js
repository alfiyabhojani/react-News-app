import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";
import Homepage from "./pages/Homepage";
import NewsPage from "./pages/NewsPage";
import "./style.css";

export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/contact">
            <Contact />
          </Route>

          <Route exact path="/general">
            <NewsPage
              key="general"
              category="General"
              country="US"
              page={1}
              pageSize={10}
            />
          </Route>

          <Route exact path="/entertainment">
            <NewsPage
              key="entertainment"
              category="entertainment"
              country="US"
              page={1}
              pageSize={10}
            />
          </Route>

          <Route exact path="/science">
            <NewsPage
              key="science"
              category="science"
              country="US"
              page={1}
              pageSize={10}
            />
          </Route>

          <Route exact path="/health">
            <NewsPage
              key="health"
              category="health"
              country="US"
              page={1}
              pageSize={10}
            />
          </Route>

          <Route exact path="/sports">
            <NewsPage
              key="sports"
              category="sports"
              country="US"
              page={1}
              pageSize={10}
            />
          </Route>

          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="*">
            <ErrorPage />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
