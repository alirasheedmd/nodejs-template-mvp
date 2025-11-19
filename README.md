# Node.js Project Template

A production-ready Node.js project template following industry best practices.

## Features

- **TypeScript**: Fully typed codebase with strict mode enabled
- **ESLint & Prettier**: Code linting and formatting
- **Vitest**: Fast unit testing framework
- **Environment Configuration**: dotenv for configuration management
- **Git Hooks**: Husky for pre-commit validation
- **Structured Logging**: Built-in logger utility
- **VS Code Integration**: Pre-configured settings and launch configurations

## Project Structure

```
├── src/                    # Source code
│   ├── index.ts           # Application entry point
│   └── utils/             # Utility modules
│       └── logger.ts      # Logging utility
├── tests/                 # Test files
├── config/                # Configuration files
├── dist/                  # Compiled JavaScript output
├── .github/               # GitHub workflows and documentation
├── .vscode/               # VS Code settings
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── .eslintrc.json         # ESLint configuration
├── .prettierrc.json       # Prettier configuration
└── .env.example           # Example environment variables
```

## Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd nodejs-template
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

## Available Scripts

### Development

```bash
npm run dev
```

Starts the application in watch mode with automatic reloading.

### Build

```bash
npm run build
```

Compiles TypeScript to JavaScript in the `dist/` directory.

### Production

```bash
npm start
```

Runs the compiled application.

### Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests with UI
npm run test:ui
```

### Code Quality

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code with Prettier
npm run format

# Type check
npm run type-check

# Run all validations
npm run validate
```

## Configuration

Configuration is managed through environment variables in the `.env` file. See `.env.example` for available options.

Key configuration properties are defined in `config/config.ts` and exported as a typed object.

## Logging

The project includes a built-in `Logger` utility in `src/utils/logger.ts`:

```typescript
import Logger, { LogLevel } from './utils/logger.js';

const logger = new Logger(LogLevel.INFO);
logger.info('This is an info message');
logger.error('This is an error message', { context: 'some data' });
```

## Development Workflow

1. **Create a new branch** for your feature
2. **Make your changes** in the `src/` directory
3. **Write tests** in the `tests/` directory
4. **Run validation**: `npm run validate`
5. **Commit** with meaningful messages
6. **Push** and create a pull request

## Git Hooks

Husky is configured to run linting and formatting checks before commits. These are configured in `.husky/` directory.

## Debugging

### VS Code Debugging

1. Open VS Code
2. Go to Run and Debug (Ctrl+Shift+D / Cmd+Shift+D)
3. Select "Launch Program" or "Debug Tests"
4. Press F5 or click the play button

### Debug with Node Inspector

```bash
node --inspect dist/index.js
```

Then open `chrome://inspect` in Chrome DevTools.

## Best Practices

- **Type Safety**: Use strict TypeScript mode
- **Testing**: Write tests for all business logic
- **Code Style**: Follow configured ESLint and Prettier rules
- **Environment**: Keep sensitive data in `.env` files, never commit `.env`
- **Logging**: Use the Logger utility instead of console.log
- **Error Handling**: Always handle promise rejections and async errors

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues and questions, please open an issue on the repository.
# nodejs-template-mvp
