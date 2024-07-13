import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
	const [enabled, setEnabled] = useLocalStorage('dark-mode', false);

	useEffect(() => {
		const className = 'dark-mode';
		const bodyClass = window.document.body.classList;

		if (enabled) {
			bodyClass.add(className);
		} else {
			bodyClass.remove(className);
		}
	}, [enabled]);

	return [enabled, setEnabled];
};
