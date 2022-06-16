// Imports
import React, { useEffect, useState } from "react";
import NewTask from "./components/tasks/NewTask";
import Tasks from "./components/tasks/Tasks";
import useHttp from "./hooks/useHttp";

// Component
const App = () => {

	// State
	const [tasks, setTasks] = useState([]);

	// Custom hooks
	const { isLoading, error, sendRequest:fetchTasks } = useHttp();

	// Load tasks on mount
	useEffect(() => {

		/* It's a better idea to includes function what useEffect need in the useEffect,
		then we don't need to declares them in dependancies, so we don't need to use useCallback */

		// Transform data from firebase
		const transformTasks = (tasks) => {
			const loadedTasks = [];
			// Firebase return list of objects not array
			for (const taskKey in tasks) {
				loadedTasks.push({ id:taskKey, text:tasks[taskKey].text });
			}
			setTasks(loadedTasks);
		};
		// Fetching data
		fetchTasks({ url:'https://ms-sending-http-requests-14-default-rtdb.europe-west1.firebasedatabase.app/tasks.json' }, transformTasks);

		// We must declare fetchTasks as dependencies because the function change for each instance of useHttp()
	},[fetchTasks]);

	// Add task from NewTask
	const addTask = (task) => {
		setTasks((prevTasks) => prevTasks.concat(task));
	};

	// Return
	return(
		<React.Fragment>
			<NewTask addTask={ addTask } />
			<Tasks items={ tasks } loading={ isLoading } error={ error } fetch={ fetchTasks }/>
		</React.Fragment>
	);

};

// Export
export default App;