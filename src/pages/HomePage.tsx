import React from 'react'
import Nav from '../components/UI/Nav';
import RandomChar from '../components/RandomChar';
import CharList from '../components/CharList';
import CharInfo from '../components/CharInfo';
import Footer from '../components/UI/Footer';

const HomePage = () => {
	return (
		<>
			<Nav/>
			<main className="page">
				<RandomChar/>
				<section className="page__content content">
					<div className="content__container">
						<div className="content__flex-container">
							<CharList/>
							<CharInfo/>
						</div>
					</div>
				</section>
			</main>
			<Footer/>
		</>
	)
}

export default HomePage