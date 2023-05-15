import { RoutesContext } from "../context/RoutesContext"
import { useContext } from "react"

export const useRoutesContext = () => {
  const context = useContext(RoutesContext)

  if(!context) {
    throw Error('useRoutesContext must be used inside a RoutesContextProvider')
  }

  return context
}