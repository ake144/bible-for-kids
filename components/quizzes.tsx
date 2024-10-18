'use client'


import { useState } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import { ChevronRight, Star } from 'lucide-react'

// This would typically come from an API or database
const quizData = {
  title: "Noah's Ark Adventure",
  questions: [
    {
      question: "How many of each animal did Noah bring on the ark?",
      answers: ["One", "Two", "Three", "Four"],
      correctAnswer: 1
    },
    {
      question: "How many days and nights did it rain?",
      answers: ["20", "30", "40", "50"],
      correctAnswer: 2
    },
    {
      question: "What bird did Noah send out first?",
      answers: ["Dove", "Raven", "Sparrow", "Eagle"],
      correctAnswer: 1
    }
  ]
}

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (selectedAnswer: number) => {
    if (selectedAnswer === quizData.questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      })
    }

    if (currentQuestion < quizData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResult(true)
    }
  }

  const progress = ((currentQuestion + 1) / quizData.questions.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100 p-4 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-8">{quizData.title}</h1>
      
      {!showResult ? (
        <div className="w-full max-w-2xl">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">
              Question {currentQuestion + 1} of {quizData.questions.length}
            </h2>
            <p className="text-lg mb-6">{quizData.questions[currentQuestion].question}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {quizData.questions[currentQuestion].answers.map((answer, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                  onClick={() => handleAnswer(index)}
                >
                  {answer}
                </motion.button>
              ))}
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div 
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
          <p className="text-xl mb-6">You scored {score} out of {quizData.questions.length}</p>
          <div className="flex justify-center mb-6">
            {[...Array(score)].map((_, i) => (
              <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
            ))}
          </div>
          <button 
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center"
          >
            Next Lesson <ChevronRight className="ml-2" />
          </button>
        </motion.div>
      )}
    </div>
  )
}