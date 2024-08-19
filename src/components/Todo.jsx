import React, { useState } from "react";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const addItem = (e) => {
    e.preventDefault();
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  const deleteItem = (id) => {
    console.log(id);

    const updatedItems = items.filter((elm, ind) => {
      return ind !== id;
    });
    setItems(updatedItems);
  };
  const removeAll = (id) => {
    setItems([]);
  };
  return (
    <>
      <div className="app_wrapper">
        <div className="form_wrap">
          <form>
            <input
              type="text"
              placeholder="Enter Name Here"
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <button onClick={addItem}>+</button>
          </form>
        </div>
        <div className="todo_list">
          {items.map((elm, ind) => {
            return (
              <div className="todo_list_item" key={ind}>
                <span>{elm}</span>
                <button onClick={() => deleteItem(ind)}>delete</button>
              </div>
            );
          })}
        </div>

        <div className="remove_wrap">
          <button onClick={removeAll}>Remove All</button>
        </div>
      </div>
    </>
  );
};

export default Todo;
