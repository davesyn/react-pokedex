import { useNavigate, useParams } from "react-router";
import usePokeDetailApi from "../hooks/usePokeDetailApi";
import { useEffect } from "react";
import PokeCard from "../components/PokeCard/PokeCard";
import NavigationBar from "../components/NavigationBar/NavigationBar";

const Detail = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const { pokemonDetail, isLoading } = usePokeDetailApi(name)

    useEffect(() => {
        if (!pokemonDetail && !isLoading) {
            // If the pokemon is not found, the user will be redirected to the home page
            navigate('/');
        }
    }, [pokemonDetail, isLoading, navigate, name]);

    if (!pokemonDetail) {
        // If the pokemon is not found, the user will be redirected to the home page, so we don't need to render anything
        return null;
    }

    return <>
        <NavigationBar goToPreviousPage={() => history.back()} />
        <PokeCard.Container loading={isLoading}>
            <PokeCard.Detail
                mainImageUrl={pokemonDetail?.mainImageUrl}
                name={pokemonDetail?.name}
                weight={pokemonDetail?.weight}
                hp={pokemonDetail?.hp}
                attack={pokemonDetail?.attack}
                soundUrl={pokemonDetail?.soundUrl}
            />
        </PokeCard.Container>
    </>
};

export default Detail;