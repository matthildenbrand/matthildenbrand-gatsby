import React, { useState } from "react"
import InlineSVG from "svg-inline-react"

const BigHover = props => {
  const [isShown, setIsShown] = useState(false)
  return (
    <span>
      {props.title === "slo" && (
        <span>
          <InlineSVG
            src={require(`!svg-inline-loader!../assets/images/svg/slo.svg`)}
            className={`svg-wrapper ${props.title}`}
            element="span"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          />
          <span
            className={`background-image ${isShown && "hover"} ${props.title}`}
          />
        </span>
      )}
      {props.title === "makeover" && (
        <span>
          <InlineSVG
            src={require(`!svg-inline-loader!../assets/images/svg/makeover.svg`)}
            className={`svg-wrapper ${props.title}`}
            element="span"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          />
          <span
            className={`background-image ${isShown && "hover"} ${props.title}`}
          />
        </span>
      )}
      {props.title === "twitch" && (
        <span>
          <InlineSVG
            src={require(`!svg-inline-loader!../assets/images/svg/twitch.svg`)}
            className={`svg-wrapper ${props.title}`}
            element="span"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          />
          <span
            className={`background-image ${isShown && "hover"} ${props.title}`}
          />
        </span>
      )}
    </span>
  )
}

export default BigHover
