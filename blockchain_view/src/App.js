import { BrowserRouter as Router } from "react-router-dom";
import Sha256Hash from "./components/Sha256Hash";
import "./App.css";
import Block from "./components/Block";
import Blockchain from "./components/Blockchain";
import Header from "./components/Header";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Distributed from "./components/Distributed";
import Transactions from "./components/Transactions";
import Wallet from "./components/Wallet";
import WalletSignAndVerify from "./components/WalletSignAndVerify";
import WalletSignAndVerifyWithTransaction from "./components/WalletTransaction/WalletSignAndVerifyWithTransaction";

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
        <Route path="/wallet">
          <Wallet />
        </Route>
        <Route path="/signed">
          <WalletSignAndVerify />
        </Route>
        <Route path="/wallet-transactions">
          <WalletSignAndVerifyWithTransaction />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
