const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'SimplyPrint Blog',
  tagline: 'SimplyPrint Blog',
  url: 'https://blog.simplyprint.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon_gradient.ico',
  organizationName: 'SimplyPrint', // Usually your GitHub org/user name.
  projectName: 'Blog', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Overview',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        /* {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        }, */
        {
          to: '/blog', 
          label: 'Blog', 
          position: 'left',
        },
        /* {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        }, */
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Blogs',
          items: [
            /* {
              label: 'First Blog',
              to: '/docs/first',
            }, */
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Front Page',
              href: 'https://simplyprint.io/',
            },
            /* {
              label: 'Facebook',
              href: 'www.facebook.com/groups/simplyprint/',
            }, */
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/SimplyPrint/Blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/SimplyPrint/Blog/tree/main/my-website',
          /* editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/', */
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/SimplyPrint/Blog/tree/main/my-website/blog',
          /* editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/', */
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
