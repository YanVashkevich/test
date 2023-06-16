import { useState } from "react";
import "./CSSs/Home.css";



function Home() {

  const [item, setItem] = useState("");
  const [newItems, setNewItems] = useState([]);
  const [id, setId] = useState(0);
  const [editItem, setEditItem] = useState(false)



  function handleSubmit(e){
    e.preventDefault();
    console.log('success');
    console.log(id)
    setEditItem(false)
  };


  const addTodo = () => {
    if (!item) {
      alert("Please, next time enter your todo!!");
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
                  <li className='item' key={item.id}>
                    {item.value}
                    <button
                      className="btn-edit"
                      onClick={() => {
                        editTodo(item.id);
                      }}
                    >
                      <img className="edit-img" src="edit.png" alt="edit"/>
                    </button>

                    <button
                      className="btn-delete"
                      onClick={() => {
                        deleteTodo(item.id);
                      }}
                    >
                      <img className="delete-img" src="cross.png" alt="delete"/>
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

export default Home;
