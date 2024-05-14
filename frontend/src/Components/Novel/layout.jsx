import React from "react";
import HotNovel from "./HotNovel";
import NewNovel from "./NewNovel";
import NovelComplete from "./CompleteNovel";
export default function Novel() {
	return (
		<>
			<HotNovel />
			<NewNovel />
			<NovelComplete />
		</>
	);
}
