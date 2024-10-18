import Link from 'next/link'
import { Book, Award, PlayCircle, Star } from 'lucide-react'

const features = [
  {
    name: 'Interactive Bible Stories',
    description: 'Engage with beautifully illustrated Bible stories that come to life.',
    icon: Book,
    href: '/stories',
  },
  {
    name: 'Fun Quizzes',
    description: 'Test your knowledge with exciting quizzes on Bible topics.',
    icon: PlayCircle,
    href: '/quizzes',
  },
  {
    name: 'Earn Achievements',
    description: 'Collect badges and stars as you learn and grow in your faith.',
    icon: Award,
    href: '/achievements',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Welcome to the{' '}
            <span className="text-indigo-600">Children's Ministry Learning Adventure</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Embark on an exciting journey through the Bible with interactive stories, fun quizzes, and rewarding achievements!
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-white rounded-lg shadow-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                    <div className="mt-6">
                      <Link href={feature.href} className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
                        Get started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Ready to start your adventure?</h3>
            <div className="mt-5">
              <div className="rounded-md bg-gray-50 px-6 py-5 sm:flex sm:items-center sm:justify-between">
                <div className="sm:flex sm:items-center">
                  <Star className="h-8 w-8 text-yellow-400" aria-hidden="true" />
                  <div className="mt-3 sm:mt-0 sm:ml-4">
                    <div className="text-sm font-medium text-gray-900">Your progress</div>
                    <div className="mt-1 text-sm text-gray-600">
                      You've earned <span className="font-semibold">25 stars</span> so far!
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center">
                  <Link href="/dashboard" className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Go to Dashboard
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}