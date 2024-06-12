import type { ReactElement } from 'react'

import Link from 'next/link'

//  Import the layout
import Layout from '@/components/Layout'

const Page = () => {
  return (
    <>
      <p>
        Jul 30, 2023
        <br />
        <Link href="https://cerberus-secures.medium.com/artificial-intelligence-and-parallels-with-the-atomic-age-c1f22a3fab2a" target="_blank">
          Artificial Intelligence and parallels with the Atomic Age
        </Link>
      </p>
      <p>
        Mar 7, 2024
        <br />
        <Link href="https://cerberus-secures.medium.com/understanding-common-programming-patterns-for-coding-interviews-iterators-part-1-326ac2916331" target="_blank">
          Understanding Common Programming Patterns for Coding Interviews: Iterators (Part 1)
        </Link>
      </p>
      <p>
        June 10, 2024
        <br />
        <Link href="https://cerberus-secures.medium.com/creating-a-postgresql-orm-in-go-e080dfadbcb3" target="_blank">
          Crafting an extendable, easy to maintain database layer for Go
        </Link>
      </p>
    </>
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