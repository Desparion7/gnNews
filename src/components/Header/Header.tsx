import styles from './Header.module.css';
import { FaListUl } from 'react-icons/fa';
import { TfiViewGrid } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeView } from '../../store/newsViewSlice';
import { useState } from 'react';
import { lastUsedView } from '../../store/newsViewSlice';

import Modal from '../Modal/Modal';

const Header = () => {
	const dispatch = useDispatch();
	const [showModal, setShowModal] = useState(false);
	const view = useSelector(lastUsedView);

	const handlerListView = () => {
		dispatch(changeView('list'));
	};
	const handlerBlocksView = () => {
		dispatch(changeView('blocks'));
	};

	return (
		<>
			{showModal && <Modal setShowModal={setShowModal} />}
			<header className={styles.header}>
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
						More
					</button>
				</div>
			</header>
		</>
	);
};

export default Header;
