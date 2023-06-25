import StepDone from "@/assets/svg/StepDone"
import { useCheckoutContext } from "@/contexts/CheckoutContext"
import React from "react"

/**
 * Header of the Checkout page. Show the state of all steps. If it is done or actual step or not began.
 * @param {string[]} labels
 * @return {React.JSX.Element}
 */
function CheckoutBanner({ labels }: { labels: string[] }) {
   const { actualStep } = useCheckoutContext()
   return (
      <div className='flex flex-col content-center items-center pt-10 space-y-3 h-32 bg-luxury-green border-b-2 border-black lg:flex-row lg:pt-0 lg:space-y-0 lg:h-20'>
         <div className='lg:flex-1 font-bold text-3xl lg:pl-10'>
            <a href='/'>LuxuryGreen</a>
         </div>
         <ol className='flex space-x-2 lg:space-x-4 flex-initial justify-center lg:flex-1'>
            {labels.map((label, idx) => (
               <li key={label} className='flex flex-row flex-none gap-2 items-center'>
                  <span
                     className={`flex flex-none rounded-full border-2 w-8 h-8 justify-center items-center  ${
                        actualStep > idx ? "bg-black" : "bg-white"
                     }`}
                  >
                     {actualStep > idx ? <StepDone /> : idx + 1}
                  </span>
                  <span
                     className={`font-medium capitalize lg:text-xl ${
                        !(actualStep === idx) && "hidden"
                     } lg:inline`}
                  >
                     {label.split(" ")[1]}
                  </span>
               </li>
            ))}
         </ol>
         <div className='hidden lg:block lg:flex-1'></div>
      </div>
   )
}

export default CheckoutBanner
