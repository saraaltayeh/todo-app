import React, { useState, useEffect } from 'react';
export const settingsContext = React.createContext();

export default function settings(props) {
  const [show, setShow] = useState(true);
  const [itemPage,setItemPage]=useState(3)

  const state = {
      show:show,
      setShow:setShow,
      itemPage:itemPage,
      setItemPage:setItemPage,
  }

  useEffect(()=>{
    let result = JSON.parse(localStorage.getItem('settings'));
    console.log(result,"111111111")
    if(result){
        setShow(result.show);
        setItemPage(Number(result.itemPage));
    }
},[])
  return (
  <settingsContext.Provider value={state}>
    {props.children}
    </settingsContext.Provider>
  )
}
