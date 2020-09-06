import React, {useEffect, useState} from "react"
import {css} from "@emotion/core"
import styled from "@emotion/styled"
import {graphql, Link, useStaticQuery} from "gatsby";
import Navbar from "./navbar";
import Img from "gatsby-image";

const Header = (props) => {

  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "university-of-alberta-feminists-club-logo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <header
    css={css`
          background-color: var(--fua-pink);
          display: flex;
          justify-content: space-between;
          align-content: center;
          padding: .75rem var(--horizontal-margin);
          box-shadow: 0 4px 4px 0 var(--shadow);
        `}
  >
    <Img
        fluid={data.logo.childImageSharp.fluid}
        alt="University of Alberta Feminists Club Logo"
        css={css`
              width: 100px;
              border-radius: 100%;
            `}
    />
    <Navbar/>
  </header>
}

export default Header