import React from "react"
import { Link } from "gatsby"
import {css} from "@emotion/core"
import { graphql } from "gatsby";
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BgImage from "../components/bgimage";

const IndexPage = ({data}) => (
  <Layout>
    <SEO
        title="Home"
        description="Feminists at University of Alberta are a student group focused on the critical radical deconstruction of social/political inequality in our communities."
    />
    <div
        css={css`
              --logo-size: 220px;
              display: grid;
              grid-template-areas:
              "."
              "logo"
              "."
              ;
              height: 100vh;
              grid-template-rows: 10% var(--logo-size) auto;
              @media screen and (min-width: 1120px){
                --logo-size: 600px
              }
            `}
    >
    <BgImage fluid={data.assiniboia.childImageSharp.fluid}/>
    <Img
        fluid={data.logo.childImageSharp.fluid}
        alt="University of Alberta Feminists Club Logo"
        css={css`
              width: var(--logo-size);
              border-radius: 100%;
              margin: 1rem auto 0;
              grid-area: logo;
            `}
    />
    </div>
    <section
        css={css`
              grid-area: copy;
              position: absolute;
              top: 60vh;
              @media screen and (min-width: 1120px){
                top: 81vh;
              }
            `}
    >
        <div
            css={css`
                   margin: 2rem calc(var(--horizontal-margin) / 2);
                   padding: 0 calc(var(--horizontal-margin) / 2);
                   background-color: var(--fua-pink);
                   opacity: .75;
                   box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
                   h1{
                     text-align: center;
                   }
                   p{
                     text-align: justify;
                     font-size: 20px;
                     font-weight: 600;
                     &:first-of-type{
                     text-align-last: center;
                     }
                   }
                   @media screen and (min-width: 1120px){
                     margin: 2rem var(--horizontal-margin) 1.25rem;
                     padding: .5rem .5rem .25rem;
                   }
                `}
        >
            <h1>University of Alberta Feminists Club</h1>
            <p>We are a student group focused on the critical radical deconstruction of social/political inequality in our communities. We are actively invested in both community building and political activism. We resist all forms of systemic marginalization and we aim to center experiential knowledges and voices.</p>
            <p>FUA acknowledges that we, as part of the University of Alberta, are located on Treaty 6 territory, and we thank the diverse Indigenous peoples whose footsteps have marked this territory for centuries such as the Cree, Dene, Saulteaux, Blackfoot, Nakota Sioux, Métis; and specifically the ancestral space of the Papaschase Cree. </p>
            <p>We also acknowledge that Land Acknowledgement Statements are not enough, and we keep reconciliation, decolonization, and Indigenous lives in our focus.</p>
        </div>
        <div
            css={css`
                  display: flex;
                  justify-content: center;
                  align-items: center;
                `}
        >
        <a href="https://www.instagram.com/feministsuofa/" rel="sameAs">
            <Img
                fixed={data.ig.childImageSharp.fixed}
                alt="Instagram icon"
                css={css`
                      --icon-width: 35px;
                      width: var(--icon-width);
                      margin-right: 1rem;
                      @media screen and (min-width: 1120px){
                        --icon-width: 35px
                      }
                    `}
            />
        </a>
        <a href="https://www.facebook.com/feministsuofa/" rel="sameAs">
            <Img
                fixed={data.fb.childImageSharp.fixed}
                alt="Facebook icon"
                css={css`
                      --icon-width: 35px;
                      width: var(--icon-width);
                      margin-left: 1rem;
                      @media screen and (min-width: 1120px){
                        --icon-width: 20px
                      }
                    `}
            />
        </a>
        </div>
    </section>
  </Layout>
)

export const query = graphql`
    query {
        logo: file(relativePath: { eq: "university-of-alberta-feminists-club-logo.jpg" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        assiniboia: file(relativePath: { eq:"assiniboia-hall-university-of-alberta.jpg" }) {
            childImageSharp {
                fluid (quality:100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        ig: file(relativePath: { eq:"instagram.png" }) {
            childImageSharp {
                fixed (quality:100, width: 45) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        fb: file(relativePath: { eq:"facebook.png" }) {
            childImageSharp {
                fixed (quality:100, width: 28) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`

export default IndexPage
