import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Input from "./components/atoms/Input";
import PokemonView from "./components/PokemonView";
import PokemonContextProvider from "./providers/PokemonContextProvider";
import { Box, Container, Typography, Button } from "@material-ui/core";
import PregnantWomanIcon from "@material-ui/icons/PregnantWoman";
import RotateRightIcon from "@material-ui/icons/RotateRight";
import Name from "./components/atoms/Name";
document.body.style.backgroundImage =
	"url(https://pbs.twimg.com/media/DVMT-6OXcAE2rZY?format=jpg&name=medium)";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";

const App = () => {
	return (
		<PokemonContextProvider>
			<Container maxWidth="lg">
				<Box
					style={{ height: "90vh", position: "relative" }}
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<Box
						className="pokedexColor"
						display="flex"
						style={{
							height: "80%",
							width: "80%",
							padding: 35,
							boxShadow: "0px 10px 35px -4px rgba(0,0,0,0.15)",
							borderRadius: 10,
							border: "inset #575952 3px"
						}}
					>
						<Box
							flexGrow={1}
							style={{
								marginRight: 15,
								height: "auto",
								width: "auto",
								padding: 8,
								border: "inset #575952 3px"
							}}
						>
							<Box className="nameScreen">
								<Name />
							</Box>
							<Box
								className="panelLeft"
								style={{ marginTop: 15, height: "50%" }}
							>
								<Box
									style={{ height: "30vh", position: "relative" }}
									display="flex"
									alignItems="center"
									justifyContent="center"
								>
									<PokemonView />
								</Box>
							</Box>
							<Box
								display="flex"
								alignItems="center"
								style={{
									justifyContent: "space-between",
									padding: 15
								}}
							>
								<Button className="spriteRotate">
									<PregnantWomanIcon />
								</Button>
								<Button className="buttonShiny" style={{ borderRadius: 10 }}>
									Shiny
								</Button>
								<Button className="spriteRotate">
									<RotateRightIcon />
								</Button>
							</Box>
							<Box
								className="nameScreen"
								style={{ height: "auto", width: "auto", overflow: "hidden" }}
							>
								<Typography variant="body2" style={{ padding: 8 }}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit.
									Phasellus rutrum non sem id pharetra. Donec nec mollis lorem,
									sit amet bibendum tortor. Vestibulum ante ipsum primis in
									faucibus orci luctus et ultrices posuere cubilia Curae; Aenean
									dignissim et mi ultrices aliquam. In id urna semper.
								</Typography>
							</Box>
						</Box>
						<Box
							flexGrow={1}
							style={{
								marginRight: 15,
								height: "auto",
								width: "auto",
								padding: 8,
								border: "inset #575952 3px"
							}}
						>
							<Box className="nameScreen">
								<Input />
							</Box>
							<Box
								className="panelRight"
								style={{ marginTop: 15, height: "84%", overflowY: "scroll" }}
							>
								<Typography style={{ padding: 15, fontSize: 20 }}>
									History :
								</Typography>
								<Sidebar />
							</Box>
						</Box>
					</Box>
				</Box>
			</Container>
		</PokemonContextProvider>
	);
};

export default App;
