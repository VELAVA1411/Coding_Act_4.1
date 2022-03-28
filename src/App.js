import "../src/index.css";
import ReactDom from "react-dom";
import { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Get Groceries - 12:39:38 PM (-)", isCompleted: false },
    { text: "Meal Prep - 12:41:38 PM (-)", isCompleted: false },
    { text: "Power Nap - 12:45:38 PM (-)", isCompleted: false },
    { text: "Learn React - 04:45:38 PM (-)", isCompleted: false }
  ]);

  const [value, setValue] = useState("");

  function handle(e) {
    e.preventDefault();
    if (!value) return;
    const newtodos = [...todos, { text: value, isCompleted: false }];
    setTodos(newtodos);
    setValue("");
  }
  function removeItem(e) {
    var index = Number(e.target.id);
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  }

  return (
    <>
      <h1>Task Tracker</h1>
      <h3>
        Input Tasks that have been completed below and keep track of the time
        when each item was added.
      </h3>
      <div id="bg">
        {todos.map((item, i) => (
          <div key={i} className="todo" onClick={removeItem}>
            {item.text}
          </div>
        ))}

        <form onSubmit={handle}>
          <input
            type="text"
            className="input"
            placeholder="Add Event..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <p>Press Enter to Submit</p>
        </form>
      </div>
    </>
  );
}



ReactDom.render(<App/>,document.getElementById('root'));
