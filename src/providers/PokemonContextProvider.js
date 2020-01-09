import React, { useState } from "react";
import PokemonContext from "./PokemonContext";

const PokemonContextProvider = ({ children }) => {
	const [selectedPokemon, setSelectedPokemon] = useState();
	const [history, setHistory] = useState([]);

	const selectPokemon = pokemon => {
		setSelectedPokemon(pokemon);

		let temp = [pokemon, ...history];

		temp = temp.filter(
			(element, index, self) =>
				self.findIndex(t => t.name === element.name) === index
		);

		setHistory(temp);
	};

	return (
		<PokemonContext.Provider
			value={{ selectedPokemon, history, selectPokemon }}
		>
			{children}
		</PokemonContext.Provider>
	);
};

export default PokemonContextProvider;
