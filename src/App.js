import React,  { useState } from "react";
import "./App.css";

function App() {
  const [item, setItem] = useState("");
  const [newItems, setNewItems] = useState( [] );

  const addTodo = () => {
    if(!item){
      alert('Please, enter your todo!!')
      return;
    }

    const newitem = {
      id: Math.floor(Math.random() * 1000),
      value:item
    };

    setNewItems(oldList => [ ...oldList, newitem])
    setItem("")
  }

  function deleteTodo(id) {
    const newArray = newItems.filter(item => item.id !== id)
    setNewItems(newArray)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('success')
  }

  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="title">
          ToDo's List
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

        <button className="btn" onClick={addTodo}>
          Add
        </button>

        <ul className="list">
          {newItems.map(item => {
            return (
              <li>{item.value} <button className="btn-delete" onClick={() => {deleteTodo(item.id)}}>Delete</button></li>
            );
          })}
        </ul>
      </div>
      </form>
    </div>
  );
}

export default App;
