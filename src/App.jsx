import { useNetworkStatus } from './hooks/useNetworkStatus';

function App() {
	const isOnline = useNetworkStatus();

	return (
		<div className='main'>
			<h1 className='title'>Custom Hooks</h1>
			<p>{isOnline ? 'Online' : 'Offline'}</p>
		</div>
	);
}

export default App;
