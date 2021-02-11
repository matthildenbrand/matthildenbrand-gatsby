import React from "react"
import BigHover from "../components/bigHover"

const MainContent = () => {
  return (
    <>
      <p>
        Technologist currently residing in&nbsp;
        <a
          href="https://www.visitbend.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <BigHover title="bend" />
        </a>
        &nbsp;Oregon. Enjoys creating amazing web and mobile experiences using the latest
        and greatest nerd tech out there. <br/><br/>Plays bass guitar in 80's pop cover
        band&nbsp;
        <a
          href="https://totallymakeover.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <BigHover title="makeover" />
        </a>
        &nbsp;and can sometimes be seen streaming his pogger gaming skills
        on&nbsp;
        <a
          href="https://www.twitch.tv/matt_lousy/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <BigHover title="twitch" />
        </a>
        .
      </p>
    </>
  )
}

export default MainContent
