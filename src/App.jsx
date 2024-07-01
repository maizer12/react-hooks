import { useEffect, useState } from 'react';
import { useDebounce } from './hooks/useDebounce';

function App() {
	const [search, setSearch] = useState('');
	const debouncedSearch = useDebounce(search, 500);

	useEffect(() => {
		console.log(debouncedSearch);
	}, [debouncedSearch]);

	return (
		<div className='main'>
			<h1 className='title'>Custom Hooks</h1>
			<input type='text' value={search} onChange={e => setSearch(e.target.value)} placeholder='Search...' />
		</div>
	);
}

export default App;
