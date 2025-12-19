// Read backend base URL from Vite environment; keeps the value out of source
const backendUrl = import.meta.env.VITE_BACKEND_URL;

if (!backendUrl) {
	throw new Error("VITE_BACKEND_URL is not set");
}

export const BACKEND_URL = backendUrl;