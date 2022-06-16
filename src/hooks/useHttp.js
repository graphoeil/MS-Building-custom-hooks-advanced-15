// Imports
import { useCallback, useState } from "react";

/* Custom hook must be the most generic as possible, we need 
to determine which piece of code will be reusable.
Here we define params => requestConfig for fetch configuration 
and applyDataFunc for managing data on callback. */

// Hooks
const useHttp = () => {

	// State
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	// Send the generic request
	const sendRequest = useCallback(async(requestConfig, applyData) => {
		setIsLoading(true);
		setError(null);
		try {
			const response = await fetch(requestConfig.url,{
				method:requestConfig.method || 'GET',
				headers:requestConfig.headers || {},
				body:JSON.stringify(requestConfig.body) || null
			});
			// Error ?
			if (!response.ok) {
				throw new Error('Request failed!');
			}
			// Data callback
			const data = await response.json();
			// Send data to apply function
			applyData(data);
		} catch (err){
			setError(err.message || 'Something went wrong!');
		}
		setIsLoading(false);
		/* We pass requestConfig and applyDataFunc as dependencies, 
		so for each instance of useHttp (in App and NewTask here) 
		the sendRequest method will be re-writing.
		We must also wrap the applyDataFunc in a useCallback 
		in the component which use it ! */
	},[]);

	// Export
	return { isLoading, error, sendRequest };

};

// Export
export default useHttp;