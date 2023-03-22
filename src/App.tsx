import { Routes, Route } from 'react-router-dom';

import HomePage from './screen/HomePage';

function App() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/country/:id' element={<HomePage />} />
		</Routes>
	);
}

export default App;
