import React, { useContext, useState, useEffect } from 'react';
import { FormGroup, InputGroup } from '@blueprintjs/core';
import { settingsContext } from "./settings";

export default function Form() {
  const settings = useContext(settingsContext);

  const changeNumberOfpage = (e) => {
    e.preventDefault();
    let itemsPerPage = e.target.value;
    let obj = {
      itemsPerPage: itemsPerPage,
    };
    setItem(obj);
  };
  function setItem(obj) {
    localStorage.setItem("Form", JSON.stringify(obj));
  }

  return (
    <>
      <div>
        <h2>TO DO Settings : </h2>
        <form>
          <FormGroup label='Choose No. Of Items Displayed Per Page:' labelFor='text-input'>
            <InputGroup id='text-input' placeholder='# of items/page' type='Number' onChange={changeNumberOfpage} name='items'min='1' max='10' />
          </FormGroup>
          <FormGroup helperText='' label='Show Completed :' labelFor='text-input' labelInfo=''>
            <div className='bp3-html-select .modifier'>
              <select name='completed' value={settings.show} onChange={changeNumberOfpage}>
                <option value='true'>True</option>
                <option value='false'>False</option>
              </select>
              <span className='bp3-icon bp3-icon-double-caret-vertical'></span>
            </div>
          </FormGroup>
        </form>
      </div>
    </>
  );
}