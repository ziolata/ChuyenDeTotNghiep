import { Routes, Route } from "react-router-dom";
import Home from "./Components/Client/Home";
import NovelDetailClient from "./Components/Client/NovelDetailClient";
import ReadNovel from "./Components/Client/ReadNovel";
import { AuthProvider } from "./hooks/AuthContext";
import Login from "./Pages/Login";
import Signup from "./Pages/Register";
import SearchClient from "./Components/Client/SearchClient";
import ProfileClient from "./Components/Client/ProfileClient";
import NewNovelsCarousel from "./Components/Novel/Test";
import ListNovel from "./Components/Novel/ListNovel";
import ListNovelClient from "./Components/Client/ListNovelClient";

function App() {
	return (
		<AuthProvider>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/novel/:id/" element={<NovelDetailClient />} />
				<Route path="/chapter/:id" element={<ReadNovel />} />
				<Route path="/search/" element={<SearchClient />} />
				<Route path="/login/" element={<Login />} />
				<Route path="/register/" element={<Signup />} />
				<Route path="/profile/" element={<ProfileClient />} />
				<Route path="/test/" element={<ListNovelClient />} />
			</Routes>
		</AuthProvider>
	);
}

export default App;
