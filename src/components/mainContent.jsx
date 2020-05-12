import React from "react"
import BigHover from "../components/bigHover"

const MainContent = () => {
  return (
    <>
      <p>
        Technologist currently residing in&nbsp;
        <a
          href="https://www.slocal.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <BigHover title="slo" />
        </a>
        . Enjoys creating amazing web and mobile experiences using the latest
        and greatest nerd tech out there. Plays bass guitar in 80's pop cover
        band&nbsp;
        <a
          href="https://totallymakeover.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <BigHover title="makeover" />
        </a>
        &nbsp;and can sometimes be seen streaming his awesome gaming skills
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
      <p className="second-section">
        With close to 20 years of building and delivering amazing experiences to
        your computer and phone screens, I have worked with many tech frameworks
        and brands.
      </p>
    </>
  )
}

export default MainContent