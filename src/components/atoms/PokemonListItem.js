import React from "react";
import PokemonContext from "../../providers/PokemonContext";
import { Box, Typography } from "@material-ui/core";

const PokemonListItem = ({ pokemon }) => {
	return (
		<PokemonContext.Consumer>
			{({ selectPokemon }) => {
				return (
					<Box
						className="spriteRotate"
						onClick={() => selectPokemon(pokemon)}
						display="grid"
						style={{
							width: "250px",
							padding: 0,
							margin: 15,
							borderRadius: "20px",
							cursor: "pointer",
							color: "black",
							bordeColor: "#b06868"
						}}
						display="flex"
						alignItems="center"
					>
						<img src={pokemon.image} alt={pokemon.name} />
						<Typography>{pokemon.name}</Typography>
					</Box>
				);
			}}
		</PokemonContext.Consumer>
	);
};

export default PokemonListItem;
