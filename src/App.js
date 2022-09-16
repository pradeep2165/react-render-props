import logo from "./logo.svg";
import "./App.css";
import ClickCounter from "./components/ClickCounter";
import HowerCounter from "./components/HowerCounter";
import User from "./components/User";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      {/* <ClickCounter />
      <HowerCounter />
      <User render={(isLoggedIn) => (isLoggedIn ? "Pradeep" : "Guest")} /> */}
      <Counter>{(count, handelClickCount) => <ClickCounter count={count} handelClickCount={handelClickCount} />}</Counter>
      <Counter>{(count, handelClickCount) => <HowerCounter count={count} handelClickCount={handelClickCount} />}</Counter>
    </div>
  );
}

export default App;
