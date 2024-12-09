import React, { createContext, useEffect, useReducer} from "react";
import AppReducer from './AppReducer';

var initialState;

if (typeof localStorage.getItem('appState') !== 'undefined') {
  initialState = JSON.parse(localStorage.getItem('appState'))
} else {
  initialState = {
    transaction: []
  }
}

export const GlobalContext = createContext({
  state: initialState,
  dispatch: () => {}
});

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    const storedState = JSON.parse(localStorage.getItem('appState'));
    if (storedState) {
      dispatch({ type: 'LOAD_FROM_LOCAL_STORAGE', payload: storedState})
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('appState', JSON.stringify(state));
  }, [state]);

  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }
  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}