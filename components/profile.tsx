import { User, Mail, Calendar, Award, BookOpen, Trophy } from 'lucide-react'
import Image from 'next/image'

export default function UserProfile() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0 bg-purple-600 p-8 flex flex-col items-center justify-center">
            <Image
              src="/placeholder.svg?height=150&width=150"
              alt="Profile picture"
              width={150}
              height={150}
              className="rounded-full border-4 border-white shadow-lg"
            />
            <h1 className="mt-4 text-2xl font-bold text-white">Sarah Johnson</h1>
            <p className="text-purple-200">Little Explorer</p>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <User className="w-6 h-6 text-purple-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Username</p>
                  <p className="font-semibold">sarahj2014</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-purple-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-semibold">sarah@example.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="w-6 h-6 text-purple-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Joined</p>
                  <p className="font-semibold">January 15, 2023</p>
                </div>
              </div>
              <div className="flex items-center">
                <Award className="w-6 h-6 text-purple-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Achievements</p>
                  <p className="font-semibold">12 Badges</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Learning Progress</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Bible Stories Completed</span>
                    <span className="font-semibold">15/20</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Quizzes Passed</span>
                    <span className="font-semibold">8/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-pink-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-between items-center">
              <div className="flex items-center">
                <BookOpen className="w-6 h-6 text-purple-600 mr-2" />
                <span className="font-semibold">Current Lesson: David and Goliath</span>
              </div>
              <div className="flex items-center">
                <Trophy className="w-6 h-6 text-yellow-500 mr-2" />
                <span className="font-semibold">125 Stars Earned</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}