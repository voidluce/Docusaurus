// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MaskTAP Document | MaskTAP',
  url: 'https://www.masktop.com',
  baseUrl: '/docs/',
  favicon: 'assets/favicon.svg',
  trailingSlash: true,
  /*
  i18n: {
    defaultLocale: 'cn',
    locales: ['cn', 'en'],
    path: 'i18n',
    localeConfigs: {
      cn: {
        label: '简体中文',
        direction: 'ltr',
        htmlLang: 'zh-CN',
        calendar: 'gregory',
        path: 'zh',
      },
      en: {
        label: 'English',
        direction: 'rtl',
        htmlLang: 'en-US',
        calendar: 'persian',
        path: 'en',
      },
    },
  },
  */
  noIndex: false,
  onBrokenLinks: 'throw',
  // onBrokenAnchors: 
  onBrokenMarkdownLinks: 'warn',
  // onDuplicateRoutes: 
  tagline: 'Dinosaurs are cool',
  organizationName: 'OvrkAI',
  projectName: 'Docs',
  deploymentBranch: 'gh-pages',
  // githubHost: 'github.com',
  // githubPort: '22',
  themeConfig: {
    docs: {
      versionPersistence: 'localStorage',
      sidebar: {
        hideable: false,
        autoCollapseCategories: false,
      },
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    image: 'assets/docusaurus-social-card.jpg',
    Metadata: [
        {name: 'og:image', content: 'assets/og-image-default.svg'},
        ],
    announcementBar: {
        id: 'id',
        content:'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
    },
    blog: {
      sidebar: {
        groupByYear: true,
      },
    },
    navbar: {
      title: 'Site Title',
      logo: {
        alt: 'Site Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
        href: '/',
        width: 32,
        height: 32,
        target: '_sref',
        className: 'custom-navbar-logo-class',
        style: {border: 'solid red'},
      },
      /*
      items: [
        {
          type: 'doc',
          position: 'left',
          docId: 'introduction',
          label: 'Docs',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          type: 'docsVersionDropdown',
          position: 'right',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        {
          type: 'dropdown',
          label: 'Community',
          position: 'left',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com',
            },
            {
              type: 'doc',
              label: 'Social',
              docId: 'social',
            },
            // ... more items
          ],
        },
        /*
        {
            type: 
            label: 
            html: 
            to: 
            href: 
            prependBaseUrlToHref: 
            position: 
            activeBasePath: 
            activeBaseRegex: 
            className: 
        },
        
        {
          type: 'doc',
          position: 'left',
          docId: 'introduction',
          label: 'Docs',
        },
        {
          type: 'docSidebar',
          position: 'left',
          sidebarId: 'api',
          label: 'API',
        },
        {
          type: 'search',
          position: 'right',
        },
        {
          type: 'html',
          position: 'right',
          value: '<button>Give feedback</button>',
        },
        
      ],
      */
      hideOnScroll: false,
      style: 'primary',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      defaultLanguage: 'javascript',
    },
    footer: {
      logo: {
        alt: 'Meta Open Source Logo',
        src: 'img/meta_oss_logo.png',
        href: 'https://opensource.fb.com',
        width: 160,
        height: 51,
      },
      copyright: `Copyright © 2024-${new Date().getFullYear()} MaskTAP All rights reserved.`,
      style: 'dark',
      /*
      links: [
      {
        title: 'Docs',
        items: [
          {
            label: 'Style Guide',
            to: 'docs/',
          },
          {
            label: 'Second Doc',
            to: 'docs/doc2/',
          },
        ],
      },
      {
        title: 'Community',
        items: [
          {
            label: 'Stack Overflow',
            href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          },
          {
            label: 'Discord',
            href: 'https://discordapp.com/invite/docusaurus',
          },
          {
            label: 'X',
            href: 'https://x.com/docusaurus',
          },
          {
            html: `
                <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                  <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" width="114" height="51" />
                </a>
              `,
          },
        ],
      },
    ],
    */
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    },
  },
  /*
  presets: [
    [
     ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  */
};
export default config;
