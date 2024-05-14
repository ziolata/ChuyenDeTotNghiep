import React from "react";
import Header from "../Header/Layout";
import Novel from "../Novel/layout";
import Footer from "../Footer/Layout";
import Reviews from "../../Pages/Reviews";

export default function Home() {
	return (
		<>
			<Header />
			<Novel />
			<Reviews/>
			<Footer />
		</>
	);
}
