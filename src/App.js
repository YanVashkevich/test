import { useState } from "react";
import "./App.css";

function App() {
  const [item, setItem] = useState("");
  const [newItems, setNewItems] = useState([]);

  const addTodo = (e) => {
    if(!item){
      alert('Please, enter your todo!!')
      return;
    }
    e.preventDefault()

    const newItem = {
      value: item
    };

    setNewItems((oldList) => [...oldList, newItem]);
    setItem("");
  }

  function deleteTodo (value){
    const newArray = newItems.filter(item => item.value !== value)

    setNewItems(newArray)
  }

  return (
    <div className="App">
      <form className="form">
        <h1 className="title">
          ToDo List
        </h1>


{/* Все кроме title */}
      <div className="input-btn-output">
        <input
          type="text"
          className="input"
          placeholder="Enter your todo please..."
          value={item}
          onChange={e => setItem(e.target.value)}
        />
        <button onClick={addTodo}>
          Add
        </button>
        <ul className="list">
          {newItems.map(item => {
            return <li>{item.value} <button onClick={() => {deleteTodo(item.value)}}>Delete</button></li>;
          })}
        </ul>
      </div>
      </form>
    </div>
  );
}

export default App;
