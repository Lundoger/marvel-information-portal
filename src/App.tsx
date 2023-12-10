import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ComicsPage from './pages/ComicsPage';
import SingleComicPage from './pages/SingleComicPage';
import Page404 from './pages/Page404';
import Redirect404 from './components/Redirect404';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={ <HomePage/> }/>
			<Route path="/comics" element={ <ComicsPage/> }/>
			<Route path="/comics/:comicsId" element={ <SingleComicPage/> }/>
			<Route path="/404" element={ <Page404/> }/>
			<Route path="*" element={ <Redirect404/> }/>
		</Routes>
	)
}

export default App;
