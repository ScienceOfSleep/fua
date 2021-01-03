import React from "react"
import {Link, useStaticQuery} from "gatsby"
import {css} from "@emotion/core"
import { graphql } from "gatsby";
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header";

const EventsPage = ({data}) => {

    return <Layout>
        <div
            css={css`
                  background-color: var(--background);
                `}
        >
        <Header/>
            <h1
                css={css`
                      margin: var(--large-space) auto;
                      width: fit-content;
                    `}
            >
                Events
            </h1>
            {data.allContentfulEvent.edges.map(({node})=>(
                <section
                    css={css`
                      background-color: #ffffff;
                      border-top: 8px solid var(--fua-blue);
                      border-left: 8px solid var(--fua-blue);
                      border-radius: 25px;
                      box-shadow: 0 4px 4px 0 var(--shadow);
                      h2{
                        width: fit-content;
                        margin: 0 auto;
                      }
                    `}
                >
                    <h3>{node.eventName}</h3>
                    <h4>{node.eventDate}</h4>
                    <p>{node.eventDescription.eventDescription}</p>
                </section>
                ))}
        </div>
    </Layout>
}

export const query = graphql`
query {
  allContentfulEvent {
    edges {
      node {
        eventName
        eventDate(formatString: "MMMM Do Y, ha")
        eventDescription {
          eventDescription
        }
      }
    }
  }
}
`

export default EventsPage