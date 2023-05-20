import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [item, setItem] = useState("");
  const [newItems, setNewItems] = useState(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:9000/newItems")
      .then(res => {
        return res.json();
      })
      .then((data) => {
        setNewItems(data)
        setLoading(false)
      })
      .catch(err => {
        console.log(err.message);
      })
    }, 1000)
  },[]);


  const addTodo = (e) => {
    e.preventDefault()
    if(!item){
      alert('Please, enter your todo!!')
      e.preventDefault()
      return;
    }

    const newItem = {
      value:item
    };

    fetch('http://localhost:9000/newItems', {
      method: 'POST',
      headers: {"Content-type":"application/json"},
      body: JSON.stringify(newItems)
    }).then(() => {
      setNewItems((oldList) => [...oldList, newItem]);
      setItem("");
    })

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
        <button className="btn" onClick={addTodo}>
          Add
        </button>
        <ul className="list">
          {loading && <div>Loading...</div>}
          {newItems && newItems.map(item => {
            return <li>{item.value} <button className="btn-delete" onClick={() => {deleteTodo(item.value)}}>Delete</button></li>;
          })}
        </ul>
      </div>
      </form>
    </div>
  );
}

export default App;
