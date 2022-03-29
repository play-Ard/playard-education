// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Playard Education',
  tagline: 'Playard on duty !',
  url: 'https://play-Ard.github.io',
  baseUrl: '/playard-education/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/Formal.svg',
  organizationName: 'play-Ard', // Usually your GitHub org/user name.
  projectName: 'playard-education', // Usually your repo name.
  deploymentBranch : 'gh-pages',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'My Site Logo',
          src: 'img/Education - Black.svg',
          width: '100px',
          height: '500px'
        },
        items: [
          {
            type: 'doc',
            docId: 'playardGameEngine/pgeblog1',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/Designer', label: 'Designer', position: 'left'},
          {
            href: 'https://github.com/play-Ard',
            label: 'Community',
            position: 'right',
          },
          {
            href: 'https://github.com/play-Ard',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [

          {
            title: 'Community',
            items: [

              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/play-ard/',
              },
            ],
          },
          
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Playard Developer Team`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
