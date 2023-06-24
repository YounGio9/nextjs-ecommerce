"use client"
import Questions from "@/components/Questions"
import ShopppingList from "@/components/ShoppingList"
import { bestSellers } from "@/db/bestSellers"
import { types } from "@/helpers"
import React from "react"

/**
 * Return all articles with all categories of the merchant.
 * @return {React.JSX.Element}: The shop page
 *
 */
function Shop() {
   const totalArticles = [...bestSellers]

   const categories = totalArticles.reduce(
      (acc, article) => acc.concat(article.categories),
      [] as string[]
   )

   const questions: types.question[] = [
      {
         id: 1,
         question: "Vos sacs sont ils neufs ?",
         answer:
            "Non, et pour cause, nous pensons que 5 millards de sacs sur terre, cela est déjà bien assez. Nous ne te proposons que des sacs dans un excellent état cosmétique, mais pas que… Avant envoi, ils doivent passer par 40 points de contrôle et être testés par nos experts.",
      },
      {
         id: 2,
         question: "Puis-je acheter mon sac au bout de quelques mois ?",
         answer:
            "Nous ne proposons pas d'option d'achat, vous ne pouvez donc pas racheter le sac loué. Nous ajoutons chaque année de nouveaux modèles à notre catalogue : vous pourrez donc changer pour un modèle plus récent, au prix d'une mensualité à peu près équivalente.",
      },
   ]

   const filteredCategories = Array.from(new Set(categories))

   return (
      <div className='min-h-[88vh] mb-14'>
         <ShopppingList
            title='Nos sacs'
            articles={totalArticles}
            categories={filteredCategories}
         />

         <Questions questions={questions} />
      </div>
   )
}

export default Shop
