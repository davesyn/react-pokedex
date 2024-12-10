import { useEffect, useState } from "react";
import pokemonDetailApi from "../services/pokemonDetail.api";

/**
 * mapPokemonDetailToClient maps the response from the API to the client format
 * @param pokemonApiRes - The response from the API
 * @returns PokemonDetailResult
 */
const mapPokemonDetailToClient = (
  pokemonApiRes: PokemonDetailResponse
): PokemonDetailResult => {
  return {
    mainImageUrl: pokemonApiRes.sprites.front_default,
    name: pokemonApiRes.name,
    weight: pokemonApiRes.weight,
    hp: pokemonApiRes.stats.find((stat) => stat.stat.name === "hp")?.base_stat,
    attack: pokemonApiRes.stats.find((stat) => stat.stat.name === "attack")
      ?.base_stat,
    soundUrl: pokemonApiRes.cries?.legacy,
  };
};

const usePokeDetailApi = (name?: string) => {
  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetailResult>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    pokemonDetailApi(name)
      .then((data: PokemonDetailResponse) => {
        // map the data to the client format, converting the response to the UI format
        const pokemonForClient = mapPokemonDetailToClient(data);
        setPokemonDetail(pokemonForClient);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [name]);

  return { pokemonDetail, isLoading };
};

export default usePokeDetailApi;
