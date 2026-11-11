// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Thoughtful Velocity',
  tagline: 'Competitive advantage comes from removing friction faster than your competitors, not from producing more content.',
  favicon: 'img/favicon.ico',

  // Set these before you deploy.
  url: 'https://will-kelly.github.io',
  baseUrl: '/thoughtful-velocity/',
  organizationName: 'will-kelly',
  projectName: 'thoughtful-velocity',

  onBrokenLinks: 'throw',
  markdown: {hooks: {onBrokenMarkdownLinks: 'throw'}},

  i18n: {defaultLocale: 'en', locales: ['en']},

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/will-kelly/thoughtful-velocity/tree/main/',
        },
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {respectPrefersColorScheme: true},
      navbar: {
        title: 'Thoughtful Velocity',
        logo: {alt: 'Thoughtful Velocity', src: 'img/logo.svg'},
        items: [
          {type: 'docSidebar', sidebarId: 'conceptSidebar', position: 'left', label: 'The concept'},
          {to: '/docs/diagnose/self-assessment', label: 'Self-assessment', position: 'left'},
          {to: '/docs/about', label: 'About', position: 'right'},
          {href: 'https://github.com/will-kelly', label: 'GitHub', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'The concept',
            items: [
              {label: 'What it is', to: '/docs/intro'},
              {label: 'The formula', to: '/docs/formula'},
              {label: 'Self-assessment', to: '/docs/diagnose/self-assessment'},
            ],
          },
          {
            title: 'Will Kelly',
            items: [
              {label: "Will's Newsletter (Substack)", href: 'https://willkelly.substack.com'},
              {label: 'Medium', href: 'https://willkelly.medium.com'},
              {label: 'GitHub', href: 'https://github.com/will-kelly'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Will Kelly.`,
      },
      prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
    }),
};

export default config;
