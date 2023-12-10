import { useEffect, useRef } from "react"
import { useLazyFetchAllCharactersQuery } from "../api/marvel.api"
import Spinner from "./UI/spinner/Spinner"
import ErrorMessage from "./UI/errorMessage/ErrorMessage"
import { useAppDispatch, useAppSelector } from "../hooks/hooks"
import { marvelSlice } from "../store/reducers/marvelSlice"


const CharList = () => {
	const {charOffset, charList, charEnded} = useAppSelector(state => state.userReducer)
	const {changeCharOffset, addCharToList, selectCharacter, setCharEnded} = marvelSlice.actions
	const dispatch = useAppDispatch()
	const [fetchAllCharacters, {isLoading, isFetching, isError, data:characters}] = useLazyFetchAllCharactersQuery()

	useEffect(() => {
		if(charList.length < 1) fetchAllCharacters(charOffset)
	}, [])

	useEffect(() => {
		if(!isLoading && characters) {
			if(characters.length < 9) dispatch(setCharEnded(true))
			dispatch(addCharToList(characters))
			dispatch(changeCharOffset())
		}
	}, [isLoading, characters])

	const itemRefs = useRef<HTMLLIElement[]>([]);

	const focusOnItem = (id:number) => {
        itemRefs.current.forEach((item:HTMLLIElement) => item.classList.remove('item-char--selected'));
        itemRefs.current[id].classList.add('item-char--selected');
        itemRefs.current[id].focus();
    }

	return (
		<div className="content__char-catalog">
			{isLoading && <Spinner/>}
			{isError && <ErrorMessage/>}
			{!isLoading && !isError && charList && (
				<>
					<ul className="content__char-list char-list">
						{charList.map((char, i) => (
							<li 
								tabIndex={0} 
								className="char-list__item item-char"
								key={char.id}
								ref={(el:HTMLLIElement) => itemRefs.current[i] = el}
								onClick={() => {
									dispatch(selectCharacter(char.id))
									focusOnItem(i)
								}}
								onKeyDown={(e) => {
									if(e.key === 'e' || e.key === 'Enter') {
										dispatch(selectCharacter(char.id))
										focusOnItem(i)
									}
								}}
							>
								<div className="item-char__image-ibg">
									<img src={`${char.thumbnail.path}.${char.thumbnail.extension}`} alt=" char avatar" />
								</div>
								<h2 className="item-char__title">{char.name}</h2>
							</li>
						))}
					</ul>
					{isFetching && <Spinner/>}
					<button 
						disabled={isFetching}
						type="button" 
						className="content__loadmore button button--main button--long"
						onClick={() => fetchAllCharacters(charOffset)}
						style={{display: charEnded ? 'none' : 'block'}}
					>
						<div className="inner">Load more</div>
					</button>
				</>
			)}
		</div>
	)
}

export default CharList