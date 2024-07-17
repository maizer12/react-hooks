import { useState } from 'react';
import { useClipboard } from './hooks/useClipboard';

function App() {
	const [text, setText] = useState('Hello, World!');
	const { isCopied, copyToClipboard } = useClipboard();

	return (
		<div className='main'>
			<h1 className='title'>Custom Hooks</h1>
			<textarea value={text} onChange={e => setText(e.target.value)} />
			<button onClick={() => copyToClipboard(text)}>Copy Text</button>
			{isCopied && <p>Copied!</p>}
		</div>
	);
}

export default App;
