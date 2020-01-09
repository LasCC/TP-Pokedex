import React from "react";
import PokemonListItem from "../atoms/PokemonListItem";
import PokemonContext from "../../providers/PokemonContext";
import { Box, Typography } from "@material-ui/core";

const PokemonHistory = () => {
	return (
		<Box
			style={{
				padding: 0,
				margin: 15,
				borderRadius: "20px",
				cursor: "pointer",
				color: "black",
				bordeColor: "#b06868"
			}}
		>
			<PokemonContext.Consumer>
				{({ history }) => {
					return history.map((pokemon, index) => {
						return (
							<PokemonListItem key={"histpoke_" + index} pokemon={pokemon} />
						);
					});
				}}
			</PokemonContext.Consumer>
		</Box>
	);
};

export default PokemonHistory;
