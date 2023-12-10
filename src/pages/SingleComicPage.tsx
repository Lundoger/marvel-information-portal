import { useEffect } from "react"
import { useLazyFetchComicQuery } from "../api/marvel.api"
import { Link, useParams, useNavigate } from 'react-router-dom'
import Spinner from "../components/UI/spinner/Spinner"
import ErrorMessage from "../components/UI/errorMessage/ErrorMessage"
import Nav from "../components/UI/Nav"
import Footer from "../components/UI/Footer"

const SingleComicPage = () => {
	const {comicsId} = useParams()
	const navigate = useNavigate()
	const [fetchAllComics, {isLoading, isError, data:comic}] = useLazyFetchComicQuery()

	useEffect(() => {
		if(comicsId) fetchAllComics(Number(comicsId))
		if(!comicsId || isNaN(Number(comicsId))) navigate('/404')
	}, [comicsId])

	return (
		<>
			<Nav/>
			<main className="single-comic">
				<section className="single-comic__comic comic">
					<div className="comic__container">
						{isLoading && <Spinner/>}
						{isError && <ErrorMessage/>}
						{!isLoading && !isError && comic && (
							<>
								<Link to="/comics" className="comic__back">Back to all</Link>
								<div className="comic__item item-comic">
									<div className="item-comic__image">
										<img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="comic preview" />
									</div>
									<div className="item-comic__content">
										<h2 className="item-comic__title">
											<a rel="noreferrer" target="_blank" href={comic.urls[0].url}>{comic.title}</a>
										</h2>
										<p className="item-comic__desc">{comic.description ? comic.description : 'There is no description for character'}</p>
										<p>{comic.pageCount ? `${comic.pageCount} pages` : 'No information about the number of pages'}</p>
										<p>Language: en-us</p>
										<p className="item-comic__price">{comic.prices[0].price ? `${comic.prices[0].price}$` : 'not available'}</p>
									</div>
								</div>
							</>
						)}
					</div>
				</section>
			</main>
			<Footer/>
		</>
	)
}

export default SingleComicPage