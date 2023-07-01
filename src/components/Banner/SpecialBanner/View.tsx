import Star from "@/assets/svg/Star"
import React from "react"

/**
 * A component which will be duplicated to build SpecialBanner
 * @return {React.JSX.Element}: Benefits of the market.
 */
function View({ texts }: { texts: string[] }): React.JSX.Element {
   return (
      <div className='marquee-content flex'>
         {texts.map((text) => (
            <p key={text} className='flex gap-x-3 items-center ml-2 text-xs font-medium'>
               <span>{text}</span>
               <span>
                  <Star />
               </span>
            </p>
         ))}
      </div>
   )
}

export default View
