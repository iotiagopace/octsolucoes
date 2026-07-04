import { useContext } from "react"
import { AllContext } from "../context/AppContext"

const useGlobalContext = () => {
    return useContext(AllContext)
}

export default useGlobalContext;