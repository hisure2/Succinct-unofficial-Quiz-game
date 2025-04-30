"use client"

import type { Question } from "@/types/quiz"
import { CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface QuizResultsProps {
  questions: Question[]
  userAnswers: string[]
  resetQuiz: () => void
}

export default function QuizResults({ questions, userAnswers, resetQuiz }: QuizResultsProps) {
  const correctAnswers = questions.filter((question, index) => question.correctAnswer === userAnswers[index]).length

  const percentage = Math.round((correctAnswers / questions.length) * 100)

  return (
    <div className="w-full max-w-2xl bg-gray-800 rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Quiz Results</h2>

      <div className="text-center mb-8">
        <div className="text-5xl font-bold mb-2">{percentage}%</div>
        <p className="text-gray-400">
          You got {correctAnswers} out of {questions.length} questions correct
        </p>
      </div>

      <div className="space-y-4 mb-8">
        {questions.map((question, index) => {
          const isCorrect = question.correctAnswer === userAnswers[index]

          return (
            <div
              key={index}
              className={`p-4 rounded-lg border ${isCorrect ? "border-green-700 bg-green-900/20" : "border-red-700 bg-red-900/20"}`}
            >
              <div className="flex items-start gap-3">
                {isCorrect ? (
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                )}
                <div>
                  <p className="font-medium">{question.text}</p>
                  {!isCorrect && (
                    <div className="mt-2 text-sm">
                      <p className="text-red-400">Your answer: {userAnswers[index]}</p>
                      <p className="text-green-400">Correct answer: {question.correctAnswer}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="flex justify-center">
        <Button onClick={resetQuiz} className="px-6">
          Try Again
        </Button>
      </div>
    </div>
  )
}
