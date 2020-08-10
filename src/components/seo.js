import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, image }) => {
  const { pathname } = useLocation()
  const { site } = useStaticQuery(query)

  //Destructuring query data
  const {
    buildTime,
    siteMetadata: {
      defaultTitle,
      headline,
      defaultDescription,
      siteUrl,
      author,
      defaultImage,
      twitterUsername,
      siteLanguage,
    },
  } = site

  //Accepting seo props or serving the default value
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image:`${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }

  //Schema Data
  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: siteUrl,
    headline,
    mainEntityOfPage: siteUrl,
    description: defaultDescription,
    name: defaultTitle,
    author: {
      '@type': 'Organization',
      name: author,
    },
    copyrightYear: '2020',
    creator: {
      '@type': 'Organization',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: author,
    },
    datePublished: '2020-07-10T10:30+01:00',
    dateModified: buildTime,
    image: {
      '@type': 'ImageObject',
      url: `${siteUrl}${defaultImage}`,
    }
  }

  //Breadcrumbs
  const itemListElement = [
    {
      '@type': 'ListItem',
      item: {
        '@id': siteUrl,
        name: seo.title,
      },
      position: 1,
    },
  ]
  const breadcrumb = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    description: 'Breadcrumbs list',
    name: 'Breadcrumbs',
    itemListElement,
  }

  return <Helmet title={seo.title} titleTemplate={`%s | ${site.siteMetadata.defaultTitle}`}>
    <html lang={siteLanguage} />
    <meta name="description" content={seo.description}/>
    <meta name="image" content={seo.image}/>

    <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>
    <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>

    {seo.url && <meta property="og:url" content={seo.url}/>}
    {seo.title && <meta property="og:title" content={seo.title}/>}
    {seo.description && <meta property="og:description" content={seo.description}/>}
    {seo.image && <meta property="og:image" content={seo.image}/>}

    <meta name="twitter:card" content="summary_large_image"/>
    {twitterUsername && <meta name="twitter:creator" content={twitterUsername}/>}
    {seo.title && <meta name="twitter:title" content={seo.title}/>}
    {seo.description && <meta name="twitter:description" content={seo.description}/>}
    {seo.image && <meta name="twitter:image" content={seo.image}/>}
  </Helmet>
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}

const query = graphql`
    query SEO {
      site {
        buildTime(formatString: "YYYY-MM-DD")
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
          siteLanguage
          siteUrl
          author
          defaultImage: image
        }
      }
    }
  `