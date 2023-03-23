import styles from './NewsBlocks.module.css';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import { useTranslation } from 'react-i18next';

interface propsType {
	articles: [
		{
			title: string;
			source: {
				name: string;
			};
			publishedAt: string;
			urlToImage: string;
			description: string;
			url: string;
			author: string;
		}
	];
}

const NewsBlocks = ({ articles }: propsType) => {
	const { t } = useTranslation();
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
			<div className={styles.newsBlocks}>
				{articles.map((article) => (
					<div className={styles.newsBlocks_news} key={article.title}>
						<div>
							<div className={styles.newsBlocks_news_source}>
								{article.source.name}
							</div>
							<div className={styles.newsBlocks_news_box}>
								<h2
									onClick={() => {
										setShowModal(true);
										setPopupArticle(article);
									}}
								>
									{article.title}
								</h2>
								{article.urlToImage && (
									<img src={article.urlToImage} alt='news img' />
								)}
							</div>
							<div className={styles.newsBlocks_news_description}>
								{article.description}
							</div>
						</div>
						<div className={styles.newsBlocks_news_date}>
							{t('date')}: {article.publishedAt.substring(10, 0)}
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default NewsBlocks;
