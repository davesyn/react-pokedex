import { DEFAULT_MAX_RESULTS, POKEMON_API_BASE_URL } from "../constants";

const POKEMON_LIST_API_DEFAULTS = {
  maxResults: DEFAULT_MAX_RESULTS,
  page: 0,
};

const pokemonListApi = async ({
  maxResults,
  page,
} = POKEMON_LIST_API_DEFAULTS) => {
  const offset = page * maxResults;
  const res = await fetch(
    `${POKEMON_API_BASE_URL}/api/v2/pokemon?offset=${offset}&limit=${maxResults}`
  );
  const data = await res.json();
  return data;
};

export default pokemonListApi;
