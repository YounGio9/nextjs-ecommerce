import React from "react"
import swag from "../assets/swag-cover.jpg"
import Image from "next/image"

/**
 * Presentation of club & blog page
 * @return {React.JSX.Element}
 */
function Knowing() {
   return (
      <div className='flex w-full mt-6 flex-col items-center py-14 text-center bg-cornflower-blue lg:py-24'>
         <h1 className='max-w-4xl text-4xl font-medium text-white lg:text-6xl'>
            Faisons plus ample connaissance
         </h1>
         <div className='flex flex-col gap-9 px-9 mt-9 max-w-6xl lg:flex-row lg:mt-14'>
            <div className='border bg-white border-1 border-black rounded-lg overflow-hidden'>
               <div className=''>
                  <Image
                     src={swag.src}
                     width={"1000"}
                     height={"1000"}
                     className='w-full h-auto'
                     alt={""}
                  />
               </div>
               <div className=' bg-white py-9 px-6 lg:py-11 lg:px-24'>
                  <h1 className='text-2xl font-bold'> L’histoire de notre club</h1>
                  <h2 className='text-lg text-gray-700'>
                     Sérieux, à quoi ça sert d’acheter ton sac ? Notre mission : en finir
                     avec l’achat !
                  </h2>
                  <a href='/club'>
                     <p className='inline py-1 pt-2 text-lg font-medium bg-luxury-green'>
                        Voir la suite
                     </p>
                  </a>
               </div>
            </div>
            <div className='border bg-white border-1 h-full border-black rounded-lg overflow-hidden'>
               <div>
                  <Image
                     src={swag.src}
                     width={"1000"}
                     height={"1000"}
                     className='w-full h-auto'
                     alt={""}
                  />
               </div>
               <div className=' bg-white py-9 px-6 lg:py-11 lg:px-24'>
                  <h1 className='text-2xl font-bold'>Notre blog</h1>
                  <h2 className='text-lg text-gray-700'>
                     On a cherché pour toi les meilleures astuces, nouveautés et
                     actualités du moment. Servies sur un plateau !
                  </h2>
                  <a href='/club'>
                     <p className='inline py-1 pt-2 text-lg font-medium bg-luxury-green'>
                        Voir la suite
                     </p>
                  </a>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Knowing
