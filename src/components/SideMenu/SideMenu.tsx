import styles from './SideMenu.module.css';
import { countryList } from '../../db/country';
import Country from './Country';
import { useTranslation } from 'react-i18next';

const SideMenu = () => {
	const { t } = useTranslation();
	return (
		<div className={styles.sideMenu}>
			<div className={styles.sideMenu_title}>{t('News from the country')}:</div>
			{countryList.map((country) => (
				<Country country={country} key={country.name} />
			))}
		</div>
	);
};

export default SideMenu;
