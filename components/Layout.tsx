import React from 'react';

import { Analytics } from '@vercel/analytics/react';

import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';
import { SpeedInsights } from '@vercel/speed-insights/next';

function Layout({ children }: any) {
    return (
        <>
            <Meta />
            <Analytics />
            <SpeedInsights />
            <Header />
            <div className="main">
                {children}
            </div>
            <Footer />
        </>
    );
}

export default Layout;