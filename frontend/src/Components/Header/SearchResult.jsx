import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getGenres, getSearch, getSearchGenre } from "../../utils/API";
import { useNavigate } from "react-router-dom";

const SearchResult = () => {
	const navigate = useNavigate();
	const [filter, setFilter] = useState([]);
	const [isFiltered, setIsFiltered] = useState(false);
	const [keyFilter, setKeyFilter] = useState("");
	const [genres, setGenres] = useState([]);
	const [searchResults, setSearchResults] = useState([]);
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const searchQuery = queryParams.get("q");
	const [searchKey, setSearchKey] = useState("");
	const handleSearchSubmit = (event) => {
		event.preventDefault(); // Ngăn chặn hành vi mặc định của form
		if (searchKey.trim() !== "") {
			// Chuyển hướng đến trang kết quả tìm kiếm với tham số truyền vào là từ khóa tìm kiếm
			navigate(`/search?q=${encodeURIComponent(searchKey)}`);
		}
	};

	const handleInputChange = (event) => {
		setSearchKey(event.target.value);
	};
	useEffect(() => {
		const fetchSearchResults = async () => {
			getSearch(setSearchResults, searchQuery);
		};

		if (searchQuery) {
			fetchSearchResults();
		}
	}, [searchQuery]);
	const handleCheckboxChange = (event) => {
		const selectedGenre = event.target.value;
		if (event.target.checked) {
			setKeyFilter(selectedGenre);
			setIsFiltered(true);
		} else {
			setKeyFilter("");
			setIsFiltered(false);
		}
	};

	useEffect(() => {
		getSearchGenre(setFilter, keyFilter);
	}, [keyFilter]);
	useEffect(() => {
		getGenres(setGenres);
	}, []);
	console.log(filter);
	return (
		<>
			<div className="container">
				<div className="row">
					{/* BEGIN SEARCH RESULT */}
					<div className="col-md-12">
						<div className="grid search">
							<div className="grid-body">
								<div className="row">
									{/* BEGIN FILTERS */}
									<div className="col-md-3">
										<h2 className="grid-title">
											<i className="fa fa-filter" /> Tìm kiếm
										</h2>
										<hr />
										{/* BEGIN FILTER BY CATEGORY */}
										<h4>Theo Thể Loại</h4>
										{genres.map((item) => (
											<div className="checkbox" key={item.id}>
												<label>
													<input
														type="checkbox"
														className="icheck"
														name=""
														value={item.name}
														onChange={handleCheckboxChange}
													/>{" "}
													{item.name}
												</label>
											</div>
										))}

										{/* END FILTER BY CATEGORY */}
										<div className="padding" />
										{/* BEGIN FILTER BY DATE */}
										<input type="hidden" id="dtp_input2" defaultValue="" />
										{/* END FILTER BY DATE */}
										<div className="padding" />
										{/* BEGIN FILTER BY PRICE */}

										<div className="slider-primary">
											<div
												className="slider slider-horizontal"
												style={{ width: 152 }}
											>
												<div className="slider-track">
													<div
														className="slider-selection"
														style={{ left: "30%", width: "50%" }}
													/>
													<div
														className="slider-handle round"
														style={{ left: "30%" }}
													/>
													<div
														className="slider-handle round"
														style={{ left: "80%" }}
													/>
												</div>
												<div
													className="tooltip top hide"
													style={{ top: "-30px", left: "50.1px" }}
												>
													<div className="tooltip-arrow" />
													<div className="tooltip-inner">300 : 800</div>
												</div>
												<input
													type="text"
													className="slider"
													defaultValue=""
													data-slider-min={0}
													data-slider-max={1000}
													data-slider-step={1}
													data-slider-value="[300,800]"
													data-slider-tooltip="hide"
												/>
											</div>
										</div>
										{/* END FILTER BY PRICE */}
									</div>
									{/* END FILTERS */}
									{/* BEGIN RESULT */}
									<div className="col-md-9">
										<h2>
											<i className="fa fa-file-o" /> Kết quả tìm kiếm
										</h2>
										<hr />
										{/* BEGIN SEARCH INPUT */}
										<form className="input-group" onSubmit={handleSearchSubmit}>
											<input
												type="text"
												className="form-control"
												defaultValue={searchQuery}
												value={searchKey}
												onChange={handleInputChange}
											/>
											<span className="input-group-btn">
												<button className="btn btn-primary" type="submit">
													<i className="fa fa-search" />
												</button>
											</span>
										</form>
										{/* END SEARCH INPUT */}
										<p>Tất cả kết quả tìm kiếm bằng từ khóa "{searchQuery}"</p>
										<div className="padding" />
										<div className="row">
											{/* BEGIN ORDER RESULT */}
											<div className="col-sm-6">
												<div className="btn-group">
													
													<ul className="dropdown-menu" role="menu">
														<li>
															<a href="/">Name</a>
														</li>
														<li>
															<a href="/">Date</a>
														</li>
														<li>
															<a href="/">View</a>
														</li>
														<li>
															<a href="/">Rating</a>
														</li>
													</ul>
												</div>
											</div>
											{/* END ORDER RESULT */}
											<div className="text-right col-md-6">
												<div className="btn-group">
													<button
														type="button"
														className="btn btn-default active"
													>
														<i className="fa fa-list" />
													</button>
													<button type="button" className="btn btn-default">
														<i className="fa fa-th" />
													</button>
												</div>
											</div>
										</div>
										{/* BEGIN TABLE RESULT */}
										<div className="table-responsive">
											<table className="table table-hover">
												<tbody>
													{isFiltered
														? filter.novels.map((result) => (
																<tr key={result.id}>
																	<td className="image">
																		<a href={`/novel/${result.id}`}>
																			<img
																				src={`http://127.0.0.1:8000/${result.image}`}
																				alt=""
																			/>
																		</a>
																	</td>
																	<td className="product">
																		<a href={`/novel/${result.id}`}>
																			{result.name}
																		</a>
																		<br />
																		{result.genres.map((genre)=>(
																			<p>{genre.name}</p>
																		))}
																	</td>
																	<td className="text-right rate">
																		<span>
																		{Array.from({
														length: Math.floor(result.rating),
													}).map((_, index) => (
														// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
														<i className="fa fa-star star" />
													))}
													{result.rating % 1 >= 0.5 &&
														result.rating % 1 < 0.9 && (
															<i className="fa fa-star-half-o star" />
														)}
																		</span>
																	</td>
																	<td className="text-right price">
																		Tác giả: {result.author}
																	</td>
																</tr>
															))
														: searchResults.map((result) => (
																<tr key={result.id}>
																	<td className="image">
																		<a href={`/novel/${result.id}`}>
																			<img src={result.image} alt="" />
																		</a>
																	</td>
																	<td className="product">
																		<a href={`/novel/${result.id}`}>
																			{result.name}
																		</a>
																		<br />
																		{result.genres.map((genre)=>(
																			<span>{genre.name}, </span>
																		))}
																	</td>
																	<td className="text-right rate">
																		<span>
																		{Array.from({
														length: Math.floor(result.rating),
													}).map((_, index) => (
														// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
														<i className="fa fa-star star" />
													))}
													{result.rating % 1 >= 0.5 &&
														result.rating % 1 < 0.9 && (
															<i className="fa fa-star-half-o star" />
														)}
																		</span>
																	</td>
																	<td className="text-right price">
																		Tác giả: {result.author}
																	</td>
																</tr>
															))}
												</tbody>
											</table>
										</div>
									</div>
									{/* END RESULT */}
								</div>
							</div>
						</div>
					</div>
					{/* END SEARCH RESULT */}
				</div>
			</div>
		</>
	);
};

export default SearchResult;
