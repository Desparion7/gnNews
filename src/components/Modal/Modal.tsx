import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
import { RxCross2 } from 'react-icons/rx';

interface propsType {
	article?: {
		title: string;
		description: string;
		url: string;
		author: string;
	};
	setShowModal: any;
}

const Popup = ({ article, setShowModal }: propsType) => {
	return (
		<>
			{!article && (
				<div className={styles.popup}>
					<div className={styles.popup_window}>
						<div className={styles.popup_window_btn}>
							<button
								title='close'
								onClick={() => {
									setShowModal(false);
								}}
							>
								<RxCross2 />
							</button>
						</div>
						<h3 className={styles.popup_window_title}>
							Co sprawiło mi trudność?
						</h3>
						<p className={styles.popup_window_description}>
							Najwięcej czasu na początku poświęciłem na szukanie w Api
							możliwości pobrania wszystkich krajów. Niesteyt nie znalazłem
							takiej możlowści. Udało mi się tylko pozyskać ze strony flagi
							krajów. Na obecną chwilę nie mam jeszcze pomysłu na tłumaczenie i
							nie napisałem testów.
						</p>
						<h3 className={styles.popup_window_title}>
							Co sprawiło mi największą frajdę?
						</h3>
						<p className={styles.popup_window_description}>
							Największą frajdę sprawiło mi efekt wizualny. Który może nie jest
							powalajacy, lecz na tak krótki czas pracy jest zadawlający.
						</p>
					</div>
				</div>
			)}
			{article && (
				<div className={styles.popup}>
					<div className={styles.popup_window}>
						<div className={styles.popup_window_btn}>
							<button
								title='close'
								onClick={() => {
									setShowModal(false);
								}}
							>
								<RxCross2 />
							</button>
						</div>
						<h3 className={styles.popup_window_title}>{article.title}</h3>
						<p className={styles.popup_window_description}>
							{article.description}
						</p>
						<div className={styles.popup_window_info}>
							<a
								href={article.url}
								target='_blank'
								className={styles.popup_window_info_url}
							>
								more
							</a>
							<p className={styles.popup_window_info_author}>
								{article.author}
							</p>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
const Backdrop = () => {
	return <div className={styles.backdrop}></div>;
};

const Modal = ({ article, setShowModal }: propsType) => {
	return (
		<div className={styles.modal}>
			{ReactDOM.createPortal(
				<Backdrop />,
				document.getElementById('backdrop-root')!
			)}
			{ReactDOM.createPortal(
				<Popup article={article} setShowModal={setShowModal} />,
				document.getElementById('modal-root')!
			)}
		</div>
	);
};

export default Modal;
