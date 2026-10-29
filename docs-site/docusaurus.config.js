// @ts-check
// ROZOOM docs. One config, two independent builds driven by DOCS_LOCALE:
//   DOCS_LOCALE=en -> baseUrl /docs/,    content from docs/
//   DOCS_LOCALE=uk -> baseUrl /uk/docs/, content from docs-uk/
// Native Docusaurus i18n would serve Ukrainian at /docs/uk/, while the site
// contract is /uk/docs/ (mirrors the landing's ?lang=uk convention), hence
// the dual-build setup. Slugs must stay identical across both trees; the
// hreflang postbuild script (scripts/add-hreflang.mjs) relies on that.

const locale = process.env.DOCS_LOCALE || 'en';
const isUk = locale === 'uk';

const t = (en, uk) => (isUk ? uk : en);

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: t('ROZOOM Docs', 'Документація ROZOOM'),
  tagline: t(
    'Kubernetes clarity. Without the friction.',
    'Ясність Kubernetes. Без тертя.'
  ),
  favicon: 'img/favicon.svg',

  url: 'https://rozoom.app',
  baseUrl: isUk ? '/uk/docs/' : '/docs/',
  trailingSlash: true,

  organizationName: 'ceh13-community',
  projectName: 'rozoom-landing',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  i18n: {
    defaultLocale: locale,
    locales: [locale],
  },

  markdown: {
    mermaid: true,
  },

  themes: [
    '@docusaurus/theme-mermaid',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        hashed: true,
        language: ['en'],
        indexBlog: false,
        docsRouteBasePath: '/',
        searchBarShortcutHint: false,
      }),
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: isUk ? 'docs-uk' : 'docs',
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          editUrl: ({docPath}) =>
            `https://github.com/ceh13-community/rozoom-landing/edit/master/docs-site/${
              isUk ? 'docs-uk' : 'docs'
            }/${docPath}`,
          showLastUpdateTime: false,
        },
        blog: false,
        pages: false,
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.7,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'https://rozoom.app/og-rozoom-1280x640.png',
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: t('ROZOOM Docs', 'Документація ROZOOM'),
        logo: {
          alt: 'ROZOOM',
          src: 'img/logo.svg',
          href: isUk ? '/uk/docs/' : '/docs/',
          target: '_self',
        },
        items: [
          {
            href: 'https://rozoom.app/',
            label: 'rozoom.app',
            position: 'right',
            target: '_self',
          },
          {
            // Manual cross-locale link: the two locales are separate builds,
            // so the built-in localeDropdown cannot know the other tree.
            // Absolute URL: a root-relative path outside this build's baseUrl
            // trips the broken-links check (resolved against baseUrl).
            href: isUk ? 'https://rozoom.app/docs/' : 'https://rozoom.app/uk/docs/',
            label: isUk ? 'EN' : 'UK',
            position: 'right',
            target: '_self',
          },
          {
            href: 'https://github.com/ceh13-community/rozoom',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `© ${new Date().getFullYear()} ROZOOM · Apache 2.0 · ${t(
          'Open source Kubernetes manager',
          'Відкритий Kubernetes-менеджер'
        )}`,
      },
      prism: {
        additionalLanguages: ['bash', 'yaml'],
      },
    }),
};

export default config;
