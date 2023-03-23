import styles from './Footer.module.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetAllNewsQuery } from '../../store/apiSlice';
import { useTranslation } from 'react-i18next';

let id = 'us';

const Footer = () => {
	const { t } = useTranslation();
	const params = useParams();
	const [time, setTime] = useState('');
	if (params.id) {
		id = params.id;
	}
	const { data } = useGetAllNewsQuery(id as string);

	const updateTime = () => {
		const date = new Date();
		let hours = date.getHours() as string | number;
		let minutes = date.getMinutes() as string | number;
		let seconds = date.getSeconds() as string | number;

		if (hours < 10) {
			hours = '0' + hours;
		}
		if (minutes < 10) {
			minutes = '0' + minutes;
		}
		if (seconds < 10) {
			seconds = '0' + seconds;
		}

		const timeString = hours + ':' + minutes + ':' + seconds;

		setTime(timeString);
	};

	setInterval(updateTime, 1000);

	return (
		<footer className={styles.footer}>
			<div className={styles.footer_time}>{time}</div>
			{data && (
				<div className={styles.footer_time}>
					{' '}
					{t('news')}: {data.totalResults}
				</div>
			)}
		</footer>
	);
};

export default Footer;
