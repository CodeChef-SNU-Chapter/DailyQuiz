const { description } = require('../package')

module.exports = {
  base: '/dailyquiz/',

  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Daily Quiz | CodeChef SNU Chapter',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
    ['meta', { name: 'theme-color', content: '#1a202c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    mainURL: process.env.URL, // main deploy URL for netlify
    // repo: '',
    // editLinks: false,
    // docsDir: '',
    // editLinkText: '',
    // lastUpdated: false,
    nav: [
    ],
    socials: {
      linkedin: 'https://linkedin.com/in/codechef-snu-chapter-4b951b202',
      github: 'https://github.com/CodeChef-SNU-Chapter',
      ig: 'https://www.instagram.com/codechef.snu.chapter/',
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
  ],
  postcss: {
    plugins: [
      require("autoprefixer"),
      require("tailwindcss")("./tailwind.config.js")
    ]
  }
}
