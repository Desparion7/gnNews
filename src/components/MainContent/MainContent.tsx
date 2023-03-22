import styles from './MainContent.module.css';
import SideMenu from '../SideMenu/SideMenu';
import { useGetAllNewsQuery } from '../../store/apiSlice';
import { useParams } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { countryList } from '../../db/country';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { lastUsedView } from '../../store/newsViewSlice';
import NewsList from './NewsList';
import NewsBlocks from './NewsBlocks';

let id = 'us';

const MainContent = () => {
	const params = useParams();
	const view = useSelector(lastUsedView);

	if (params.id) {
		id = params.id;
	}
	const navigate = useNavigate();
	const [selectedCountry, setSelectedCountry] = useState(id);

	const isDesktop = useMediaQuery({ minWidth: '1000px' });

	const { data, isSuccess, isLoading, isError } = useGetAllNewsQuery(
		id as string
	);

	useEffect(() => {
		navigate(`/country/${selectedCountry}`);
	}, [selectedCountry]);

	return (
		<>
			<section className={styles.mainContent}>
				{isDesktop && <SideMenu />}
				{isLoading && <div>Loading...</div>}
				{isError && <div>No news avaible</div>}
				{isSuccess && (
					<div className={styles.mainContent_container}>
						{!isDesktop && (
							<div className={styles.mainContent_container_options}>
								<h4>NEWS COUNTRY:</h4>
								<select
									name='country'
									id='country'
									value={id}
									onChange={(e) => {
										setSelectedCountry(e.target.value);
									}}
								>
									{countryList.map((country) => (
										<option value={country.short} key={country.name}>
											{country.name}
										</option>
									))}
								</select>
							</div>
						)}
						{view === 'list' && <NewsList articles={data.articles} />}
						{view === 'blocks' && <NewsBlocks articles={data.articles} />}
					</div>
				)}
			</section>
		</>
	);
};

export default MainContent;
