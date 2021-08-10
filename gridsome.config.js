// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Counter Comms',
  siteUrl: 'https://countercomms.com',
  siteDescription: 'Dedicated company website: Software Development and Engineering, DevOps, DevSecOps, Cyberecurity and anything and everything around Linux',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // global plugins go here!!!
      ]
    }
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        remark: {}
      }
    },
    {
      use: 'gridsome-plugin-netlify-cms',
      options: {
        publicPath: '/admin',
        modulePath: 'src/admin/index.js'
      }
    },
  ],
  templates: {
    Post: '/blog/:title'
  }
}
