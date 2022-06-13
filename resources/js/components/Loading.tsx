import React from 'react'

type Props = {}

export default function Loading({ }: Props) {
    return (
        <div className='text-center py-52 text-2xl font-bold text-gray-500 bg-gray-900/50 w-full min-h-full fixed top-0 left-0 z-[100]'>
            <span className="ml-40 animate-ping inline-flex h-5 w-5 rounded-full bg-pink-400"></span>
            <span className="mx-20 animate-ping inline-flex h-5 w-5 rounded-full bg-pink-400"></span>
            <span className="mr-40 animate-ping inline-flex h-5 w-5 rounded-full bg-pink-400"></span>
        </div>
    )
}