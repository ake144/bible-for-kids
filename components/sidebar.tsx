'use client'

import Link from 'next/link'
import { Home, Book, Award, PlayCircle, Settings, HelpCircle } from 'lucide-react'
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser
} from '@clerk/nextjs'

import { useAuth } from '@clerk/nextjs';
import { useEffect } from 'react';


const navItems = [
  { name: 'Dashboard', icon: Home, href: '/dashboard' },
  { name: 'Bible Stories', icon: Book, href: '/stories' },
  { name: 'Quizzes', icon: PlayCircle, href: '/quizzes' },
  { name: 'Achievements', icon: Award, href: '/achievements' },
  { name: 'Settings', icon: Settings, href: '/settings' },
  { name: 'Help', icon: HelpCircle, href: '/help' },
]

export default function Sidebar() {

  const { isSignedIn } = useAuth();
const { user } = useUser();


  useEffect(() => {
    if (isSignedIn) {
      fetch('/api/auth/sync-user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user }),
      })
        .then((res) => res.json())
        .then((data) => console.log('User synced', data))
        .catch((error) => console.error('Error syncing user:', error));
    }
  }, [isSignedIn]);
  

  return (
    <div className="bg-white w-64 h-screen shadow-lg fixed left-0 top-0 overflow-y-auto">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-purple-600 mb-6">Little Explorers</h2>
        <nav>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.href} className="flex items-center p-3 text-gray-700 hover:bg-purple-100 rounded-lg transition-colors duration-200">
                  <item.icon className="w-5 h-5 mr-3 text-purple-600" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <SignedIn>
         
          <Link href="/profile" className="flex items-center p-4 bg-purple-100 rounded-lg">
        
          <UserButton   />
          <div className='ml-3'>
            <p className="font-semibold text-purple-800">Sarah Johnson</p>
            <p className="text-sm text-purple-600">View Profile</p>
          </div>
        </Link>
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      
      </div>
    </div>
  )
}