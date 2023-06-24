import { types } from "@/helpers"
import Beverly from "../assets/SacLouisVuittonBeverly.jpg"
import Boston from "../assets/SacLouisVuittonBoston.jpg"
import Butterfly from "../assets/SacLouisVuittonbutterfly.jpg"
import Keepall from "../assets/SacLouisVuittonKeepall.jpg"
import Alma from "../assets/SacLouisVuittonmonogramAlma.jpg"
import Montorgeuil from "../assets/SacLouisVuittonMontorgeuil.jpg"

export const bestSellers: types.Article[] = [
   {
      name: "Sac Louis Vuitton Beverly",
      cover: Beverly.src,
      colors: ["#41464C", "#60AEE1", "#F5C6BD"],
      price: "39, 99 €",
      apport: "+ 99,00 € d’apport",
      isNew: true,
      categories: ["Louis Vuitton"],
   },
   {
      name: "Sac Louis Vuitton Boston",
      cover: Boston.src,
      colors: ["#41464C", "#60AEE1", "#F5C6BD", "#F5F6EF"],
      price: "39, 99 €",
      apport: "+ 99,00 € d’apport",
      isNew: true,
      categories: ["Louis Vuitton"],
   },
   {
      name: "Sac Louis Vuitton Butterfly",
      cover: Butterfly.src,
      colors: ["#41464C", "#60AEE1", "#F5C6BD"],
      price: "39, 99 €",
      apport: "+ 99,00 € d’apport",
      isNew: true,
      categories: ["Louis Vuitton"],
   },
   {
      name: "Sac Louis Vuitton Keepall",
      cover: Keepall.src,
      colors: ["#41464C", "#60AEE1", "#F5C6BD"],
      price: "39, 99 €",
      apport: "+ 99,00 € d’apport",
      isNew: false,
      categories: ["Louis Vuitton"],
   },
   {
      name: "Sac Louis Vuitton Monogram Alma",
      cover: Alma.src,
      colors: ["#41464C", "#60AEE1", "#F5C6BD"],
      price: "39, 99 €",
      apport: "+ 99,00 € d’apport",
      isNew: false,
      categories: ["Louis Vuitton"],
   },
   {
      name: "Sac Louis Vuitton Montorgeuil",
      cover: Montorgeuil.src,
      colors: ["#41464C", "#60AEE1", "#F5C6BD"],
      price: "39, 99 €",
      apport: "+ 99,00 € d’apport",
      isNew: false,
      categories: ["Louis Vuitton"],
   },
]
