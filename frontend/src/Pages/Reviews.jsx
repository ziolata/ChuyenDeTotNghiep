import React, {useState } from 'react'
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
export default function Reviews() {
  const [rating, setRating] = useState(0);
  const handleRatingChange = (value) => {
		setRating(value);
	};
  return (
    <>
        <div className="container">
        <div className="mb-2 head-title-global d-flex justify-content-between">
							<div className="col-6 col-md-4 col-lg-4 head-title-global__left d-flex align-items-center">
								<h2 className="pb-1 mb-0 me-2 border-bottom border-secondary">
									<a
										href="/"
										className=" d-block text-decoration-none text-dark fs-4 story-name"
										title="Truyện Hot"
									>
										Đánh giá website
									</a>
								</h2>
								<img
									src="http://api.noveltop.online/media/review.png"
									alt=""
									style={{ width: "50px", height: "50px" }}
								/>
							</div>
						</div>
  <div className="col-md-12">
    <div className="offer-dedicated-body-left">
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade"
          id="pills-order-online"
          role="tabpanel"
          aria-labelledby="pills-order-online-tab"
        >
          <div
            id="#menu"
            className="p-4 mb-4 bg-white rounded shadow-sm explore-outlets"
          >
            <h5 className="mb-4">Recommended</h5>
            <form className="mb-4 explore-outlets-search">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Search for dishes..."
                  className="form-control"
                />
                <div className="input-group-append">
                  <button type="button" className="btn btn-link">
                    <i className="icofont-search" />
                  </button>
                </div>
              </div>
            </form>
            <h6 className="mb-3">
              Most Popular{" "}
              <span className="badge badge-success">
                <i className="icofont-tags" /> 15% Off All Items{" "}
              </span>
            </h6>
            <div className="mb-3 owl-carousel owl-theme owl-carousel-five offers-interested-carousel owl-loaded owl-drag owl-hidden">
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transform: "translate3d(-682px, 0px, 0px)",
                    transition: "all 0s ease 0s",
                    width: 2183
                  }}
                >
                  <div className="owl-item cloned" style={{ width: "136.4px" }}>
                    <div className="item">
                      <div className="mall-category-item">
                        <a href="#">
                          <img className="img-fluid" src="img/list/2.png" />
                          <h6>Sandwiches</h6>
                          <small>8 ITEMS</small>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: "136.4px" }}>
                    <div className="item">
                      <div className="mall-category-item">
                        <a href="#">
                          <img className="img-fluid" src="img/list/3.png" />
                          <h6>Soups</h6>
                          <small>2 ITEMS</small>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: "136.4px" }}>
                    <div className="item">
                      <div className="mall-category-item">
                        <a href="#">
                          <img className="img-fluid" src="img/list/4.png" />
                          <h6>Pizzas</h6>
                          <small>56 ITEMS</small>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: "136.4px" }}>
                    <div className="item">
                      <div className="mall-category-item">
                        <a href="#">
                          <img className="img-fluid" src="img/list/5.png" />
                          <h6>Pastas</h6>
                          <small>10 ITEMS</small>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: "136.4px" }}>
                    <div className="item">
                      <div className="mall-category-item">
                        <a href="#">
                          <img className="img-fluid" src="img/list/6.png" />
                          <h6>Chinese</h6>
                          <small>25 ITEMS</small>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item active" style={{ width: "136.4px" }}>
                    <div className="item">
                      <div className="mall-category-item">
                        <a href="#">
                          <img className="img-fluid" src="img/list/1.png" />
                          <h6>Burgers</h6>
                          <small>5 ITEMS</small>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item active" style={{ width: "136.4px" }}>
                    <div className="item">
                      <div className="mall-category-item">
                        <a href="#">
                          <img className="img-fluid" src="img/list/2.png" />
                          <h6>Sandwiches</h6>
                          <small>8 ITEMS</small>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item active" style={{ width: "136.4px" }}>
                    <div className="item">
                      <div className="mall-category-item">
                        <a href="#">
                          <img className="img-fluid" src="img/list/3.png" />
                          <h6>Soups</h6>
                          <small>2 ITEMS</small>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item active" style={{ width: "136.4px" }}>
                    <div className="item">
                      <div className="mall-category-item">
                        <a href="#">
                          <img className="img-fluid" src="img/list/4.png" />
                          <h6>Pizzas</h6>
                          <small>56 ITEMS</small>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item active" style={{ width: "136.4px" }}>
                    <div className="item">
                      <div className="mall-category-item">
                        <a href="#">
                          <img className="img-fluid" src="img/list/5.png" />
                          <h6>Pastas</h6>
                          <small>10 ITEMS</small>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item" style={{ width: "136.4px" }}>
                    <div className="item">
                      <div className="mall-category-item">
                        <a href="#">
                          <img className="img-fluid" src="img/list/6.png" />
                          <h6>Chinese</h6>
                          <small>25 ITEMS</small>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: "136.4px" }}>
                    <div className="item">
                      <div className="mall-category-item">
                        <a href="#">
                          <img className="img-fluid" src="img/list/1.png" />
                          <h6>Burgers</h6>
                          <small>5 ITEMS</small>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: "136.4px" }}>
                    <div className="item">
                      <div className="mall-category-item">
                        <a href="#">
                          <img className="img-fluid" src="img/list/2.png" />
                          <h6>Sandwiches</h6>
                          <small>8 ITEMS</small>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: "136.4px" }}>
                    <div className="item">
                      <div className="mall-category-item">
                        <a href="#">
                          <img className="img-fluid" src="img/list/3.png" />
                          <h6>Soups</h6>
                          <small>2 ITEMS</small>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: "136.4px" }}>
                    <div className="item">
                      <div className="mall-category-item">
                        <a href="#">
                          <img className="img-fluid" src="img/list/4.png" />
                          <h6>Pizzas</h6>
                          <small>56 ITEMS</small>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item cloned" style={{ width: "136.4px" }}>
                    <div className="item">
                      <div className="mall-category-item">
                        <a href="#">
                          <img className="img-fluid" src="img/list/5.png" />
                          <h6>Pastas</h6>
                          <small>10 ITEMS</small>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-nav">
                <button type="button" role="presentation" className="owl-prev">
                  <i className="icofont-thin-left" />
                </button>
                <button type="button" role="presentation" className="owl-next">
                  <i className="icofont-thin-right" />
                </button>
              </div>
              <div className="owl-dots disabled" />
            </div>
          </div>
          <div className="row">
            <h5 className="mt-3 mb-4 col-md-12">Best Sellers</h5>
            <div className="mb-4 col-md-4 col-sm-6">
              <div className="overflow-hidden bg-white rounded shadow-sm list-card h-100 position-relative">
                <div className="list-card-image">
                  <div className="star position-absolute">
                    <span className="badge badge-success">
                      <i className="icofont-star" /> 3.1 (300+)
                    </span>
                  </div>
                  <div className="favourite-heart text-danger position-absolute">
                    <a href="#">
                      <i className="icofont-heart" />
                    </a>
                  </div>
                  <div className="member-plan position-absolute">
                    <span className="badge badge-dark">Promoted</span>
                  </div>
                  <a href="#">
                    <img src="img/list/7.png" className="img-fluid item-img" />
                  </a>
                </div>
                <div className="p-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1">
                      <a href="#" className="text-black">
                        Bite Me Sandwiches
                      </a>
                    </h6>
                    <p className="mb-2 text-gray">North Indian • Indian</p>
                    <p className="mb-0 text-gray time">
                      <a
                        className="pl-0 pr-0 text-black btn btn-link btn-sm"
                        href="#"
                      >
                        $550{" "}
                      </a>{" "}
                      <span className="badge badge-success">NEW</span>{" "}
                      <span className="float-right">
                        <a
                          className="btn btn-outline-secondary btn-sm"
                          href="#"
                        >
                          ADD
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4 col-md-4 col-sm-6">
              <div className="overflow-hidden bg-white rounded shadow-sm list-card h-100 position-relative">
                <div className="list-card-image">
                  <div className="star position-absolute">
                    <span className="badge badge-success">
                      <i className="icofont-star" /> 3.1 (300+)
                    </span>
                  </div>
                  <div className="favourite-heart text-danger position-absolute">
                    <a href="#">
                      <i className="icofont-heart" />
                    </a>
                  </div>
                  <div className="member-plan position-absolute">
                    <span className="badge badge-dark">Promoted</span>
                  </div>
                  <a href="#">
                    <img src="img/list/8.png" className="img-fluid item-img" />
                  </a>
                </div>
                <div className="p-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1">
                      <a href="#" className="text-black">
                        Famous Dave's Bar-B
                      </a>
                    </h6>
                    <p className="mb-2 text-gray">Hamburgers • Indian</p>
                    <p className="mb-0 text-gray time">
                      <a
                        className="pl-0 pr-0 text-black btn btn-link btn-sm"
                        href="#"
                      >
                        $250{" "}
                      </a>{" "}
                      <span className="badge badge-primary">NEW</span>{" "}
                      <span className="float-right">
                        <span className="count-number">
                          <button className="btn btn-outline-secondary btn-sm left dec">
                            {" "}
                            <i className="icofont-minus" />{" "}
                          </button>
                          <input
                            className="count-number-input"
                            type="text"
                            defaultValue={1}
                            readOnly=""
                          />
                          <button className="btn btn-outline-secondary btn-sm right inc">
                            {" "}
                            <i className="icofont-plus" />{" "}
                          </button>
                        </span>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4 col-md-4 col-sm-6">
              <div className="overflow-hidden bg-white rounded shadow-sm list-card h-100 position-relative">
                <div className="list-card-image">
                  <div className="star position-absolute">
                    <span className="badge badge-success">
                      <i className="icofont-star" /> 3.1 (300+)
                    </span>
                  </div>
                  <div className="favourite-heart text-danger position-absolute">
                    <a href="#">
                      <i className="icofont-heart" />
                    </a>
                  </div>
                  <div className="member-plan position-absolute">
                    <span className="badge badge-dark">Promoted</span>
                  </div>
                  <a href="#">
                    <img src="img/list/9.png" className="img-fluid item-img" />
                  </a>
                </div>
                <div className="p-3 position-relative">
                  <div className="list-card-body">
                    <h6 className="mb-1">
                      <a href="#" className="text-black">
                        Bite Me Sandwiches
                      </a>
                    </h6>
                    <p className="mb-2 text-gray">North Indian • Indian</p>
                    <p className="mb-0 text-gray time">
                      <a
                        className="pl-0 pr-0 text-black btn btn-link btn-sm"
                        href="#"
                      >
                        $250{" "}
                      </a>{" "}
                      <span className="badge badge-info">NEW</span>{" "}
                      <span className="float-right">
                        <a
                          className="btn btn-outline-secondary btn-sm"
                          href="#"
                        >
                          ADD
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <h5 className="mt-3 mb-4 col-md-12">
              Quick Bites <small className="h6 text-black-50">3 ITEMS</small>
            </h5>
            <div className="col-md-12">
              <div className="mb-4 bg-white border rounded shadow-sm">
                <div className="p-3 gold-members border-bottom">
                  <a
                    className="float-right btn btn-outline-secondary btn-sm"
                    href="#"
                  >
                    ADD
                  </a>
                  <div className="media">
                    <div className="mr-3">
                      <i className="icofont-ui-press text-danger food-item" />
                    </div>
                    <div className="media-body">
                      <h6 className="mb-1">Chicken Tikka Sub</h6>
                      <p className="mb-0 text-gray">$314 - 12" (30 cm)</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 gold-members border-bottom">
                  <span className="float-right count-number">
                    <button className="btn btn-outline-secondary btn-sm left dec">
                      {" "}
                      <i className="icofont-minus" />{" "}
                    </button>
                    <input
                      className="count-number-input"
                      type="text"
                      defaultValue={1}
                      readOnly=""
                    />
                    <button className="btn btn-outline-secondary btn-sm right inc">
                      {" "}
                      <i className="icofont-plus" />{" "}
                    </button>
                  </span>
                  <div className="media">
                    <div className="mr-3">
                      <i className="icofont-ui-press text-danger food-item" />
                    </div>
                    <div className="media-body">
                      <h6 className="mb-1">
                        Cheese corn Roll{" "}
                        <span className="badge badge-danger">BESTSELLER</span>
                      </h6>
                      <p className="mb-0 text-gray">$600</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 gold-members">
                  <span className="float-right count-number">
                    <button className="btn btn-outline-secondary btn-sm left dec">
                      {" "}
                      <i className="icofont-minus" />{" "}
                    </button>
                    <input
                      className="count-number-input"
                      type="text"
                      defaultValue={1}
                      readOnly=""
                    />
                    <button className="btn btn-outline-secondary btn-sm right inc">
                      {" "}
                      <i className="icofont-plus" />{" "}
                    </button>
                  </span>
                  <div className="media">
                    <div className="mr-3">
                      <i className="icofont-ui-press text-success food-item" />
                    </div>
                    <div className="media-body">
                      <h6 className="mb-1">
                        Cheese Spinach corn Roll{" "}
                        <span className="badge badge-success">Pure Veg</span>
                      </h6>
                      <p className="mb-0 text-gray">$600</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <h5 className="mt-3 mb-4 col-md-12">
              Starters <small className="h6 text-black-50">3 ITEMS</small>
            </h5>
            <div className="col-md-12">
              <div className="mb-4 bg-white border rounded shadow-sm">
                <div className="p-3 menu-list border-bottom">
                  <span className="float-right count-number">
                    <button className="btn btn-outline-secondary btn-sm left dec">
                      {" "}
                      <i className="icofont-minus" />{" "}
                    </button>
                    <input
                      className="count-number-input"
                      type="text"
                      defaultValue={1}
                      readOnly=""
                    />
                    <button className="btn btn-outline-secondary btn-sm right inc">
                      {" "}
                      <i className="icofont-plus" />{" "}
                    </button>
                  </span>
                  <div className="media">
                    <img
                      className="mr-3 rounded-pill"
                      src="img/5.jpg"
                      alt="Generic placeholder image"
                    />
                    <div className="media-body">
                      <h6 className="mb-1">Veg Spring Roll</h6>
                      <p className="mb-0 text-gray">$314 - 12" (30 cm)</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 menu-list border-bottom">
                  <span className="float-right count-number">
                    <button className="btn btn-outline-secondary btn-sm left dec">
                      {" "}
                      <i className="icofont-minus" />{" "}
                    </button>
                    <input
                      className="count-number-input"
                      type="text"
                      defaultValue={1}
                      readOnly=""
                    />
                    <button className="btn btn-outline-secondary btn-sm right inc">
                      {" "}
                      <i className="icofont-plus" />{" "}
                    </button>
                  </span>
                  <div className="media">
                    <img
                      className="mr-3 rounded-pill"
                      src="img/2.jpg"
                      alt="Generic placeholder image"
                    />
                    <div className="media-body">
                      <h6 className="mb-1">
                        Stuffed Mushroom{" "}
                        <span className="badge badge-danger">BESTSELLER</span>
                      </h6>
                      <p className="mb-0 text-gray">$600</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 menu-list">
                  <span className="float-right count-number">
                    <button className="btn btn-outline-secondary btn-sm left dec">
                      {" "}
                      <i className="icofont-minus" />{" "}
                    </button>
                    <input
                      className="count-number-input"
                      type="text"
                      defaultValue={1}
                      readOnly=""
                    />
                    <button className="btn btn-outline-secondary btn-sm right inc">
                      {" "}
                      <i className="icofont-plus" />{" "}
                    </button>
                  </span>
                  <div className="media">
                    <img
                      className="mr-3 rounded-pill"
                      src="img/3.jpg"
                      alt="Generic placeholder image"
                    />
                    <div className="media-body">
                      <h6 className="mb-1">
                        Honey Chilli Potato
                        <span className="badge badge-success">Pure Veg</span>
                      </h6>
                      <p className="mb-0 text-gray">$600</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <h5 className="mt-3 mb-4 col-md-12">
              Soups <small className="h6 text-black-50">8 ITEMS</small>
            </h5>
            <div className="col-md-12">
              <div className="bg-white border rounded shadow-sm">
                <div className="p-3 gold-members border-bottom">
                  <a
                    className="float-right btn btn-outline-secondary btn-sm"
                    href="#"
                  >
                    ADD
                  </a>
                  <div className="media">
                    <div className="mr-3">
                      <i className="icofont-ui-press text-danger food-item" />
                    </div>
                    <div className="media-body">
                      <h6 className="mb-1">Tomato Dhania Shorba</h6>
                      <p className="mb-0 text-gray">$314 - 12" (30 cm)</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 gold-members border-bottom">
                  <a
                    className="float-right btn btn-outline-secondary btn-sm"
                    href="#"
                  >
                    ADD
                  </a>
                  <div className="media">
                    <div className="mr-3">
                      <i className="icofont-ui-press text-danger food-item" />
                    </div>
                    <div className="media-body">
                      <h6 className="mb-1">Veg Manchow Soup</h6>
                      <p className="mb-0 text-gray">$600</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 gold-members border-bottom">
                  <span className="float-right count-number">
                    <button className="btn btn-outline-secondary btn-sm left dec">
                      {" "}
                      <i className="icofont-minus" />{" "}
                    </button>
                    <input
                      className="count-number-input"
                      type="text"
                      defaultValue={1}
                      readOnly=""
                    />
                    <button className="btn btn-outline-secondary btn-sm right inc">
                      {" "}
                      <i className="icofont-plus" />{" "}
                    </button>
                  </span>
                  <div className="media">
                    <div className="mr-3">
                      <i className="icofont-ui-press text-success food-item" />
                    </div>
                    <div className="media-body">
                      <h6 className="mb-1">Lemon Coriander Soup</h6>
                      <p className="mb-0 text-gray">$600</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 gold-members border-bottom">
                  <a
                    className="float-right btn btn-outline-secondary btn-sm"
                    href="#"
                  >
                    ADD
                  </a>
                  <div className="media">
                    <div className="mr-3">
                      <i className="icofont-ui-press text-danger food-item" />
                    </div>
                    <div className="media-body">
                      <h6 className="mb-1">Tomato Dhania Shorba</h6>
                      <p className="mb-0 text-gray">$314 - 12" (30 cm)</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 gold-members border-bottom">
                  <a
                    className="float-right btn btn-outline-secondary btn-sm"
                    href="#"
                  >
                    ADD
                  </a>
                  <div className="media">
                    <div className="mr-3">
                      <i className="icofont-ui-press text-danger food-item" />
                    </div>
                    <div className="media-body">
                      <h6 className="mb-1">Veg Manchow Soup</h6>
                      <p className="mb-0 text-gray">$600</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 gold-members">
                  <a
                    className="float-right btn btn-outline-secondary btn-sm"
                    href="#"
                  >
                    ADD
                  </a>
                  <div className="media">
                    <div className="mr-3">
                      <i className="icofont-ui-press text-success food-item" />
                    </div>
                    <div className="media-body">
                      <h6 className="mb-1">Lemon Coriander Soup</h6>
                      <p className="mb-0 text-gray">$600</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-gallery"
          role="tabpanel"
          aria-labelledby="pills-gallery-tab"
        >
          <div id="gallery" className="p-4 mb-4 bg-white rounded shadow-sm">
            <div className="restaurant-slider-main position-relative homepage-great-deals-carousel">
              <div className="owl-carousel owl-theme homepage-ad owl-loaded owl-drag owl-hidden">
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      transform: "translate3d(-1364px, 0px, 0px)",
                      transition: "all 0s ease 0s",
                      width: 8184
                    }}
                  >
                    <div className="owl-item cloned" style={{ width: 682 }}>
                      <div className="item">
                        <img className="img-fluid" src="img/gallery/1.png" />
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: 682 }}>
                      <div className="item">
                        <img className="img-fluid" src="img/gallery/2.png" />
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: 682 }}>
                      <div className="item">
                        <img className="img-fluid" src="img/gallery/3.png" />
                      </div>
                    </div>
                    <div className="owl-item active" style={{ width: 682 }}>
                      <div className="item">
                        <img className="img-fluid" src="img/gallery/1.png" />
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: 682 }}>
                      <div className="item">
                        <img className="img-fluid" src="img/gallery/2.png" />
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: 682 }}>
                      <div className="item">
                        <img className="img-fluid" src="img/gallery/3.png" />
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: 682 }}>
                      <div className="item">
                        <img className="img-fluid" src="img/gallery/1.png" />
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: 682 }}>
                      <div className="item">
                        <img className="img-fluid" src="img/gallery/2.png" />
                      </div>
                    </div>
                    <div className="owl-item" style={{ width: 682 }}>
                      <div className="item">
                        <img className="img-fluid" src="img/gallery/3.png" />
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: 682 }}>
                      <div className="item">
                        <img className="img-fluid" src="img/gallery/1.png" />
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: 682 }}>
                      <div className="item">
                        <img className="img-fluid" src="img/gallery/2.png" />
                      </div>
                    </div>
                    <div className="owl-item cloned" style={{ width: 682 }}>
                      <div className="item">
                        <img className="img-fluid" src="img/gallery/3.png" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-nav">
                  <button
                    type="button"
                    role="presentation"
                    className="owl-prev"
                  >
                    <i className="fa fa-chevron-left" />
                  </button>
                  <button
                    type="button"
                    role="presentation"
                    className="owl-next"
                  >
                    <i className="fa fa-chevron-right" />
                  </button>
                </div>
                <div className="owl-dots disabled" />
              </div>
              <div className="text-white position-absolute restaurant-slider-pics bg-dark">
                2 of 14 Photos
              </div>
              <div className="position-absolute restaurant-slider-view-all">
                <button type="button" className="bg-white btn btn-light">
                  See all Photos
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-restaurant-info"
          role="tabpanel"
          aria-labelledby="pills-restaurant-info-tab"
        >
          <div
            id="restaurant-info"
            className="p-4 mb-4 bg-white rounded shadow-sm"
          >
            <div className="float-right ml-5 address-map">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    width={300}
                    height={170}
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=9&ie=UTF8&iwloc=&output=embed"
                    frameBorder={0}
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                  />
                </div>
              </div>
            </div>
            <h5 className="mb-4">Restaurant Info</h5>
            <p className="mb-3">
              Jagjit Nagar, Near Railway Crossing,
              <br /> Near Model Town, Ludhiana, PUNJAB
            </p>
            <p className="mb-2 text-black">
              <i className="mr-2 icofont-phone-circle text-primary" /> +91
              01234-56789, +91 01234-56789
            </p>
            <p className="mb-2 text-black">
              <i className="mr-2 icofont-email text-primary" />{" "}
              iamosahan@gmail.com, osahaneat@gmail.com
            </p>
            <p className="mb-2 text-black">
              <i className="mr-2 icofont-clock-time text-primary" /> Today 11am
              – 5pm, 6pm – 11pm
              <span className="badge badge-success"> OPEN NOW </span>
            </p>
            <hr className="clearfix" />
            <p className="mb-0 text-black">
              You can also check the 3D view by using our menue map clicking
              here &nbsp;&nbsp;&nbsp;{" "}
              <a className="text-info font-weight-bold" href="#">
                Venue Map
              </a>
            </p>
            <hr className="clearfix" />
            <h5 className="mt-4 mb-4">More Info</h5>
            <p className="mb-3">
              Dal Makhani, Panneer Butter Masala, Kadhai Paneer, Raita, Veg
              Thali, Laccha Paratha, Butter Naan
            </p>
            <div className="mb-4 border-btn-main">
              <a className="mr-2 border-btn text-success" href="#">
                <i className="icofont-check-circled" /> Breakfast
              </a>
              <a className="mr-2 border-btn text-danger" href="#">
                <i className="icofont-close-circled" /> No Alcohol Available
              </a>
              <a className="mr-2 border-btn text-success" href="#">
                <i className="icofont-check-circled" /> Vegetarian Only
              </a>
              <a className="mr-2 border-btn text-success" href="#">
                <i className="icofont-check-circled" /> Indoor Seating
              </a>
              <a className="mr-2 border-btn text-success" href="#">
                <i className="icofont-check-circled" /> Breakfast
              </a>
              <a className="mr-2 border-btn text-danger" href="#">
                <i className="icofont-close-circled" /> No Alcohol Available
              </a>
              <a className="mr-2 border-btn text-success" href="#">
                <i className="icofont-check-circled" /> Vegetarian Only
              </a>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="pills-book"
          role="tabpanel"
          aria-labelledby="pills-book-tab"
        >
          <div
            id="book-a-table"
            className="p-4 mb-5 bg-white rounded shadow-sm rating-review-select-page"
          >
            <h5 className="mb-4">Book A Table</h5>
            <form>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Full Name"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Email address"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Mobile number</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Mobile number"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label>Date And Time</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Date And Time"
                    />
                  </div>
                </div>
              </div>
              <div className="text-right form-group">
                <button className="btn btn-primary" type="button">
                  {" "}
                  Submit{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          className="tab-pane fade active show"
          id="pills-reviews"
          role="tabpanel"
          aria-labelledby="pills-reviews-tab"
        >
          
          <div className="clearfix p-4 mb-4 bg-white rounded shadow-sm graph-star-rating">
         
            <div className="graph-star-rating-header">
              <div className="star-rating">
                <a href="#">
                  <i className="icofont-ui-rating active" />
                </a>
                <a href="#">
                  <i className="icofont-ui-rating active" />
                </a>
                <a href="#">
                  <i className="icofont-ui-rating active" />
                </a>
                <a href="#">
                  <i className="icofont-ui-rating active" />
                </a>
                <a href="#">
                  <i className="icofont-ui-rating" />
                </a>{" "}
                <b className="ml-2 text-black"> Số lượt đánh giá: 1</b>
              </div>
              <p className="mt-2 mb-4 text-black">Đánh giá 5 / 5 sao</p>
            </div>
            <div className="graph-star-rating-body">
              <div className="rating-list">
                <div className="text-black rating-list-left"> 
                <i className="fa fa-star star" />
                <i className="fa fa-star star" />
                <i className="fa fa-star star" />
                <i className="fa fa-star star" />
                <i className="fa fa-star star" />

                </div>
                <div className="rating-list-center">
                  <div className="progress">
                    <div
                      style={{ width: "100%" }}
                      aria-valuemax={5}
                      aria-valuemin={0}
                      aria-valuenow={5}
                      role="progressbar"
                      className="progress-bar bg-primary"
                    >
                      <span className="sr-only">80% Complete (danger)</span>
                    </div>
                  </div>
                </div>
                <div className="text-black rating-list-right">100%</div>
              </div>
              <div className="rating-list">
                <div className="text-black rating-list-left">
                <i className="fa fa-star star" />
                <i className="fa fa-star star" />
                <i className="fa fa-star star" />
                <i className="fa fa-star star" />
                
                </div>
                <div className="rating-list-center">
                  <div className="progress">
                    <div
                      style={{ width: "0%" }}
                      aria-valuemax={5}
                      aria-valuemin={0}
                      aria-valuenow={5}
                      role="progressbar"
                      className="progress-bar bg-primary"
                    >
                      <span className="sr-only">80% Complete (danger)</span>
                    </div>
                  </div>
                </div>
                <div className="text-black rating-list-right">0%</div>
              </div>
              <div className="rating-list">
                <div className="text-black rating-list-left">
                <i className="fa fa-star star" />
                <i className="fa fa-star star" />
                <i className="fa fa-star star" />
                
                </div>
                <div className="rating-list-center">
                  <div className="progress">
                    <div
                      style={{ width: "0%" }}
                      aria-valuemax={5}
                      aria-valuemin={0}
                      aria-valuenow={5}
                      role="progressbar"
                      className="progress-bar bg-primary"
                    >
                      <span className="sr-only">80% Complete (danger)</span>
                    </div>
                  </div>
                </div>
                <div className="text-black rating-list-right">0%</div>
              </div>
              <div className="rating-list">
                <div className="text-black rating-list-left">
                <i className="fa fa-star star" />
                <i className="fa fa-star star" />
              
                </div>
                <div className="rating-list-center">
                  <div className="progress">
                    <div
                      style={{ width: "0%" }}
                      aria-valuemax={5}
                      aria-valuemin={0}
                      aria-valuenow={5}
                      role="progressbar"
                      className="progress-bar bg-primary"
                    >
                      <span className="sr-only">0% Complete (danger)</span>
                    </div>
                  </div>
                </div>
                <div className="text-black rating-list-right">0%</div>
              </div>
              <div className="rating-list">
                <div className="text-black rating-list-left">
                <i className="fa fa-star star" />
                </div>
                <div className="rating-list-center">
                  <div className="progress">
                    <div
                      style={{ width: "0%" }}
                      aria-valuemax={5}
                      aria-valuemin={0}
                      aria-valuenow={5}
                      role="progressbar"
                      className="progress-bar bg-primary"
                    >
                      <span className="sr-only">80% Complete (danger)</span>
                    </div>
                  </div>
                </div>
                <div className="text-black rating-list-right">0%</div>
              </div>
            </div>
            <div className="p-4 mb-4 bg-white rounded shadow-sm restaurant-detailed-ratings-and-reviews">
            <a href="#" className="float-right btn btn-outline-primary btn-sm">
              Top Rated
            </a>
            <h5 className="mb-1">Danh sách đánh giá</h5>
            <div className="pt-4 pb-4 reviews-members">
            <i className="fa fa-star star" />
            <i className="fa fa-star star" />
            <i className="fa fa-star star" />
            <i className="fa fa-star star" />
            <i className="fa fa-star star" />
              <div className="media">
                <a href="#">
                  <img
                    alt="Generic placeholder image"
                    src="http://bootdey.com/img/Content/avatar/avatar1.png"
                    className="mr-3 rounded-pill"
                  />
                </a>
                <div className="media-body">
                  <div className="reviews-members-header">
                    <span className="float-right star-rating">
                      <a href="#">
                        <i className="icofont-ui-rating active" />
                      </a>
                      <a href="#">
                        <i className="icofont-ui-rating active" />
                      </a>
                      <a href="#">
                        <i className="icofont-ui-rating active" />
                      </a>
                      <a href="#">
                        <i className="icofont-ui-rating active" />
                      </a>
                      <a href="#">
                        <i className="icofont-ui-rating" />
                      </a>
                    </span>
                    <h6 className="mb-1">
                      <a className="text-black" href="#">
                        Admin
                      </a>
                    </h6>
                    <p className="text-gray">8/5/2024</p>
                  </div>
                  <div className="reviews-members-body">
                    <p>
                      Tuyệt vời
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>
           
            <a
              className="mt-4 text-center w-100 d-block font-weight-bold"
              href="#"
            >
              See All Reviews
            </a>
            
          </div>    
          
            <p className="mb-2">Số sao đánh giá</p>
            <div className="mb-4">
              <span className="star-rating">
              <StarRating
															value={rating}
															onClick={handleRatingChange}
														/>
              </span>
            </div>
            <form>
              <div className="form-group">
                <label>Lời đánh giá</label>
                <textarea className="form-control" defaultValue={""} />
              </div>
              <div className="form-group">
                <button className="mt-1 btn btn-primary btn-sm" type="button">
                  {" "}
                  Đánh giá{" "}
                </button>
              </div>
            </form>
          </div>
          
          
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  )
}
