
import {BrowserRouter, Routes, Route } from "react-router-dom";
import 'swiper/css';


import ScrollToTop from "./component/layout/ScrollToTop";
import ErrorPage from "./page/404";
import AboutPage from "./page/about";
import BlogPage from "./page/blog";
import BlogSingle from "./page/blog-single";
import ContactPage from "./page/contact";
import CoursePage from "./page/course";
import CourseSingle from "./page/course-single";
import Home from "./page/home";




function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="course" element={<CoursePage />} />
				<Route path="course-single" element={<CourseSingle />} />
				<Route path="blog" element={<BlogPage />} />
				<Route path="blog-single" element={<BlogSingle />} />
				<Route path="about" element={<AboutPage />} />
				<Route path="contact" element={<ContactPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
