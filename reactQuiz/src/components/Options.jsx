import React from 'react'
import { useContext } from 'react'
import { QuizContext } from '../context/quiz'

import './Options.css'

const Options = ({option}) => {
    const [quizState, dispatch] = useContext(QuizContext)
  return (
    <div>
        <p>{option}</p>
    </div>
  )
}

export default Options