import { POKEMON_API_BASE_URL } from "../constants";

const pokemonDetailApi = async (name?: string) => {
  if (!name) return undefined;
  const res = await fetch(`${POKEMON_API_BASE_URL}/api/v2/pokemon/${name}`);
  const data = await res.json();
  return data;
};

export default pokemonDetailApi;
