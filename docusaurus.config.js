// docusaurus.config.js
const config = {
  title: 'HashStudios Intranet',
  tagline: 'Your Comprehensive Guide to All Things HashStudios',
  favicon: 'img/hashstudios-favicon.ico',
  
  // Update URLs
  url: 'https://hashnet.hashstudiosllc.com',
  baseUrl: '/',
  
  // Update organization info
  organizationName: 'Hash-Studios-LLC',
  projectName: 'ITS-Hashnet-Central',
  
  // Handle broken links - important configuration
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  
  // Theme configuration
  themeConfig: {
    navbar: {
      title: 'HashStudios Intranet',
      logo: {
        alt: 'HashStudios Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/blog', label: 'Announcements', position: 'left'},
        {
          href: 'https://github.com/Hash-Studios-LLC/ITS-Hashnet-Central',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/intro.md',
            },
            {
              label: 'Business Management',
              to: '/docs/intro/Business%20Management/Organizational-Chart',
            },
          ],
        },
        {
          title: 'HashStudios',
          items: [
            {
              label: 'Company Website',
              href: 'https://hashstudiosllc.com',
            },
            {
              label: 'Discord Community',
              href: 'https://discord.gg/hashstudios',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Announcements',
              to: '/blog',
            },
            {
              label: 'Internal Tools',
              href: '#',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} HashStudios LLC. All rights reserved.`,
    },
    // Add brand colors to the theme
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    // Add search functionality
   
  },
  
  // Presets configuration (critical for Docusaurus to work properly)
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Hash-Studios-LLC/ITS-Hashnet-Central/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/Hash-Studios-LLC/ITS-Hashnet-Central/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  
  // Optional: Plugin configurations if needed
  plugins: [
    // Add plugins here if required
  ],
};

module.exports = config;