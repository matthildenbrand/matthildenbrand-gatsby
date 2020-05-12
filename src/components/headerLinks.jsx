import React from "react"
import InlineSVG from "svg-inline-react"
import { debounce } from "lodash"

const HeaderLinks = () => (
  <div>
    <div className="me" id="meToasty">
      <img src={"/images/me.png"} alt="Matt Hildenbrand" />
    </div>
    <div className="contact">
      <h1 onClick={handleNameClick}>Matt Hildenbrand</h1>
      <ul>
        <li>
          <a
            className="github"
            href="https://github.com/matthildenbrand"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <InlineSVG
              className="svg github"
              element="span"
              src={require("!svg-inline-loader!../assets/images/svg/github.svg")}
            />
          </a>
        </li>
        <li>
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/matt-hildenbrand-3b00327"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <InlineSVG
              className="svg linkedin"
              element="span"
              src={require("!svg-inline-loader!../assets/images/svg/linkedin.svg")}
            />
          </a>
        </li>
        <li>
          <a className="wordpress" href="http://matthildenbrand.com/blog">
            <InlineSVG
              className="svg wordpress"
              element="span"
              src={require("!svg-inline-loader!../assets/images/svg/wordpress.svg")}
            />
          </a>
        </li>
        <li>
          <a
            className="email"
            href="mailto:hello@matthildenbrand.com?subject=Hello%20Matt&body=Hello%20Matt"
          >
            <InlineSVG
              className="svg email"
              element="span"
              src={require("!svg-inline-loader!../assets/images/svg/email.svg")}
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
)

let showToasty = debounce(function () {
  let meToasty = document.getElementById("meToasty")
  let audioElement = document.createElement("audio")
  audioElement.setAttribute("src", require("../assets/audio/TOASTY.mp3"))
  audioElement.play()
  meToasty.classList.add("toasty")
  setTimeout(() => {
    meToasty.classList.remove("toasty")
  }, 1000)
}, 300)

function handleNameClick() {
  showToasty()
}

export default HeaderLinks
