import React from "react"

interface Props {
   number: number
   reason: string
   conclusion: string
}

/**
 * This component show reason of why we should never buy a bag and make a conclusion. It render a box
 * @param {Props} Proof properties
 * @return {React.JSX.Element} Proof component
 */
export default function Proof({ number, reason, conclusion }: Props) {
   return (
      <div className='inline-flex relative w-4/5 lg:basis-[30%] my-10 mx-2 lg:mx-0 lg:my-0 lg:grow lg:max-w-sm flex-col lg:mb-6'>
         <p className='absolute -top-3 z-30 self-center h-6 text-lg font-semibold bg-luxury-green -rotate-3 lg:text-xl'>
            Raison n°{number}
         </p>
         <div className='flex relative flex-col-reverse'>
            <div className='absolute w-full h-full top-1 left-1 rounded-lg bg-black'></div>
            <div className='relative rounded-lg border transform-gpu border-black bg-white drop-shadow-black flex flex-col gap-y-4 justify-between p-7'>
               <span>{reason}</span>
               <span className='font-semibold'>{conclusion}</span>
            </div>
         </div>
      </div>
   )
}
