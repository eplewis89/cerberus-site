import React from 'react';
import Head from 'next/head'

export default function Common() {
    return (
      <Head>
        <title>cerberus - cybersecurity research</title>
        <meta property="og:title" content="cerberus - cybersecurity research" key="title" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no,email=no,address=no" />
        <meta name="title" content="cerberus - cybersecurity research<"/>
        <meta name="description" content="Personal blog and project to reasearch cybersecurity topics and write thoughts about current events"/>
        <meta name="subject" content="cybersecurity research and artificial intelligence blog" />
        <meta name="keywords" content="cybersecurity, machine learning, artifical intelligence, hacking, research, programming, blog, programmer, software engineer, projects, edge devices, networking, discovery, detection"/>
        <meta name="robots" content="index, follow"/>
        <meta name="language" content="English"/>
        <meta name="copyright" content="Erin Lewis" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' va.vercel-scripts.com; connect-src 'self' vitals.vercel-insights.com;" />
        <meta httpEquiv="content-language" content="en" />
      </Head>
    )
}