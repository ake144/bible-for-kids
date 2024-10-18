'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const storyData = {
  title: "Noah's Ark",
  pages: [
    {
      text: "God saw that the world was full of wickedness and decided to start anew.",
      image: "/placeholder.svg?height=300&width=400"
    },
    {
      text: "God chose Noah, a righteous man, to build an ark and save the animals.",
      image: "/placeholder.svg?height=300&width=400"
    },
    {
      text: "Noah gathered two of every animal and his family onto the ark.",
      image: "/placeholder.svg?height=300&width=400"
    },
    {
      text: "It rained for 40 days and 40 nights, flooding the entire earth.",
      image: "/placeholder.svg?height=300&width=400"
    },
    {
      text: "When the waters receded, Noah sent out a dove, which returned with an olive branch.",
      image: "/placeholder.svg?height=300&width=400"
    },
    {
      text: "God made a rainbow as a promise never to flood the earth again.",
      image: "/placeholder.svg?height=300&width=400"
    }
  ]
}

export default function StoryPage() {
  const [currentPage, setCurrentPage] = useState(0)

  const nextPage = () => {
    if (currentPage < storyData.pages.length - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100 p-6 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-8">{storyData.title}</h1>
      
      <motion.div 
        key={currentPage}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full"
      >
        <img 
          src={storyData.pages[currentPage].image} 
          alt={`Illustration for ${storyData.title} - Page ${currentPage + 1}`}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <p className="text-lg mb-6">{storyData.pages[currentPage].text}</p>
        <div className="flex justify-between items-center">
          <button 
            onClick={prevPage} 
            disabled={currentPage === 0}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
          >
            <ChevronLeft className="mr-2" /> Previous
          </button>
          <span className="text-gray-600">Page {currentPage + 1} of {storyData.pages.length}</span>
          <button 
            onClick={nextPage}
            disabled={currentPage === storyData.pages.length - 1}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
          >
            Next <ChevronRight className="ml-2" />
          </button>
        </div>
      </motion.div>
    </div>
  )
}