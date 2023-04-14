# Monorepo Boilerplate

This is a monorepo boilerplate that contains two packages: a Next.js web client and an auth service. Both are still WIP.

## Installation

1. Make sure you have the latest version of Node.js installed. You can use `nvm` to manage multiple Node.js versions on your system. To install the latest LTS version of Node.js using `nvm`, run `nvm install --lts`.
2. Fork, download, or clone this repository.
3. Navigate to the root folder of the repository.
4. Run `yarn install && yarn dev` to install all dependencies and start both packages using `concurrently`.

## Packages

- `web-client`: A Next.js web client.
- `auth-service`: An auth service.

## Usage

Both packages are started automatically using the `concurrently` package when you run `yarn dev`. If you want to run them individually, you can use the following commands:

- `yarn workspace web-client dev`: Start the web client.
- `yarn workspace auth-service dev`: Start the auth service.

## License

This project is licensed under the MIT License. See the LICENSE file for details. 
