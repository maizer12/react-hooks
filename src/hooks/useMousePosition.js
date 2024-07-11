import { useEffect, useState } from 'react';

export const useMousePosition = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		function handleMouseMove(event) {
			setMousePosition({
				x: event.clientX,
				y: event.clientY,
			});
		}

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	return mousePosition;
};
