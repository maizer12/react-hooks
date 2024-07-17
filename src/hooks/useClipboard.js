import { useState, useCallback } from 'react';

export const useClipboard = () => {
	const [isCopied, setIsCopied] = useState(false);

	const copyToClipboard = useCallback(text => {
		if (navigator.clipboard) {
			navigator.clipboard.writeText(text).then(() => {
				setIsCopied(true);
				setTimeout(() => setIsCopied(false), 2000);
			});
		} else {
			console.error('Clipboard API not supported');
		}
	}, []);

	return { isCopied, copyToClipboard };
};
