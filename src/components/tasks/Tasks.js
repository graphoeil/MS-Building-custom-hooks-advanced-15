// Imports
import React from "react";
import styled from "styled-components";
import Section from "../ui/Section";
import TaskItem from "./TaskItem";

// Component
const Tasks = ({ items, error, loading, fetch }) => {

	// Tasks list
	let tasksList = <h2>No tasks found. Start adding some !</h2>
	if (items.length > 0){
		tasksList = (
			<ul>
				{
					items.map((item) => {
						return <TaskItem key={ item.id }>{ item.text }</TaskItem>
					})
				}
			</ul>
		);
	}

	// Content
	let content = tasksList;
	if (error){
		content = <button onClick={ fetch }>Try again</button>;
	}
	if (loading){
		content  = 'Loading tasks...';
	}

	// Return
	return(
		<Section>
			<Wrapper>{ content }</Wrapper>
		</Section>
	);

};

// Styled
const Wrapper = styled.div`
	text-align: center;
	ul{
		list-style: none;
		margin: 0;
		padding: 0;
		text-align: left;
	}
`;

// Export
export default Tasks;