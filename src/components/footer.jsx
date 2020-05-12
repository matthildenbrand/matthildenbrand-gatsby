import React from "react"
import InlineSVG from "svg-inline-react"

const Footer = () => (
  <div className="footer">
    <p>
      This site was built using the&nbsp;
      <a
        className="gatsby"
        href="https://www.gatsbyjs.org/"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <InlineSVG
          element="span"
          className="svg-wrapper gatsby"
          src={require(`!svg-inline-loader!../assets/images/svg/gatsby.svg`)}
        />
      </a>
      &nbsp;framework, view source on&nbsp;
      <a
        className="github"
        href="https://github.com/matthildenbrand/matthildenbrand-vue"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <InlineSVG
          element="span"
          className="svg-wrapper github"
          src={require(`!svg-inline-loader!../assets/images/svg/github.svg`)}
        />
      </a>
      .
    </p>
  </div>
)

export default Footer
