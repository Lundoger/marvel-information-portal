import Nav from '../components/UI/Nav'
import ironMan from '../assets/iron-man-char.jpg'
import Footer from '../components/UI/Footer'

const Page404 = () => {
	return (
		<>
			<Nav/>
			<main className="page-404">
				<section className="page-404__error-page error-page">
					<div className="error-page__container">
						<div className="error-page__text">
							<p className='error-page__not-found'>404 PAGE NOT FOUND</p>
							<p>
								Check that you typed the address correctly, go back to your previous page or try using our site search to find something specific.
							</p>
						</div>
						<div className="error-page__img">
							<img src={ironMan} alt="iron man" />
						</div>
					</div>
					<div className="error-page__rain"></div>
				</section>
			</main>
			<Footer/>
		</>
	)
}

export default Page404