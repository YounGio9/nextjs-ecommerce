"use client"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper"
import Image from "next/image"
import CustomButton from "@/components/CustomButton"
import ShopppingList from "@/components/ShoppingList"
import { bestSellers } from "../../../db/bestSellers"
import { useRouter } from "next/navigation"
import Knowing from "@/components/Knowing"
import { Article } from "@/helpers/types"
import { types } from "@/helpers"
import cover from "../../../assets/replacement.png"
import Checked from "@/assets/svg/Checked"
import Failed from "@/assets/svg/Failed"

/**
 * Return single article page
 * @return {React.JSX.Element}:
 */
function ArticlePage({ params }: { params: { bagId: string } }) {
   const bagId = parseInt(params.bagId)

   const article = bestSellers.find(
      (article) => (article.id as number) === bagId
   ) as Article
   const router = useRouter()

   const handleClick = () => {
      localStorage.setItem("article", JSON.stringify(article))
      router.push("/commander")
   }
   return (
      <>
         <div className='flex flex-col lg:flex-row'>
            {/* {params.bagId} */}
            <div className='grow'>
               <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={50}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  onSlideChange={() => console.log("slide change")}
                  onSwiper={(swiper) => console.log(swiper)}
               >
                  {Array(1)
                     .fill(article)
                     .map((img: types.Article, idx) => (
                        <SwiperSlide
                           key={idx}
                           className=' flex items-center justify-center mt-8'
                        >
                           <Image
                              width='400'
                              key={img.cover}
                              height='400'
                              src={img.cover}
                              alt={""}
                              className='h-auto w-[200px] lg:w-[350px]'
                           />
                        </SwiperSlide>
                     ))}
               </Swiper>
               <hr className='h-0 border-t mt-2 w-full lg:hidden border-gray' />
            </div>

            <div className='lg:flex lg:max-w-lg'>
               <div className='flex flex-col gap-4 items-start p-8 lg:w-full'>
                  <span>
                     Ton nouveau sac s’appelle <br />
                     <strong className='font-semibold'> {article.name} </strong>
                  </span>
                  <p className='mt-2 bg-luxury-green'>
                     <span className='text-3xl font-bold'>37,90&nbsp;€</span>
                     <span className='font-semibold'>/mois engagement 20 mois</span>
                  </p>
                  <p>
                     <span>
                        <span className='font-bold'>99,00&nbsp;€ </span> d’apport initial
                     </span>
                  </p>
                  <div className='relative py-4 px-6 text-white bg-black rounded-lg mb-8'>
                     <svg
                        width='24'
                        height='26'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        role='img'
                        className='absolute top-1/2 -left-3 -translate-y-1/2'
                     >
                        <path
                           d='m8.663 10.932.19-.08.08-.19L12 3.3l3.068 7.363.08.19.19.08L22.7 14l-7.363 3.068-.19.08-.08.19L12 24.7l-3.068-7.363-.08-.19-.19-.08L1.3 14l7.363-3.068Z'
                           fill='#000'
                           stroke='#000'
                        ></path>
                        <path
                           d='m8.663 8.932.19-.08.08-.19L12 1.3l3.068 7.363.08.19.19.08L22.7 12l-7.363 3.068-.19.08-.08.19L12 22.7l-3.068-7.363-.08-.19-.19-.08L1.3 12l7.363-3.068Z'
                           fill='#FFF95F'
                           stroke='#000'
                        ></path>
                     </svg>
                     <svg
                        width='24'
                        height='26'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        role='img'
                        className='absolute -bottom-3 left-2/3'
                     >
                        <path
                           d='m8.663 10.932.19-.08.08-.19L12 3.3l3.068 7.363.08.19.19.08L22.7 14l-7.363 3.068-.19.08-.08.19L12 24.7l-3.068-7.363-.08-.19-.19-.08L1.3 14l7.363-3.068Z'
                           fill='#000'
                           stroke='#000'
                        ></path>
                        <path
                           d='m8.663 8.932.19-.08.08-.19L12 1.3l3.068 7.363.08.19.19.08L22.7 12l-7.363 3.068-.19.08-.08.19L12 22.7l-3.068-7.363-.08-.19-.19-.08L1.3 12l7.363-3.068Z'
                           fill='#FFF95F'
                           stroke='#000'
                        ></path>
                     </svg>
                     <svg
                        width='24'
                        height='26'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        role='img'
                        className='absolute -top-3 right-0 -translate-x-6'
                     >
                        <path
                           d='m8.663 10.932.19-.08.08-.19L12 3.3l3.068 7.363.08.19.19.08L22.7 14l-7.363 3.068-.19.08-.08.19L12 24.7l-3.068-7.363-.08-.19-.19-.08L1.3 14l7.363-3.068Z'
                           fill='#000'
                           stroke='#000'
                        ></path>
                        <path
                           d='m8.663 8.932.19-.08.08-.19L12 1.3l3.068 7.363.08.19.19.08L22.7 12l-7.363 3.068-.19.08-.08.19L12 22.7l-3.068-7.363-.08-.19-.19-.08L1.3 12l7.363-3.068Z'
                           fill='#FFF95F'
                           stroke='#000'
                        ></path>
                     </svg>
                     <span>
                        <strong className='font-semibold'>Une fois membre</strong> tu peux
                        changer de sac
                        <strong className='font-semibold'>
                           &nbsp; sans apport tous les mois.
                        </strong>
                     </span>
                  </div>
                  <ul className='flex flex-col gap-3 my-4 lg:hidden'>
                     <li className='flex flex-row gap-3 items-center mb-3'>
                        <div>
                           <svg
                              width='24'
                              height='23'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                              role='img'
                           >
                              <path
                                 d='m9 15 2 2 5-5M6 1v3M18 1v3M1 8h22'
                                 stroke='#000'
                                 stroke-width='2'
                                 stroke-miterlimit='10'
                                 strokeLinecap='square'
                              ></path>
                              <path
                                 d='M21 3H3a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z'
                                 stroke='#000'
                                 stroke-width='2'
                                 stroke-miterlimit='10'
                                 strokeLinecap='square'
                              ></path>
                           </svg>
                        </div>
                        <div className='font-medium'>30 jours d’essai</div>
                     </li>
                     <li className='flex flex-row gap-3 items-center mb-3'>
                        <div>
                           <svg
                              width='24'
                              height='24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                              role='img'
                           >
                              <path
                                 d='M12 2v20M20.904 12H3.096'
                                 stroke='#000'
                                 stroke-width='2'
                                 stroke-miterlimit='10'
                              ></path>
                              <path
                                 d='M12 2C9 4 5 5 2 5c0 7 3 14 10 17 7-3 10-10 10-17-3 0-7-1-10-3Z'
                                 stroke='#000'
                                 stroke-width='2'
                                 stroke-miterlimit='10'
                                 strokeLinecap='square'
                              ></path>
                           </svg>
                        </div>
                        <div className='font-medium'>Assurance casse et vol incluse</div>
                     </li>
                     <li className='flex flex-row gap-3 items-center mb-3'>
                        <div>
                           <svg
                              width='24'
                              height='24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                              role='img'
                           >
                              <g clip-path='url(#device-sync_svg__a)' fill='#000'>
                                 <path d='M18 6v1h2V6c0-3.309-2.691-6-6-6h-1v2h1c2.206 0 4 1.794 4 4ZM6 18v-1H4v1c0 3.309 2.691 6 6 6h1v-2h-1c-2.206 0-4-1.794-4-4ZM9 0H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm0 12H2V3h7v9ZM22 9h-7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2Zm0 12h-7v-9h7v9Z'></path>
                              </g>
                              <defs>
                                 <clipPath id='device-sync_svg__a'>
                                    <path fill='#fff' d='M0 0h24v24H0z'></path>
                                 </clipPath>
                              </defs>
                           </svg>
                        </div>
                        <div className='font-medium'>Change dès 20 mois gratuitement</div>
                     </li>
                     <li className='flex flex-row gap-3 items-center mb-3'>
                        <div>
                           <svg
                              width='24'
                              height='24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                              role='img'
                           >
                              <path
                                 d='M6 12H3M6 17H5'
                                 stroke='#000'
                                 stroke-width='2'
                                 stroke-miterlimit='10'
                                 strokeLinecap='square'
                              ></path>
                              <path
                                 d='M17.829 18H23v-6l-4-2-1-4h-8v12h2.171'
                                 stroke='#000'
                                 stroke-width='2'
                                 stroke-miterlimit='10'
                              ></path>
                              <path
                                 d='M1 7h5M1 2h9v4M15 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM14 9v2h2'
                                 stroke='#000'
                                 stroke-width='2'
                                 stroke-miterlimit='10'
                                 strokeLinecap='square'
                              ></path>
                           </svg>
                        </div>
                        <div className='font-medium'>Livraison express 24h</div>
                     </li>
                     <li className='flex flex-row gap-3 items-center mb-3'>
                        <div>
                           <svg
                              width='24'
                              height='24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                              role='img'
                           >
                              <g
                                 clip-path='url(#medal_svg__a)'
                                 stroke='#000'
                                 stroke-width='2'
                                 stroke-miterlimit='10'
                              >
                                 <path d='M17.873 11.81 22 20l-4-1-2 3-3.275-7.037M6.127 11.81 2 20l4-1 2 3 3.275-7.037'></path>
                                 <path
                                    d='M12 15a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z'
                                    strokeLinecap='square'
                                 ></path>
                                 <path
                                    d='M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'
                                    strokeLinecap='square'
                                 ></path>
                              </g>
                              <defs>
                                 <clipPath id='medal_svg__a'>
                                    <path fill='#fff' d='M0 0h24v24H0z'></path>
                                 </clipPath>
                              </defs>
                           </svg>
                        </div>
                        <div className='font-medium'>Garantie toute la location</div>
                     </li>
                  </ul>
                  <CustomButton
                     background='yellow'
                     handleClick={handleClick}
                     color='black'
                  >
                     Je commande
                  </CustomButton>
               </div>
            </div>
         </div>
         <div className='flex bg-cornflower-blue'>
            <div className='flex justify-center w-full'>
               <div className='flex flex-col items-center my-14 w-full max-w-5xl lg:py-24'>
                  <h2 className='mx-7 mb-9 text-4xl font-medium text-center text-white lg:mx-40 lg:mb-24 lg:text-6xl lg:text-left'>
                     Remplacement en 48h, le plus rapide jamais fait
                  </h2>

                  <div className='relative w-full h-auto lg:hidden overflow-hidden'>
                     <Image
                        src={cover.src}
                        width={"600"}
                        height={"600"}
                        className='w-full h-auto'
                        alt='side image'
                     />
                  </div>
                  <div className='flex flex-col gap-x-9 lg:flex-row'>
                     <div className='flex justify-center gap-x-3 my-9 lg:hidden'>
                        {/* <CustomButton background='yellow' color='black'>
                           Si tu le casses
                        </CustomButton> */}

                        <CustomButton background='yellow' color='black'>
                           Si on te le voles
                        </CustomButton>
                     </div>
                     <article className='transition-all duration-150 lg:opacity-100 lg:visible'>
                        <p className='hidden mb-5 text-2xl text-white lg:block'>
                           Si tu le &nbsp;
                           <span className='font-bold '>déchire</span>
                        </p>
                        <div className='flex relative flex-col-reverse'>
                           <div className=''></div>
                           <div className='relative rounded-lg border transform-gpu border-black bg-white drop-shadow-black p-6 bg-white rounded-lg lg:block'>
                              <ul className='flex flex-col gap-y-4'>
                                 <li className='flex gap-x-3'>
                                    <Checked />
                                    Vol avec aggression
                                 </li>
                                 <li className='flex gap-x-3'>
                                    <Checked />
                                    Vol avec effraction
                                 </li>
                                 <li className='flex gap-x-3'>
                                    <Checked />
                                    Vol a la tire ou a la sauvette
                                 </li>
                                 <li className='flex gap-x-3'>
                                    <Checked />
                                    Couverture mondiale
                                 </li>
                                 <li className='flex gap-x-3'>
                                    <Failed />
                                    Hors vol par negligence ou perte
                                 </li>
                              </ul>
                              <hr className='h-0 border-t my-7 w-72 border-gray' />
                              <div className='flex justify-between'>
                                 <span>Coût du remplacement</span>
                                 <div className='flex space-x-2 lg:flex-col'>
                                    <span className='font-bold'>199,00&nbsp;€</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </article>
                  </div>
               </div>
            </div>
         </div>
         <ShopppingList
            title='Nos autres sacs'
            articles={bestSellers.slice().splice(0, 4)}
         />
         <div className='flex justify-center mb-6'>
            <CustomButton
               color='black'
               background='yellow'
               handleClick={() => router.push("/shop")}
            >
               Voir tous nos sacs
            </CustomButton>
         </div>
         <Knowing />
      </>
   )
}

export default ArticlePage
