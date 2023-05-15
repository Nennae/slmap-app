import { createContext, useReducer } from "react";

export const RoutesContext = createContext();

export const RoutesReducer = (state, action) => {
      switch (action.type) {
            case "SET_ROUTES":
                  return {
                        routes: action.payload,
                  }
            default:
                  return state
            }
}

export const RoutesContextProvider = ({ children }) => {
      const [state, dispatch] = useReducer(RoutesReducer, { 
        routes: null
      })
      
      return (
        <RoutesContext.Provider value={{ ...state, dispatch }}>
          { children }
        </RoutesContext.Provider>
      )
    }