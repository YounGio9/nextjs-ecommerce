import React from "react"
import CheckoutContextProvider from "../../contexts/CheckoutContext"

/**
 * Layout of Checkout page
 * @param {React.ReactNode} children
 * @return {React.JSX.Element}
 */
function layout({ children }: { children: React.ReactNode }) {
   return <CheckoutContextProvider totalSteps={2}> {children} </CheckoutContextProvider>
}

export default layout
