import React, {  useEffect, useState } from "react";
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
	// const submitHandler = async () => {
	// 	getSound((newSound) => {
	// 		setSound(newSound); // Cập nhật âm thanh sau khi nhận được từ API
	// 	}, chapter.content);
	// };
	const submitHandler = async () => {
		getSound(setSound);
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
					</div>
				</div>
			</div>
		</>
	);
}
