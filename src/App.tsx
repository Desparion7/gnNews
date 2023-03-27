import { Routes, Route } from 'react-router-dom';

import HomePage from './screen/HomePage';
import MainContent from './components/MainContent/MainContent';

function App() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />}>
				<Route path='/country/:id' element={<MainContent />} />
			</Route>
		</Routes>
	);
}

export default App;
