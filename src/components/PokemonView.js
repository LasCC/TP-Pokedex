import React from "react";
import PokemonContext from "../providers/PokemonContext";

const PokemonView = () => {
	return (
		<div>
			<PokemonContext.Consumer>
				{({ selectedPokemon }) => {
					if (selectedPokemon == null) return <div>No Pokemon Selected</div>;
					else
						return (
							<img
								src={selectedPokemon.image}
								style={{ height: 150, width: 150 }}
							/>
						);
				}}
			</PokemonContext.Consumer>
		</div>
	);
};

export default PokemonView;
