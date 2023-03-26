import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

describe('app', () => {
	test('render App', async () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		);
	});
});
 