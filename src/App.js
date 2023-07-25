import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
	return (
		<div>
			<Layout>
				<Routes>
					<Route path="/" element={<AllMeetupsPage />} />
					<Route path="/new-meetups" element={<NewMeetupPage />} />
					<Route path="/favorite-meetups" element={<FavoritesPage />} />
				</Routes>
			</Layout>
		</div>
	);
}

export default App;
