import Failed from "@/assets/svg/Failed"
import React from "react"
import Semicolon from "../assets/svg/Semicolon"

/**
 *
 * @param {string} text: Argument description
 * @return {React.JSX.Element}: Argument
 */
function Argument({ text }: { text: string }) {
   return (
      <div className='flex justify-between items-center '>
         <p className='flex w-48 lg:ml-2 lg:w-fit'>
            <Semicolon />
            <span className='w-full'>{text}</span>
         </p>
         <div className='flex basis-1/6 justify-center items-center lg:basis-1/3'>
            <Failed />
         </div>
      </div>
   )
}

export default Argument
