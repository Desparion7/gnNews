import styles from './Header.module.css';
import { ImList } from 'react-icons/im';
import { TfiViewGrid } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeView } from '../../store/newsViewSlice';
import { useState } from 'react';
import Modal from '../Modal/Modal';

const Header = () => {
	const dispatch = useDispatch();
	const [showModal, setShowModal] = useState(false);

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
					<ImList onClick={handlerListView} />
					<TfiViewGrid onClick={handlerBlocksView} />
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
