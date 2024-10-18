import { BookOpen, Award, Star, Clock } from 'lucide-react'

const stats = [
  { name: 'Stories Read', value: 15, icon: BookOpen },
  { name: 'Quizzes Completed', value: 8, icon: Award },
  { name: 'Stars Earned', value: 125, icon: Star },
  { name: 'Time Spent Learning', value: '10h 30m', icon: Clock },
]

const recentActivities = [
  { name: "Completed 'Noah's Ark' story", date: '2 days ago' },
  { name: "Passed 'David and Goliath' quiz", date: '4 days ago' },
  { name: "Started 'Jesus Feeds 5000' lesson", date: '1 week ago' },
]

export default function Overview() {
  return (
    <div className="p-6">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-purple-600 mb-8">Learning Overview</h1>
      
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg shadow-md p-6 flex items-center">
            {/* Stat Icon */}
            <stat.icon className="w-12 h-12 text-purple-600 mr-4" />
            {/* Stat Value and Name */}
            <div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-gray-600">{stat.name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activities Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
        <ul className="space-y-4">
          {recentActivities.map((activity, index) => (
            <li key={index} className="flex items-center">
              <div className="bg-purple-100 rounded-full p-2 mr-4">
                <BookOpen className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="font-medium">{activity.name}</p>
                <p className="text-sm text-gray-600">{activity.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Learning Goals Section */}
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Learning Goals</h2>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Complete 20 Bible Stories</span>
              <span className="font-semibold">15/20</span>
            </div>
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-600">Earn 150 Stars</span>
              <span className="font-semibold">125/150</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '83%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
