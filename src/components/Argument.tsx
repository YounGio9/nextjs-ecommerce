import React from "react"

/**
 *
 * @param {string} text: Argument description
 * @return {React.JSX.Element}: Argument
 */
function Argument({ text }: { text: string }) {
   return (
      <div className='flex justify-between items-center '>
         <p className='flex w-48 lg:ml-2 lg:w-fit'>
            <svg
               width='11'
               height='11'
               fill='none'
               xmlns='http://www.w3.org/2000/svg'
               role='img'
               className='mt-2 w-6'
            >
               <circle cx='6' cy='6' r='4.5' fill='#000' stroke='#000'></circle>
               <circle cx='5' cy='5' r='4.5' fill='#FFF95F' stroke='#000'></circle>
            </svg>
            <span className='w-full'>{text}</span>
         </p>
         <div className='flex basis-1/6 justify-center items-center lg:basis-1/3'>
            <svg
               width='27'
               height='28'
               fill='none'
               xmlns='http://www.w3.org/2000/svg'
               role='img'
            >
               <path
                  d='m26 23-8-8 8-8-4-4-8 8-8-8-4 4 8 8-8 8 4 4 8-8 8 8 4-4Z'
                  fill='#000'
                  stroke='#000'
                  strokeMiterlimit='10'
                  strokeLinecap='square'
               ></path>
               <path
                  d='m25 21-8-8 8-8-4-4-8 8-8-8-4 4 8 8-8 8 4 4 8-8 8 8 4-4Z'
                  fill='#fff'
                  stroke='#000'
                  strokeMiterlimit='10'
                  strokeLinecap='square'
               ></path>
            </svg>
         </div>
      </div>
   )
}

export default Argument
