import React, { useEffect, useState } from "react";
import { getNovel } from "../../utils/API";
import NewNovelsCarousel from "./Test";

export default function NovelComplete() {
	const [novel, setNovel] = useState([]);

	useEffect(() => {
		getNovel(setNovel);
	}, []);
	return (
		<>
			<div className="mt-3 mb-3 section-stories-full">
				<div className="container">
					<div className="row">
						<div className="mb-2 head-title-global d-flex justify-content-between">
							<div className="col-12 col-md-4 col-lg-4 head-title-global__left d-flex">
								<h2 className="pb-1 mb-0 me-2 border-bottom border-secondary">
									<span
										className="d-block text-decoration-none text-dark fs-4 title-head-name"
										title="Truyện đã hoàn thành"
									>
										Truyện ngẫu nhiên
									</span>
								</h2>
								
								{/* <i class="fa-solid fa-fire-flame-curved"></i> */}
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="section-stories-full__list">
								{/* {novel.map(
									(item) =>
										// biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
										item.features === "full" && (
											<div
												className="text-center story-item-full"
												key={item.id}
											>
												<a
													href={`novel/${item.id}`}
													className="d-block story-item-full__image"
												>
													<img
														src={item.image}
														alt={item.name}
														className="img-fluid w-100"
														width={150}
														height={230}
														style={{ width: "150px", height: "230px" }}
														loading="lazy"
													/>
												</a>
												<h3 className="mb-0 text-center fs-6 story-item-full__name fw-bold">
													<a
														href={`novel/${item.id}`}
														className="text-decoration-none text-one-row story-name"
													>
														{item.name}
													</a>
												</h3>
												<span className="story-item-full__badge badge text-bg-success">
													Full - 836 chương
												</span>
											</div>
										),
								)} */}
							</div>
						</div>
					</div>
					<NewNovelsCarousel/>
				</div>
			</div>
		</>
	);
}
