import { useEffect } from "react"
import { useLazyFetchAllComicsQuery } from "../api/marvel.api"
import { useAppDispatch, useAppSelector } from "../hooks/hooks"
import { Link } from "react-router-dom"
import { marvelSlice } from "../store/reducers/marvelSlice"
import Spinner from "./UI/spinner/Spinner"
import ErrorMessage from "./UI/errorMessage/ErrorMessage"

const ComicsList = () => {
	const {comicsOffset, comicsList} = useAppSelector(state => state.userReducer)
	const {setComicsEnded, addComicToList, changeComicsOffset} = marvelSlice.actions 
	const dispatch = useAppDispatch()
	const [fetchAllComics, {isLoading, isFetching, isError, data:comics}] = useLazyFetchAllComicsQuery()

	useEffect(() => {
		if(comicsList.length < 1) fetchAllComics(comicsOffset)
	}, [])

	useEffect(() => {
		if(!isLoading && comics) {
			if(comics.length < 8) dispatch(setComicsEnded(true))
			dispatch(addComicToList(comics))
			dispatch(changeComicsOffset())
		}
	}, [isLoading, comics])

	return (
		<section className="main-comics__comics comics">
			<div className="comics__container">
			{isLoading && <Spinner/>}
			{isError && <ErrorMessage/>}
			{!isLoading && !isError && comicsList && (
				<>
					<ul className="comics__catalog comics-catalog">
						{comicsList.map(comic => (
							<li 
								className="comics-catalog__element comics-element"
								key={comic.id}
							>
								<Link to={`/comics/${comic.id}`} className="comics-element__link">
									<div className="comics-element__image-ibg">
										<img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="comics preview" />
									</div>
									<h3 className="comics-element__title">{comic.title}</h3>
									<p className="comics-element__price">{comic.prices[0].price ? `${comic.prices[0].price}$` : 'not available'}</p>
								</Link>
							</li>
						))}
					</ul>
					{isFetching && <Spinner/>}
					<button 
						disabled={isFetching}
						type="button" 
						className="content__loadmore button button--main button--long"
						onClick={() => fetchAllComics(comicsOffset)}
					>
						<div className="inner">Load more</div>
					</button>
				</>
			)}
			</div>
		</section>
	)
}

export default ComicsList