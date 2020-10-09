import React from "react"
import {Link, useStaticQuery} from "gatsby"
import {css} from "@emotion/core"
import { graphql } from "gatsby";
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header";
import LinkButton from "../components/linkbutton";

const GetInvolvedPage = ({data}) => {

    return <Layout>
        <SEO
            title="Get Involved with Feminists at the UofA"
        />
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
                Get Involved with Feminists at the UofA
            </h1>
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
                <h2>Find the FUA on Social Media</h2>
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
                        --icon-width: 35px
                      }
                    `}
                        />
                    </a>
                </div>
                <h2>Attend a Meeting or Event</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo in nisi non dictum. Sed auctor auctor justo, ut volutpat orci venenatis eu. Nam accumsan quam sed nisl molestie pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas placerat tempor dui, at convallis mauris auctor quis. Nunc dictum laoreet fringilla. Sed id eros eget enim lacinia cursus.
                </p>
                <LinkButton to="/events" content="Event Schedule"/>
            </section>
            <h2>Our Executive Committee</h2>
            <section
                css={css`
                      background-color: #ffffff;
                      border-top: 8px solid var(--fua-blue);
                      border-left: 8px solid var(--fua-blue);
                      border-radius: 25px;
                      box-shadow: 0 4px 4px 0 var(--shadow);
                      h3{
                        width: fit-content;
                        margin: 0 auto;
                      }
                    `}
            >
                <h3>President</h3>
                <h4>Mikayla Huculak</h4>
                <h5>Women and Gender Studies Major, Native Studies Minor</h5>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo in nisi non dictum. Sed auctor auctor justo, ut volutpat orci venenatis eu. Nam accumsan quam sed nisl molestie pulvinar. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas placerat tempor dui, at convallis mauris auctor quis. Nunc dictum laoreet fringilla. Sed id eros eget enim lacinia cursus.
                </p>
            </section>
        </div>
    </Layout>
}

export const query = graphql`
    query {
        ig: file(relativePath: { eq:"ig-icon.png" }) {
            childImageSharp {
                fixed (quality:100, width: 50) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        fb: file(relativePath: { eq:"fb-icon.png" }) {
            childImageSharp {
                fixed (quality:100, width: 49) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`

export default GetInvolvedPage