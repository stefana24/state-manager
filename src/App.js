import { useState } from "react";
import store from "./state_manager/store/index.js";
function App() {
  const [counter, setCounter] = useState(store.state.counter);
  function dataHandler(data) {
    setCounter(data);
  }
  store.subscribe("stateChange", dataHandler);
  return (
    <div className="content">
      <h1 className="title">React counter App</h1>
      <div className="counterValue">
        <span>{counter}</span>
      </div>
      <div className="buttons">
        <button className="button" onClick={() => store.dispatch("decrement")}>
          -
        </button>
        <button className="button" onClick={() => store.dispatch("increment")}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
