import React from "react"
import InlineSVG from "svg-inline-react"

const Frameworks = () => (
  <div className="brands">
    <h2>Featured Tech</h2>
    <div className="row">
      <div className="column">
        <a
          className="react"
          href="https://facebook.github.io/react/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <InlineSVG
            element="span"
            className="svg-wrapper react"
            src={require(`!svg-inline-loader!../assets/images/svg/react.svg`)}
          />
        </a>
        <a
          className="angular"
          href="https://angular.io/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <InlineSVG
            element="span"
            className="svg-wrapper angular"
            src={require(`!svg-inline-loader!../assets/images/svg/angular.svg`)}
          />
        </a>
        <a
          className="vue"
          href="https://vuejs.org/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <InlineSVG
            element="span"
            className="svg-wrapper vue"
            src={require(`!svg-inline-loader!../assets/images/svg/vue.svg`)}
          />
        </a>
        <a
          className="flutter"
          href="https://flutter.dev/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <InlineSVG
            element="span"
            className="svg-wrapper flutter"
            src={require(`!svg-inline-loader!../assets/images/svg/flutter.svg`)}
          />
        </a>
      </div>
      <div className="column">
        <a
          className="ionic"
          href="https://ionicframework.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <InlineSVG
            element="span"
            className="svg-wrapper ionic"
            src={require(`!svg-inline-loader!../assets/images/svg/ionic.svg`)}
          />
        </a>
        <a
          className="redux"
          href="http://redux.js.org/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <InlineSVG
            element="span"
            className="svg-wrapper redux"
            src={require(`!svg-inline-loader!../assets/images/svg/redux.svg`)}
          />
        </a>
        <a
          className="typescript"
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <InlineSVG
            element="span"
            className="svg-wrapper typescript"
            src={require(`!svg-inline-loader!../assets/images/svg/typescript.svg`)}
          />
        </a>
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
      </div>
    </div>
  </div>
)

export default Frameworks
