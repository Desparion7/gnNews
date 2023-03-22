import styles from './Country.module.css';
import { useNavigate } from 'react-router-dom';


interface propsType {
	country: {
		name: string;
		flagUrl: string;
		short: string;
	};
}

const Country = ({ country }: propsType) => {
	const navigate = useNavigate();
	return (
		<div
			className={styles.country_countryBox}
			key={country.name}
			onClick={() => {
				navigate(`/country/${country.short}`);
			}}
		>
			<div className={styles.country_countryBox_flag}>
				<img src={country.flagUrl} alt='flag' />
			</div>
			<div className={styles.country_countryBox_name}>{country.name}</div>
		</div>
	);
};

export default Country;
