import { describe, it } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Country from './Country';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('app', () => {
	test('should change route to /country/ar on Argentina click', async () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Country
						country={{
							name: 'Argentina',
							flagUrl: 'https://newsapi.org/images/flags/ar.svg',
							short: 'ar',
						}}
					/>
				</BrowserRouter>
			</Provider>
		);

		const argentinaLink = screen.getByText(/Argentina/i);
		userEvent.click(argentinaLink);
		await waitFor(() => expect(window.location.pathname).toBe('/country/ar'));
	});
});
