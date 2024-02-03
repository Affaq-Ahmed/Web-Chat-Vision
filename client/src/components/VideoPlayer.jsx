import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";
import { Grid, Paper, Typography } from "@mui/material";
import "./videostyles.css";

const VideoPlayer = () => {
	const { name, myVideo, partnerVideo, callAccepted, callEnded, call } =
		useContext(SocketContext);

	return (
		<Grid
			container
			style={{
				justifyContent: "center",
			}}
			flexDirection={{ xs: "column", sm: "row" }}
		>
			<Paper
				style={{
					padding: "10px",
					border: "2px solid black",
					margin: "10px",
				}}
			>
				<Grid item xs={12} md={6}>
					<Typography variant="h5" gutterBottom>
						{name || "Your Name"}
					</Typography>
					<video playsInline muted ref={myVideo} autoPlay className="video" />
				</Grid>
			</Paper>

			{callAccepted && !callEnded ? (
				<Paper
					style={{
						padding: "10px",
						border: "2px solid black",
						margin: "10px",
					}}
				>
					<Grid item xs={12} md={6}>
						<Typography variant="h5" gutterBottom>
							{call.name || "Caller Name"}
						</Typography>
						<video playsInline ref={partnerVideo} autoPlay className="video" />
					</Grid>
				</Paper>
			) : null}
		</Grid>
	);
};

export default VideoPlayer;
