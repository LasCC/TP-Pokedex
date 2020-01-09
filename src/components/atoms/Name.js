import React, { useState } from "react";
import PokemonContext from "../../providers/PokemonContext";
import { Typography } from "@material-ui/core";

const Name = () => {
	return (
		<PokemonContext.Consumer>
			{({ selectedPokemon }) => {
				if (selectedPokemon == null) return <div>No Pokemon Selected</div>;
				else
					return (
						<Typography style={{ padding: 10 }}>
							{selectedPokemon.name}
						</Typography>
					);
			}}
		</PokemonContext.Consumer>
	);
};

export default Name;
