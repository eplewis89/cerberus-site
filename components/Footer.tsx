import Link from 'next/link';
import React from 'react';

export default function Footer() {
    return (
        <div className="mt-auto md:w-full">
            <div className="text-center text-md m-4">
                <p>powered by <Link href="https://vercel.com" target="_blank">▲ vercel</Link></p>
                <p>content on this site is licensed <Link href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">CC BY-NC-SA 4.0</Link></p>
            </div>
        </div>
    )
}