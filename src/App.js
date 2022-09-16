import logo from "./logo.svg";
import "./App.css";
import ClickCounter from "./components/ClickCounter";
import HowerCounter from "./components/HowerCounter";
import User from "./components/User";

function App() {
  return (
    <div className="App">
      <ClickCounter />
      <HowerCounter />
      <User name={() => "pradeep"} />
    </div>
  );
}

export default App;
