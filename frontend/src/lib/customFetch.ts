const customFetch = async (url: string, options = {}) => {
	const fetchWithInterceptor = async (url: string, options: unknown) => {
		try {
			const response = await fetch(url, options);

			if (response.status === 403) {
				// Attempt to refresh the token
				const refreshResponse = await fetch("/refresh-token", {
					method: "POST",
					// Add any necessary headers or credentials
					credentials: "include",
				});

				if (refreshResponse.ok) {
					// If token refresh was successful, retry the original request
					const newToken = await refreshResponse.json();

					// Update the Authorization header with the new token
					options.headers = {
						...options.headers,
						Authorization: `Bearer ${newToken.accessToken}`,
					};

					// Retry the original request with the new token
					return fetch(url, options);
				} else {
					// If token refresh failed, throw an error
					throw new Error("Token refresh failed");
				}
			}

			return response;
		} catch (error) {
			console.error("Error in fetch:", error);
			throw error;
		}
	};

	return fetchWithInterceptor(url, options);
};
