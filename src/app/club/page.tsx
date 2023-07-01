"use client"
import Image from "next/image"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper"
import image from "../../assets/luxuryBag.png"
import clubgroup from "../../assets/clubgroup.png"
import Proof from "@/components/Proof"

/**
 * Club presenattion page
 * @return {React.JSX.Element}
 */
function Club() {
   const reasons: { reason: string; conclusion: string }[] = [
      {
         reason: "Nous avons vérifié, un sac Louis Vuitton c’est les Seychelles.",
         conclusion: "Autant faire de suite tes bagages, non ?",
      },
      {
         reason: "Quand tu voudras revendre ton sac à main, euh... comment te dire...",
         conclusion: "Autant investir dans les NFTs, tu gagneras plus d’argent.",
      },
      {
         reason:
            "Posséder un sac à main ! Alors qu’à la moindre maladresse ou mauvaise rencontre, il faudra que tu repasses à la caisse ?",
         conclusion: "Non merci.",
      },
      {
         reason:
            "N’oublie jamais que la durée de vie d’un sac à main est parfois plus courte que ton engagement. Un sac à main branché en permanence ? Hmmmm...",
         conclusion: "Dans les années 2000 on appelait ça un téléphone fixe !",
      },
      {
         reason:
            "Près de 5 milliards de sacs à main sur la Terre, nous sommes presque sûrs que tu seras d’accord qu’il y en a assez pour qu’on se les file tour à tour. ",
         conclusion: "Rien ne se perd, tout se transforme.",
      },
   ]
   return (
      <>
         <section className='flex items-center justify-center'>
            <div className='flex flex-col lg:flex-row gap-x-8 px-14 w-full max-w-lg lg:mt-4 lg:max-w-[82rem]'>
               <Image
                  alt=''
                  src={clubgroup.src}
                  width='800'
                  height={"600"}
                  className=' w-80 sm:w-96 md:w-[450px] lg:w-[580px] mb-6'
               />
               <div className='flex flex-col items-center text-center lg:basis-1/2 lg:items-start lg:mt-10 lg:text-left'>
                  <h2 className='my-2 text-2xl font-medium lg:my-0 lg:mb-2 lg:text-3xl lg:font-bold'>
                     C’est l’histoire...
                  </h2>
                  <p className='lg:text-lg'>
                     De 4 filles dans le vent, passionnés de mode et de luxe , qui
                     voyaient augmenter le prix de leurs sacs à main plus vite que celui
                     de leurs loyers.
                  </p>
                  <h2 className='my-2 text-2xl font-medium lg:my-0 lg:mt-12 lg:mb-2 lg:text-3xl lg:font-bold'>
                     Elles ne voulaient pas débourser 1000 €
                  </h2>
                  <p className='lg:text-lg'>
                     La première lance :<br className='lg:hidden' /> « Et si on n’achetait
                     plus son sac ».
                     <br />
                     Ni une ni deux, après des échanges passionnés, elles décident
                     d’imaginer un modèle où l’on paierait uniquement l’usage que l’on
                     fait de son sac à main.
                  </p>
                  <h2 className='my-2 text-2xl font-medium lg:my-0 lg:mt-12 lg:mb-2 lg:text-3xl lg:font-bold'>
                     Cela tombait bien !
                  </h2>
                  <p className='lg:text-lg'>
                     Cela faisait dix ans qu’elles étaient dans le luxe.{" "}
                     <br className='hidden lg:block' />
                     Les sacs Louis Vuitton,...
                     <br />
                     Cela leur parlait.
                  </p>
               </div>
            </div>
         </section>

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
                        width='1000'
                        height='1000'
                        className='w-80 h-auto lg:ml-6 -rotate-6'
                     />
                  </div>
                  <div className='px-7 lg:px-0'>
                     <p>Chez LuxuryGreen,</p>
                     <p>
                        nous sommes persuadés que la vraie valeur de ton sac réside dans
                        l’utilisation que tu en fais.
                     </p>
                     <p className='mt-6 font-semibold text-luxury-green'>
                        La vraie valeur de ton sac, c’est toi !
                     </p>
                     <p>
                        C’est pourquoi, nous avons imaginé une solution pour ceux qui
                        pensent comme nous.
                     </p>
                     <p className='my-6'>
                        Posséder n’est plus une fin en soi, et surtout quand on parle de
                        mode.
                     </p>

                     <p>
                        Au lieu de t’expliquer pourquoi il est cool de louer son
                        smartphone, nous allons t’expliquer{" "}
                        <span className='font-semibold text-luxury-green'>
                           pourquoi il est absurde de l’acheter.
                        </span>
                     </p>
                  </div>
               </div>
            </article>
         </section>
         <section className='bg-repeat bg-checkered bg-fixed flex relative flex-col items-center pb-16'>
            <div className='flex absolute -top-5 grow ml-12'>
               <p className='self-start py-1 mr-4 text-xl font-extrabold bg-luxury-green -rotate-3 lg:text-3xl'>
                  Voici la preuve par 5
               </p>
               <svg
                  width='54'
                  height='99'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  role='img'
                  className='mt-4'
               >
                  <path
                     d='M44.672 97.575c-2.06-.238-4.125-.547-6.177-.696-2.094-.15-4.174-.142-6.771-.22.68-.594 1.01-.953 1.402-1.214 7.39-4.932 13.069-11.71 17.396-19.89 2.047-3.87 2.69-8.367 2.435-13.168-.224-4.22-1.905-7.86-4.892-10.98-3.083-3.218-6.383-5.932-10.752-6.56-.023-.973-.054-1.851-.062-2.725-.037-4.158-1.011-8.138-3.49-11.818-2.203-3.273-5.054-5.38-8.477-6.408-.83-.25-1.663-.455-2.58-.701-.238-2.14-.634-4.29-1.322-6.387a23.983 23.983 0 0 0-2.93-5.963c-1.23-1.815-2.73-3.442-4.465-4.657-1.735-1.215-3.702-1.965-5.594-2.708C6.16 2.605 3.907 1.831 1.664.995c-.23-.086-.527.201-.769.811.775.26 1.568.486 2.336.807 3.12 1.3 6.356 2.3 9.32 4.03 5.373 3.134 8.89 10.006 8.759 16.406-.82.136-1.7.24-2.554.43-1.55.344-3.027.938-4.26 1.912-1.104.88-1.974 2.052-2.55 3.432-.931 2.223-1.436 5.798 1.06 7.726.537.411 1.144.666 1.754.737.61.07 1.2-.046 1.701-.337 1.511-.859 2.654-2.285 3.6-3.797a16.434 16.434 0 0 0 2.034-4.887c.248-1.048.41-2.133.484-3.24 7.831-.394 14.892 9.78 13.188 19.167-2.6 1.153-5.102 2.026-7.353 3.33-2.33 1.36-3.43 3.876-3.569 6.941-.048 1.194.163 2.517.805 3.636.298.514.689.965 1.142 1.32.453.354.958.603 1.477.729 2.391.61 4.24-1.265 5.37-3.109a16.172 16.172 0 0 0 1.534-3.534c.73-2.298 1.302-4.68 1.933-6.996.202-.057.35-.152.506-.134 6.287.758 13.339 8.477 13.956 15.339.35 3.85.1 7.615-1.353 10.824-4.562 10.08-11.086 18.102-20.487 22.982-.703.366-1.502.564-2.284.756-.53.127-1.1.111-2.182.21.657-1.493 1.044-2.68 1.646-3.689 2.006-3.36 4.104-6.646 6.134-9.988.445-.733.755-1.577 1.125-2.368l-.436-.42c-.372.18-.881.241-1.097.555a1061.914 1061.914 0 0 0-8.259 12.045 7.278 7.278 0 0 0-.75 1.607c-.803 2.24-.137 3.417 2.241 3.921.676.126 1.35.184 2.016.174 4.838.056 9.675.098 14.511.126.791.005 1.563-.126 2.344-.194l-.066-.68Zm-8.975-51.308c-.868 4.272-1.692 7.995-3.827 10.983-.457.64-1.165 1.128-1.873 1.448-1.87.843-3.549-.336-3.915-2.709-.33-2.138.216-3.946 1.259-5.485 1.857-2.73 4.63-3.783 8.356-4.237Zm-14.21-21.668c-.392 4.611-1.958 7.98-4.554 10.68-.35.34-.77.585-1.235.725-1.516.493-3.19-.717-3.427-2.56a6.632 6.632 0 0 1 .192-2.66c1.31-4.373 4.374-6.16 9.027-6.18l-.003-.005Z'
                     fill='#000'
                  ></path>
               </svg>
            </div>
            <div className='hidden flex-wrap gap-x-4 gap-y-10 justify-center mt-28 max-w-5xl lg:flex'>
               {reasons.map((reason, idx) => (
                  <Proof {...reason} number={idx + 1} key={reason.conclusion} />
               ))}
            </div>

            <div className='w-full mt-6'>
               <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={50}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
               >
                  {reasons.map((reason, idx) => (
                     <SwiperSlide
                        key={idx}
                        className=' flex items-center justify-center mt-8'
                     >
                        <Proof {...reason} number={idx + 1} key={reason.conclusion} />
                     </SwiperSlide>
                  ))}
               </Swiper>
            </div>
         </section>
      </>
   )
}

export default Club
