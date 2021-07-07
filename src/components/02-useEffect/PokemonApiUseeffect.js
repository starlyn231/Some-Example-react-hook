import React,{useEffect, useState} from 'react'

function PokemonApiUseeffect({name= "pidgeot"}) {
    const [pokemonInfo, setPokemonInfo] = useState(null)
   
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
          .then(res => res.json())
          .then(pikachu => {
            setPokemonInfo(pikachu)
          })
      },[name])
    
    return (
        
             pokemonInfo && (
      <span>
        La pokeId es #{pokemonInfo.id} y su nombre es {pokemonInfo.name}
      </span>

) 
    )
}

export default PokemonApiUseeffect
