import Link from 'next/link';
import React from 'react';

export default function Header() {
    return (
        <header className="body-font" >
            <nav>
                <Link href="/">../</Link>&nbsp;|&nbsp;
                <Link href="/thoughts">thoughts</Link>&nbsp;|&nbsp;
                <Link href="/about">about</Link>&nbsp;|&nbsp;
                <Link href="https://github.com/eplewis89" target="_blank">github</Link>&nbsp;|&nbsp;
                <Link href="https://linkedin.com/in/creoborous" target="_blank">linkedin</Link>&nbsp;|&nbsp;
                <Link href="https://cerberus-secures.medium.com" target="_blank">medium</Link>
            </nav>
        </header>
    )
}