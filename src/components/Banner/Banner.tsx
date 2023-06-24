"use client"

import XIcon from "@/assets/svg/XIcon"
import User from "@/assets/svg/User"
import { useBannerContext } from "@/contexts/BannerContext"
import Link from "next/link"
import React from "react"
import CustomButtom from "../CustomButtom"
import SpecialBanner from "./SpecialBanner"
import Redirect from "@/assets/svg/Redirect"
import { FaBars } from "react-icons/fa"

/**
 * Banner Component that include navigation links and website logo
 * @return {React.JSX.Element}: The entire Banner of the website.
 */
function Banner(): React.JSX.Element {
   const sections = [
      { name: "Nos sacs", link: "shop" },
      { name: "Le club", link: "club" },
      { name: "Le blog", link: "blog" },
   ]

   const { menuOpen, toggleMenu } = useBannerContext()
   return (
      <nav
         className={`pt-3 lg:pt-0 ${
            menuOpen
               ? "fixed bg-white w-full h-screen z-50 lg:static lg:h-fit pt-10 lg:pt-0"
               : ""
         }`}
      >
         <div className='relative flex justify-between items-center lg:text-lg lg:py-5 lg:px-6 lg:mt-0 px-4 pb-4'>
            {menuOpen ? (
               <div className='flex items-center lg:hidden'>
                  <button
                     onClick={toggleMenu}
                     className={`flex justify-between lg:hidden`}
                  >
                     <XIcon />
                  </button>
               </div>
            ) : (
               <div className='flex items-center lg:hidden'>
                  <button
                     onClick={toggleMenu}
                     className={`flex justify-between lg:hidden `}
                  >
                     <FaBars size={25} />
                  </button>
               </div>
            )}
            <Link href={"/"} className='text-3xl font-bold'>
               <div className={`flex flex-col items-center font-semibold font-header`}>
                  <span>LuxuryGreen</span>
               </div>
            </Link>
            <div className='hidden lg:flex gap-x-6'>
               {sections.map(({ name, link }) => (
                  <Link
                     key={link}
                     href={`/${link}`}
                     className='flex gap-6 items-center text-2xl font-medium lg:text-lg'
                  >
                     {name}
                  </Link>
               ))}
            </div>
            <div className='flex relative items-center ml-2'>
               <CustomButtom color='black' background='white'>
                  <div className='flex flex-row items-center gap-x-2'>
                     <User />
                     <span className='hidden lg:block'>Espace membre</span>
                  </div>
               </CustomButtom>
            </div>
         </div>
         <div
            className={`flex z-50 flex-col gap-y-9 items-center py-24 w-full h-screen bg-swag-yellow border-t lg:hidden ${
               menuOpen ? "" : "hidden"
            }`}
         >
            {sections.map(({ name, link }) => (
               <Link
                  key={link}
                  className='flex gap-6 items-center text-2xl font-medium lg:text-lg'
                  href={`/${link}`}
                  onClick={toggleMenu}
               >
                  {name}
                  <Redirect />
               </Link>
            ))}
            {/* <CustomButtom color='white' background='red'>
               Espace membre
            </CustomButtom> */}
         </div>
         <SpecialBanner />
      </nav>
   )
}

export default Banner
