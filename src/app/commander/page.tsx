"use client"

import { useCheckoutContext } from "@/contexts/CheckoutContext"
import React from "react"

import { Delivery, Recap } from "@/components/CheckoutSteps"
import CheckoutBanner from "@/components/CheckoutBanner"
import CustomButton from "@/components/CustomButton"

/**
 * Checkout page including all steps.
 * @return {React.JSX.Element}
 */
function Checkout() {
   const steps = [
      {
         label: "la commande",
         component: Recap,
      },
      {
         label: "la livraison",
         component: Delivery,
      },
   ]

   const { actualStep, handleNext } = useCheckoutContext()

   const StepComponent = steps[actualStep].component

   return (
      <>
         <CheckoutBanner labels={steps.map((step) => step.label)} />
         <StepComponent />
         <CustomButton background='yellow' color='black' handleClick={handleNext}>
            {actualStep < 1
               ? `continuer vers ${steps[actualStep + 1].label}`
               : "Commander"}
         </CustomButton>
      </>
   )
}

export default Checkout
