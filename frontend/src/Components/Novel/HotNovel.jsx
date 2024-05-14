import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { getHotNovel } from "../../utils/API";
import NewNovelsCarousel from "./Test";
export default function HotNovel() {
	const [novel, setNovel] = useState([]);

	useEffect(() => {
		getHotNovel(setNovel);
	}, []);
	return (
		<>
			<div className="mt-2 mb-3 section-stories-hot">
				<div className="container">
					
					
					<div className="row">
						<div className="mb-2 head-title-global d-flex justify-content-between">
							<div className="col-6 col-md-4 col-lg-4 head-title-global__left d-flex align-items-center">
								<h2 className="pb-1 mb-0 me-2 border-bottom border-secondary">
									<a
										href="/"
										className=" d-block text-decoration-none text-dark fs-4 story-name"
										title="Truyện Hot"
									>
										Tiểu thuyết mới
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
							<div className="section-stories-hot__list">
								{novel.map(
									(item) =>
										// biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
										item.features === "new" && (
											<div className="story-item" key={item.id}>
												<a
													href={`novel/${item.id}`}
													className="d-block text-decoration-none"
												>
													<div className="story-item__image">
														<img
															src={item.image}
															alt={item.name}
															className="img-fluid"
															width={150}
															height={230}
															style={{ width: "150px", height: "230px" }}
															loading="lazy"
														/>
													</div>
													<h3 className="story-item__name text-one-row story-name">
														{item.name}
													</h3>
													<div className="list-badge">
														{/* <span className="story-item__badge badge text-bg-success">
															Full
														</span> */}
														{/* <span className="story-item__badge story-item__badge-hot badge text-bg-danger">
															Hot
														</span> */}
														<span className="story-item__badge story-item__badge-new badge text-light">
															<img
																src="http://api.noveltop.online/media/newnovel.png"
																alt=""
																style={{ width: "50px", height: "50px" }}
															/>
														</span>
													</div>
												</a>
											</div>
										),
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
