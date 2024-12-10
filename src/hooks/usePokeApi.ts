import { useEffect, useState } from "react";
import pokemonListApi from "../services/pokemonList.api";

const DEFAULT_MAX_RESULTS = 10;

const usePokeApi = (maxResults = DEFAULT_MAX_RESULTS) => {
  const [pokemon, setPokemon] = useState<PokemonResult[]>([]);
  const [page, setPage] = useState(0);
  const [totPages, setTotPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    pokemonListApi({
      maxResults,
      page,
    })
      .then((data: PokemonApiResponse) => {
        const totPages = Math.ceil(data.count / maxResults);
        setTotPages(totPages);
        setPokemon(data.results);
      })
      .catch((e) => {
        console.error(e);
        setError("Failed to fetch Pokémon data");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page, maxResults]);

  const goToPreviousPage = () => {
    if (page > 0) setPage(page - 1);
  };

  const goToNextPage = () => {
    if (page < totPages - 1) setPage(page + 1);
  };

  const hasPreviousPage = page === 0;
  const hasNextPage = page === totPages - 1;

  return {
    pokemon,
    goToPreviousPage,
    goToNextPage,
    hasPreviousPage,
    hasNextPage,
    page,
    setPage,
    totPages,
    loading,
    error,
  };
};

export default usePokeApi;
