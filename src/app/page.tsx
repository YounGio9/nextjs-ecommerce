import Argument from "@/components/Argument"
import BestSales from "@/components/BestSellers"
import CustomButtom from "@/components/CustomButtom"
import Presentation from "@/components/Presentation"
import React from "react"
import Knowing from "@/components/Knowing"
import Checked from "@/assets/svg/Checked"
import Image from "next/image"
import logo from "../assets/logo.jpg"

/**
 *
 * @return {React.JSX.Element}: The home page .
 */
export default function Home(): React.JSX.Element {
   const argumentsTexts: string[] = [
      "Le sac de tes rêves sans casser ton PEL",
      "Des cadeaux de bienvenue",
      "Une assurance dommages & vol incluse",
      "La liberté de changer de sac sans payer plus",
      "Un sac garanti tous les jours",
   ]

   return (
      <main className='flex min-h-[90vh] md:min-h-screen flex-col items-center justify-between'>
         <Presentation />
         <BestSales />
         <div className='px-6 my-12 text-4xl font-semibold text-center lg:my-24 lg:text-6xl'>
            <h2>
               Louer <span className='italic font-normal'>vs </span>acheter
            </h2>
            <p className='mt-6 text-base font-normal'>
               Si tu hésites encore à passer chez LuxuryGreen, on croit qu’on a les
               arguments.
            </p>
         </div>
         <div className='relative w-full mb-16 max-w-7xl'>
            <div className='flex relative flex-col-reverse'>
               <div className=''></div>
               <div className='relative rounded-lg border transform-gpu border-black bg-white flex flex-col gap-y-3 justify-between py-4 pl-5 bg-white rounded-none border-black lg:gap-y-6 lg:py-16 lg:pl-16 lg:rounded-3xl'>
                  <div className='flex justify-between items-center'>
                     <p className='text-xl font-bold lg:text-4xl'>
                        <span className='w-full'>6 arguments clés</span>
                     </p>
                     <p className='basis-1/6 font-normal text-center lg:basis-1/3 lg:text-2xl'>
                        Achat
                     </p>
                  </div>
                  {argumentsTexts.map((text) => (
                     <Argument key={text} text={text} />
                  ))}
               </div>
            </div>
            <div className='absolute inset-x-[64%] -top-4 lg:inset-x-[44%] lg:-top-10'>
               <div className='flex relative flex-col-reverse'>
                  <div className=''></div>
                  <div className='relative rounded-lg border transform-gpu border-black bg-white drop-shadow-black flex flex-col gap-y-9 items-center px-1 pt-4 w-fit rounded-2xl drop-shadow-none lg:gap-y-6 lg:py-12 lg:px-16 bg-cosmic-latte lg:drop-shadow-black'>
                     <Image
                        src={logo}
                        alt=''
                        width={200}
                        height={200}
                        className='w-[150px] -mt-10 h-auto hidden lg:block'
                     />
                     <div className='flex justify-center items-center mt-6 w-16 h-0 lg:hidden'>
                        <Image
                           src={logo}
                           alt=''
                           width={200}
                           height={200}
                           className='w-100 h-auto'
                        />
                     </div>
                     {Array(5)
                        .fill(0)
                        .map((_, idx) => (
                           <div
                              key={idx}
                              className={`flex justify-between mt-1 items-center ${
                                 idx == 5 ? "mb-0" : ""
                              }`}
                           >
                              <Checked />
                           </div>
                        ))}

                     <a href='/smartphone'>
                        <button className='transition-all py-2.5 px-6 rounded-full relative active:shadow-[0_0_black] active:translate-x-1 active:translate-y-1 bg-swag-yellow has-hover:hover:text-white has-hover:hover:bg-cornflower-blue active:text-white active:bg-cornflower-blue hidden text-lg font-medium whitespace-nowrap lg:inline-block shadow-[4px_4px_black] border border-black'>
                           <div className=''>Je choisis mon sac</div>
                        </button>
                     </a>
                  </div>
               </div>
            </div>
         </div>

         <div className='my-12 lg:hidden'>
            <CustomButtom background='yellow' color='black'>
               <span className='font-semibold'> Je choisis mon sac</span>
            </CustomButtom>
         </div>
         <Knowing />
      </main>
   )
}
