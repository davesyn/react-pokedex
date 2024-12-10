import { useState } from "react";
import Pagination from "../components/Pagination/Pagination";
import usePokeApi from "../hooks/usePokeApi";
import { DEFAULT_MAX_RESULTS } from "../constants";
import Title from "../components/Title/Title";
import PokeCard from "../components/PokeCard/PokeCard";
import { useNavigate } from "react-router";

const Home = () => {
    const [actualLimit, setActualLimit] = useState(DEFAULT_MAX_RESULTS);
    const { pokemon, goToPreviousPage, goToNextPage, hasPreviousPage, hasNextPage, page, setPage, totPages, loading } = usePokeApi(actualLimit);
    const navigate = useNavigate();

    return <div>
        <Title>
            ReactPokédex
        </Title>
        <Pagination
            goToPreviousPage={goToPreviousPage}
            goToNextPage={goToNextPage}
            hasPreviousPage={hasPreviousPage}
            hasNextPage={hasNextPage}
            page={page}
            totPages={totPages}
            onLimitChange={(limit) => {
                setActualLimit(limit);
                setPage(0);
            }}
        />
        <PokeCard.Container loading={loading}>
            {pokemon.map((poke, index) => {
                return <PokeCard.Element key={index} name={poke.name} onClick={() => {
                    navigate(`/${poke.name}`);
                }} />
            })}
        </PokeCard.Container>
    </div>
};

export default Home;