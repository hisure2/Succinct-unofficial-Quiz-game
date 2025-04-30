"use client"

import type { Question } from "@/types/quiz"
import { useState, useEffect } from "react"
import { CheckCircle, XCircle } from "lucide-react"

interface QuizQuestionProps {
  question: Question
  onAnswer: (answer: string) => void
  userAnswer?: string
}

export default function QuizQuestion({ question, onAnswer, userAnswer }: QuizQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)

  useEffect(() => {
    setSelectedAnswer(null)
    setShowFeedback(false)
  }, [question])

  const handleSelectAnswer = (answer: string) => {
    if (selectedAnswer || userAnswer) return

    setSelectedAnswer(answer)
    setShowFeedback(true)
    onAnswer(answer)
  }

  const isCorrect = (answer: string) => {
    return answer === question.correctAnswer
  }

  const getOptionClasses = (option: string) => {
    const baseClasses = "p-4 mb-3 rounded-lg border border-gray-700 cursor-pointer transition-all"

    if (!selectedAnswer && !userAnswer) {
      return `${baseClasses} hover:bg-gray-800 hover:border-gray-600`
    }

    if (selectedAnswer === option || userAnswer === option) {
      return isCorrect(option)
        ? `${baseClasses} bg-green-900 border-green-700`
        : `${baseClasses} bg-red-900 border-red-700`
    }

    if (showFeedback && isCorrect(option)) {
      return `${baseClasses} bg-green-900 border-green-700`
    }

    return `${baseClasses} opacity-50`
  }

  return (
    <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-6">{question.text}</h2>

      <div className="space-y-2">
        {question.options.map((option) => (
          <div key={option} className={getOptionClasses(option)} onClick={() => handleSelectAnswer(option)}>
            <div className="flex items-center justify-between">
              <span>{option}</span>
              {showFeedback &&
                (isCorrect(option) ? (
                  <CheckCircle className="h-5 w-5 text-green-400" />
                ) : selectedAnswer === option ? (
                  <XCircle className="h-5 w-5 text-red-400" />
                ) : null)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
