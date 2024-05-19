import React, { useContext, useEffect, useState } from "react";
import { getChapter, getNovelDetail } from "../../utils/API";
import { Link, useParams } from "react-router-dom";
import { ListGroup, Button, Form, Table } from "react-bootstrap";
import AuthContext from "../../hooks/AuthContext";
import axios from "axios";
import Cookies from "js-cookie";

const StarRating = ({ value, onClick }) => {
	const stars = [1, 2, 3, 4, 5];
	return (
		<div>
			{stars.map((star) => (
				// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
				<span key={star} className="star" onClick={() => onClick(star)}>
					{star <= value ? "★" : "☆"}
				</span>
			))}
		</div>
	);
};

export default function NovelDetail() {
	const [displayedReviews, setDisplayedReviews] = useState(4);
	const csrftoken = Cookies.get("csrftoken");
	const [rating, setRating] = useState(0);
	const handleRatingChange = (value) => {
		setRating(value);
	};
	const [comment, setComment] = useState("");
	const { userinfo, authTokens } = useContext(AuthContext);
	const { id } = useParams();
	const [novelDetail, setNovelDetail] = useState([]);
	const [chapter, setChapter] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const handlePageChange = (newPage) => {
		setPage(newPage);
	};

	useEffect(() => {
		getNovelDetail(setNovelDetail, id);
	}, [id]);

	useEffect(() => {
		getChapter(setChapter, id, page);
		setTotalPages(chapter.count);
	}, [id, page, chapter.count]);
	const paginationItems = [];
	console.log(novelDetail.rating);
	for (let i = 0; i < totalPages; i++) {
		if (i % 10 === 0) {
			paginationItems.push(
				<li
					key={`pageGroup-${i / 10}`}
					className={`pagination__item ${
						i / 10 + 1 === page ? "page-current" : ""
					}`}
				>
					{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
					<div
						className="page-link story-ajax-paginate"
						onClick={() => handlePageChange(i / 10 + 1)}
						style={{ cursor: "pointer" }}
					>
						{i / 10 + 1}
					</div>
				</li>,
			);
		}
	}
	const submitHandler = async () => {
		try {
			const formData = new FormData();
			formData.append("comment", comment);
			formData.append("rating", rating);
			if (!rating || !comment) {
				alert("Vui lòng nhập xếp loại và nội dung đánh giá");
				return;
			}
			const response = await axios.post(
				`http://api.noveltop.online/api/novel/list/${id}/`,
				formData,
				{
					headers: {
						// "Content-Type": "multipart/form-data",
						"X-CSRFToken": csrftoken,
						Authorization: `Bearer ${authTokens.access}`,
					},
				},
			);
			if (response.status === 200) {
				alert("Đánh giá thành công");
				window.location.reload();
			}
		} catch (error) {
			if (error.response) {
				// Nếu có phản hồi từ máy chủ
				if (error.response.status === 400) {
					// Xử lý lỗi bad request (ví dụ: "Novel already reviewed")
					if (error.response.data.detail === "Novel already reviewed") {
						alert("Bạn đã đánh giá tiểu thuyết này trước đó");
					} else {
						// Xử lý các lỗi khác có mã trạng thái 400
						alert(`Lỗi bad request:  ${error.response.data.detail}`);
					}
				} else if (error.response.status === 401) {
					// Xử lý lỗi Unauthorized
					alert("Vui lòng đăng nhập trước khi đánh giá tiểu thuyết ");
				} else {
					// Xử lý các lỗi khác với mã trạng thái khác 400 hoặc 401
					alert(`Lỗi không xác định: ${error.response.status}`);
				}
			} else {
				// Xử lý các lỗi không phải từ máy chủ
				console.error("Lỗi không xác định:", error);
				alert("Có lỗi xảy ra khi đánh giá. Vui lòng thử lại sau.");
			}
		}
	};
	const handleHistory = async (chapterId) => {
		try {
			const response = await axios.post(
				"http://api.noveltop.online/api/novel/history/",
				{
					novel: id,
					last_read_chapter: chapterId,
				},
				{
					headers: {
						Authorization: `Bearer ${authTokens.access}`,
					},
				},
			);
		} catch (error) {
			console.error("Lỗi:", error);
		}
	};
	return (
		<>
			<div className="text-center border-bottom bg-light">
				<div className="">
					<div className="container p-2 mt">
						<nav className="d-flex">
							<h6 className="mb-2">
								<a href="/" className="text-dark">
									Trang chủ
								</a>
								<span className="mx-2 text-black"> / </span>
								<a href="/novel/list/" className="text-dark">
									Truyện
								</a>
								<span className="mx-2 text-black"> / </span>
								<a href={`/novel/${novelDetail.id}`} className="text-dark">
									{novelDetail.name}
								</a>
							</h6>
						</nav>
					</div>
				</div>
			</div>
			<main>
				{/* <input
					type="hidden"
					id="story_slug"
					defaultValue="nang-khong-muon-lam-hoang-hau"
				/> */}
				<div className="container">
					<div className="row align-items-start">
						<div className="col-12 col-md-7 col-lg-12">
							<div className="mb-4 head-title-global d-flex justify-content-between">
								<div className="col-12 col-md-12 col-lg-4 head-title-global__left d-flex">
									<h2 className="pb-1 mb-0 me-2 border-secondary">
										<span
											className="d-block text-decoration-none text-dark fs-4 title-head-name"
											title="Thông tin truyện"
										>
											{/* (I) {novelDetail.name} */}
										</span>
									</h2>
								</div>
							</div>

							<div className="story-detail">
								<div className="story-detail__top">
									<div className="row">
										<div className="col-12 col-md-12 col-lg-3 story-detail__top--image">
											<div className="book-3d">
												<img
													src={`http://api.noveltop.online${novelDetail.image}`}
													alt={novelDetail.name}
													className="img-fluid w-100"
													loading="lazy"
													style={{ width: "200px", height: "300px" }}
												/>
											</div>
										</div>
										<div className="col-12 col-md-12 col-lg-9">
											<h3 className="text-center story-name">
												{novelDetail.name}
											</h3>
											<div className="mb-2 rate-story">
												<div>
													{Array.from({
														length: Math.floor(novelDetail.rating),
													}).map((_, index) => (
														// biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
														<i className="fa fa-star star" />
													))}
													{novelDetail.rating % 1 >= 0.5 &&
														novelDetail.rating % 1 < 0.9 && (
															<i className="fa fa-star-half-o star" />
														)}
												</div>

												<div
													className="rate-story__value"
													itemProp="aggregateRating"
													itemScope=""
													itemType="https://schema.org/AggregateRating"
												>
													<em>
														Đánh giá:
														<strong>
															<span itemProp="ratingValue">
																{novelDetail.rating}
															</span>
														</strong>
														/
														<span className="" itemProp="bestRating">
															5
														</span>
														{"  "}
														từ{" "}
														<strong>
															<span itemProp="ratingCount">
																{novelDetail.numReviews}
															</span>{" "}
															lượt đánh giá
														</strong>
													</em>
												</div>
											</div>
											<div
												className="px-3 story-detail__top--desc"
												style={{ maxHeight: 285 }}
											>
												{novelDetail.description}
											</div>
										</div>
									</div>
								</div>
								<div className="mt-2 mb-3 story-detail__bottom">
									<div className="row">
										<div className="col-12 col-md-12 col-lg-3 story-detail__bottom--info">
											<p className="mb-2">
												<strong>Tác giả:</strong>
												<a
													href="/"
													className="text-decoration-none text-dark hover-title"
												>
													{novelDetail.author?.name}
												</a>
											</p>
											<div className="flex-wrap mb-1 d-flex align-items-center">
												<strong className="me-1">Thể loại:</strong>
												<div className="d-flex align-items-center flex-warp">
													{novelDetail.genres?.map((item) => (
														<a
															key={item.id}
															href="category.html"
															className="text-decoration-none text-dark hover-title "
															style={{ width: "max-content" }}
														>
															{item.name},{"  "}
														</a>
													))}
												</div>
											</div>
											<p className="mb-1">
												<strong>Trạng thái:</strong>{" "}
												{novelDetail.status === "continue" && (
													<span className="text-info">Tiếp Tục</span>
												)}
												{novelDetail.status === "stoped" && (
													<span className="text-info">Đã dừng lại</span>
												)}
												{novelDetail.status === "stoped" && (
													<span className="text-info">Hoàn thành</span>
												)}
											</p>
										</div>
									</div>
								</div>
								<div className="story-detail__list-chapter">
									<div className="mb-4 head-title-global d-flex justify-content-between">
										<div className="col-6 col-md-12 col-lg-4 head-title-global__left d-flex">
											<h2 className="pb-1 mb-0 me-2 border-bottom border-secondary">
												<span
													href="#"
													className="d-block text-decoration-none text-dark fs-4 title-head-name"
													title="Truyện hot"
												>
													Danh sách chương
												</span>
											</h2>
										</div>
									</div>
									{/* <div className="story-detail__list-chapter--list">
										<div className="row">
											<div className="col-12 col-sm-6 col-lg-6 story-detail__list-chapter--list__item">
												<ul>
													{chapter.results?.map((chapter) => (
														<li key={chapter.id}>
															<a
																href={`/chapter/${chapter.id}/`}
																className="text-decoration-none text-dark hover-title"
															>
																Chương {chapter.number}: {chapter.name}
															</a>
														</li>
													))}
												</ul>
											</div>
										</div>
									</div> */}
								</div>

								<Table className="bg-slate-400">
									<thead>
										<tr>
											<th>Chương</th>
											<th>Lượt xem</th>
											<th>Ngày tạo </th>
										</tr>
									</thead>
									<tbody>
										{chapter.results?.map((chapter, index) => (
											<tr key={chapter._id}>
												<td>
												<Link to={`/chapter/${chapter.id}`} onClick={() => handleHistory(chapter.number)}>
														Chương {chapter.number}:{chapter.name}
													</Link>
												</td>
												
												<td>{chapter.views}</td>
												<td>{chapter.createdAt.substring(0, 10)}</td>
											</tr>
										))}
									</tbody>
								</Table>
								<div
									className="pagination"
									style={{ justifyContent: "center" }}
								>
									<ul>
										{paginationItems}

										<li className="pagination__arrow pagination__item">
											<a
												href="/"
												data-url=""
												style={{ cursor: "pointer" }}
												className="text-decoration-none w-100 h-100 d-flex justify-content-center align-items-center story-ajax-paginate"
											>
												&gt;&gt;
											</a>
										</li>
									</ul>
								</div>
								<div className="my-3">
									<h2 className="pb-1 mb-0 me-2 border-secondary">
										<span
											href="#"
											className="d-block text-decoration-none text-dark fs-4 title-head-name"
											title="Truyện hot"
										>
											Đánh giá
										</span>
									</h2>
									{/* biome-ignore lint/complexity/useOptionalChain: <explanation> */}
									{novelDetail &&
									novelDetail.reviews &&
									novelDetail.reviews?.length > 0 ? (
										<h2 className="pb-1 mb-0 me-2 border-secondar">
											Số lượt đánh giá: {novelDetail.reviews.length}
										</h2>
									) : (
										<h2 className="pb-1 mb-0 me-2 border-secondar">
											Không có đánh giá nào
										</h2>
									)}
									<ListGroup variant="flush">
										{userinfo && (
											<ListGroup.Item>
												{/* {errorMangaReview && (
													<Message variant="danger">{errorMangaReview}</Message>
												)}
												{loadingMangaReview && <Loader />} */}
												<Form>
													<Form.Group controlId="rating">
														<Form.Label>Xếp loại</Form.Label>
														<StarRating
															value={rating}
															onClick={handleRatingChange}
														/>
													</Form.Group>
													<Form.Group controlId="comment">
														<Form.Label>Nội dung đánh giá</Form.Label>
														<Form.Control
															as="textarea"
															rows={3}
															value={comment}
															onChange={(e) => setComment(e.target.value)}
														/>
													</Form.Group>

													<Button
														className="mt-2"
														type="button"
														variant="primary"
														onClick={submitHandler}
													>
														Đánh giá
													</Button>
												</Form>
												<h2 className="mt-2 text-xl font-bold text-center">
													Những đánh giá của độc giả
												</h2>
											</ListGroup.Item>
										)}

										{/* {novelDetail.reviews
											?.slice(0, displayedReviews)
											.map((review, index) => (
												<ListGroup.Item key={review._id}>
													<strong>{review.username}</strong>
													<div>
														{Array.from(
															{ length: review.rating },
															(_, index) => (
																// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
																<span key={index} className="star">
																	&#9733;
																</span>
															),
														)}
													</div>
													<p>{review.createdAt.substring(0, 10)}</p>
													<p>{review.comment}</p>
												</ListGroup.Item>
											))} */}
										{novelDetail.reviews
											?.slice(0, displayedReviews)
											.map((review, index) => (
												<ListGroup.Item key={review._id}>
													<div>
														{Array.from(
															{ length: review.rating },
															(_, index) => (
																// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
																<span key={index} className="star">
																	&#9733;
																</span>
															),
														)}
													</div>
													<div className="d-flex justify-content-between align-items-center">
														{" "}
														{/* Horizontal layout */}
														<strong>{review.username}</strong> {/* Username */}
														<div className="text-muted">
															{" "}
															{/* Muted text for date and year */}
															<span>Ngày đánh giá: </span>
															{review.createdAt
																.substring(0, 10)
																.split("-")
																.reverse()
																.join("/")}{" "}
															{/* Format date (YYYY-MM-DD to DD/MM/YYYY) */}
														</div>
													</div>
													<div>
														{/* ... rest of the review details (rating stars, etc.) */}
													</div>
													<p>{review.comment}</p>
												</ListGroup.Item>
											))}

										{novelDetail.reviews?.length > displayedReviews && (
											<ListGroup.Item>
												<Button
													variant="link"
													onClick={() =>
														setDisplayedReviews(novelDetail.reviews.length)
													}
												>
													Xem thêm ({novelDetail.reviews.length} đánh giá)
												</Button>
											</ListGroup.Item>
										)}
									</ListGroup>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
