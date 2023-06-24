import Questions from "@/components/Questions"
import React from "react"
import { types } from "@/helpers"

/**
 * FAQ page (all popular questions and their answers)
 * @return {React.JSX.Element}
 */
function FAQ() {
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
      {
         id: 3,
         question: "Les smartphones sont ils garantis ?",
         answer:
            "Oui, durant toute la période de location. Si votre appareil rencontre la moindre panne ou dysfonctionnement, nous l'échangerons très rapidement, sans frais 🚑",
      },
      {
         id: 4,
         question: "Puis-je changer de sac ?",
         answer:
            "Vous pouvez changer d'appareil à n'importe quel moment de votre abonnement. Le montant de votre location sera adapté à votre nouveau modèle choisi.",
      },
      {
         id: 5,
         question: "Devrais-je payer les frais de remise en état ?",
         answer:
            "Non, nous ne facturons pas l’usure normale du smartphone (micro-rayures, traces d’utilisation…). Seule une casse non déclarée ou une usure anormale pourra faire l’objet d’une facturation. Si votre vitre de protection est cassée, n'hésitez pas à nous en demander une en remplacement.",
      },
   ]
   return <Questions questions={questions} />
}

export default FAQ
