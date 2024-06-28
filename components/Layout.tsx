import React from 'react';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import Footer from './Footer';
import Header from './Header';
import Meta from './Meta';

function Layout({ children }: any) {
    return (
        <div className="min-h-screen flex flex-col justify-between">
            <Meta />
            <Analytics />
            <SpeedInsights />
            <Header />
            <div className="main flex flex-1 flex-col items-center align-center mx-auto md:w-full">
                {children}
            </div>
            <section className="flex-grow"></section>
            <Footer />
        </div>
    );
}

export default Layout;