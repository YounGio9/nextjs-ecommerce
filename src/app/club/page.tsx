import Image from "next/image"
import React from "react"

import image from "../../assets/girWithBag.jpg"

/**
 * Club presenattion page
 * @return {React.JSX.Element}
 */
function Club() {
   return (
      <section className='flex justify-center bg-cornflower-blue'>
         <article className='flex flex-col items-center py-16 max-w-7xl text-white lg:py-24'>
            <p className='w-fit text-4xl font-bold text-center lg:mb-12 lg:text-6xl lg:whitespace-nowrap'>
               Sérieux,
               <br className='lg:hidden' /> à quoi ça sert <br />
               d’acheter son sac ?
            </p>
            <div className='flex flex-col w-full lg:flex-row-reverse'>
               <div className='relative my-8 w-full h-auto lg:basis-4/5 lg:my-0 lg:h-80'>
                  {" "}
                  <Image
                     alt=''
                     src={image.src}
                     width='200'
                     height={200}
                     className='w-80 h-auto lg:ml-6 -rotate-6'
                  />
               </div>
               <div className='px-7 lg:px-0'>
                  <p>Chez LuxuryBag,</p>
                  <p>
                     nous sommes persuadés que la vraie valeur de ton sac réside dans
                     l’utilisation que tu en fais.
                  </p>
                  <p className='mt-6 font-semibold text-yellow'>
                     La vraie valeur de ton sac, c’est toi !
                  </p>
                  <p>
                     C’est pourquoi, nous avons imaginé une solution pour ceux qui pensent
                     comme nous.
                  </p>
                  <p className='my-6'>
                     Posséder n’est plus une fin en soi, et surtout quand on parle de
                     mode.
                  </p>
                  {/* <p>
                     Au lieu de t’expliquer pourquoi il est cool de louer son smartphone,
                     nous allons t’expliquer{" "}
                     <span className='font-semibold text-yellow'>
                        pourquoi il est absurde de l’acheter.
                     </span>
                  </p> */}
               </div>
            </div>
         </article>
      </section>
   )
}

export default Club
