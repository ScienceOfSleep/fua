/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/core";

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
        <Global styles={css`
          :root{
          --background: #e7e7e7;
          --dark-grey: #C4C4C4;
          --fua-pink: #FCE3D8;
          --fua-blue: #C1E6F5;
          --shadow: hsla(0, 0%, 0%, .25);
          --font: #000000;
          --strong-font: #000000;
          --title-family: "IBM Plex Mono", sans-serif;
          --body-family: "Noto Sans", serif;
          --site-width: 90vw;
          --horizontal-margin: calc((100% - var(--site-width)) / 2);
          --small-space: .25rem;
          --medium-space: .5rem;
          --large-space: 1rem;
          @media screen and (min-width: 1120px){
            --site-width: 65vw;
            --small-space: .5rem;
            --medium-space: 1rem;
            --large-space: 2rem;
          }
          }
          *{
          box-sizing: border-box;
          margin: 0;
          }
          html,
          body{
          margin: 0;
          color: var(--font);
          font-size: 16px;
          line-height: 1.4;
          }
        /*  remove margin for main div that gatsby mounts into */
        > div{
        margin-top: 0;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6{
        color: var(--strong-font);
        font-family: var(--title-family);
        }
        p,
        li{
        font-family: var(--body-family);
        }
        `}/>
        <main
            css={css`position: relative;`}
        >
            {children}
        </main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
