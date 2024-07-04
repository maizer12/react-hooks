import { useHover } from './hooks/useHover';

function App() {
	const [hoverRef, isHovered] = useHover();

	return (
		<div className='main'>
			<h1 className='title'>Custom Hooks</h1>
			<div ref={hoverRef}>{isHovered ? 'Hover is true!' : 'Hover is false!'}</div>
		</div>
	);
}

export default App;
