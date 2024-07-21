import { useState, useEffect, useRef } from 'react';

export const useIntersectionObserver = options => {
	const [isIntersection, setIsIntersection] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			setIsIntersection(entry.isIntersecting);
		}, options);

		if (ref.current) {
			observer.observe(ref.current);
		}

		return () => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, [options]);

	return [ref, isIntersection];
};
