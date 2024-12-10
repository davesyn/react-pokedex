// App data type
type PokemonDetailResult = {
  name: string;
  weight: number;
  mainImageUrl: string;
  hp: number | undefined;
  attack: number | undefined;
  soundUrl?: string;
};

// API response
type PokemonDetailResponse = {
  name: string;
  weight: number;
  sprites: {
    front_default: string;
    back_default: string;
  };
  stats: PokemonDetailStats[];
  cries: {
    legacy: string;
  };
};

type PokemonDetailStats = {
  base_stat: number;
  stat: {
    name: string;
  };
};
