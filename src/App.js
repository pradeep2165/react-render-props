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
      <Counter render={(count, handelClickCount) => <ClickCounter count={count} handelClickCount={handelClickCount} />} />
      <Counter render={(count, handelClickCount) => <HowerCounter count={count} handelClickCount={handelClickCount} />} />
    </div>
  );
}

export default App;
