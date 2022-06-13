import axios from 'axios';
import { useState } from 'react'
import { user } from '../model/user';

type Props = {
    user: user
};

export default function UserNav({ user }: Props) {
    const [showDropDown, setShowDropDown] = useState(false);

    const handleSignOutOnClick = () =>{
        axios.delete('/api/auth/sign-out')
        .then(()=>{
            window.location.href = window.location.origin;
        })
        .catch(err => {
            console.log(err);
        });
    }

    return (
        <div className="relative right-10">
            <img src={user?.avatar} className="h-10 w-10 rounded-full hover:cursor-pointer hover:opacity-80" onClick={() => setShowDropDown(!showDropDown)}></img>
            {(showDropDown) ? <div className='absolute top-12 right-0 w-52 bg-gray-200 font-medium rounded-lg'>
                <div className='py-3 w-full pl-5 my-2 hover:bg-gray-300 hover:cursor-pointer'>Profile</div>
                <div className='py-3 w-full pl-5 my-2 hover:bg-gray-300 hover:cursor-pointer'>Posts</div>
                <div className='py-3 w-full pl-5 my-2 hover:bg-gray-300 hover:cursor-pointer'>Settings</div>
                <div className='py-3 w-full pl-5 my-2 hover:bg-gray-300 hover:cursor-pointer' onClick={handleSignOutOnClick}>Sign Out</div>
            </div> : ''}
        </div>
    )
}