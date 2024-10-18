import { Bell, Search } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-64 right-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-xl font-bold text-purple-600">Children&apos;s Ministry App</h1>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-purple-100 text-purple-900 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-purple-600" />
              </div>
            </div>
            <button className="ml-4 p-2 text-purple-600 hover:bg-purple-100 rounded-full">
              <Bell className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}