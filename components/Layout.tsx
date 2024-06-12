import React from 'react';

import { Analytics } from '@vercel/analytics/react';

import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';

function Layout({ children }: any) {
    return (
        <>
            <Meta />
            <Analytics />
            <Header />
            <div className="main">
                {children}
            </div>
            <Footer />
        </>
    );
}

export default Layout;