import React, { useState } from 'react';
import './App.css';
import Note from './Note';

let App = () => {
  let [stickyData, addSticky] = useState([]);
  let [singleSticky, addSingle] = useState('');
  let [editElement, setEditElement] = useState('')

  const deleteHandler = (data) => {
    let filteredNotesData = stickyData.filter((each) => each != data)
    addSticky(filteredNotesData)
  }

  const editHandler = (data) => {
    addSingle(data)
    setEditElement(data)
  }

  const inputEdit = (data) => {
    if (editElement) {
      let copy = [...stickyData];
      let i = copy.indexOf(editElement)
      if (i !== -1) {
        copy[i] = data
      }
      setEditElement(data)
      addSticky(copy)
    }
    addSingle(data)
  }

  const buttonHandler = (data) => {
    setEditElement('')
    addSticky(previousState =>
      [...previousState,
        singleSticky]
    )
  }

  return (
    <div className="App">
      <input type="text"
        placeholder="Enter Sticky Data here"
        value={singleSticky}
        onChange={(event) => inputEdit(event.target.value)} />
      {/* onChange={(event) => addSingle(event.target.value)} /> */}
      <br /><br />
      <button
        className="btn btn-primary"
        onClick={
          (event) => buttonHandler(event.target.value)}>
        Add Sticky
      </button>

      <div>
        {stickyData.map((res, i) => {
          return (
            <Note
              key={i}
              data={res}
              deleteHandler={deleteHandler}
              editHandler={editHandler}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;