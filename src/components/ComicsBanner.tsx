import React from 'react'
import avengersLogo from '../assets/Avengers_logo.png'
import avengersTeam from '../assets/Avengers.png'

const ComicsBanner = () => {
	return (
		<section className="main-comics__comics-banner comics-banner">
			<div className="comics-banner__container">
				<div className="comics-banner__image comics-banner__image--first">
					<img src={avengersTeam} alt="marvel" />
				</div>
				<div className="comics-banner__text">
					New comics every week!
					<br />
					Stay tuned!
				</div>
				<div className="comics-banner__image comics-banner__image--second">
					<img src={avengersLogo} alt="marvel" />
				</div>
			</div>
		</section>
	)
}

export default ComicsBanner