// import React, { useState } from "react";
// const StarRating = ({ value, onClick }) => {
// 	const stars = [1, 2, 3, 4, 5];
// 	return (
// 		<div>
// 			{stars.map((star) => (
// 				// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
// 				<span key={star} className="star" onClick={() => onClick(star)}>
// 					{star <= value ? "★" : "☆"}
// 				</span>
// 			))}
// 		</div>
// 	);
// };
// export default function Reviews() {
// 	const [rating, setRating] = useState(0);
// 	const handleRatingChange = (value) => {
// 		setRating(value);
// 	};
// 	return (
// 		<>
// 			<div className="container">
// 				<div className="mb-2 head-title-global d-flex justify-content-between">
// 					<div className="col-6 col-md-4 col-lg-4 head-title-global__left d-flex align-items-center">
// 						<h2 className="pb-1 mb-0 me-2 border-bottom border-secondary">
// 							<a
// 								href="/"
// 								className=" d-block text-decoration-none text-dark fs-4 story-name"
// 								title="Truyện Hot"
// 							>
// 								Đánh giá website
// 							</a>
// 						</h2>
// 						<img
// 							src="http://api.noveltop.online/media/review.png"
// 							alt=""
// 							style={{ width: "50px", height: "50px" }}
// 						/>
// 					</div>
// 				</div>
// 				<div className="col-md-12">
// 					<div className="offer-dedicated-body-left">
// 						<div className="tab-content" id="pills-tabContent">
// 							<div
// 								className="tab-pane fade active show"
// 								id="pills-reviews"
// 								role="tabpanel"
// 								aria-labelledby="pills-reviews-tab"
// 							>
// 								<div className="clearfix p-4 mb-4 bg-white rounded shadow-sm graph-star-rating">
// 									<div className="graph-star-rating-header">
// 										<p className="mt-2 mb-4 text-black">Đánh giá 5 / 5 sao</p>
// 									</div>
// 									<div className="graph-star-rating-body">
// 										<div className="rating-list">
// 											<div className="text-black rating-list-left">
// 												<i className="fa fa-star star" />
// 												<i className="fa fa-star star" />
// 												<i className="fa fa-star star" />
// 												<i className="fa fa-star star" />
// 												<i className="fa fa-star star" />
// 											</div>
// 											<div className="rating-list-center">
// 												<div className="progress">
// 													<div
// 														style={{ width: "100%" }}
// 														aria-valuemax={5}
// 														aria-valuemin={0}
// 														aria-valuenow={5}
// 														role="progressbar"
// 														className="progress-bar bg-primary"
// 													>
// 														<span className="sr-only">
// 															80% Complete (danger)
// 														</span>
// 													</div>
// 												</div>
// 											</div>
// 											<div className="text-black rating-list-right">100%</div>
// 										</div>
// 										<div className="rating-list">
// 											<div className="text-black rating-list-left">
// 												<i className="fa fa-star star" />
// 												<i className="fa fa-star star" />
// 												<i className="fa fa-star star" />
// 												<i className="fa fa-star star" />
// 											</div>
// 											<div className="rating-list-center">
// 												<div className="progress">
// 													<div
// 														style={{ width: "0%" }}
// 														aria-valuemax={5}
// 														aria-valuemin={0}
// 														aria-valuenow={5}
// 														role="progressbar"
// 														className="progress-bar bg-primary"
// 													>
// 														<span className="sr-only">
// 															80% Complete (danger)
// 														</span>
// 													</div>
// 												</div>
// 											</div>
// 											<div className="text-black rating-list-right">0%</div>
// 										</div>
// 										<div className="rating-list">
// 											<div className="text-black rating-list-left">
// 												<i className="fa fa-star star" />
// 												<i className="fa fa-star star" />
// 												<i className="fa fa-star star" />
// 											</div>
// 											<div className="rating-list-center">
// 												<div className="progress">
// 													<div
// 														style={{ width: "0%" }}
// 														aria-valuemax={5}
// 														aria-valuemin={0}
// 														aria-valuenow={5}
// 														role="progressbar"
// 														className="progress-bar bg-primary"
// 													>
// 														<span className="sr-only">
// 															80% Complete (danger)
// 														</span>
// 													</div>
// 												</div>
// 											</div>
// 											<div className="text-black rating-list-right">0%</div>
// 										</div>
// 										<div className="rating-list">
// 											<div className="text-black rating-list-left">
// 												<i className="fa fa-star star" />
// 												<i className="fa fa-star star" />
// 											</div>
// 											<div className="rating-list-center">
// 												<div className="progress">
// 													<div
// 														style={{ width: "0%" }}
// 														aria-valuemax={5}
// 														aria-valuemin={0}
// 														aria-valuenow={5}
// 														role="progressbar"
// 														className="progress-bar bg-primary"
// 													>
// 														<span className="sr-only">
// 															0% Complete (danger)
// 														</span>
// 													</div>
// 												</div>
// 											</div>
// 											<div className="text-black rating-list-right">0%</div>
// 										</div>
// 										<div className="rating-list">
// 											<div className="text-black rating-list-left">
// 												<i className="fa fa-star star" />
// 											</div>
// 											<div className="rating-list-center">
// 												<div className="progress">
// 													<div
// 														style={{ width: "0%" }}
// 														aria-valuemax={5}
// 														aria-valuemin={0}
// 														aria-valuenow={5}
// 														role="progressbar"
// 														className="progress-bar bg-primary"
// 													>
// 														<span className="sr-only">
// 															80% Complete (danger)
// 														</span>
// 													</div>
// 												</div>
// 											</div>
// 											<div className="text-black rating-list-right">0%</div>
// 										</div>
// 									</div>
// 									<div className="p-4 mb-4 bg-white rounded shadow-sm restaurant-detailed-ratings-and-reviews">
// 										<h5 className="mb-1">Danh sách đánh giá</h5>
// 										<div className="pt-4 pb-4 reviews-members">
// 											<i className="fa fa-star star" />
// 											<i className="fa fa-star star" />
// 											<i className="fa fa-star star" />
// 											<i className="fa fa-star star" />
// 											<i className="fa fa-star star" />
// 											<div className="media">
// 												<a href="/">
// 													<img
// 														alt="Generic placeholder"
// 														src="http://bootdey.com/img/Content/avatar/avatar1.png"
// 														className="mr-3 rounded-pill"
// 													/>
// 												</a>
// 												<div className="media-body">
// 													<div className="reviews-members-header">
// 														<h6 className="mb-1">
// 															<a className="text-black" href="/">
// 																Admin
// 															</a>
// 														</h6>
// 														<p className="text-gray">8/5/2024</p>
// 													</div>
// 													<div className="reviews-members-body">
// 														<p>Tuyệt vời</p>
// 													</div>
// 												</div>
// 											</div>
// 										</div>

// 										<a
// 											className="mt-4 text-center w-100 d-block font-weight-bold"
// 											href="/"
// 										>
// 											Xem thêm đánh giá
// 										</a>
// 									</div>

// 									<p className="mb-2">Số sao đánh giá</p>
// 									<div className="mb-4">
// 										<span className="star-rating">
// 											<StarRating value={rating} onClick={handleRatingChange} />
// 										</span>
// 									</div>
// 									<form>
// 										<div className="form-group">
// 											<label>Lời đánh giá</label>
// 											<textarea className="form-control" defaultValue={""} />
// 										</div>
// 										<div className="form-group">
// 											<button
// 												className="mt-1 btn btn-primary btn-sm"
// 												type="button"
// 											>
// 												{" "}
// 												Đánh giá{" "}
// 											</button>
// 										</div>
// 									</form>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</>
// 	);
// }
import React from "react";

export default function Reviews() {
	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="mb-2 text-center col-12">
						<a
							href="https://docs.google.com/forms/d/e/1FAIpQLSdFA-jD8YqwaoHM8lh1QW2nPEb8RiMI8Y6ABRQ7DTVVu4UYYQ/viewform"
							className=""
						>
							<h2 className="btn bg-info">Đánh giá website</h2>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
