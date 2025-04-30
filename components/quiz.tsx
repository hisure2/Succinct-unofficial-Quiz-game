"use client"

import { useState } from "react"
import type { Question } from "@/types/quiz"
import QuizQuestion from "./quiz-question"
import QuizResults from "./quiz-results"

interface QuizProps {
  questions: Question[]
}

export default function Quiz({ questions }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<string[]>([])
  const [showResults, setShowResults] = useState(false)

  const handleAnswer = (answer: string) => {
    const newUserAnswers = [...userAnswers]
    newUserAnswers[currentQuestionIndex] = answer
    setUserAnswers(newUserAnswers)

    if (currentQuestionIndex < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
      }, 750)
    } else {
      setTimeout(() => {
        setShowResults(true)
      }, 750)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestionIndex(0)
    setUserAnswers([])
    setShowResults(false)
  }

  if (showResults) {
    return <QuizResults questions={questions} userAnswers={userAnswers} resetQuiz={resetQuiz} />
  }

  return (
    <div className="w-full max-w-2xl">
      <div className="mb-4 text-sm text-gray-400">
        Question {currentQuestionIndex + 1} of {questions.length}
      </div>
      <QuizQuestion
        question={questions[currentQuestionIndex]}
        onAnswer={handleAnswer}
        userAnswer={userAnswers[currentQuestionIndex]}
      />
    </div>
  )
}
