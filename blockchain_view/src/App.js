import { BrowserRouter as Router } from "react-router-dom";
import Sha256Hash from "./components/Sha256Hash";
import "./App.css";
import Block from "./components/Block";
import Blockchain from "./components/Blockchain";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Distributed from "./components/Distributed";
import Transactions from "./components/Transactions";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/sha256">
          <Sha256Hash />
        </Route>
        <Route path="/block">
          <Block />
        </Route>
        <Route path="/blockchain">
          <Blockchain />
        </Route>
        <Route path="/distributed">
          <Distributed />
        </Route>
        <Route path="/transactions">
          <Transactions />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
