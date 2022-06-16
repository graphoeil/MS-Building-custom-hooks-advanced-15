// Imports
import React from "react";
import styled from "styled-components";

// Component
const TaskItem = ({ children }) => {

	// Return
	return <Wrapper>{ children }</Wrapper>

};

// Styled
const Wrapper = styled.li`
	border-bottom: 1px solid #ccc;
	padding: 1rem;
	font-weight: bold;
	font-size: 1.25rem;
	&:last-of-type{
		border-bottom: none;
	}
`;

// Export
export default TaskItem;