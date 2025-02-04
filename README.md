# HashNet Central (Intranet)

Welcome to our internal documentation website repository. This project uses [Docusaurus](https://docusaurus.io/), a modern static website generator optimized for technical documentation.

## Quick Start (TLDR)

```bash
git clone https://github.com/Hash-Studios-LLC/ITS-Hashnet-Central
cd ITS-Hashnet-Central
yarn install
yarn start
```

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16.14 or higher)
- [Yarn](https://yarnpkg.com/) (v1.22 or higher)
- [Git](https://git-scm.com/) for version control

## Installation and Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Hash-Studios-LLC/ITS-Hashnet-Central
   cd ITS-Hashnet-Central
   ```

2. **Install Dependencies**
   ```bash
   yarn install
   ```

## Development

### Starting the Development Server

```bash
yarn start
```
This will:
- Start the local development server
- Open your default browser to `http://localhost:3000`
- Enable hot-reloading for real-time updates

### Project Structure

```
your-repository/
├── docs/                 # Documentation markdown files
├── src/                  # Source code for custom pages
├── static/              # Static files (images, etc.)
├── docusaurus.config.js # Main configuration file
├── sidebars.js         # Sidebar configuration
└── package.json        # Project dependencies and scripts
```

## Building for Production

1. **Generate Static Files**
   ```bash
   yarn build
   ```
   This creates optimized production build in the `build` directory.

2. **Test Production Build**
   ```bash
   yarn serve
   ```
   This serves the built website locally at `http://localhost:3000`

## Available Scripts

| Command | Description |
|---------|------------|
| `yarn start` | Starts development server |
| `yarn build` | Creates production build |
| `yarn serve` | Serves production build locally |
| `yarn clear` | Clears build cache |
| `yarn test` | Runs test suite |
| `yarn lint` | Checks code style |

## Documentation Standards

When contributing to the documentation:

1. **File Organization**
   - Place new documentation in appropriate subdirectories under `docs/`
   - Use kebab-case for file names (e.g., `getting-started.md`)

2. **Markdown Guidelines**
   - Use ATX-style headers (`#` for h1, `##` for h2)
   - Include alternative text for images
   - Use code blocks with appropriate language tags

3. **Content Structure**
   - Start each document with a clear title
   - Include a brief introduction
   - Use consistent heading hierarchy
   - Add examples where applicable

## Troubleshooting

Common issues and solutions:

1. **Build Failures**
   - Clear cache: `yarn clear`
   - Delete `node_modules` and reinstall
   - Check Node.js version compatibility

2. **Missing Dependencies**
   ```bash
   yarn install --check-files
   ```

3. **Port Conflicts**
   - Change port in `docusaurus.config.js`
   - Kill existing process using the port

## Additional Resources

- [Docusaurus Documentation](https://docusaurus.io/docs)
- [Markdown Guide](https://www.markdownguide.org/)
- [MDX Documentation](https://mdxjs.com/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Yarn Documentation](https://classic.yarnpkg.com/en/docs/)

## Support

For internal support:
- Create an issue in this repository

---
