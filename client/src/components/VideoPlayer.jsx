import React, { useContext, useEffect } from "react";
import { SocketContext } from "../SocketContext";
import { Grid, Paper, Typography } from "@mui/material";

const VideoPlayer = () => {
	const { name, myVideo, userVideo, callAccepted, callEnded, stream, call } =
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
					<video
						playsInline
						muted
						ref={myVideo}
						autoPlay
						style={{ width: "300px" }}
					/>
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
						<video
							playsInline
							ref={userVideo}
							autoPlay
							style={{ width: "500px" }}
						/>
					</Grid>
				</Paper>
			) : null}
		</Grid>
	);
};

export default VideoPlayer;
