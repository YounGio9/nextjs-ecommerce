import React from "react"

/**
 * Checked svg component
 * @return {React.JSX.Element}
 */
function Checked() {
   return (
      <svg
         width='33'
         height='26'
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
         role='img'
      >
         <path
            d='m2 13.267 3-2.934 6 4.4S17.6 6.667 30.5 3L32 5.933S17.9 12.387 11 25L2 13.267Z'
            fill='#000'
            stroke='#000'
            strokeMiterlimit='10'
            strokeLinecap='square'
         ></path>
         <path
            d='m1 11.267 3-2.934 6 4.4S16.6 4.667 29.5 1L31 3.933S16.9 10.387 10 23L1 11.267Z'
            fill='#a9d110'
            stroke='#000'
            strokeMiterlimit='10'
            strokeLinecap='square'
         ></path>
      </svg>
   )
}

export default Checked
