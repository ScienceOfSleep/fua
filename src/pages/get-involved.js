import React from "react"
import {Link, useStaticQuery} from "gatsby"
import {css} from "@emotion/core"
import { graphql } from "gatsby";
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header";

const GetInvolvedPage = () => {

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
        </div>
    </Layout>
}

export default GetInvolvedPage