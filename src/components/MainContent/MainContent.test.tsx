import { Context as ResponsiveContext } from 'react-responsive';
import { render } from '@testing-library/react';
import MainContent from './MainContent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('MainContent component', () => {
	test('should render SideMenu component on desktop devices', () => {
		const { getByTestId } = render(
			<ResponsiveContext.Provider value={{ width: 1000 }}>
				<Provider store={store}>
					<BrowserRouter>
						<MainContent />
					</BrowserRouter>
				</Provider>
			</ResponsiveContext.Provider>
		);
		const sideMenu = getByTestId('side-menu');
		expect(sideMenu).toBeInTheDocument();
	});
});
