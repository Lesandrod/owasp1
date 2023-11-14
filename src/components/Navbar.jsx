import { Link } from 'react-router-dom'
const links = [
    {
        text: "Home",
        href: "/"
    },
    {
        text: "Examples",
        href: "/examples"
    },
    {
        text: "Ayuda",
        href: "/help"
    }


]
import React from 'react'

const Navbar = () => {
    return (
        <>
            <>
                <nav class="flex items-center justify-between flex-wrap bg-gray-950 p-6">
                    <div class="flex items-center flex-shrink-0 text-white mr-6">
                        <img src="https://i.ibb.co/CzGNzQ2/image-1.png" width={30} alt="owasp" />
                        <span class="font-semibold text-xl tracking-tight ml-3">OWASP</span>
                    </div>
                    <div class="block lg:hidden">
                        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                        </button>
                    </div>
                    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                        <div class="text-sm lg:flex-grow ml-10">

                            {links.map(link => (
                                
                                <Link key={link.index} to={link.href} className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white ml-10">{link.text}</Link>

                            ))}

                        </div>

                    </div>
                </nav>
            </>
        </>
    )
}

export default Navbar