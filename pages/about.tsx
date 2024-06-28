import type { ReactElement } from 'react'

//  Import the layout
import Layout from '@/components/Layout'

const Page = () => {
  return (
    <div className="mt-4 lg:w-1/3 text-md text-left">
      <h3>professional bio</h3>
      <p>backend developer and project lead with more than 13 years of experience developing software, building scalable and automated backend systems, being a catalyst for cross department coordination, and being a team player with great communication and analytical skills.</p>
      <p>previous work included backend positions in edge computing, cybersecurity, and mass data collection and analysis.</p>
      <p>research includes:</p>
      <ul>
        <li>machine learning topics</li>
        <li>nmap automated scanning</li>
        <li>network data parsing</li>
        <li>cve detection on systems</li>
        <li>flipper zero</li>
      </ul>
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Page