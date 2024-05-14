import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Search() {
	const [searchKey, setSearchKey] = useState("");
	const navigate = useNavigate();

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

	return (
		<div className="d-flex">
			<form
				className="p-2 input-group input-group-sm"
				style={{
					width: "300px",
					height: "40px",
				}}
				onSubmit={handleSearchSubmit}
			>
				<input
					type="search"
					className="form-control"
					placeholder="Nhập từ khóa cần tìm kiếm..."
					aria-label="Search"
					style={{ width: "160px" }}
					value={searchKey}
					onChange={handleInputChange}
				/>
				<button
					className="bg-white btn btn-outline-secondary btn-sm"
					type="submit"
					style={{ width: "40px" }}
				>
					<i className="fa-solid fa-magnifying-glass" />
				</button>
			</form>
		</div>
	);
}
