import React, { useContext, useEffect, useState } from 'react'
import { getHistoryNovel } from '../utils/API';
import AuthContext from '../hooks/AuthContext';

export default function History() {
    const { authTokens } = useContext(AuthContext);
    const [novel, setNovel] = useState([]);
    const [page, setPage] = useState(1);
    const handlePageChange = (newPage) => {
		setPage(newPage);
	};
    useEffect(() => {
		getHistoryNovel(setNovel,authTokens);
	
	}, [authTokens]);
    const [totalPages, setTotalPages] = useState(1);
    const paginationItems = [];
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
  return (
    <>
        <div className="mt-2 mb-3 section-stories-hot">
				<div className="container">
					
					
					<div className="row">
						<div className="mb-2 head-title-global d-flex justify-content-between">
							<div className="text-center col-6 col-md-4 col-lg-12 head-title-global__left d-flex justify-content-center">
								<h2 className="pb-1 mb-0 text-center me-2 border-secondary">
									<a
										href="/"
										className=" d-block text-decoration-none text-dark fs-4 story-name"
										title="Truyện Hot"
									>
										Lịch sử tiểu thuyết đã đọc
									</a>
								</h2>
								{/* <img
									src="http://api.noveltop.online/media/new.png"
									alt=""
									style={{ width: "50px", height: "50px" }}
								/> */}
							</div>
						</div>
					</div>
					<div className="row">
						<div className="p-4 bg-white col-12">
							<div className="section-stories-hot__list ">
								{novel?.map(
									(item) =>
										// biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
										 (
											<div className="story-item" key={item.id}>
												<a
													href={`/novel/${item.novel}`}
													className="d-block text-decoration-none"
												>
													<div className="story-item__image">
														<img
															src={`http://api.noveltop.online/${item.novel_image}`}
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
													<h1 className='text-center story-name'>Bạn đang đọc chương {item.last_read_chapter}</h1>
												</a>
											</div>
										),
								)}
							</div>
                            <div
									className="pagination"
									style={{ justifyContent: "center" }}
								>
									<ul>
										{/* {paginationItems} */}

										
									</ul>
								</div>
						</div>
					</div>
				</div>
			</div>
		</>
  )
}
