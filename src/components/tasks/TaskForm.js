// Imports
import React, { useRef } from "react";
import styled from "styled-components";

// Component
const TaskForm = ({ enterTask, loading }) => {

	// Ref, uncontrolled form
	const inputRef = useRef();

	// Submit form
	const handleSubmit = (e) => {
		e.preventDefault();
		const enteredValue = inputRef.current.value;
		if (enteredValue.trim().length > 0) {
			enterTask(enteredValue);
			inputRef.current.value = '';
		}
	};

	// Return
	return(
		<Wrapper onSubmit={ handleSubmit }>
			<input type="text" ref={ inputRef } />
			<button>{ loading ? 'Sending...' : 'Add Task' }</button>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.form`
	display: flex;
  	justify-content: space-between;
	input{
		font:inherit;
		padding: 0.25rem;
		border: none;
		border-bottom: 3px solid #ccc;
		flex: 1;
		margin-right: 2rem;
		&:focus{
			outline: none;
			border-color: #7a0144;
		}
	}
`;

// Export
export default TaskForm;