"use client"
import ListIconClosed from "@/assets/svg/ListIconClosed"
import ListIconOpen from "@/assets/svg/ListIconOpen"
import { types } from "@/helpers"
import React from "react"
import { toggle } from "./Footer"

interface Props {
   questions: types.question[]
}
/**
 *
 * This component render questions with an active or inactive state for each
 * @param {types.question} props Props that includes questions
 * @return {React.JSX.Element}
 */
function Questions(props: Props) {
   const { questions } = props
   const [activeQuestions, setActiveQuestions] = React.useState<number[]>([])
   return (
      <div className='flex flex-col items-center py-16 lg:py-24'>
         <h2 className='my-7 text-4xl font-medium lg:my-14 lg:text-6xl'>Tes questions</h2>
         {questions.map(({ id, question, answer }) => (
            <article key={question} className='mb-0 max-w-3xl lg:mb-6'>
               <div className='px-12 mt-8'>
                  <button
                     onClick={() => toggle(id, activeQuestions, setActiveQuestions)}
                     className='flex gap-x-2 items-center text-lg font-bold cursor-pointer lg:text-2xl'
                  >
                     {activeQuestions.includes(id) ? (
                        <ListIconClosed />
                     ) : (
                        <ListIconOpen />
                     )}
                     <p className='text-left'>{question}</p>
                  </button>
                  <p
                     className={`transition-all mb-8 mt-3 pl-6 lg:text-lg  ${
                        !activeQuestions.includes(id) &&
                        "h-0 opacity-0 translate-y-1/2 mt-0"
                     }  `}
                  >
                     {answer}
                  </p>
                  <hr className='h-0 border-t mr-8 border-black' />
               </div>
            </article>
         ))}
      </div>
   )
}

export default Questions
