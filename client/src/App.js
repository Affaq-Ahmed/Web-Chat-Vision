import React from "react";
import { AppBar, Typography } from "@mui/material";
import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notifications from "./components/Notifications";

const App = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				width: "100%",
			}}
		>
			<AppBar
				position="static"
				color="inherit"
				width={{ xs: "90%", sm: "100%" }}
				style={{
					borderRadius: 15,
					margin: "30px 100px",
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					width: "400px",
					border: "2px solid black",
				}}
			>
				<Typography variant="h2" align="center">
					Web Vision
				</Typography>
			</AppBar>
			<VideoPlayer />
			<Options>
				<Notifications />
			</Options>
		</div>
	);
};

export default App;
