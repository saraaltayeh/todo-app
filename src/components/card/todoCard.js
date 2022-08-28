import React from "react";
import { Button, Card, Elevation } from "@blueprintjs/core";

const TodoCard = (props) => {
  return (
    <div>
      {" "}
      <Card className="mainItem2">
        <h3 className="list">Items List</h3>
        {props.arrayComplete.map((item) => (
          <Card
            className="listCard"
            interactive={true}
            elevation={Elevation.THREE}
            key={item.id}
          >
            <h3>
              <b>{item.text} </b>
            </h3>
            <p>
              <b>Assigned to</b> : {item.assignee}
            </p>
            <p>
              <b>Difficulty</b> : {item.difficulty}
            </p>
            <Button className="@ns-button bp3-intent-success"
              type="button"
              
              onClick={() => props.toggleComplete(item.id)}
            >
              Complete : True
            </Button>
          </Card>
        ))}
      </Card>
    </div>
  );
};

export default TodoCard;