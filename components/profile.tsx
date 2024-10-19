'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@clerk/nextjs';
import { getUserById } from '@/lib/users'; // Assume this is a valid function
import { Mail, Calendar, Award, BookOpen, Trophy, User } from 'lucide-react';
import Image from 'next/image';
import { UserSchema } from '@/lib/schema';

export default function UserProfile() {
  const { userId } = useAuth(); // Destructure userId from Clerk
  const [user, setUser] = useState<UserSchema>(); // State to store the fetched user data



  useEffect(() => {
    const fetchUser = async () => {
      if (!userId) return  console.log('userId is not found'); // If userId is not available, exit the function
      try {
        const fetchedUser = await getUserById(userId); // Fetch user from the backend or API
       
        console.log('fectched user', fetchedUser); // Log the fetched user data

        setUser(fetchedUser); // Set the fetched user data into state
      } catch (error) {
        console.error('Error fetching user data:', error); // Log any error
      }
    };
    fetchUser();
  }, [userId]); //



  console.log(user); // Log the user object to the console  

  return (

  <>
 
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0 bg-purple-600 p-8 flex flex-col items-center justify-center">
            <Image
              src="/placeholder.svg"
              alt="Profile picture"
              width={150}
              height={150}
              className="rounded-full border-4 border-white shadow-lg"
            />
            <h1 className="mt-4 text-2xl font-bold text-white">{user?.name}</h1>
            <p className="text-purple-200">Little Explorer</p>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <User className="w-6 h-6 text-purple-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Username</p>
                  <p className="font-semibold">{user?.name}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-6 h-6 text-purple-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="font-semibold">{user?.email}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Calendar className="w-6 h-6 text-purple-600 mr-3" />
                <div>
                  <p className="text-sm text-gray-600">Joined</p>
                  <p className="font-semibold">{user?.createdAt}</p>
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
 
    </>
  );
}
