import React, { useContext, useState } from "react";
import { SocketContext } from "../SocketContext";
import {
	Button,
	Container,
	Grid,
	Paper,
	TextField,
	Typography,
} from "@mui/material";
import CopyToClipboard from "react-copy-to-clipboard";
import {
	Assignment,
	PhoneDisabledRounded,
	PhoneIphoneOutlined,
} from "@mui/icons-material";

const Options = ({ children }) => {
	const { me, callAccepted, name, setName, leaveCall, callUser, callEnded } =
		useContext(SocketContext);
	const [idToCall, setIdToCall] = useState("");

	return (
		<Container
			width={{ xs: "80%", sm: "600px" }}
			style={{ margin: "35px 0", padding: 0 }}
		>
			<Paper
				elevation={10}
				style={{ padding: "10px 20px", border: "2px solid black" }}
			>
				<form
					style={{
						display: "flex",
						flexDirection: "column",
					}}
					noValidate
					autoComplete="off"
				>
					<Grid
						container
						width="100%"
						flexDirection={{ xs: "column", sm: "row" }}
					>
						<Grid item xs={12} md={6} style={{ padding: "20px" }}>
							<Typography gutterBottom variant="h6">
								Account Info
							</Typography>
							<TextField
								label="Name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								fullWidth
							/>
							<CopyToClipboard text={me} style={{ marginTop: "20px" }}>
								<Button
									variant="contained"
									color="primary"
									fullWidth
									startIcon={<Assignment fontSize="large" />}
								>
									Copy Your ID
								</Button>
							</CopyToClipboard>
						</Grid>

						<Grid item xs={12} md={6} style={{ padding: "20px" }}>
							<Typography gutterBottom variant="h6">
								Make a call
							</Typography>
							<TextField
								label="ID to Call"
								value={idToCall}
								onChange={(e) => setIdToCall(e.target.value)}
								fullWidth
							/>
							{callAccepted && !callEnded ? (
								<Button
									variant="contained"
									color="secondary"
									fullWidth
									onClick={leaveCall}
									style={{ marginTop: "20px" }}
									startIcon={<PhoneDisabledRounded fontSize="large" />}
								>
									Hang Up
								</Button>
							) : (
								<Button
									variant="contained"
									color="primary"
									fullWidth
									onClick={() => callUser(idToCall)}
									style={{ marginTop: "20px" }}
									startIcon={<PhoneIphoneOutlined fontSize="large" />}
								>
									Call
								</Button>
							)}
						</Grid>
					</Grid>
				</form>
				{children}
			</Paper>
		</Container>
	);
};

export default Options;
