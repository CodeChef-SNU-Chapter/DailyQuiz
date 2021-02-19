module.exports = {
  purge: [
  './.vuepress/**/*.html',
  './.vuepress/**/*.vue',
  './.vuepress/**/*.js',
  './.vuepress/**/*.styl',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
    },
  },
  variants: {
    extend: {
      borderColor: ['hover'],
    },
  },
  plugins: [],
}
