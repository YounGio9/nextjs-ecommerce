import React from "react"

/**
 * Failed Svg component (X)
 * @return {React.JSX.Element}
 */
function Failed() {
   return (
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
   )
}

export default Failed
