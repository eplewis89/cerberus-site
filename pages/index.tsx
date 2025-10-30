import { type ReactElement } from 'react'

//  Import the layout
import Layout from '@/components/Layout'
import { ScriptWithCleanup } from '@/components/ScriptWithCleanup'

import original from '@/public/text/original.json'
import final from '@/public/text/final.json'

function createFrame() {
  let linedata = ""
  let row = 0
  let col = 0

  original.lines.forEach(line => {
    linedata += "<p class=\"hex\">"

    line.split('').forEach(char => {
      linedata += "<span class=\"dark row" + row + " col" + col + "\">" + char + "</span>"
      col ++
    });

    linedata += "</p>"

    row ++
    col = 0
  });

  return { __html: linedata };
}

const Page = () => {
  return (
    <div className="mt-4">
      <div dangerouslySetInnerHTML={createFrame()} ></div>

      <ScriptWithCleanup
        id="hex-script"
        src="/scripts/script.js"
        data-json={JSON.stringify(final)}></ScriptWithCleanup>
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