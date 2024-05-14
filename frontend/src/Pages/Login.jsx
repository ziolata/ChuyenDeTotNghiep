import React, { useContext } from "react";
import AuthContext from "../hooks/AuthContext";
import { useNavigate } from "react-router-dom";
export default function Login() {
	const { loginUser, user } = useContext(AuthContext);
	const navigate = useNavigate();
	return (
		<>
			{user ? (
				navigate("/")
			) : (
				<>
					{/* Login 1 - Bootstrap Brain Component */}
					{/* <div className="py-3 bg-light py-md-5">
						<div className="container">
							<div className="row justify-content-md-center">
								<div className="col-12 col-md-11 col-lg-8 col-xl-7 col-xxl-6">
									<div className="p-4 bg-white rounded shadow-sm p-md-5">
										<div className="row">
											<div className="col-12">
												<div className="mb-5 text-center">
													<h1>Login</h1>
												</div>
											</div>
										</div>
										<form onSubmit={loginUser}>
											<div className="overflow-hidden row gy-3 gy-md-4">
												<div className="col-12">
													<label htmlFor="email" className="form-label">
														Email <span className="text-danger">*</span>
													</label>
													<div className="input-group">
														<span className="input-group-text">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width={16}
																height={16}
																fill="currentColor"
																className="bi bi-envelope"
																viewBox="0 0 16 16"
															>
																<title>icon</title>
																<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
															</svg>
														</span>
														<input
															type="email"
															className="form-control"
															name="email"
															id="email"
														/>
													</div>
												</div>
												<div className="col-12">
													<label htmlFor="password" className="form-label">
														Password <span className="text-danger">*</span>
													</label>
													<div className="input-group">
														<span className="input-group-text">
															<svg
																xmlns="http://www.w3.org/2000/svg"
																width={16}
																height={16}
																fill="currentColor"
																className="bi bi-key"
																viewBox="0 0 16 16"
															>
																<title>icon</title>
																<path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
																<path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
															</svg>
														</span>
														<input
															type="password"
															className="form-control"
															name="password"
															id="password"
														/>
													</div>
												</div>
												<div className="col-12">
													<div className="d-grid">
														<button
															className="btn btn-primary btn-lg"
															type="submit"
														>
															Login
														</button>
													</div>
												</div>
											</div>
										</form>
										<div className="row">
											<div className="col-12">
												<hr className="mt-5 mb-4 border-secondary-subtle" />
												<div className="gap-2 text-center d-flex gap-md-4 flex-column flex-md-row justify-content-md-center">
													<a
														href="/signup"
														className="link-secondary text-decoration-none"
													>
														Create a new account
													</a>
													<a
														href="/forgotpassword"
														className="link-secondary text-decoration-none"
													>
														Fogort password ?
													</a>
												</div>
												<div className="gap-2 text-center d-flex gap-md-4 flex-column flex-md-row justify-content-md-center">
													<a
														href="/"
														className="link-secondary text-decoration-none"
													>
														Back to home page
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div> */}
					<div className="flex flex-col justify-center min-h-screen px-6 py-12 bg-gray-50 sm:px-6 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-md">
    <img
      className="w-auto h-10 mx-auto"
      src="https://www.svgrepo.com/show/301692/login.svg"
      alt="Workflow"
    />
    <h2 className="mt-6 text-3xl font-extrabold leading-9 text-center text-gray-900">
      Đăng nhập
    </h2>
    <p className="mt-2 text-sm leading-5 text-center text-blue-500 max-w">
     
      <a
        href="/register"
        className="font-medium text-blue-500 transition duration-150 ease-in-out hover:text-blue-500 focus:outline-none focus:underline"
      >
       Tạo tại khoản mới
      </a>
    </p>
  </div>
  <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
      <form>
        <div>
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
              placeholder="email"
              type="email"
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
              id="password"
			  placeholder="Mật khẩu"
              name="password"
              type="password"
              required=""
              className="block w-full px-3 py-2 placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
            />
          </div>
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center">
            <input
              id="remember_me"
              name="remember"
              type="checkbox"
              defaultValue={1}
              className="w-4 h-4 text-indigo-600 transition duration-150 ease-in-out form-checkbox"
            />
            <label
              htmlFor="remember_me"
              className="block ml-2 text-sm leading-5 text-gray-900"
            >
              Ghi nhớ
            </label>
          </div>
          <div className="text-sm leading-5">
            <a
              href="#"
              className="font-medium text-blue-500 transition duration-150 ease-in-out hover:text-blue-500 focus:outline-none focus:underline"
            >
              Quên mật khẩu?
            </a>
          </div>
        </div>
        <div className="mt-6">
          <span className="block w-full rounded-md shadow-sm">
            <button
              type="submit"
              className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out bg-blue-500 border border-transparent rounded-md hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
            >
              Đăng nhập
            </button>
          </span>
        </div>
      </form>
    </div>
  </div>
</div>

				</>
			)}
		</>
	);
}
