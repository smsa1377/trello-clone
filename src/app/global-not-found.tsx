import Link from "next/link";
import styles from "./global-not-found.module.scss";

import {Roboto} from 'next/font/google'
import type {Metadata} from 'next'

const roboto = Roboto({subsets: ['latin']})

export const metadata: Metadata = {
    title: '404 - Page Not Found',
    description: 'The page you are looking for does not exist.',
}

export default function GlobalNotFound() {
    return (
        <html lang="en" className={roboto.className}>
        <body>
        <div className={styles.container}>
            <h1>I looked, it wasnt there. nope, nada, nothing.! 😕</h1>
            <p>Check the address or return to the home page.</p>
            <Link href="/">
                <button>Return to home</button>
            </Link>
        </div>
        </body>
        </html>
    );
}
