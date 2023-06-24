import Argument from "@/components/Argument"
import BestSales from "@/components/BestSellers"
import CustomButtom from "@/components/CustomButtom"
import Presentation from "@/components/Presentation"
import React from "react"
import Knowing from "@/components/Knowing"

/**
 *
 * @return {React.JSX.Element}: The home page .
 */
export default function Home(): React.JSX.Element {
   const argumentsTexts: string[] = [
      "Le tel de tes rêves sans casser ton PEL",
      "Des cadeaux de bienvenue",
      "Une assurance casse, dommages & vol incluse",
      "La liberté de changer de tel sans payer plus",
      "Un tel garanti tous les jours",
      "Lutter contre le gaspillage électronique",
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
               Si tu hésites encore à passer chez bags.club, on croit qu’on a les
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
                     <svg
                        width='113'
                        height='60'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        role='img'
                        className='hidden mb-10 lg:block'
                     >
                        <path
                           d='M0 3h113v29.74C113 47.794 100.679 60 85.48 60H0V3Z'
                           fill='#000'
                        ></path>
                        <path
                           d='M.559.559H112.44v29.18c0 14.742-12.066 26.702-26.961 26.702H.559V.56Z'
                           fill='#fff'
                           stroke='#000'
                           strokeWidth='1.118'
                        ></path>
                        <path
                           d='M33.354 12.575c-2.8 0-4.815.969-6.272 2.052-.864-1.558-2.475-2.052-4.182-2.052-2.8 0-4.641 1.045-5.87 2.014v-1.824h-3.279v11.19h3.28v-6.592c.94-1.007 2.781-1.976 4.68-1.976 2.34 0 2.743 1.235 2.743 3.61v4.959h3.28l.038-6.27c0-.21 0-.4-.019-.59.997-.892 2.685-1.71 4.412-1.71 2.34 0 2.742 1.236 2.742 3.61v4.96h3.28l.039-6.27c-.039-4.047-2.34-5.111-4.872-5.111ZM47.215 24.146c4.661 0 7.826-1.672 7.826-5.776 0-4.123-3.165-5.795-7.826-5.795-4.68 0-7.825 1.672-7.825 5.795 0 4.104 3.145 5.776 7.825 5.776Zm0-2.717c-3.05 0-4.546-.741-4.546-3.06 0-2.336 1.497-3.077 4.546-3.077 3.03 0 4.527.74 4.527 3.078 0 2.318-1.496 3.059-4.527 3.059ZM65.209 12.575c-2.436 0-4.412.665-5.64 1.938V8.756h-3.28v15.2h3.28v-1.748c1.228 1.273 3.204 1.938 5.64 1.938 3.625 0 6.732-1.501 6.732-5.776s-3.107-5.795-6.732-5.795Zm-1.094 8.854c-2.934 0-4.545-.855-4.545-3.06 0-2.222 1.61-3.077 4.545-3.077 2.935 0 4.527.855 4.527 3.078 0 2.204-1.592 3.059-4.526 3.059ZM73.185 8.756v2.83h3.28v-2.83h-3.28Zm0 4.009v11.19h3.28v-11.19h-3.28ZM78 8.756v15.2h3.28v-15.2H78ZM90.162 21.505c-2.187 0-3.913-.59-4.278-2.375h12.2c0-5.092-3.434-6.555-7.73-6.555-4.585 0-7.826 1.672-7.826 5.795 0 4.104 3.337 5.776 7.634 5.776 4.181 0 6.981-1.35 7.73-4.2H94.63c-.825 1.14-2.206 1.559-4.47 1.559Zm.172-6.46c2.072 0 3.683.437 4.24 2.014h-8.575c.518-1.577 2.091-2.014 4.335-2.014ZM13.751 44.127v2.546h3.28v-2.546h-3.28ZM18.036 41.087c0 4.104 3.146 5.776 7.826 5.776 4.22 0 7.192-1.368 7.73-4.655h-3.357c-.441 1.444-1.995 1.938-4.373 1.938-2.82 0-4.546-.74-4.546-3.059 0-2.337 1.726-3.078 4.546-3.078 2.378 0 3.932.494 4.373 1.938h3.357c-.538-3.287-3.51-4.655-7.73-4.655-4.68 0-7.826 1.672-7.826 5.795ZM34.842 31.473v15.2h3.28v-15.2h-3.28ZM52.086 35.482v6.27c-1.017 1.178-3.395 2.3-5.601 2.3-2.705 0-3.51-1.236-3.51-3.61v-4.96h-3.3l-.038 6.194c.038 4.123 2.858 5.187 5.87 5.187 2.742 0 4.967-.893 6.579-2.147v1.957h3.28v-11.19h-3.28ZM65.733 35.292c-2.436 0-4.411.665-5.639 1.938v-5.757h-3.28v15.2h3.28v-1.748c1.228 1.273 3.203 1.938 5.64 1.938 3.624 0 6.732-1.5 6.732-5.776 0-4.275-3.108-5.795-6.733-5.795Zm-1.093 8.854c-2.935 0-4.546-.855-4.546-3.059 0-2.223 1.611-3.078 4.546-3.078 2.935 0 4.527.855 4.527 3.078 0 2.204-1.592 3.06-4.527 3.06Z'
                           fill='#000'
                        ></path>
                     </svg>
                     <div className='flex justify-center items-center mt-6 w-16 h-0 lg:hidden'>
                        <svg
                           width='113'
                           height='60'
                           fill='none'
                           xmlns='http://www.w3.org/2000/svg'
                           role='img'
                           viewBox='0 0 110 110'
                        >
                           <path
                              d='M0 3h113v29.74C113 47.794 100.679 60 85.48 60H0V3Z'
                              fill='#000'
                           ></path>
                           <path
                              d='M.559.559H112.44v29.18c0 14.742-12.066 26.702-26.961 26.702H.559V.56Z'
                              fill='#fff'
                              stroke='#000'
                              strokeWidth='1.118'
                           ></path>
                           <path
                              d='M33.354 12.575c-2.8 0-4.815.969-6.272 2.052-.864-1.558-2.475-2.052-4.182-2.052-2.8 0-4.641 1.045-5.87 2.014v-1.824h-3.279v11.19h3.28v-6.592c.94-1.007 2.781-1.976 4.68-1.976 2.34 0 2.743 1.235 2.743 3.61v4.959h3.28l.038-6.27c0-.21 0-.4-.019-.59.997-.892 2.685-1.71 4.412-1.71 2.34 0 2.742 1.236 2.742 3.61v4.96h3.28l.039-6.27c-.039-4.047-2.34-5.111-4.872-5.111ZM47.215 24.146c4.661 0 7.826-1.672 7.826-5.776 0-4.123-3.165-5.795-7.826-5.795-4.68 0-7.825 1.672-7.825 5.795 0 4.104 3.145 5.776 7.825 5.776Zm0-2.717c-3.05 0-4.546-.741-4.546-3.06 0-2.336 1.497-3.077 4.546-3.077 3.03 0 4.527.74 4.527 3.078 0 2.318-1.496 3.059-4.527 3.059ZM65.209 12.575c-2.436 0-4.412.665-5.64 1.938V8.756h-3.28v15.2h3.28v-1.748c1.228 1.273 3.204 1.938 5.64 1.938 3.625 0 6.732-1.501 6.732-5.776s-3.107-5.795-6.732-5.795Zm-1.094 8.854c-2.934 0-4.545-.855-4.545-3.06 0-2.222 1.61-3.077 4.545-3.077 2.935 0 4.527.855 4.527 3.078 0 2.204-1.592 3.059-4.526 3.059ZM73.185 8.756v2.83h3.28v-2.83h-3.28Zm0 4.009v11.19h3.28v-11.19h-3.28ZM78 8.756v15.2h3.28v-15.2H78ZM90.162 21.505c-2.187 0-3.913-.59-4.278-2.375h12.2c0-5.092-3.434-6.555-7.73-6.555-4.585 0-7.826 1.672-7.826 5.795 0 4.104 3.337 5.776 7.634 5.776 4.181 0 6.981-1.35 7.73-4.2H94.63c-.825 1.14-2.206 1.559-4.47 1.559Zm.172-6.46c2.072 0 3.683.437 4.24 2.014h-8.575c.518-1.577 2.091-2.014 4.335-2.014ZM13.751 44.127v2.546h3.28v-2.546h-3.28ZM18.036 41.087c0 4.104 3.146 5.776 7.826 5.776 4.22 0 7.192-1.368 7.73-4.655h-3.357c-.441 1.444-1.995 1.938-4.373 1.938-2.82 0-4.546-.74-4.546-3.059 0-2.337 1.726-3.078 4.546-3.078 2.378 0 3.932.494 4.373 1.938h3.357c-.538-3.287-3.51-4.655-7.73-4.655-4.68 0-7.826 1.672-7.826 5.795ZM34.842 31.473v15.2h3.28v-15.2h-3.28ZM52.086 35.482v6.27c-1.017 1.178-3.395 2.3-5.601 2.3-2.705 0-3.51-1.236-3.51-3.61v-4.96h-3.3l-.038 6.194c.038 4.123 2.858 5.187 5.87 5.187 2.742 0 4.967-.893 6.579-2.147v1.957h3.28v-11.19h-3.28ZM65.733 35.292c-2.436 0-4.411.665-5.639 1.938v-5.757h-3.28v15.2h3.28v-1.748c1.228 1.273 3.203 1.938 5.64 1.938 3.624 0 6.732-1.5 6.732-5.776 0-4.275-3.108-5.795-6.733-5.795Zm-1.093 8.854c-2.935 0-4.546-.855-4.546-3.059 0-2.223 1.611-3.078 4.546-3.078 2.935 0 4.527.855 4.527 3.078 0 2.204-1.592 3.06-4.527 3.06Z'
                              fill='#000'
                           ></path>
                        </svg>
                     </div>
                     {Array(6)
                        .fill(0)
                        .map((_, idx) => (
                           <div
                              key={idx}
                              className={`flex justify-between mt-1 items-center ${
                                 idx == 5 ? "mb-0" : ""
                              }`}
                           >
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
                                    fill='#FFFD70'
                                    stroke='#000'
                                    strokeMiterlimit='10'
                                    strokeLinecap='square'
                                 ></path>
                              </svg>
                           </div>
                        ))}

                     <a href='/smartphone'>
                        <button className='transition-all py-2.5 px-6 rounded-full relative active:shadow-[0_0_black] active:translate-x-1 active:translate-y-1 bg-yellow has-hover:hover:text-white has-hover:hover:bg-cornflower-blue active:text-white active:bg-cornflower-blue hidden text-lg font-medium whitespace-nowrap lg:inline-block shadow-[4px_4px_black] border border-black'>
                           <div className=''>Je choisis mon tel</div>
                        </button>
                     </a>
                  </div>
               </div>
            </div>
         </div>

         <div className='my-12 lg:hidden'>
            <CustomButtom background='yellow' color='black'>
               <span className='font-semibold'> Je choisis mon tel</span>
            </CustomButtom>
         </div>
         <Knowing />
      </main>
   )
}
