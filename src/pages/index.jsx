import React, { useState } from "react"
import "../styles/main.scss"
import MainContent from "../components/MainContent"
import HeaderLinks from "../components/headerLinks"
import Frameworks from "../components/frameworks"
import Brands from "../components/brands"
import Footer from "../components/footer"
import Loader from "../components/loader"
import SEO from "../components/seo"

const IndexPage = () => {
  const [count, setCount] = useState(0)
  return (
    <div id="app">
      <SEO
        title="Matt Hildenbrand"
        imgURL="https://www.matthildenbrand.com/images/me.png"
      />
      {count < 3 && <Loader />}
      {count >= 3 && (
        <>
          <div className="fadeIn hero-unit">
            <HeaderLinks />
            <MainContent />
            <div className="row">
              <div className="column">
                <Frameworks />
              </div>
              <div className="column">
                <Brands />
              </div>
            </div>
            <Footer />
          </div>
        </>
      )}
      <div className="hide">
        <img
          src="/images/bg/bg.jpg"
          rel="preload"
          alt="background"
          onLoad={() => setCount(prevCount => prevCount + 1)}
        />
        <img
          src="/images/bg/benatar.gif"
          rel="preload"
          alt="makeover"
          onLoad={() => setCount(prevCount => prevCount + 1)}
        />
        <img
          src="/images/bg/bend.gif"
          rel="preload"
          alt="bend"
          onLoad={() => setCount(prevCount => prevCount + 1)}
        />
        <img
          src="/images/bg/duck-hunt.gif"
          rel="preload"
          alt="twitch"
          onLoad={() => setCount(prevCount => prevCount + 1)}
        />
      </div>
    </div>
  )
}

export default IndexPage
