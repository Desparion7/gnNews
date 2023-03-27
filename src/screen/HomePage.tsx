import styles from './HomePage.module.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { useLocation, Outlet } from 'react-router-dom';
import { useEffect } from 'react';

const HomePage = () => {
	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return (
		<div className={styles.homePage}>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

export default HomePage;
