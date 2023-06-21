"use client"
import React from "react"
import { BsChevronDown, BsChevronRight, BsInstagram, BsWhatsapp } from "react-icons/bs"
import CustomButtom from "./CustomButtom"
import logo from "../assets/logo.png"
import Image from "next/image"

interface menu {
   name: string
   label: string
   options: string[]
}
/**
 *
 * Footer of website. It includes links to shop,
 * contact links and links to some articles.
 * @return {React.JSX.Element}: Website Footer
 */
function Footer() {
   const [activeMenus, setActiveMenus] = React.useState<string[]>([])

   const availableMenus: menu[] = [
      {
         name: "infos",
         label: "A propos du club",
         options: ["Le club", "Le blob", "FAQ"],
      },
      {
         name: "rental",
         label: "Location",
         options: ["Location sacs de louis vuitton", "Location sac a bas prix"],
      },
   ]
   const toggle = (menuName: string): void => {
      if (activeMenus.includes(menuName))
         setActiveMenus((prev) => prev.filter((name) => name != menuName))
      else setActiveMenus((prev) => [...prev, menuName])
   }
   return (
      <footer className='w-full bg-swag-yellow border-black border-t flex  flex-col font-bold text-lg'>
         <div className='items-center flex justify-center w-full'>
            <Image
               src={logo.src}
               width='200'
               height='200'
               alt='logo'
               className='w-[100px] md:w-[170px] h-auto mt-4'
            />
         </div>
         <div className='w-full flex items-center gap-3 py-6 justify-center'>
            <CustomButtom color='black' background='white' rounded>
               <BsInstagram size={22} />
            </CustomButtom>
            <CustomButtom color='black' background='white' rounded>
               <BsWhatsapp size={22} />
            </CustomButtom>
         </div>
         <div className='mb-6 mx-6'>
            {availableMenus.map(({ name, label, options }) => (
               <div className='w-full' key={name + JSON.stringify(options)}>
                  <button
                     className='border-t pt-2 pb-1 w-full text-left border-x-0 border-black flex items-center justify-between'
                     onClick={() => toggle(name)}
                  >
                     <span className='flex items-center text-center'>{label}</span>
                     {activeMenus.includes(name) ? <BsChevronDown /> : <BsChevronRight />}
                  </button>

                  {activeMenus.includes(name) && (
                     <div className='grid gap-4 font-normal'>
                        {options.map((option) => (
                           <span key={option}>{option} </span>
                        ))}
                     </div>
                  )}
               </div>
            ))}
            <hr className='border-black w-full px-6 inline-bloc' />
         </div>
         <div className='w-full text-center flex flex-col gap-4 mb-16'>
            <span className='font-normal text-sm'>
               Copyright &copy; 2023 Bags Club SAS{" "}
            </span>
            <div className='font-normal text-sm flex flex-col gap-1'>
               <span className='underline underline-offset-2 decoration-slate-700'>
                  Conditions d&apos;utilisation
               </span>

               <span className='underline underline-offset-2 decoration-slate-700'>
                  Politique de confidentialité
               </span>
            </div>
         </div>
      </footer>
   )
}

export default Footer
