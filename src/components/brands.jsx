import React from "react"
import InlineSVG from "svg-inline-react"

const Brands = () => (
  <div className="brands">
    <h2>Past Brands</h2>
    <div className="row">
      <div className="column">
        <a
          className="smart"
          href="https://www.smartusa.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <InlineSVG
            element="span"
            className="svg-wrapper smart"
            src={require(`!svg-inline-loader!../assets/images/svg/smart.svg`)}
          />
        </a>

        <a
          className="usaa"
          href="https://www.usaa.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <InlineSVG
            element="span"
            className="svg-wrapper usaa"
            src={require(`!svg-inline-loader!../assets/images/svg/usaa.svg`)}
          />
        </a>

        <a
          className="signet"
          href="http://www.signetjewelers.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <InlineSVG
            element="span"
            className="svg-wrapper signet"
            src={require(`!svg-inline-loader!../assets/images/svg/signet.svg`)}
          />
        </a>
      </div>
      <div className="column">
        <a
          className="samsung"
          href="http://www.samsung.com/us"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <InlineSVG
            element="span"
            className="svg-wrapper samsung"
            src={require(`!svg-inline-loader!../assets/images/svg/samsung.svg`)}
          />
        </a>

        <a
          className="blackberry"
          href="http://www.blackberry.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <InlineSVG
            element="span"
            className="svg-wrapper blackberry"
            src={require(`!svg-inline-loader!../assets/images/svg/blackberry.svg`)}
          />
        </a>
      </div>
    </div>
  </div>
)

export default Brands
