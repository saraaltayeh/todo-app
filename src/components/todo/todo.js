import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form';
import { useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { Button, Label, Switch } from '@blueprintjs/core';
import { SettingsContext } from '../context/settings';

const ToDo = () => {

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);

  const settings = useContext(SettingsContext);
  const [startIdx, setStartIdx] = useState(0);
  const [endIdx, setEndIdx] = useState(settings.numItems);


  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }
  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);

  }
  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete);
    setIncomplete(incompleteCount);
  }, [list]);
  function handleHide() {
    settings.setHide(!settings.hide);
  }

  function pagination() {
    let data = incomplete.slice(startIdx, endIdx);
    // console.log(data, startIdx, endIdx);
    return data;
  }
   

  function handleNext() {
    if (endIdx <= incomplete.length) {
      setStartIdx(startIdx + settings.numItems);
      setEndIdx(endIdx + settings.numItems);
    }
  }
  function handlePrevious() {
    if (startIdx > 0) {
      setStartIdx(startIdx - settings.numItems);
      setEndIdx(endIdx - settings.numItems);
    }
  }

  useEffect(() => {
    setStartIdx(0);
    setEndIdx(settings.numItems);
  }, [settings.numItems]);

  
  return (
    <>
      <header>
        <h1>To Do List: {incomplete.length} items pending</h1>
      </header>

      <form onSubmit={handleSubmit} id="f">

        <h2>Add To Do Item</h2>
<label>
          <span>To Do Item</span>
          <input className="bp4-input"
            onChange={handleChange}
            name="text"
            type="text"
            placeholder="Item Details"
          />
</label>

        <Label>
          <span>Assigned To</span>
          <input className="bp4-input"
            onChange={handleChange}
            name="assignee"
            type="text"
            placeholder="Assignee Name"
          />
        </Label>

        <Label>
          <span>Difficulty</span>
          <input
            onChange={handleChange}
            defaultValue={3}
            type="range"
            min={1}
            max={5}
            name="difficulty"
          />
        </Label>
        <Label>
          <Button className=".bp4-minimal" type="submit">Add Item</Button>
        </Label>
      </form>

      {pagination().map(item => (

<div key={item.id} interactive={true} class="bp4-elevation-4">
{settings.hide === false || item.complete === false ? (
            <>
              <p>Item: {item.text}</p>
              <p>
                <small>Assigned to: {item.assignee}</small>
              </p>
              <p>
                <small>Difficulty: {item.difficulty}</small>
              </p>
              <div onClick={() => toggleComplete(item.id)}>
                Complete: {item.complete.toString()}
              </div>
              <hr />
              <Button onClick={() => deleteItem(item.id)}>Delete</Button>
            </>
          ) : null}
        </div>
      ))}
      <br/>
  <Button className=".bp4-minimal" onClick={handlePrevious}>Previous</Button>
      <Button className=".bp4-minimal" onClick={handleNext}>NEXT</Button>
    </>
  );
};

export default ToDo;
