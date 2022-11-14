import { increment, decrement } from "./actions/index";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.change);

  return (
    <div>
      <h3>{myState}</h3>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  );
}

export default App;
