import { useEffect } from "react"
import { useAppSelector } from "../hooks/hooks"
import { useLazyFetchCharacterQuery } from "../api/marvel.api"
import Skeleton from "./UI/Skeleton"
import Spinner from "./UI/spinner/Spinner"

const CharInfo = () => {
	const {selectedChar} = useAppSelector(state => state.userReducer)
	const [fetchCharacter, {isFetching,  data:character}] = useLazyFetchCharacterQuery()

	useEffect(() => {
		if(selectedChar) {
			fetchCharacter(selectedChar)
		}
	}, [selectedChar])
	

	return (
		<div className="content__char-info char-info">
			{!selectedChar && <Skeleton/>}
			{isFetching && <Spinner/>}
			{!isFetching && character && (
				<>
					<div className="char-info__character character-info">
						<div className="character-info__row">
							<div className="character-info__avatar">
								<img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="character avatar" />
							</div>
							<div className="character-info__content">
								<h3 className="character-info__title">{character.name}</h3>
								<div className="character-info__actions">
									<a rel="noreferrer" target="_blank" href={character.urls[0].url} className="character-info__button button button--main">
										<div className="inner">Homepage</div>
									</a>
									<a rel="noreferrer" target="_blank" href={character.urls[1].url} className="character-info__button button button--wiki">
										<div className="inner">wiki</div>
									</a>
								</div>
							</div>
						</div>
					</div>
					<p className="char-info__desc">
						{character.description.length > 0 ? character.description : 'There is no description for character'}
					</p>
					<p className="char-info__comics">Comics:</p>
					<ul className="char-info__comics-list comics-list">
						{character.comics.items.length < 1 ? 'This character is not featured in the comics.' : null}
						{character.comics.items.map((comics, i) => (
							<li key={i} className="comics-list__item">
								<a rel="noreferrer" target="_blank" href={comics.resourceURI} className="comics-list__link">{comics.name}</a>
							</li>
						))}
					</ul>
				</>
			)}
		</div>
	)
}

export default CharInfo