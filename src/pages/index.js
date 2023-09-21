import * as React from "react"
import ocean from "../images/Ocean.jpg"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 30,
  maxWidth: 500,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const links = [
  {
    text: "Hawaii",
    url: "https://naturallyaloha.com/planning-a-hawaii-vacation-the-ultimate-guide/",
    description:
      "This is a great place to go vacation if you are in the mood for some sun and nice warm weather!",
    color: "#E95800",
  },
  {
    text: "New York",
    url: "https://travel.usnews.com/rankings/best-places-to-visit-in-new-york/",
    description:
      "This trip is great for anyone that wants to go vist a big city or try some legendary food!",
    color: "#1099A8",
  },
  {
    text: "Colorado",
    url: "https://travel.usnews.com/rankings/best-places-to-visit-in-colorado/",
    description:
      "This trip is amazing for anyone that wants to be outdoors and enjoys hiking and climbing or sking and snowboarding depending what time of the year you go!",
    color: "#BC027F",
  },
  {
    text: "Alaska",
    url: "https://www.alaska.org/trip-ideas",
    description:
      "This destination is great for anyone that wants to be outdoors but perfers to go fishing and hunting!",
    color: "#0D96F2",
  },
  {
    text: "Florida",
    url: "https://www.travelandleisure.com/trip-ideas/beach-vacations/best-places-to-visit-in-florida",
    description:
      "This is another great beach vacation trip for anyone that is wanting to spend some time in the sun and out by the sea!",
    color: "#8EB814",
  },
  {
    text: "Texas",
    url: "https://travel.usnews.com/rankings/best-places-to-visit-in-texas/",
    badge: true,
    description:
      "You can never go wrong with wanting to go on a trip to the largest state in the U.S. This trip is great for anyone that wants to experience the vast landscapes of the south!",
    color: "#663399",
  },
]

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        <span style={headingAccentStyles}>Welcome to Vacation Ideas!</span>
      </h1>
      <p style={paragraphStyles}>
        This site helps you see images of different popular vaction locations in the United States. That way you can remove the pressure of finding the perfect vacation spot and get going!
      </p>
      <img src={ocean} width={1270} height={250} alt="Stock ocean image." />
      <p style={paragraphStyles}>Click on the state name to see some popular vacation ideas for that state.</p>
      <ul style={listStyles}>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
              >
                {link.text}
              </a>
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Vacation Ideas</title>
