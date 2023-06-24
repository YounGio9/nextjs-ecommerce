"use client"
import { types } from "@/helpers"
import { useRouter } from "next/navigation"
import React, { useEffect } from "react"
import { bestSellers } from "../db/bestSellers"
import CustomButtom from "./CustomButtom"
import ShopppingList from "./ShoppingList"

/**
 * Render all articles in bestsales section.
 * @return {React.JSX.Element}: BestSale component
 */
function BestSales(): React.JSX.Element {
   const router = useRouter()
   const [articles, setArticles] = React.useState<types.Article[]>([])

   useEffect(() => {
      bestSellers.splice(0, 2)
      setArticles(bestSellers)
   }, [])

   return (
      <>
         <ShopppingList articles={articles} title='Nos meilleurs articles' />
         <CustomButtom
            handleClick={() => router.push("/shop")}
            background='white'
            color='black'
         >
            Voir tous nos articles
         </CustomButtom>
         <p className='mb-12'></p>
      </>
   )
}

export default BestSales
