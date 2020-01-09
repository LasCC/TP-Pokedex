import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import PokemonContext from "../../providers/PokemonContext";

const Input = () => {
	const [pokemonName, setPokemonName] = useState();
	const findPokemon = selectPokemon => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
			.then(response => response.json())
			.then(data => {
				selectPokemon({
					name: data.name,
					image: data.sprites.front_default,
					types: data.types
				});
				console.log(data);
			});
	};
	return (
		<PokemonContext.Consumer>
			{({ selectPokemon }) => {
				return (
					<TextField
						fullWidth
						type="text"
						label="Type something"
						value={pokemonName}
						onChange={e => setPokemonName(e.target.value)}
						onKeyPress={evt =>
							evt.key === "Enter" ? findPokemon(selectPokemon) : null
						}
					/>
				);
			}}
		</PokemonContext.Consumer>
	);
};

export default Input;
