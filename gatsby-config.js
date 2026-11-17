module.exports = {
  siteMetadata: {
    title: `Langua`,
    subtitle: `A suite of language tools`,
    description: `A suite of language tools originally by Ian A. Cook.`,
    author: `Ian A. Cook`,
    authorURL: `https://github.com/nai888`,
    appGhURL: `https://github.com/kbmcgowan/langua`,
    canonical: `https://vowel.space/langua/`,
    version: `0.4.6`,
    toolInfo: {
      gen: {
        title: `Gen`,
        link: `gen`,
        description: `is a tool for automatically building a set of words based on arbitrary rules of phonotactics. This can be used to create a dummy vocabulary for linguistic experimentation, to generate words or names for a naming language in a work of fantasy or science fiction, or as the basis for building the vocabulary of a constructed language.`
      },
      morph: {
        title: `Morph`,
        link: `morph`,
        description: `is a tool for modeling historical sound change according to arbitrary rules of phonetic change.`
      },
      deriv: {
        title: `Deriv`,
        link: `deriv`,
        description: `is a tool for modeling word derivation based on a given list of lexemes and affixes.`
      },
      frequen: {
        title: `Frequen`,
        link: `frequen`,
        description: `is a tool for analyzing phoneme frequencies in a given text.`
      },
    }
  },
  pathPrefix:
    process.env.GATSBY_PATH_PREFIX !== undefined
      ? process.env.GATSBY_PATH_PREFIX
      : `/langua`,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        cssLoaderOptions: {
          esModule: false,
          modules: {
            namedExport: false
          }
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Noto+Sans:400,400i,700,700i`,
          `Noto+Serif:400,400i,700,700i&amp;subset=greek,greek-ext,latin-ext`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Langua`,
        short_name: `Langua`,
        description: `A suite of language tools`,
        lang: `en-us`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#2f8f9d`,
        display: `standalone`,
        icon: `src/images/favicon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-offline`
  ]
}
