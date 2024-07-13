import { useDarkMode } from './hooks/useDarkMode';

function App() {
	const [dark, setDark] = useDarkMode();

	return (
		<div className='main'>
			<h1 className='title'>Custom Hooks</h1>
			<h2>{dark ? 'Dark Mode' : 'Light Mode'}</h2>
			<button onClick={() => setDark(prev => !prev)}>Toggle Mode</button>
		</div>
	);
}

export default App;
