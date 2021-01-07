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
                      text-align: center;
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
                      display: flex;
                      flex-direction: column;
                      align-items: center;
                      padding-bottom: 1.25rem;
                      h2{
                        text-align: center;
                      }
                      p{
                      text-align: justify;
                      padding: 0 .5rem 1rem .25rem;
                      }
                    `}
            >
                <h2>Find the FUA on Social Media</h2>
                <div
                    css={css`
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      margin: 1rem 0 .5rem;
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
                              margin-bottom: 1px;
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
            {data.allContentfulExecutive.edges.map(({node})=>(
                <section
                    css={css`
                      background-color: #ffffff;
                      border-top: 8px solid var(--fua-blue);
                      border-left: 8px solid var(--fua-blue);
                      border-radius: 25px;
                      box-shadow: 0 4px 4px 0 var(--shadow);
                      display: grid;
                      grid-template-columns: 10px 1fr 10px;
                      justify-items: center;
                      > *{
                        grid-column: 2;
                      }
                      h3,h4,h5{
                        text-align: center;
                      }
                      h3{
                        font-size: 1.5rem;
                      }
                      h4{
                        font-size: 1.5rem;
                      }
                      h5{
                        font-size: 1.1rem;
                      }
                      p{
                        text-align: justify;
                        margin-bottom: .75rem;
                      }
                      img{
                        margin-top: .25rem;
                        width: 100%;
                        border-radius: 100%;
                        border: 7px solid var(--fua-pink);
                      }
                    `}
                >
                    <h3>{node.positionTitle}</h3>
                    <img src={node.picture.fixed.src} alt={node.picture.description}/>
                    <h4>{node.name}</h4>
                    <h5>{node.fieldOfStudy}</h5>
                    <h5>Bio</h5>
                    <p>{node.bio.bio}</p>
                    <h5>Position Description</h5>
                    <p>{node.positionDescription.positionDescription}</p>
                </section>
            ))}
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
  allContentfulExecutive {
    edges {
      node {
        id
        bio {
          bio
        }
        name
        fieldOfStudy
        picture {
          file {
            url
            }
          fixed {
              srcWebp
              src
          }
          description
        }
        positionTitle
        positionDescription {
          positionDescription
        }
      }
    }
  }
  }
`

export default GetInvolvedPage