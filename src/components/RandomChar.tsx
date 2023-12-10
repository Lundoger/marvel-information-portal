import React, { useEffect } from 'react'
import banner  from '../assets/banner-img.png'
import { useLazyFetchCharacterQuery } from '../api/marvel.api'
import Spinner from './UI/spinner/Spinner'
import ErrorMessage from './UI/errorMessage/ErrorMessage'

function getRandomId() {
	return Math.floor(Math.random() * (1011400 - 1011000) + 1011000)
}

const RandomChar = () => {
	const [fetchCharacter, {isFetching, isError, data:character}] = useLazyFetchCharacterQuery()
	
	useEffect(() => {
		fetchCharacter(getRandomId())
	}, [])


	const updateChar = () => {
		fetchCharacter(getRandomId())
	}

	return (
		<section className="page__random-char random-char">
			<div className="random-char__container">
				<div className="random-char__row">
					<div className="random-char__half random-char__left">
						{isFetching && <Spinner/>}
						{isError && <ErrorMessage/>}
						{!isFetching && character && (
							<div className="random-char__character character-random">
								<div className="character-random__row">
									<div className="character-random__image-ibg">
										<img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="character avatar" />
									</div>
									<div className="character-random__info">
										<h3 className="character-random__name">{character.name}</h3>
										<p className="character-random__desc">
											{character.description.length > 0 ? 
												(character.description.length > 210 ? character.description.slice(0, 210) + '...' : character.description) 
												: 'There is no description for character'}
										</p>
										<div className="character-random__actions">
											<a rel="noreferrer" target="_blank" href={character.urls[0].url} className="character-random__button button button--main">
												<div className="inner">Homepage</div>
											</a>
											<a rel="noreferrer" target="_blank" href={character.urls[1].url} className="character-random__button button button--wiki">
												<div className="inner">wiki</div>
											</a>
										</div>
									</div>
								</div>
							</div>
						)}
					</div>
					<div className="random-char__half random-char__right">
						<div className="random-char__decoration-img"><img src={banner} alt="banner" /></div>
						<div className="random-char__flex-container">
							<h2 className="random-char__title">Random character for today!<br />Do you want to get to know him better?</h2>
							<p className="random-char__text">Or choose another one</p>
							<button 
								type="button" 
								className="character-random__button button button--main"
								onClick={updateChar}
							>
								<div className="inner">Try it</div>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default RandomChar