import Sha256Hash from "./components/Sha256Hash";
import "./App.css";
import Block from "./components/Block";
import Blockchain from "./components/Blockchain";

function App() {
  return (
    <>
      <Sha256Hash />
      <Block />
      <Blockchain />
    </>
  );
}

export default App;
