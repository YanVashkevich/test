import React, { useState } from "react";
import "./App.css";


function App() {

  const [item, setItem] = useState("");
  const [newItems, setNewItems] = useState([]);
  const [id, setId] = useState(0);
  const [editItem, setEditItem] = useState(false)
  const [isDone, setIsDone] = useState(false)


  function handleSubmit(e, value){
    e.preventDefault();
    console.log('succes');

    setEditItem(false)
  };


  const addTodo = () => {
    if (!item) {
      alert("Please, enter your todo!!");
      return;
    }

    const newitem = {
      id: Math.floor(Math.random() * 1000),
      value: item,
    };

    setNewItems((oldList) => [...oldList, newitem]);
    setItem("");
  };

  function deleteTodo(id) {
    const newArray = newItems.filter((item) => item.id !== id);
    setNewItems(newArray);
  }

  
  function editTodo(id) {
    const newArray = newItems.filter((item) => item.id !== id);
    const edittedItem = newItems.find((item) => item.id === id);
    setNewItems(newArray)
    setItem(edittedItem.value)
    setId(id)
    setEditItem(true)
  }

  function doneTodo(id){
    const edittedItem = newItems.find((item) => item.id === id);
    setIsDone(true)
  }

  function clearAllTodos() {
    setNewItems([])
  }


  return (
    <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        <h1 className="title">ToDo's List</h1>

        {/* Все кроме title */}
        <div className="input-btn-output">
          <input
            type="text"
            className="input"
            placeholder="Enter your todo please..."
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
        
          <button className = {editItem ? 'add-edit-btn' : 'btn'} onClick={addTodo}>
            {editItem ? 'Edit Item' : 'Add Item'}
          </button>

          <ul className="list">
            {newItems.map((item) => {
                return (
                  <li className={isDone ? 'completed-item' : 'not-completed-item'} key={item.id}>
                    {item.value}
                    <button
                      className="btn-edit"
                      onClick={() => {
                        editTodo(item.id);
                      }}
                    >
                      <img className="edit-img" src="edit.png"/>
                    </button>

                    <button
                      className="btn-delete"
                      onClick={() => {
                        deleteTodo(item.id);
                      }}
                    >
                      <img className="delete-img" src="cross.png"/>
                    </button>
                  </li>
                );
            })}
          </ul>
        </div>
      </form>
      <button onClick={clearAllTodos} className="clear-all">Clear All Todos</button>
    </div>
  );
}

export default App;
