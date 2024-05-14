import React, { useContext, useState } from "react";
import AuthContext from "../../hooks/AuthContext";
import axios from "axios";
import Cookies from "js-cookie";

export default function Profile() {
	const csrftoken = Cookies.get("csrftoken");

	const { userinfo, authTokens } = useContext(AuthContext);
	const [UserInfo, setUserInfo] = useState({
		id: "",
		fullname: "",
		phone_number: "",
		address: "",
		gender: "",
		birth: "",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserInfo({ ...UserInfo, [name]: value });
	};
	const handlePatchUser = async () => {
		try {
			const formData = new FormData();
			formData.append("fullname", UserInfo.fullname);
			formData.append("address", UserInfo.address);
			formData.append("birth", UserInfo.birth);
			formData.append("phone_number", UserInfo.phone_number);
			formData.append("gender", UserInfo.gender);

			await axios.patch(
				`http://api.noveltop.online/api/auth/user/${userinfo.id}/`,
				formData,
				{
					headers: {
						// "Content-Type": "multipart/form-data",
						"X-CSRFToken": csrftoken,
						Authorization: `Bearer ${authTokens.access}`,
					},
				},
				alert("Cập nhật thông tin thành công"),
			);
		} catch (error) {
			console.error("Lỗi:", error);
		}
	};
	return (
		<>
			<div className="items-center h-screen px-3 py-5 bg-white">
				<div className="bg-white">
					<h4 className="flex justify-center p-3 text-[22px]">
						Cập nhật thông tin cá nhân
					</h4>
					<div className="flex flex-col grid-cols-12 gap-4 p-4 md:grid md:items-center">
						<div className="relative col-span-6">
							<span className="absolute bg-white left-3 -top-[12px] px-2">
								Họ và tên
							</span>
							<input
								type="text"
								placeholder="Họ và tên"
								className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
								required
								defaultValue={userinfo.fullname}
								name="fullname"
								onChange={handleChange}
							/>
						</div>
						<div className="relative col-span-6">
							<span className="absolute bg-white left-3 -top-[12px] px-2">
								Địa chỉ
							</span>
							<input
								type="text"
								placeholder="Địa chỉ"
								className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
								defaultValue={userinfo.address}
								name="address"
								onChange={handleChange}
							/>
						</div>
						<div className="relative col-span-6">
							<span className="absolute bg-white left-3 -top-[12px] px-2">
								Số điện thoại
							</span>
							<input
								type="text"
								placeholder="Số điện thoại"
								className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
								defaultValue={userinfo.phone_number}
								name="phone_number"
								onChange={handleChange}
							/>
						</div>
						<div className="relative col-span-6">
							<span className="absolute bg-white left-3 -top-[12px] px-2">
								Ngày sinh
							</span>
							<input
								type="date"
								placeholder="Ngày sinh"
								className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
								defaultValue={userinfo.birth}
								name="birth"
								onChange={handleChange}
							/>
						</div>
						<div className="relative col-span-6">
							<span className="absolute bg-white left-3 -top-[12px] px-2">
								Giới tính
							</span>
							<select
								className="form-control w-300 addrt"
								id="roomTypeId"
								required
								style={{ width: 300 }}
								defaultValue={userinfo.gender}
								name="gender"
								onChange={handleChange}
							>
								<option value="">Giới tính</option>

								<option value="male">Nam</option>
								<option value="female">Nữ</option>
							</select>
						</div>
						<div className="relative col-span-6">
							<span className="absolute bg-white left-3 -top-[12px] px-2">
								Username
							</span>
							<input
								type="text"
								className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
								disabled
								value={userinfo.username}
							/>
						</div>
						<div className="relative col-span-6">
							<span className="absolute bg-white left-3 -top-[12px] px-2">
								Email
							</span>
							<input
								type="text"
								className="text-[13px] h-12 text-gray-700 w-full border-2 px-2 rounded-sm"
								disabled
								value={userinfo.email}
							/>
						</div>
					</div>
					<div className="px-4 py-2 text-right">
						<button
							className="h-10 w-32 rounded-sm shadow-md text-white text-[16px] hover:bg-green-700 bg-green-600"
							type="submit"
							onClick={handlePatchUser}
						>
							Cập nhật
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
