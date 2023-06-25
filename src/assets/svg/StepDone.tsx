import React from "react"

/**
 * Svg used to mark a step as done
 * @return {React.JSX.Element}
 */
function StepDone() {
   return (
      <svg
         width='20'
         height='20'
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
         role='img'
      >
         <path
            d='m20 4.5-1-2c-8.625 2.5-13 8-13 8l-4-3-2 2 6 8c4.625-8.625 14-13 14-13Z'
            fill='#fff'
         ></path>
      </svg>
   )
}

export default StepDone
