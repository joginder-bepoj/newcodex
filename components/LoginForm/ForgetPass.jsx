import React, { useEffect, useState } from 'react'
import { useStateContext } from '../../context/StateContext'
import Spinner from '../spinner/Spinner';
import { useRouter } from 'next/router'

const ForgetPass = () => {
  const { setForgetEmailPass, handleForgetPassword, borderForgetPassError, setBorderForgetPassError, forgetEmailPass, handleResetPassword, borderResetPass, setBorderResetPass, borderResetConfirmPass, setBorderResetConfirmPass, resetPasswordData, setResetPasswordData, loading } = useStateContext()

  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)


  useEffect(() => {
    setResetPasswordData({ email: router?.query?.email })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChangeInput = (e) => {
    setForgetEmailPass(e.target.value)
    if (forgetEmailPass.length !== 0) { setBorderForgetPassError(false) }
  }

  const handleResetChangeInput = (e) => {
    setResetPasswordData({ ...resetPasswordData, [e.target.name]: e.target.value })
    if (resetPasswordData.password?.length !== 0) { setBorderResetPass(false) }
    if (resetPasswordData.confirm_password?.length !== 0) { setBorderResetConfirmPass(false) }
  }

  return (
    <section className="login-page forget py-3 my-3 py-md-5 my-md-4 w-md-75 mx-auto">
      <div className="container">
        <div className="site-form border rounded-2 shadow">
          <div className="row align-items-center w-100 m-auto">
            <div className="col-sm-4 border-right p-3 h-100 text-align-center d-flex align-items-center justify-content-center flex-column">
              <svg className='iconSvg' width="215" height="215" viewBox="0 0 215 215" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2422_32)">
                  <path d="M107.5 215C166.871 215 215 166.871 215 107.5C215 48.1294 166.871 0 107.5 0C48.1294 0 0 48.1294 0 107.5C0 166.871 48.1294 215 107.5 215Z" fill="white" />
                  <path d="M136.295 211.094C175.476 200.227 205.657 167.733 213.18 127.272L135.622 49.715L83.2664 52.0002V69.9943L85.2471 85.3575L110.11 110.22L102.071 176.869L136.295 211.094Z" fill="white" />
                  <path d="M125.398 88.7988C136.493 79.8019 141.886 71.752 141.886 64.1897C141.886 53.2137 132.955 44.2837 121.979 44.2837C116.28 44.2837 111.133 46.6898 107.501 50.5409C103.868 46.6907 98.7208 44.2837 93.0225 44.2837C82.0457 44.2837 73.1152 53.2137 73.1152 64.1897C73.1152 79.0314 94.0005 92.9224 102.071 97.7355V176.87H112.93V170.204H131.692V159.345H112.93V146.012H131.692V135.154H112.93V97.6528C115.81 95.8518 120.582 92.7032 125.398 88.7988ZM83.9732 64.1892C83.9732 59.2002 88.0321 55.142 93.022 55.142C98.012 55.142 102.071 59.2002 102.071 64.1892H112.93C112.93 59.2002 116.989 55.142 121.979 55.142C126.969 55.142 131.027 59.2002 131.027 64.1892C131.027 70.9664 118.004 81.7714 107.439 88.307C96.9193 82.0531 83.9732 71.427 83.9732 64.1892Z" fill="#109596" />
                  <path d="M125.398 88.7988C136.493 79.8019 141.886 71.752 141.886 64.1897C141.886 53.2137 132.955 44.2837 121.979 44.2837C116.28 44.2837 111.133 46.6898 107.5 50.5405V64.1897H112.93C112.93 59.2006 116.989 55.1424 121.979 55.1424C126.968 55.1424 131.027 59.2006 131.027 64.1897C131.027 70.9538 118.054 81.729 107.5 88.2688V176.87H112.93V170.204H131.692V159.345H112.93V146.012H131.692V135.154H112.93V97.6528C115.81 95.8518 120.582 92.7032 125.398 88.7988Z" fill="#0F9295" />
                </g>
                <defs>
                  <clipPath id="clip0_2422_32">
                    <rect width="215" height="215" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="align-self-center fs-5 fw-bold text-white text-center mb-0">Forget Passsword</p>
            </div>
            <div className="col-sm-8 px-md-5 px-3 py-3 login-text">
              <form onSubmit={ router?.query?.email ? handleResetPassword : handleForgetPassword}>
                <h2 className='text-center'>Forget Password</h2>
                <p className="hint-text">Enter your email address and reset your password</p>
                
                {router?.query?.email ? <>
                  <div className="mb-3">
                    <input type="email" className="form-control" placeholder='Email' value={router?.query?.email} hidden readOnly disabled name="email" />
                  </div>
                  <div className="mb-3 password-container">

                    <input type={showPassword ? "text" : "password"} placeholder='Password' className={`form-control ${borderResetPass && "errRed"}`} value={resetPasswordData.password} onChange={handleResetChangeInput} name="password" />
                    {
                      showPassword ? <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShowPassword(!showPassword)} width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg> : <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShowPassword(!showPassword)} width="16" height="16" fill="currentColor" className="bi bi-eye-slash" viewBox="0 0 16 16">
                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                        <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                      </svg>
                    }
                  </div>
                  <div className="mb-3 password-container">
                    <input type={showConfirmPassword ? "text" : "password"} placeholder="Confirm Password" className={`form-control ${borderResetConfirmPass && "errRed"}`} value={resetPasswordData.confirm_password} onChange={handleResetChangeInput} name="confirm_password" />
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
                </>: 
                <div className="mb-4">
                  <input type="email" placeholder='Email' className={`form-control ${borderForgetPassError && "errRed"}`} value={forgetEmailPass} name="email" onChange={handleChangeInput} />
                </div>
                  }
                <div className="form-group">
                  <button type="submit" className="form-btn btn-block">
                    Reset Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {  loading && <Spinner />       }
    </section>
  )
}

export default ForgetPass