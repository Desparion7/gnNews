import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// If app will be bigger better way it will be keep all translation for other lng in different json

i18n.use(initReactI18next).init({
	resources: {
		eng: {
			translation: {
				more: 'More',
				'News from the country': 'News from the country',
				loading: 'Loading...',
				'No news avaible': 'No news avaible',
				date: 'Date',
				news: 'News',
			},
		},
		pl: {
			translation: {
				more: 'Więcej',
				'News from the country': 'Wiadomości z kraju',
				loading: 'Ładowanie...',
				'No news avaible': 'Nie ma dostępnych wiadomości',
				date: 'Data',
				news: 'Wiadomości',
			},
		},
	},
	lng: localStorage.getItem('lng') || 'eng',
});

export default i18n;
