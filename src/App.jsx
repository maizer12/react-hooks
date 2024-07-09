import { useMediaQuery } from './hooks/useMediaQuery';

function App() {
	const isLargeScreen = useMediaQuery('(min-width: 1024px)');

	return (
		<div className='main'>
			<h1 className='title'>Custom Hooks</h1>
			<h4>{isLargeScreen ? 'Large Screen' : 'Small Screen'}</h4>
			<p>The screen size is {isLargeScreen ? 'large' : 'small'} than 1024 pixels.</p>
		</div>
	);
}

export default App;
