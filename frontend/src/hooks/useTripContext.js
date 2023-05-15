import { TripsContext } from "../context/TripsContext"
import { useContext } from "react"

export const useTripsContext = () => {
  const context = useContext(TripsContext)

  if(!context) {
    throw Error('useTripsContext must be used inside a TripsContextProvider')
  }

  return context
}