import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Social, Email } from "@components";
import { GlobalStyle, theme } from "@styles";
import Featured from "./Featured";
if (typeof window !== "undefined") {
	require("smooth-scroll")('a[href*="#"]');
}

const StyledContent = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

const Layout = () => {
	return (
		<>
			<div id="root">
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<StyledContent>
						<Featured />
						<Social />
						<Email />
					</StyledContent>
				</ThemeProvider>
			</div>
		</>
	);
};

export default Layout;
