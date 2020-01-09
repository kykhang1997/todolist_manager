import React from "react";
import "./App.css";
import Menu from "./components/menu/Menu";
import routes from "./routes";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <CRUD />
      </Router>
    </div>
  );
}
class CRUD extends React.Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="container">
          <div className="row">
            {this.showContentMenus(routes)}
          </div>
        </div>
      </div>
    );
  }
  showContentMenus = routes => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };
}

export default App;
