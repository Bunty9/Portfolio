import React from "react";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

const StyledSideElement = styled.div`
	width: 40px;
	position: fixed;
	bottom: 0;
	left: ${(props) => (props.orientation === "left" ? "40px" : "auto")};
	right: ${(props) => (props.orientation === "left" ? "auto" : "40px")};
	z-index: 10;
	color: var(--light-slate);

	@media (max-width: 1080px) {
		left: ${(props) => (props.orientation === "left" ? "20px" : "auto")};
		right: ${(props) => (props.orientation === "left" ? "auto" : "20px")};
	}

	@media (max-width: 768px) {
		display: none;
	}
`;

const Side = ({ children, orientation }) => {
	return (
		<StyledSideElement orientation={orientation}>
			<TransitionGroup component={null}>
				<CSSTransition>{children}</CSSTransition>
			</TransitionGroup>
		</StyledSideElement>
	);
};

Side.propTypes = {
	children: PropTypes.node.isRequired,
	orientation: PropTypes.string,
};

export default Side;
