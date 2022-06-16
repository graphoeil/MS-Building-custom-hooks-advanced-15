// Imports
import React from "react";
import Section from "../ui/Section";
import TaskForm from "./TaskForm";
import useHttp from "../../hooks/useHttp";

// Component
const NewTask = ({ addTask }) => {

	// Custom hooks
	const { isLoading, error, sendRequest:sendTaskRequest } = useHttp();

	// Add new task to firebase
	const enterTask = async(taskText) => {

		// Send task to custom hooks
		sendTaskRequest({
			url:'https://ms-sending-http-requests-14-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
			method:'POST',
			headers:{
				'Content-Type': 'application/json'
			},
			body:{ text:taskText }
		}, (taskData) => {
			const generatedId = taskData.name; // firebase-specific => "name" contains generated id
			const createdTask = { id:generatedId, text:taskText };
			// Add task (props)
			addTask(createdTask);
		});

	};

	// Return
	return(
		<Section>
			<TaskForm enterTask={ enterTask } loading={ isLoading } />
			{ error && <p>{ error }</p> }
		</Section>
	);

};

// Export
export default NewTask;