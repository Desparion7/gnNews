import styles from './NewsList.module.css';
import { useState } from 'react';
import Modal from '../Modal/Modal';

interface propsType {
	articles: [
		{
			title: string;
			source: {
				name: string;
			};
			description: string;
			url: string;
			author: string;
			publishedAt: string;
		}
	];
}
const NewsList = ({ articles }: propsType) => {
	const [showModal, setShowModal] = useState(false);
	const [popupArticle, setPopupArticle] = useState({
		title: '',
		description: '',
		url: '',
		author: '',
	});

	return (
		<>
			{showModal && (
				<Modal article={popupArticle} setShowModal={setShowModal} />
			)}
			<div className={styles.newsList}>
				{articles.map((article) => (
					<div className={styles.newsList_news} key={article.title}>
						<div className={styles.newsList_news_source}>
							{article.source.name}
						</div>
						<h2
							onClick={() => {
								setShowModal(true);
								setPopupArticle(article);
							}}
						>
							{article.title}
						</h2>
						<div className={styles.newsList_news_date}>
							Date: {article.publishedAt.substring(10, 0)}
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default NewsList;
