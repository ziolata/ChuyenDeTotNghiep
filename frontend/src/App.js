import { Routes, Route } from "react-router-dom";
import Home from "./Components/Client/Home";
import NovelDetailClient from "./Components/Client/NovelDetailClient";
import ReadNovel from "./Components/Client/ReadNovel";
import { AuthProvider } from "./hooks/AuthContext";
import Login from "./Pages/Login";
import Signup from "./Pages/Register";
import SearchClient from "./Components/Client/SearchClient";
import ProfileClient from "./Components/Client/ProfileClient";
import ListNovelClient from "./Components/Client/ListNovelClient";
import HistoryClient from "./Components/Client/HistoryNovelClient";

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
				<Route path="/list-novel/" element={<ListNovelClient />} />
				<Route path="/history/" element={<HistoryClient />} />

			</Routes>
		</AuthProvider>
	);
}

export default App;
