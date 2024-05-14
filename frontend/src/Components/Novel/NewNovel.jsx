import React, { useEffect, useState } from "react";
import { getNewChapterNovel, getTopNovel } from "../../utils/API";
import { Image, ListGroup, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function NewNovel() {
	const [newNovel, setNewNovel] = useState([]);
	const [topNovel, setTopNovel] = useState([]);

	useEffect(() => {
		getNewChapterNovel(setNewNovel);
	}, []);

	useEffect(() => {
		getTopNovel(setTopNovel);
	}, []);

	return (
		<>
			<div className="container">
				<div className="row align-items-start">
					<div className="col-12 col-md-8 col-lg-9">
						<div className="mb-3 section-stories-new">
							<div className="row">
								<div className="mb-2 head-title-global d-flex justify-content-between">
									<div className="col-6 col-md-4 col-lg-6 head-title-global__left d-flex align-items-center">
										<h2 className="pb-1 mb-0 me-2 border-bottom border-secondary">
											<a
												href="http://www.noveltop.online/#"
												className="d-block text-dark fs-4 story-name"
												title="Truyện Mới"
											>
												Tiểu thuyết mới cập nhật chương
											</a>
										</h2>
										<img
									src="http://api.noveltop.online/media/new.png"
									alt=""
									style={{ width: "50px", height: "50px" }}
								/>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-12">
									<div className="section-stories-new__list">
										{newNovel.map((item) => (
											<div className="story-item-no-image" key={item.id}>
												<div className="story-item-no-image__name d-flex align-items-center">
													<h3 className="mb-0 me-1 d-flex align-items-center">
														<svg
															style={{ width: 10, marginRight: 5 }}
															xmlns="http://www.w3.org/2000/svg"
															height="1em"
															viewBox="0 0 320 512"
														>
															<title>icon SVG</title>
															{/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
															<path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path>
														</svg>
														<a
															href={`novel/${item.id}/`}
															className="text-decoration-none text-dark fs-6 hover-title text-one-row story-name"
														>
															{item.name}
														</a>
													</h3>
													{/* <span className="badge text-bg-info text-light me-1">
														New
													</span>
													<span className="badge text-bg-success text-light me-1">
														Full
													</span>
													<span className="badge text-bg-danger text-light">
														Hot
													</span> */}
												</div>
												<div className="story-item-no-image__categories ms-2 d-none d-lg-block">
													<p className="mb-0">
														{item.genres.map((genre) => (
															<a
																key={genre.id}
																// biome-ignore lint/style/useTemplate: <explanation>
																href={"/the-loai/" + genre.id}
																className="hover-title text-decoration-none text-dark category-name"
															>
																{genre.name},{" "}
															</a>
														))}
													</p>
												</div>
												<div className="story-item-no-image__chapters ms-2">
													<a
														href="/"
														className="hover-title text-decoration-none text-info"
													>
														Chương {item.chapters.number}
													</a>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 col-md-4 col-lg-3 sticky-md-top">
						<div className="row">
							<div className="col-12">
								<ListGroup>
									<h3 className="font-bold text-center">
										Bảng xếp hạng tiểu thuyết
									</h3>
									{topNovel.map((manga) => (
										<ListGroup.Item key={manga.id}>
											<Row>
												<Col md={3}>
													<Link to={`novel/${manga.id}`}>
														<Image src={manga.image} width="50" />
													</Link>
												</Col>
												<Col md={9}>
													<strong>{manga.name}</strong>
													<p className="chapter">
														<i className="fas fa-eye" /> {manga.views}
													</p>
												</Col>
											</Row>
										</ListGroup.Item>
									))}
								</ListGroup>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
