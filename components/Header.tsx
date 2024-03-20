'use client'

import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link"

const Header = () => {

    const session = useSession();
    console.log(session);


    return (
        <header>
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/about">About</Link>
            {
                (session?.data) && (
                    <Link href="/profile">Profile</Link>
                )
            }

            {(session?.data) ? <Link href="#" onClick={() => signOut({callbackUrl: '/'})}>Logout</Link> : <Link href="/api/auth/signin">Login</Link>}
        </header>
    )
}

export default Header;