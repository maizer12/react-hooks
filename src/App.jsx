import { useState } from 'react';
import { useInput } from './hooks/useInput';

function App() {
	const nameInput = useInput('');
	const emailInput = useInput('');
	const [email, setEmail] = useState('');

	const handelSubmit = event => {
		event.preventDefault();
		console.log('Name: ' + nameInput.value);
		console.log('Email: ' + emailInput.value);
	};
	return (
		<div className='main'>
			<h1 className='title'>Custom Hooks</h1>
		</div>
	);
}

export default App;
