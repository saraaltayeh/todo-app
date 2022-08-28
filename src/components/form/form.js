import React from 'react';
import { Card, Button, FormGroup, InputGroup} from '@blueprintjs/core';

export default function Form(props) {
  return (
    <Card className="mainItem" interactive={true}>
      <h3 className="list">Add A Task To Your List </h3>
      <br></br>
      <form onSubmit={props.handleSubmit}>
        <FormGroup labelFor="text-input" labelInfo="(required)">
          <label><b>To Do Item</b></label>
          <br></br>
          <br></br>
          <InputGroup
            onChange={props.handleChange}
            name="text"
            id="text-input"
            placeholder="Item Details"
          />
          <br></br>
          <label><b>Assigned To</b></label>
          <br></br>
          <br></br>
          <InputGroup
            onChange={props.handleChange}
            name="assignee"
            id="text-input"
            placeholder="Assignee Name"
          />
          <br></br>
          <div className='diff'>
            <lable><b>Difficulty</b></lable>
            <br></br>
            <input
              onChange={props.handleChange}
              defaultValue={2}
              type="range"
              min={1}
              max={10}
              name="difficulty"
            />
          </div>
          <div >
            <Button className='button' type="submit">Add Item</Button>
          </div>

          <Button className='button' type="submit" onClick={props.completed}>
          View Completed Items
        </Button>
        </FormGroup>
      </form>
    </Card>
  );
}