import React from "react"

/**
 * Redirect arrow svg component
 * @return {React.JSX.Element}
 */
function Redirect() {
   return (
      <svg
         width='20'
         height='20'
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
         role='img'
         className='lg:hidden'
      >
         <path
            d='M3.832 6.17v.5h7.129l-8.315 8.313-.353.354.353.354 2.663 2.663.354.353.354-.353 8.314-8.315v7.13H19.5V1.5H3.832v4.67Z'
            fill='#000'
            stroke='#000'
         ></path>
         <path
            d='M2.832 5.17v.5H9.96l-8.315 8.313-.353.354.353.354 2.663 2.663.354.353.354-.353 8.314-8.315v7.13H18.5V.5H2.832v4.67Z'
            fill='#fff'
            stroke='#000'
         ></path>
      </svg>
   )
}

export default Redirect
