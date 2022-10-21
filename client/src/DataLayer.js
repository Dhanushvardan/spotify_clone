import { createContext, useReducer } from "react";

export const DataLayer = createContext();

export const DataLayerProvider = ({ reducer, initialState, children }) => {
    return (<DataLayer.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayer.Provider>);
};

