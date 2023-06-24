import React from "react"

/**
 * User Icon svg component
 * @return {React.JSX.Element}
 */
function User() {
   return (
      <svg
         width='24'
         height='24'
         fill='none'
         xmlns='http://www.w3.org/2000/svg'
         role='img'
      >
         <path
            d='M19 20.486v-.745a3 3 0 0 0-1.512-2.605l-3.219-1.842M9.727 15.292l-3.215 1.844A3 3 0 0 0 5 19.741v.745'
            stroke='#000'
            strokeWidth='2'
            strokeMiterlimit='10'
         ></path>
         <path
            d='M12 16a4 4 0 0 1-4-4v-2a4 4 0 0 1 8 0v2a4 4 0 0 1-4 4Z'
            stroke='#000'
            strokeWidth='2'
            strokeMiterlimit='10'
            strokeLinecap='square'
         ></path>
         <path
            d='M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Z'
            stroke='#000'
            strokeWidth='2'
            strokeMiterlimit='10'
            strokeLinecap='square'
         ></path>
      </svg>
   )
}

export default User
