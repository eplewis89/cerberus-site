import React from 'react';
import Head from 'next/head'

export default function Common() {
    return (
      <Head>
        <title>cerberus - cybersecurity research</title>
        <meta property="og:title" content="cerberus - cybersecurity research and data intelligence" key="title" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no,email=no,address=no" />
        <meta name="title" content="cerberus - cybersecurity research and data intelligence" />
        <meta name="description" content="personal blog outlining my research in cybersecurity topics, and platform to write thoughts about current events and projects"/>
        <meta name="subject" content="software engineer cybersecurity research and data intelligence blog" />
        <meta name="keywords" content="cybersecurity, machine learning, artifical intelligence, hacking, research, programming, blog, programmer, software engineer, projects, edge devices, networking, discovery, detection"/>
        <meta name="robots" content="index, follow"/>
        <meta name="language" content="English"/>
        <meta name="copyright" content="Erin Patrick Lewis" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' va.vercel-scripts.com; connect-src 'self' vitals.vercel-insights.com;" />
        <meta httpEquiv="content-language" content="en" />
      </Head>
    )
}