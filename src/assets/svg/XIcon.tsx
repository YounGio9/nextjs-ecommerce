import React from "react"

/**
 * X Icon (close X)
 * @return {React.JSX.Element}
 */
function XIcon() {
   return (
      <svg
         width='30'
         height='30'
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
         role='img'
      >
         <g clipPath='url(#cross_svg__a)' fill='#000'>
            <path d='M23.839 4.643 4.394 24.09l1.767 1.768L25.607 6.41l-1.768-1.768Z'></path>
            <path d='M25.607 23.588 6.16 4.142 4.393 5.91 23.84 25.355l1.768-1.767Z'></path>
         </g>
         <defs>
            <clipPath id='cross_svg__a'>
               <path fill='#fff' d='M0 0h30v30H0z'></path>
            </clipPath>
         </defs>
      </svg>
   )
}

export default XIcon
