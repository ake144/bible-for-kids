// pages/api/data.js
import redis from '@/lib/redis'
import { NextRequest, NextResponse } from 'next/server';


export default async function POST(req:NextRequest,res:NextResponse){
    
    try {
      await redis.set('myKey', 'myValue');
      return NextResponse.json({ message: 'Data saved to Redis' }, {status:200});
    } catch (error) {
      return NextResponse.json({ error: 'Error saving data to Redis' }, {status:500});
    }
}