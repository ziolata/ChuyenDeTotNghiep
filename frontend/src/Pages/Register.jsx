import React, { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../hooks/AuthContext";

function Signup() {
	const { user } = useContext(AuthContext);
	const [info, setInfo] = useState({
		email: "",
		password: "",
		username: "",
		address: "",
		fullname: "",
		phone_number: "",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setInfo({ ...info, [name]: value });
	};
	const handleSignup = async () => {
		try {
			const response = await axios.post(
				"http://api.noveltop.online/api/auth/signup/",
				{
					email: info.email,
					username: info.username,
					password: info.password,
				},
			);
			if (response.status === 201) {
				alert("Bạn đã đăng ký thành công");
				window.location.href = "/login";
			} else {
				alert("Đăng ký thất bại vui lòng kiểm tra lại thông tin đăng ký");
			}
		} catch (error) {
			console.error("Lỗi:", error);
		}
	};
	return (
		<>
			{/* {user ? (
				// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
				(window.location.href = "/")
			) : ( */}
				{/* <section className="vh-100" style={{ backgroundColor: "#eee" }}>
					<div className="container h-100">
						<div className="row d-flex justify-content-center align-items-center h-100">
							<div className="col-lg-12 col-xl-11">
								<div className="text-black card" style={{ borderRadius: 25 }}>
									<div className="card-body p-md-5">
										<div className="row justify-content-center">
											<div className="order-2 col-md-10 col-lg-6 col-xl-5 order-lg-1">
												<p className="mx-1 mt-4 mb-5 text-center h1 fw-bold mx-md-4">
													Signup
												</p>
												<form className="mx-1 mx-md-4">
													<div className="mb-3 form-group d-flex justify-content-center">
														<div className="col-md-3">
															<label htmlFor="name" className="mr-2">
																Fullname
															</label>
														</div>
														<div className="col-md-9">
															<input
																type="text"
																className="form-control w-300 addrt"
																id="name"
																name="fullname"
																placeholder="Fullname"
																required
																style={{ width: 300 }}
																onChange={handleChange}
															/>
														</div>
													</div>
													<div className="mb-3 form-group d-flex justify-content-center">
														<div className="col-md-3">
															<label htmlFor="Username" className="mr-2">
																Username
															</label>
														</div>
														<div className="col-md-9">
															<input
																type="text"
																className="form-control w-300 addrt"
																id="Username"
																name="username"
																placeholder="Username"
																style={{ width: 300 }}
																onChange={handleChange}
															/>
														</div>
													</div>
													<div className="mb-3 form-group d-flex justify-content-center">
														<div className="col-md-3">
															<label htmlFor="email" className="mr-2">
																Email
															</label>
														</div>
														<div className="col-md-9">
															<input
																type="text"
																className="form-control w-300 addrt"
																id="email"
																placeholder="Email"
																name="email"
																required
																style={{ width: 300 }}
																onChange={handleChange}
															/>
														</div>
													</div>
													<div className="mb-3 form-group d-flex justify-content-center">
														<div className="col-md-3">
															<label htmlFor="password" className="mr-2">
																Password
															</label>
														</div>
														<div className="col-md-9">
															<input
																type="password"
																className="form-control w-300 addrt"
																id="password"
																placeholder="Password"
																name="password"
																style={{ width: 300 }}
																onChange={handleChange}
															/>
														</div>
													</div>
													<div className="mb-3 form-group d-flex justify-content-center">
														<div className="col-md-3">
															<label htmlFor="address" className="mr-2">
																Address:
															</label>
														</div>
														<div className="col-md-9">
															<input
																type="text"
																className="form-control w-300 addrt"
																id="address"
																name="address"
																placeholder="Address"
																required
																style={{ width: 300 }}
																onChange={handleChange}
															/>
														</div>
													</div>

													<div className="mb-3 form-group d-flex justify-content-center">
														<div className="col-md-3">
															<label htmlFor="phone" className="mr-2">
																Phone
															</label>
														</div>
														<div className="col-md-9">
															<input
																type="number"
																className="form-control w-300 addrt"
																id="phone"
																placeholder="Phone number"
																required
																name="phone_number"
																style={{ width: 300 }}
																onChange={handleChange}
															/>
														</div>
													</div>
													<button
														className="mx-auto mt-5 btn btn-dark d-block"
														type="button"
														onClick={handleSignup}
													>
														Signup
													</button>
												</form>
												<a href="/login" className="nav-link">
													Click here if you already have an account
												</a>
											</div>
											<div className="order-1 col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-lg-2">
												<img
													src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
													className="img-fluid"
													alt="Illustration of a registration form"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section> */}
			{/* )} */}
			<div className="flex flex-col justify-center min-h-screen py-12 bg-gray-50 sm:px-6 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-md">
    <img
      className="w-auto h-10 mx-auto"
      src="https://www.svgrepo.com/show/301692/login.svg"
      alt="Workflow"
    />
    <h2 className="mt-6 text-3xl font-extrabold leading-9 text-center text-gray-900">
      Đăng ký
    </h2>
    <p className="mt-2 text-sm leading-5 text-center text-gray-500 max-w">
      
      <a
        href="#"
        className="font-medium text-blue-600 transition duration-150 ease-in-out hover:text-blue-500 focus:outline-none focus:underline"
      >
        Đăng nhập nếu đã có tài khoản
      </a>
    </p>
  </div>
  <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
      <form method="POST" action="#">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            Username
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              id="name"
              name="name"
              placeholder="username"
              type="text"
              required=""
              defaultValue=""
              className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
            />
            <div className="absolute inset-y-0 right-0 flex items-center hidden pr-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
       
        <div className="mt-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            Email
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              id="email"
              name="email"
              placeholder="user@example.com"
              type="email"
              required=""
              defaultValue=""
              className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5 "
            />
            <div className="absolute inset-y-0 right-0 flex items-center hidden pr-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            Password
          </label>
          <div className="mt-1 rounded-md shadow-sm">
            <input
			  placeholder="Mật khẩu"
              id="password"
              name="password"
              type="password"
              required=""
              className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
            />
          </div>
        </div>
        <div className="mt-6">
          <label
            htmlFor="password_confirmation"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            Nhập lại mật khẩu Password
          </label>
          <div className="mt-1 rounded-md shadow-sm">
            <input
			placeholder="Nhập lại mật khẩu"
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              required=""
              className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
            />
          </div>
        </div>
        <div className="mt-6">
          <span className="block w-full rounded-md shadow-sm">
            <button
              type="submit"
              className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out bg-blue-600 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
            >
              Đăng ký
            </button>
          </span>
        </div>
      </form>
    </div>
  </div>
</div>

		</>
	);
}
export default Signup;
