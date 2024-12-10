import { PropsWithChildren } from 'react';
import PokeIcon from '../../assets/pokemon-icon.webp';
import './PokeCard.scss';

/**
 * @param loading - If true, the component will show a loading state
 * @param children - The children to be
 * @returns A container for the PokeCard component
 * @example
 * <PokeCard.Container loading={true}>
 *    <PokeCard.Element name='Pikachu' />
 * </PokeCard.Container>
*/
const PokeCardContainer = ({ children, loading }: PropsWithChildren<{ loading: boolean }>) => {
    return <div className={`poke-card--cont ${loading ? 'loading' : 'loaded'}`}>
        {children}
    </div>
};

/**
 * @param name - The name of the pokemon
 * @param onClick - The function to be called when the card is clicked
 * @returns A card of a pokemon
 * @example
 * <PokeCard.Element name='Pikachu' />
 * <PokeCard.Element name='Pikachu' onClick={() => console.log('Pikachu clicked')} />
 */
const PokeCardElement = ({ name, onClick }: PokeCardElementProps) => {
    return <div className='poke-card--el' onClick={onClick} role='button' tabIndex={0}>
        <header className="poke-card--el-header">
            <img src={PokeIcon} alt={name} />
            <h2 className="poke-card--el-header-title">{name}</h2>
        </header>
    </div>
};

/**
 * @param name - The name of the pokemon
 * @param mainImageUrl - The main image of the pokemon
 * @param weight - The weight of the pokemon
 * @param hp - The hp of the pokemon
 * @param attack - The attack of the pokemon
 * @param soundUrl - The sound of the pokemon - Will be played automatically once the component is mounted
 * @returns A detailed card of a pokemon
 * @example
 * <PokeCard.Detail name='Pikachu' weight={60} mainImageUrl='./image.png' hp={35} attack={55} soundUrl='./sound.mp3' />
 */
const PokeDetailCard = ({ name, mainImageUrl, weight, hp, attack, soundUrl }: PokemonDetailResult) => {
    return <div className='poke-card--detail'>
        <header className="poke-card--detail-header">
            <div className='poke-card--detail-header-img'>
                <img src={mainImageUrl} alt={name} />
            </div>
            <h2 className='poke-card--detail-header-title'>{name}</h2>
        </header>
        <div className='poke-card--detail-body'>
            <p>Weight: {weight}hg</p>
            <p>HP: {hp}pt</p>
            <p>Attack: {attack}pt</p>
        </div>
        <audio
            controls={false}
            autoPlay={true}
            src={soundUrl}
            style={{ display: 'none' }}
        >
            Your browser does not support the
            <code>audio</code> element.
        </audio>
    </div>
};


const PokeCard = {
    Container: PokeCardContainer,
    Element: PokeCardElement,
    Detail: PokeDetailCard
};

export default PokeCard;