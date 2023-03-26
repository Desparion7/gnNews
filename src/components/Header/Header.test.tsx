import { render } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { fireEvent } from '@testing-library/react';
import { vi } from 'vitest';

vi.mock('react-i18next', () => ({
	// this mock makes sure any components using the translate hook can use it without a warning being shown
	useTranslation: () => {
		return {
			t: (str: string) => str,
			i18n: {
				changeLanguage: () => new Promise(() => {}),
			},
		};
	},
}));

describe('Header', () => {
	test('renders without crashing', () => {
		render(
			<Provider store={store}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</Provider>
		);
	});
	test('changes to eng language when flag is clicked', () => {
		beforeEach(() => {
			localStorage.clear();
		});
		const { getByAltText } = render(
			<Provider store={store}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</Provider>
		);
		const engFlag = getByAltText('England flag');

		fireEvent.click(engFlag);
		expect(localStorage.getItem('lng')).toEqual('eng');
	});
	test('changes to pl language when flag is clicked', () => {
		beforeEach(() => {
			localStorage.clear();
		});
		const { getByAltText } = render(
			<Provider store={store}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</Provider>
		);
		const plFlag = getByAltText('Poland flag');

		fireEvent.click(plFlag);
		expect(localStorage.getItem('lng')).toEqual('pl');
	});
	test('changes view when list icon is clicked', () => {
		const { getByTestId } = render(
			<Provider store={store}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</Provider>
		);
		const listIcon = getByTestId('list-icon');
		fireEvent.click(listIcon);
		expect(listIcon.getAttribute('class')).toContain('active');
	});

	test('changes view when blocks icon is clicked', () => {
		const { getByTestId } = render(
			<Provider store={store}>
				<BrowserRouter>
					<Header />
				</BrowserRouter>
			</Provider>
		);
		const blocksIcon = getByTestId('blocks-icon');
		fireEvent.click(blocksIcon);
		expect(blocksIcon.getAttribute('class')).toContain('active');
	});
});
