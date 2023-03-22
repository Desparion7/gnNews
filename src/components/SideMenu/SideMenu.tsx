import styles from './SideMenu.module.css';
import { countryList } from '../../db/country';
import Country from './Country';

const SideMenu = () => {
	return (
		<div className={styles.sideMenu}>
			<div className={styles.sideMenu_title}>NEWS COUNTRY SOURCES:</div>
			{countryList.map((country) => (
				<Country country={country} key={country.name} />
			))}
		</div>
	);
};

export default SideMenu;
