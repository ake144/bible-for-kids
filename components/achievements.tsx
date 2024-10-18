import { Star, Book, Award, Trophy } from 'lucide-react'

const achievements = [
  { name: 'Story Master', description: 'Read 5 Bible stories', icon: Book, progress: 3, total: 5 },
  { name: 'Quiz Whiz', description: 'Complete 10 quizzes', icon: Star, progress: 7, total: 10 },
  { name: 'Memory Champion', description: 'Memorize 3 Bible verses', icon: Award, progress: 2, total: 3 },
  { name: 'Super Helper', description: 'Help others 5 times', icon: Trophy, progress: 4, total: 5 },
]

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-orange-100 p-6">
      <h1 className="text-3xl font-bold text-orange-600 mb-8">Your Achievements</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((achievement) => (
          <div key={achievement.name} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <achievement.icon className="w-8 h-8 text-orange-500 mr-3" />
              <h2 className="text-xl font-semibold">{achievement.name}</h2>
            </div>
            <p className="text-gray-600 mb-4">{achievement.description}</p>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">Progress</span>
              <span className="text-sm font-semibold">{achievement.progress}/{achievement.total}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-orange-600 h-2.5 rounded-full" 
                style={{ width: `${(achievement.progress / achievement.total) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-white rounded-lg shadow-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-orange-600 mb-4">Total Stars Earned</h2>
        <div className="flex justify-center items-center">
          <Star className="w-12 h-12 text-yellow-400 fill-current" />
          <span className="text-4xl font-bold ml-3">16</span>
        </div>
        <p className="mt-4 text-gray-600">Keep up the great work!</p>
        <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
          Redeem Rewards
        </button>
      </div>
    </div>
  )
}