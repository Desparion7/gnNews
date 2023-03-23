import styles from './Header.module.css';
import { FaListUl } from 'react-icons/fa';
import { TfiViewGrid } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeView } from '../../store/newsViewSlice';
import { useState } from 'react';
import { lastUsedView } from '../../store/newsViewSlice';
import Modal from '../Modal/Modal';
import { useTranslation } from 'react-i18next';

const Header = () => {
	const { t, i18n } = useTranslation();

	const dispatch = useDispatch();
	const [showModal, setShowModal] = useState(false);
	const view = useSelector(lastUsedView);

	const handlerListView = () => {
		dispatch(changeView('list'));
	};
	const handlerBlocksView = () => {
		dispatch(changeView('blocks'));
	};
	const handelChangeLng = (value: string) => {
		i18n.changeLanguage(value);
		localStorage.setItem('lng', value);
	};
	return (
		<>
			{showModal && <Modal setShowModal={setShowModal} />}
			<header className={styles.header}>
				<div className={styles.language}>
					<img
						src='../pl.PNG'
						alt='Poland flag'
						onClick={() => {
							handelChangeLng('pl');
						}}
					/>
					<img
						src='../eng.PNG'
						alt='England flag'
						onClick={() => {
							handelChangeLng('eng');
						}}
					/>
				</div>
				<div className={styles.header_container}>
					<div className={styles.header_name}>
						<Link to='/'>
							<h1>
								<span>gn</span>News
							</h1>
						</Link>
					</div>
					<div className={styles.header_viewOptions}>
						<FaListUl
							onClick={handlerListView}
							className={`${view === 'list' && styles.active}`}
						/>
						<TfiViewGrid
							onClick={handlerBlocksView}
							className={`${view === 'blocks' && styles.active}`}
						/>
					</div>

					<div className={styles.header_buttonBox}>
						<button
							onClick={() => {
								setShowModal(true);
							}}
						>
							{t('more')}
						</button>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
