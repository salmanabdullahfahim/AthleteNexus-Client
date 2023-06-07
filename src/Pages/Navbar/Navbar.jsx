import React, { useContext, useState } from 'react';
import { Menu, X, LogIn } from 'lucide-react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {


    const menuItems = [
        {
            name: 'Home',
            href: '/',
        },
        {
            name: 'Instructors',
            href: '/instrustor',
        },
        {
            name: 'Classes',
            href: '/classes',
        },
    ]
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="relative w-full bg-white md:p-2">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
                <div className="inline-flex items-center space-x-2">
                    <span>

                    </span>
                    <span className="font-bold text-2xl">Athlete <span className='text-[#6674cc]'>Nexus</span></span>
                </div>
                <div className="hidden lg:block">
                    <ul className="inline-flex space-x-8">
                        {menuItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    to={item.href}
                                    className="text-sm font-semibold text-gray-800 hover:text-primary"
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="hidden lg:block">
                    
                    {
                        user ? <button onClick={handleLogout}
                            type="button"
                            className="mt-4 w-full rounded-md bg-[#6674cc] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#6674cc]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                            Logout
                        </button> : <Link to='/login'
                            type="button"
                            className="mt-4 flex items-center w-full rounded-md bg-[#6674cc] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#6674cc]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                        >
                            Login <LogIn className='h-4' />
                        </Link>
                    }
                </div>
                <div className="lg:hidden">
                    <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
                </div>
                {isMenuOpen && (
                    <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
                        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="px-5 pb-6 pt-5">
                                <div className="flex items-center justify-between">
                                    <div className="inline-flex items-center space-x-2">
                                        <span>

                                        </span>
                                        <span className="font-bold text-3xl">Athlete <span className='text-[#6674cc]'>Nexus</span></span>
                                    </div>
                                    <div className="-mr-2">
                                        <button
                                            type="button"
                                            onClick={toggleMenu}
                                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                        >
                                            <span className="sr-only">Close menu</span>
                                            <X className="h-6 w-6" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <nav className="grid gap-y-4">
                                        {menuItems.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                                            >
                                                <span className="ml-3 text-base font-medium text-gray-900">
                                                    {item.name}
                                                </span>
                                            </Link>
                                        ))}
                                    </nav>
                                </div>
                                {
                                    user ? <button onClick={handleLogout}
                                        type="button"
                                        className="mt-4 w-full rounded-md bg-[#6674cc] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#6674cc]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        Logout
                                    </button> : <Link to='/login'
                                        type="button"
                                        className="mt-4 w-full flex items-center rounded-md bg-[#6674cc] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#6674cc]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                                    >
                                        Login
                                    </Link>
                                }
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
};

export default Navbar;