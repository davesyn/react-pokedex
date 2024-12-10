// API response
type PokemonResult = {
  name: string;
  url: string;
};

type PokemonApiResponse = {
  count: number;
  results: PokemonResult[];
};
