# ReactPokédex

ReactPokédex is a web application built with React, TypeScript, and Vite. It allows users to browse and view details of various Pokémon.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [License](#license)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/react-pokedex.git
   cd react-pokedex
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

## Usage

To start the development server, run:

```sh
npm run dev
```

This will start the Vite development server and open the application in your default browser.

## Project Structure

- **Components**
  - `NavigationBar`: A component for the navigation bar.
  - `Pagination`: A component for pagination.
  - `PokeCard`: A component to display Pokémon details.
  - `Title`: A component for the title.
- **Hooks**
  - `usePokeApi`: A custom hook to fetch the Pokémon list data.
  - `usePokeDetailApi`: A custom hook to fetch Pokémon details.
- **Services**
  - `pokemonDetail.api.ts`: Service to fetch Pokémon details from the API.
  - `pokemonList.api.ts`: Service to fetch the Pokémon list from the API.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run lint`: Runs ESLint to analyze the code.
- `npm run preview`: Previews the production build.

## License

This project is licensed under the MIT License.
