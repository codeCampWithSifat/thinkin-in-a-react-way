import "./App.css";
import Condition from "./components/ConditinalRedering/Condition";
import Form from "./components/Form";
import EventHandle from "./components/HandleingEvent/EventHandle";
import ClickCounter from "./components/HigherOrderComponent/ClickCounter";
import HoverCounter from "./components/HigherOrderComponent/HoverCounter";
import Calculator from "./components/LiftingStateUp/Calculator";
import ClickCounterOne from "./components/ReactRenderProps/ClickCounterOne";
import Counter from "./components/ReactRenderProps/Counter";
import HoverCounterOne from "./components/ReactRenderProps/HoverCounterOne";
import User from "./components/ReactRenderProps/User";
import Clock from "./components/StateAndLifeCycle/Clock";

function App() {
  return (
    <div className="App">
      <h2>Hello Developer Sifat How Are You</h2>

      
      {/* <User render={(isLoggedIn) => (isLoggedIn ? "Sifat" : "Guest")} /> */}
      <Counter
        render={(count, incrementCounter) => (
          <ClickCounterOne count={count} incrementCounter={incrementCounter} />
        )}
      />
      <Counter  render={(count, incrementCounter) => (
          <HoverCounter count={count} incrementCounter={incrementCounter} />
        )} />
    </div>
  );
}

export default App;
