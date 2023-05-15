import { createContext, useReducer } from "react";

export const TripsContext = createContext();

export const TripsReducer = (state, action) => {
      switch (action.type) {
            case "SET_TRIPS":
                  return {
                        routes: action.payload,
                  }
            default:
                  return state
            }
}

export const TripsContextProvider = ({ children }) => {
      const [state, dispatch] = useReducer(TripsReducer, { 
        trips: null
      })
      
      return (
        <TripsContext.Provider value={{ ...state, dispatch }}>
          { children }
        </TripsContext.Provider>
      )
    }