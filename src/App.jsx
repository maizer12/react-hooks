import { useState } from 'react';
import { useInterval } from './hooks/useInteravl';

function App() {
	const [count, setCount] = useState(0);

	useInterval(() => {
		setCount(count + 1);
	}, 1000);

	return (
		<div className='main'>
			<h1 className='title'>Custom Hooks</h1>
			<h4>Count: {count}</h4>
		</div>
	);
}

export default App;
