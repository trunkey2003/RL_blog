import React from 'react';
import Post from './Post';

type Props = {}

export default function Home({ }: Props) {
  return (
    <div className='p-24'>
      <h1 className='font-bold text-3xl px-4 py-2 bg-gray-800 rounded-lg text-white'>Recent Post</h1>
      <div className='p-4 flex flex-wrap'>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>

    </div>
  )
}
