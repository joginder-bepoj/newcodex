import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useStateContext } from "../../context/StateContext";
import Spinner from "../spinner/Spinner";

const Login = () => {
  const { handleLogin, loginData, setLoginData, borderEmailError, setBorderEmailError, borderPasswordError, setBorderPasswordError, loading } = useStateContext()
  const [showPassword, setShowPassword] = useState(false)
  const handleFormChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
    if (loginData.email.length !== 0) {setBorderEmailError(false)}
    if (loginData.password.length !== 0) {setBorderPasswordError(false)}
  }


  return (
    <>
      <section className="login-page mx-auto py-3 my-3 py-md-5 my-md-4 w-md-75 w-100">
        <div className="container">
          <div className="site-form border rounded-2 shadow">
            <div className="row align-items-center w-100 m-auto">
              <div className="col-sm-4 border-right p-3 h-100 text-align-center d-flex align-items-center justify-content-center flex-column">
                <svg className="iconSvg" width="202" height="201" viewBox="0 0 202 201" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M181.25 160.187C187.269 152.162 191.95 143.469 195.294 134.106C195.294 133.437 195.963 132.769 195.963 131.431C196.631 130.094 196.631 128.087 197.3 126.75C197.969 125.412 197.969 124.075 198.637 122.737C198.637 121.4 199.306 120.062 199.306 118.725C199.975 116.719 199.975 114.712 199.975 113.375C199.975 112.037 199.975 111.369 200.644 110.031C200.644 106.687 201.312 104.012 201.312 100.669C201.312 45.1624 156.506 0.356201 101 0.356201C45.4937 0.356201 0.6875 44.4937 0.6875 99.9999C0.6875 103.344 0.6875 106.019 1.35625 109.362C1.35625 110.7 1.35625 111.369 2.025 112.706C2.025 114.712 2.69375 116.719 2.69375 118.056C2.69375 119.394 3.3625 120.731 3.3625 122.069C3.3625 123.406 4.03125 124.744 4.7 126.081C5.36875 127.419 5.36875 129.425 6.0375 130.762C6.0375 131.431 6.70625 132.1 6.70625 133.437C10.05 143.469 14.7312 152.162 20.75 160.187C38.8063 184.262 68.2312 200.312 101 200.312C133.769 200.312 162.525 184.262 181.25 160.187ZM101 186.937C70.2375 186.937 43.4875 170.887 28.1062 146.812C38.8062 129.425 55.525 116.719 75.5875 110.7C66.225 103.344 60.875 91.9749 60.875 79.9374C60.875 57.8687 78.9313 39.8125 101 39.8125C123.069 39.8125 141.125 57.8687 141.125 79.9374C141.125 91.9749 135.775 103.344 127.081 110.7C146.475 116.719 163.194 130.094 174.562 146.812C158.512 170.887 131.762 186.937 101 186.937Z" fill="white" />
                </svg>
                <p className="align-self-center fs-md-2 fs-5 fw-bold text-white text-center mb-0">Login</p>
              </div>
              <div className="col-sm-8 px-3 px-md-5 pt-4 login-text">
                <form onSubmit={handleLogin}>
                  <div className="input-group mb-3 ">
                    <span className="input-group-text bg-white border-end-0 " id="basic-addon1" >  <svg className="align-self-top" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.3135 0.25H1.68652C0.754551 0.25 -0.000976562 1.00549 -0.000976562 1.9375V12.0625C-0.000976562 12.9945 0.754551 13.75 1.68652 13.75H16.3135C17.2454 13.75 18.001 12.9945 18.001 12.0625V1.9375C18.001 1.00549 17.2454 0.25 16.3135 0.25ZM17.4385 11.8124L12.1175 6.4915L17.4385 3.10086V11.8124V11.8124ZM1.68652 0.8125H16.3135C16.9338 0.8125 17.4385 1.31715 17.4385 1.9375V2.4343L9.69405 7.36939C9.27493 7.63638 8.73963 7.62814 8.3301 7.34962L0.561523 2.06955V1.9375C0.561523 1.31715 1.06623 0.8125 1.68652 0.8125ZM0.561523 2.74896L5.9575 6.41643L0.561523 11.8124V2.74896ZM16.3135 13.1875H1.68652C1.22319 13.1875 0.824801 12.9057 0.65262 12.5047L6.42384 6.7334L8.01425 7.81436C8.31966 8.02201 8.67289 8.1261 9.02664 8.1261C9.36282 8.1261 9.69953 8.03216 9.99591 7.84347L11.6391 6.79637L17.3474 12.5047C17.1752 12.9057 16.7768 13.1875 16.3135 13.1875Z" fill="black" />
                    </svg></span>
                    <input type="email" className={`form-control ${borderEmailError && "errRed"} rounded-end `} placeholder="Email Address" onChange={handleFormChange} value={loginData.email} name="email" />
                  </div>
                  <div className="input-group mb-3 password-container">
                    <span className="input-group-text bg-white border-end-0" id="basic-addon1"><svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 7H17C17.2652 7 17.5196 7.10536 17.7071 7.29289C17.8946 7.48043 18 7.73478 18 8V20C18 20.2652 17.8946 20.5196 17.7071 20.7071C17.5196 20.8946 17.2652 21 17 21H1C0.734784 21 0.48043 20.8946 0.292893 20.7071C0.105357 20.5196 0 20.2652 0 20V8C0 7.73478 0.105357 7.48043 0.292893 7.29289C0.48043 7.10536 0.734784 7 1 7H3V6C3 4.4087 3.63214 2.88258 4.75736 1.75736C5.88258 0.632141 7.4087 0 9 0C10.5913 0 12.1174 0.632141 13.2426 1.75736C14.3679 2.88258 15 4.4087 15 6V7ZM2 9V19H16V9H2ZM8 13H10V15H8V13ZM4 13H6V15H4V13ZM12 13H14V15H12V13ZM13 7V6C13 4.93913 12.5786 3.92172 11.8284 3.17157C11.0783 2.42143 10.0609 2 9 2C7.93913 2 6.92172 2.42143 6.17157 3.17157C5.42143 3.92172 5 4.93913 5 6V7H13Z" fill="#7D8288" />
                    </svg> </span>

                    <input type={showPassword ? "text" : "password"} className={`form-control rounded-end ${borderPasswordError && "errRed"}`} onChange={handleFormChange} name="password" value={loginData.password} placeholder="Password" />
                    {
                      showPassword ?  <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShowPassword(!showPassword)} width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShowPassword(!showPassword)} width="16" height="16" fill="currentColor" className="bi bi-eye-slash" viewBox="0 0 16 16">
                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                      </svg> 
                    }
                  </div>
                  <div className="clearfix d-flex justify-content-between ">
                    <label className="form-check-label">
                      <input type="checkbox" /> Remember me
                    </label>
                    <p className="forgot-p">
                      <Link href="/forget-password" title="Forget Password">Forgot Password?</Link>
                    </p>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="form-btn btn-block">
                      Login
                    </button>
                  </div>
                </form>
                <p className="mt-4 create-account">
                  Need an account ? <Link href="/register" title="Create Account">Create Account</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        {loading && <Spinner />}
      </section>
    </>
  );
};

export default Login;
