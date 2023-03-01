# Grams SDK

The official Typescript sdk to interact with the grams network.

## Installation

```
npm install grams-sdk
```

## Usage

```
import { someFunction } from 'grams-sdk';

// use someFunction
```

## Documentation

Refer to github pages for more details

## Development

### Building

To build the package, run:

```
npm run build
```

This will compile the TypeScript source code to JavaScript and place it in the dist directory.

### Testing

To run the tests, run:

```
npm test
```

### Release

The below commands will:
* build
* test
* lint
* format
* push a new commit and tag for the version.
* publish to NPM

To release a major version to NPM run:

```
npm run release:major
```

To release a minor version to NPM run:

```
npm run release:minor
```

To release a patch version to NPM run:

```
npm run release:patch
```

### Formatting

To format the code, run:

```
npm run format
```

This will use Prettier to format all TypeScript files in the src directory.

### Linting

To lint the code, run:

```
npm run lint
```

This will use TSLint to check the code for any style or syntax errors.

## License

This project is licensed under the Apache-2.0 License. See the LICENSE file for details.