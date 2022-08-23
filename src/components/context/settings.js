import React,{useContext} from 'react';

export const SettingsContext = React.createContext();

function Settings(props) {
    const state={
        count:4,
        sortField:"string",
        showCompleted:true,
        toggleShow:()=>{ state.showCompleted=!state.showCompleted;  }
    }
    return ( 
        <>
        <SettingsContext.Provider value={state}>
        {props.children}
        </SettingsContext.Provider>
        </>
    );
}

export default Settings;