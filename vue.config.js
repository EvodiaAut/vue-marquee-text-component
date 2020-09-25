module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-marquee-text-component/'
    : '/',
  css: {
    extract: false,
    requireModuleExtension: false,
    loaderOptions: {
      css: {
        modules: {
          localIdentName: 'marquee-text-[local]'
        }
      }
    }
  }
}
