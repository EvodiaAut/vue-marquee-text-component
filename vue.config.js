module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/vue-marquee-text-component/'
    : '/',
  css: {
    extract: false,
    loaderOptions: {
      css: {
        getLocalIdent: (context, localIdentName, localName) => {
          return 'marquee-text-' + localName
        }
      }
    }
  }
}
