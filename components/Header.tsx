import Link from 'next/link';
import React from 'react';

export default function Header() {
    return (
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <nav className="mx-auto flex flex-wrap items-center text-base justify-center">
                <ul className="flex pipe">
                    <li>
                        <Link href="/">../</Link>&nbsp;|&nbsp;
                    </li>
                    <li>
                        <Link href="/thoughts">thoughts</Link>&nbsp;|&nbsp;
                    </li>
                    <li>
                        <Link href="/about">about</Link>&nbsp;|&nbsp;
                    </li>
                    <li>
                        <Link href="https://github.com/eplewis89" target="_blank">github</Link>&nbsp;|&nbsp;
                    </li>
                    <li>
                        <Link href="https://linkedin.com/in/cerberus-secures" target="_blank">linkedin</Link>&nbsp;|&nbsp;
                    </li>
                    <li>
                        <Link href="https://cerberus-secures.medium.com" target="_blank">medium</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}