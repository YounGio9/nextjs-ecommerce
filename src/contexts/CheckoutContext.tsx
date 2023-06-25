"use client"
import { types } from "@/helpers"
import React from "react"

const CheckoutContext = React.createContext<types.CheckoutContext>(
   {} as types.CheckoutContext
)

interface Props {
   children: React.ReactNode
   totalSteps: number
}

/**
 * Provide informations and data about the selected article and serve as stepper for the checkout page.
 * @param {React.ReactNode} totalSteps
 * @param {React.ReactNode} children
 * @return {React.JSX.Element}
 */
function CheckoutContextProvider({ children, totalSteps }: Props) {
   React.useEffect(() => {
      setArticle(JSON.parse(localStorage.getItem("article") as string))
   }, [])
   const [article, setArticle] = React.useState<types.Article>({} as types.Article)
   const [actualStep, setActualStep] = React.useState<number>(0)
   const [address, setAddress] = React.useState<types.Address>({} as types.Address)

   const handleBack = () => setActualStep((prev) => prev - 1)
   const handleNext = () => setActualStep((prev) => (prev < totalSteps ? prev + 1 : prev))

   const handleSubmit = () => {
      setAddress({} as types.Address)
   }
   return (
      <CheckoutContext.Provider
         value={{ handleBack, handleNext, article, address, handleSubmit, actualStep }}
      >
         {children}
      </CheckoutContext.Provider>
   )
}

export default CheckoutContextProvider

export const useCheckoutContext = () => React.useContext(CheckoutContext)
