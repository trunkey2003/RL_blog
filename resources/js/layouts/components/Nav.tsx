import {useState} from 'react';
import SignInModal from '../../components/SignInModal';
import SignUpModal from '../../components/SignUpModal';
import {user} from '../../model/user';
import UserNav from '../../components/UserNav';

type Props = {
    user : user
};

export default function Nav({ user }: Props) {
    const [showSignIn, setShowSignIn] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);

    const handleShowSignIn = (bl : boolean) => {
        setShowSignIn(bl);
    };

    const handleShowSignUp = (bl : boolean) => {
        setShowSignUp(bl);
    };

    return (
        <nav className="relative bg-white">
            <div className="mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#">
                            <span className="sr-only">Workflow</span>
                            <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                        </a>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                        <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                            <span className="sr-only">Open menu</span>

                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                    {(user)? 
                    <UserNav user={user}/>  : 
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                        <a href="#" className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900" onClick={() => handleShowSignIn(true)}> Sign in </a>
                        <a href="#" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700" onClick={() => handleShowSignUp(true)}> Sign up </a>
                    </div>}
                </div>
            </div>


            <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                    <div className="pt-5 pb-6 px-5">
                        <div className="flex items-center justify-between">
                            <div>
                                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
                            </div>
                            <div className="-mr-2">
                                <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Close menu</span>

                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="py-6 px-5 space-y-6">
                        <div>
                            <a href="#" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"> Sign up </a>
                            <p className="mt-6 text-center text-base font-medium text-gray-500">
                                Existing customer?
                                <a href="#" className="text-indigo-600 hover:text-indigo-500"> Sign in </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <SignInModal showSignIn={showSignIn} handleShowSignIn={handleShowSignIn}/>
            <SignUpModal showSignUp={showSignUp} handleShowSignUp={handleShowSignUp}/>
        </nav>
    )
}