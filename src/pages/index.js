import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>University of Alberta Feminists Club</h1>
    <p>We are a student group focused on the critical radical deconstruction of social/political inequality in our communities. We are actively invested in both community building and political activism. We resist all forms of systemic marginalization and we aim to center experiential knowledges and voices.</p>
    <p>FUA acknowledges that we, as part of the University of Alberta, are located on Treaty 6 territory, and we thank the diverse Indigenous peoples whose footsteps have marked this territory for centuries such as the Cree, Dene, Saulteaux, Blackfoot, Nakota Sioux, Métis; and specifically the ancestral space of the Papaschase Cree. </p>
    <p>We also acknowledge that Land Acknowledgement Statements are not enough, and we keep reconciliation, decolonization, and Indigenous lives in our focus.</p>
  </Layout>
)

export default IndexPage
