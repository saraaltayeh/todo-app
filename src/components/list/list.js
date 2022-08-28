import React, { useContext, useState, useEffect } from 'react';
import { settingsContext } from '../context/settings';
import { Button, Card, Elevation } from '@blueprintjs/core';

export default function List(props) {
  const settings = useContext(settingsContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeList, setactiveList] = useState(
    (settings.show ? props.list : props.incomplete).slice(
      0, settings.itemsPerPage)
  );
  const [pagesNum, setPagesNum] = useState(
    Math.ceil(props.list.length / settings.itemsPerPage)
  );

  useEffect(() => {
    setactiveList(
      (settings.show ? props.list : props.incomplete).slice(
        0,
        settings.itemsPerPage
      )
    );

    setPagesNum(
      Math.ceil(
        (settings.show ? props.list : props.incomplete).length /
          settings.itemsPerPage
      )
    );
  }, [props.list, props.incomplete]);

  useEffect(() => {
    let start = (currentPage - 1) * settings.itemsPerPage;
    let end = start + settings.itemsPerPage;
    setactiveList(
      (settings.show ? props.list : props.incomplete).slice(start, end)
    );
  }, [currentPage, settings.itemsPerPage]);

  const changePage = (pageNum) => {
    if (pageNum !== currentPage) setCurrentPage(pageNum);
  };

  const Pages = () => {
    let pagesArr = [];
    if (currentPage > 1) {
      pagesArr.push(
        <Button
          className="@ns-button"
          type="button"
          key={currentPage - 1}
          onClick={() => {
            changePage(currentPage - 1);
          }}
        >
          previous
        </Button>
      );
    }

    for (let i = 1; i <= pagesNum; i++) {
      pagesArr.push(
        <Button
          className="@ns-button"
          type="button"
          onClick={() => {
            changePage(i);
          }}
          key={i}
        >
          {i}
        </Button>
      );
    }

    if (currentPage <= pagesNum) {
      pagesArr.push(
        <Button
          className=".bp3-active"
          type="button"
          onClick={() => {
            changePage(currentPage + 1);
          }}
        >
          next
        </Button>
      );
    }
   
    return <div className="pages"> {pagesArr} </div>;
  };

  return (
    <div>
    
      <Card className="mainItem2">
        <h3 className="list">Items List</h3>
        {console.log(activeList)}
        {activeList.map((item) => (
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
            <Button
              type="button"
              className={
                item.complete ? 'bp3-intent-success @ns-button' : 'bp3-intent-danger @ns-button'
              }
              onClick={() => props.toggleComplete(item.id)}
            >
              Complete : {item.complete.toString()}
            </Button>
            <Button  onClick={() => props.deleteItem(item.id)} type="submit"  intent="danger" text="delete" />
          </Card>
        ))}
      </Card>
      <Pages />
    </div>
  );
}