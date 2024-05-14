import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getChapterDetail, getSound } from "../../utils/API";

export default function Chapter() {
	const { id } = useParams();
	const [sound, setSound] = useState([]);
	const [chapter, setChapter] = useState([]);
	useEffect(() => {
		getChapterDetail(setChapter, id);
	}, [id]);
	const [audioKey, setAudioKey] = useState(0);
	const submitHandler = async () => {
		getSound((newSound) => {
			setSound(newSound); // Cập nhật âm thanh sau khi nhận được từ API
			// Tăng giá trị của key để reload audio
			setAudioKey((prevKey) => prevKey + 1);
		}, chapter.content);
	};
	const reloadSound = () => {
		// Tăng giá trị của key để reload audio
		setAudioKey((prevKey) => prevKey + 1);
	};
	console.log(sound);
	return (
		<>
			<div className="container my-5 chapter-wrapper">
				<a href="/" className="text-decoration-none">
					<h1 className="text-center text-success">{chapter.novelname}</h1>
				</a>
				<a href="/" className="text-decoration-none">
					<p className="text-center text-dark">
						Chương {chapter.number}: {chapter.name}
					</p>
				</a>
				<hr className="chapter-start container-fluid" />
				<div className="text-center chapter-nav">
					<div className="chapter-actions chapter-actions-origin d-flex align-items-center justify-content-center">
						<a
							className="btn btn-success me-1 chapter-prev"
							href={
								chapter.previous_chapter_id !== null
									? `/chapter/${chapter.previous_chapter_id}/`
									: "#"
							}
							title=""
						>
							{" "}
							<span>Chương trước</span>
						</a>
						<button className="btn btn-success chapter_jump me-1" type="button">
							<span>
								<svg
									style={{ fill: "#fff" }}
									xmlns="http://www.w3.org/2000/svg"
									height="1em"
									viewBox="0 0 448 512"
								>
									<title>icon</title>
									{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
									{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
									<path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
								</svg>
							</span>
						</button>
						<div className="dropdown select-chapter me-1 d-none">
							<a className="btn btn-secondary dropdown-toggle" href="/">
								Chọn chương
							</a>
							<ul
								className="dropdown-menu select-chapter__list"
								aria-labelledby="dropdownMenuLink"
							/>
						</div>
						<a
							className="btn btn-success chapter-next"
							href={
								chapter.next_chapter_id !== null
									? `/chapter/${chapter.next_chapter_id}/`
									: "#"
							}
							title=""
						>
							<span>Chương tiếp</span>
						</a>
						<button
							type="button"
							className="ml-2 btn btn-success chapter-next"
							onClick={submitHandler}
						>
							Tự Động Đọc
						</button>
						{/* Phần âm thanh */}
						<button
							type="button"
							className="ml-2 btn btn-success chapter-next"
							onClick={reloadSound}
						>
							Reload Audio
						</button>
						{sound.length > 0 && (
							// biome-ignore lint/a11y/useMediaCaption: <explanation>
							<audio controls>
								<source src={sound} type="audio/mpeg" />
								Your browser does not support the audio element.
							</audio>
						)}
					</div>
				</div>
				<hr className="chapter-end container-fluid" />
				<div className="mb-3 chapter-content">
					<div
						className="visible-md visible-lg ads-responsive incontent-ad"
						id="ads-chapter-pc-top"
						align="center"
						style={{ height: 90 }}
					/>
					{/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
					<div dangerouslySetInnerHTML={{ __html: chapter.content }} />
				</div>
				<div
					className="px-2 py-2 text-center alert alert-success d-none d-lg-block"
					role="alert"
				>
					Bạn có thể dùng phím mũi tên hoặc WASD để lùi/sang chương
				</div>
			</div>
			<div className="chapter-actions chapter-actions-mobile d-flex align-items-center justify-content-center">
				<a className="btn btn-success me-2 chapter-prev" href="/" title="">
					{" "}
					<span>Chương</span>trước
				</a>
				<button className="btn btn-success chapter_jump me-2" type="button">
					<span>
						<svg
							style={{ fill: "#fff" }}
							xmlns="http://www.w3.org/2000/svg"
							height="1em"
							viewBox="0 0 448 512"
						>
							<title>icon</title>
							{/*! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
							{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
							<path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
						</svg>
					</span>
				</button>
				<div className="dropup select-chapter me-2 d-none">
					<a
						className="btn btn-secondary dropdown-toggle"
						role="button"
						id="dropdownMenuLink"
						data-bs-toggle="dropdown"
						aria-expanded="false"
						href="/"
					>
						Chọn chương
					</a>
					<ul
						className="dropdown-menu select-chapter__list"
						aria-labelledby="dropdownMenuLink"
					/>
				</div>
				<a className="btn btn-success chapter-next" href="/" title="">
					<span>Chương tiếp </span>
				</a>
			</div>
		</>
	);
}
