'use client'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
    return (
        <>
            <nav className="p-4 md:p-6 shadow-md bg-gray-900 text-white">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                    <a href="#" className="text-xl font-bold mb-4 md:mb-0">
                        Task Vault
                    </a>
                    <div className='flex gap-5 items-center'>
                        <Link href="/signin">
                            india
                        </Link>
                        <Button variant="destructive" onClick={() => signOut()}>
                            Logout
                        </Button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
