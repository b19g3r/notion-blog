import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <img
          src="/vercel-and-notion.png"
          height="85"
          width="250"
          alt="Vercel + Notion"
        />
        <h1>My Blog</h1>
        <h2>
          My Notion Blog with Next.js
        </h2>

{/*         <Features /> */}

        <div className="explanation">
          <p>
            Hello there!
          </p>
        </div>
      </div>
    </>
  )
}
