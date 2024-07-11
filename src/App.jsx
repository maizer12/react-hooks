import { useMousePosition } from './hooks/useMousePosition';

function App() {
	const { y, x } = useMousePosition();

	return (
		<div className='main'>
			<h1 className='title'>Custom Hooks</h1>
			<h2>Mouse Position</h2>
			<p>X: {x}</p>
			<p>Y: {y}</p>
		</div>
	);
}

export default App;
