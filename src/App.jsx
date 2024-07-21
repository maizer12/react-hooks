import { useIntersectionObserver } from './hooks/useIntersectionObserver';

function App() {
	const [ref, isIntersecting] = useIntersectionObserver({
		root: null,
		rootMargin: '0px',
		threshold: 0.1,
	});

	return (
		<div className='main' style={{ height: 2000 }}>
			<h1 className='title'>Custom Hooks</h1>
			<div ref={ref} style={{ height: '100px', backgroundColor: isIntersecting ? 'green' : 'red' }}>
				{isIntersecting ? 'Visible' : 'Not'}
			</div>
			<p style={{ position: 'fixed', top: 40, left: 40, width: 100, height: '100px', backgroundColor: isIntersecting ? 'green' : 'red' }}>{isIntersecting ? 'Visible' : 'Not'}</p>
		</div>
	);
}

export default App;
