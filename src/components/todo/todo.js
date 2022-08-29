import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form';
import { useContext } from 'react';
import { v4 as uuid } from 'uuid';
import Form from '../form/form';
import TodoCard from '../card/todoCard';
import List from '../list/list';

const ToDo = () => {

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit, handleSubmit2 } = useForm(addItem);

  const [completedItem, setComplete] = useState(false);
  const [arrayComplete, setArrayComplete] = useState([]);
  const [changeSet, setChangeSetting] = useState(false);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }
  function changeSettingContext() {
    setChangeSetting(true);
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
    document.title = `To Do List: (${incomplete.length}) Pending`;
  }, [list]);

  const completed=()=>{

    const arr=[];
    list.map((ele)=>{
      if (ele.complete){
        arr.push(ele)
      }
    });
    setComplete(true);
    setArrayComplete(arr);
    console.log(arr);
  }

  return (
   <div className="main">
      <h3 id='h2'>To Do List Manager: ({incomplete.length}) To-Do | ({list.length - incomplete.length}) completed</h3>

      <div className="mainCards">
        <Form
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          incomplete={incomplete}
          completed={completed}
          changeSettingContext={changeSettingContext}
        />
        <List
        deleteItem={deleteItem}
          incomplete={incomplete}
          list={list}
          toggleComplete={toggleComplete}
        />
        {completedItem && (
        <TodoCard completed={completed} arrayComplete={arrayComplete} toggleComplete={toggleComplete} />
      )}
         {changeSet && (
        <FormSetting handleSubmit={handleSubmit} handleChange={handleChange} />)}
      </div>
    </div>
  );
};

export default ToDo;
