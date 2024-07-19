import { useWindowScroll } from './hooks/useWindowScroll';

function App() {
	const { x, y } = useWindowScroll();

	return (
		<div className='main' style={{ height: 2000, width: 7000 }}>
			<h1 className='title'>Custom Hooks</h1>
			<p>X: {x}px</p>
			<p>Y: {y}px</p>
		</div>
	);
}

export default App;
