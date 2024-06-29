import { useState } from 'react';

export const useLocalStorage = (key, initialValues) => {
	const [storedValue, setStoreValue] = useState(() => {
		try {
			const item = window.localStorage.getItem(key);

			return item ? JSON.parse(item) : initialValues;
		} catch (err) {
			console.log(err);
			return initialValues;
		}
	});

	const setValue = value => {
		try {
			const valueToStore = value instanceof Function ? value(storedValue) : value;

			setStoreValue(valueToStore);

			window.localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (err) {
			console.log(err);
		}
	};

	return [storedValue, setValue];
};
