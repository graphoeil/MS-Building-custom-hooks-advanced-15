// Imports
import React from "react";
import styled from "styled-components";

// Component
const Section = ({ children }) => {

	// Return
	return <Wrapper>{ children }</Wrapper>

};

// Styled
const Wrapper = styled.section`
	max-width: 40rem;
	margin: 2rem auto;
	background-color: white;
	padding: 1rem;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
`;

// Export
export default Section;