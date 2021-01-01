//React context api - Its is like creating a global variable that can be passed around a react app, instead of passing props from grandparent to parent to child, and so on

//set up data layer to push some infomation into it that is there at many layers down to the root component so that we can avoid prop drilling
//We need this to track the basket

import React, { createContext, useContext, useReducer } from "react";

//This is data layer
export const StateContext = createContext();

// Build a provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
