import Quiz from "@/components/quiz"
import { questions } from "@/data/questions"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <header className="p-6 border-b border-gray-800">
        <h1 className="text-3xl font-bold text-center">Succint quiz</h1>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <Quiz questions={questions} />
      </main>

      <footer className="p-4 border-t border-gray-800 text-center text-gray-400">quiz by jefferson</footer>
    </div>
  )
}
