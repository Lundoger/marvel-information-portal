import React from 'react'
import ComicsBanner from '../components/ComicsBanner'
import ComicsList from '../components/ComicsList'
import Nav from '../components/UI/Nav'
import Footer from '../components/UI/Footer'

const ComicsPage = () => {
	return (
		<>
			<Nav/>
			<main className="main-comics">
				<ComicsBanner />
				<ComicsList/>
			</main>
			<Footer/>
		</>
	)
}

export default ComicsPage