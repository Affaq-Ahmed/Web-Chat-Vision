import React from "react";
import { AppBar, Typography } from "@mui/material";
import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";

const App = () => {
	return (
		<div>
			<AppBar position="static" color="inherit">
				<Typography variant="h2" align="center">
					Web Chat Vision
				</Typography>
			</AppBar>
			<VideoPlayer />
			<Options />
		</div>
	);
};

export default App;
