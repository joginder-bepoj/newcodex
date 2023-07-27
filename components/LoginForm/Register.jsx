import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useStateContext } from "../../context/StateContext";
import Spinner from "../spinner/Spinner";

const Register = () => {
    const { registerData, setRegisterData, handleRegister, borderNameError, setBorderNameError, setBorderRegisterEmailError, borderRegisterError, setBorderRegisterPasswordError, borderRegisterPasswordError, borderConfirmPasswordError, setBorderConfirmPasswordError, loading } = useStateContext();
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const handleChange = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
        if (registerData.name.length !== 0) {setBorderNameError(false)}
        if (registerData.email.length !== 0) {setBorderRegisterEmailError(false)}
        if (registerData.password.length !== 0) {setBorderRegisterPasswordError(false)}
        if (registerData.confirm_password.length !== 0) {setBorderConfirmPasswordError(false)}
    };

    const handleCheck = (e) => {
        const { name, checked, value } = e.target;
        setRegisterData({ ...registerData, [name]: checked ? value : "" });
    };

    return (
        <>
            <section className="register-page py-3 my-3 py-md-5 my-md-4 w-md-75">
                <div className="container">
                    <div className="site-form border rounded-2 shadow">
                        <div className="row align-items-center w-100 m-auto">
                            <div className="col-sm-4 border-right p-3 h-100 text-align-center d-flex align-items-center justify-content-center flex-column">
                                <svg className="iconSvg" width="215" height="215" viewBox="0 0 215 215" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M122.966 77.41C120.874 76.2611 117.729 75.69 113.543 75.69H91.0591V101.876H112.979C117.329 101.876 120.598 101.352 122.775 100.287C126.625 98.4363 128.556 94.7813 128.556 89.3089C128.556 83.4065 126.692 79.4357 122.966 77.41Z" fill="white" />
                                    <path d="M107.507 6.71875C51.8486 6.71875 6.71875 51.8419 6.71875 107.5C6.71875 163.158 51.8486 208.281 107.507 208.281C163.165 208.281 208.288 163.158 208.288 107.5C208.288 51.8419 163.165 6.71875 107.507 6.71875ZM150.574 156.238H128.09C127.582 154.514 127.141 152.772 126.769 151.014C126.234 148.246 125.946 145.435 125.909 142.616L125.772 133.555C125.694 127.34 124.616 123.195 122.55 121.122C120.491 119.056 116.617 118.018 110.95 118.018H91.0558V156.238H71.1516V58.7622H117.776C124.441 58.8932 129.568 59.733 133.156 61.275C136.743 62.817 139.79 65.0879 142.283 68.0845C144.338 70.5431 145.992 73.3106 147.184 76.2847C148.384 79.2846 148.988 82.6944 148.988 86.5341C148.988 91.1667 147.819 95.712 145.484 100.187C143.15 104.661 139.29 107.822 133.911 109.68C138.406 111.484 141.594 114.058 143.465 117.383C145.343 120.709 146.281 125.795 146.281 132.625V139.172C146.281 143.62 146.459 146.647 146.818 148.232C147.356 150.745 148.609 152.596 150.577 153.782V156.238H150.574Z" fill="white" />
                                </svg>
                                <p className="align-self-center fs-md-2 fs-5 fw-bold text-white text-center mb-0">Register</p>
                            </div>
                            <div className="col-sm-8 px-3 px-md-5 pt-4 login-text">
                                <form onSubmit={handleRegister}>
                                    <h2 className="logon-text">Register</h2>
                                    <p className="hint-text mb-1">Create your account. It&apos;s free and only takes a minute.</p>
                                    <div className="mb-3">
                                        <input type="text" placeholder="Enter your full name" className={`form-control ${borderNameError && "errRed"}`} value={registerData.name} onChange={handleChange} name="name" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" placeholder="Enter your email" className={`form-control ${borderRegisterError && "errRed"}`} value={registerData.email} onChange={handleChange} name="email" />
                                    </div>
                                    <div className="mb-3 password-container">

                                        <input type={showPassword ? "text" : "password"} placeholder="Enter your password" className={`form-control ${borderRegisterPasswordError && "errRed"}`} value={registerData.password} onChange={handleChange} name="password" />
                                        {
                                            showPassword ?  <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShowPassword(!showPassword)} width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                        </svg> :<svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShowPassword(!showPassword)} width="16" height="16" fill="currentColor" className="bi bi-eye-slash" viewBox="0 0 16 16">
                                                <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                                                <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                                                <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                                            </svg>
                                        }
                                    </div>
                                    <div className="mb-3 password-container">
                                        <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm your password" className={`form-control ${borderConfirmPasswordError && "errRed"}`} value={registerData.confirm_password} onChange={handleChange} name="confirm_password" />
                                        {
                                            showConfirmPassword ? <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShowConfirmPassword(!showConfirmPassword)} width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShowConfirmPassword(!showConfirmPassword)} width="16" height="16" fill="currentColor" className="bi bi-eye-slash" viewBox="0 0 16 16">
                                                <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                                                <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                                                <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                                            </svg>
                                        }
                                    </div>
                                    <div className="clearfix check">
                                        <label className="form-check-label"><input type="checkbox" onChange={handleCheck} value="1" name='policy' />{" "}
                                            I accept the Terms of Use & Privacy Policy</label>
                                    </div>
                                    <div className="form-group py-3">
                                        <button type="submit" className="form-btn">Register Now</button>
                                    </div>
                                </form>
                                <div className="text-center sign-account mb-3">Already have an account? <Link href="/login" title="Sign in">Sign in</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
                {  loading && <Spinner /> }
            </section>
        </>
    );
};

export default Register;
