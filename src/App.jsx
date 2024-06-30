import { useToggle } from './hooks/useToggle';

function App() {
	const [isVisible, toggleVisible] = useToggle();

	return (
		<div className='main'>
			<h1 className='title'>Custom Hooks</h1>
			<button onClick={toggleVisible}>{isVisible ? 'Hide' : 'Show'} Content</button>
			{isVisible && <div>This is some content</div>}
		</div>
	);
}

export default App;
