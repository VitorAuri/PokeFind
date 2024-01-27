import {SetStateAction, useState} from 'react'
import pokeball from '../assets/pokeball.svg'
import s from './FormApiRequest.module.css'

export function Api(){

    const [backgroundColor,setBackgroundColor] = useState('white')
    const [pokemonNameTypeColor, setPokemonNameTypeColor] = useState('black')
    const [pokemonName,setPokemonName] = useState('')
    const [pokemonNameToShow,setPokemonNameToShow] = useState("(Pokemon's Name)")
    const [pokemonType,setPokemonType] = useState('(Pokemon Type Here)')
    const [pokemonImage,setPokemonImage] = useState('')

    function FetchApi(event: { preventDefault: () => void; }){
        event.preventDefault();

        fetch('https://pokeapi.co/api/v2/pokemon/'+pokemonName.toLowerCase())
        .then((resp) => resp.json())
        .then((data) => {

        setPokemonImage(data.sprites.front_default)
        setPokemonNameToShow(
            data.name.charAt(0).toUpperCase() 
            + 
            data.name.slice(1)
            )
        setPokemonType(
        data.types[0].type.name.charAt(0).toUpperCase() 
        + 
        data.types[0].type.name.slice(1) + ' Type'
        )

        switch(data.types[0].type.name){
            case 'normal':
                setBackgroundColor('rgb(168, 168, 120)');
                setPokemonNameTypeColor('rgb(70, 70, 50)')
                break;
            case 'fire':
                setBackgroundColor('rgb(240, 128, 48)');
                setPokemonNameTypeColor('rgb(100, 53, 20)')
                break;
            case 'electric':
                setBackgroundColor('rgb(248, 208, 48)');
                setPokemonNameTypeColor('rgb(105, 88, 20)');
                break;
            case 'water':
                setBackgroundColor('rgb(62, 75, 255)');
                setPokemonNameTypeColor('rgb(27, 34, 124)');
                break;
            case 'grass':
                setBackgroundColor('rgb(120, 200, 80)');
                setPokemonNameTypeColor('rgb(50, 83, 34)');
                break;
            case 'ice':
                setBackgroundColor('rgb(152, 216, 216)');
                setPokemonNameTypeColor('rgb(59, 83, 83)');
                break;
            case 'fighting':
                setBackgroundColor('rgb(192, 48, 40)');
                setPokemonNameTypeColor('rgb(70, 18, 15)');
                break;
            case 'poison':
                setBackgroundColor('rgb(160, 64, 160)');
                setPokemonNameTypeColor('rgb(59, 24, 59)');
                break;
            case 'ground':
                setBackgroundColor('rgb(224, 192, 104)');
                setPokemonNameTypeColor('rgb(78, 67, 37)');
                break;
            case 'flying':
                setBackgroundColor('rgb(168, 144, 240)');
                setPokemonNameTypeColor('rgb(56, 47, 80)');
                break;
            case 'psychic':
                setBackgroundColor('rgb(248, 88, 136)');
                setPokemonNameTypeColor('rgb(107, 38, 59)');
                break;
            case 'bug':
                setBackgroundColor('rgb(168, 184, 32)');
                setPokemonNameTypeColor('rgb(77, 83, 15)');
                break;
            case 'rock':
                setBackgroundColor('rgb(184, 160, 56)');
                setPokemonNameTypeColor('rgb(83, 73, 24)');
                break;
            case 'ghost':
                setBackgroundColor('rgb(112, 88, 152)');
                setPokemonNameTypeColor('rgb(57, 45, 77)');
                break;
            case 'dragon':
                setBackgroundColor('rgb(112, 56, 248)');
                setPokemonNameTypeColor('rgb(47, 23, 102)');
                break;
            case 'dark':
                setBackgroundColor('rgb(112, 88, 72)');
                setPokemonNameTypeColor('rgb(48, 37, 30)');
                break;
            case 'steel':
                setBackgroundColor('rgb(184, 184, 208)');
                setPokemonNameTypeColor('rgb(64, 64, 73)');
                break;
            case 'fairy':
                setBackgroundColor('rgb(240, 182, 188)');
                setPokemonNameTypeColor('rgb(83, 63, 65)');
                break;
            case 'stellar':
                setBackgroundColor('rgb(53, 172, 231)');
                setPokemonNameTypeColor('rgb(20, 67, 90)');
                break;
            default:
                setBackgroundColor('white');
                break;
        }


        })
        .catch((error) => console.log('Houve um erro: ' + error))
    }
    function handleChange(event: { target: { value: SetStateAction<string>; }; }){
        setPokemonName(event.target.value)
    }


    return(
        <div className={s.container}>
            <img className={s.pokeball} src={pokeball} alt="" />
            <div style={{background: backgroundColor}} className={s.pokemonContainer}>
                <div className={s.aboutPokemon}>
                    <h1>{pokemonNameToShow.charAt(0).toUpperCase() + pokemonNameToShow.slice(1)}</h1>
                    <h2 style={{color: pokemonNameTypeColor}}>{pokemonType}</h2>
                </div>
                <img className={s.pokemonImage} src={pokemonImage} />
            </div>
            <form onSubmit={FetchApi}>
                <input value={pokemonName} onChange={handleChange} placeholder="Enter the Pokemon's name here!"/>
                <button>Find Pokemon</button>
            </form>
            <img className={s.pokeball} src={pokeball} alt="" />
        </div>
    )
}