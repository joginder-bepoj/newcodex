import React, { useState } from 'react'
import { Modal } from "react-bootstrap"
import { useStateContext } from '../../context/StateContext'
import Spinner from '../spinner/Spinner'

const ProfileUpdate = ({ handleClose, show }) => {

    const { user, profileUpdateSubmit, profileUpdate, setProfileUpdate, borderProfilePassErr, setBorderProfilePassErr, borderProfileConfirmPassErr, setBorderProfileConfirmPassErr, loading } = useStateContext()

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const handleChange = (e) => {
        const {name, value} = e.target;
        setProfileUpdate({...profileUpdate, [name]: value})
        if(profileUpdate.password.length !==0){setBorderProfilePassErr(false)}
        if(profileUpdate.confirm_password.length !==0){setBorderProfileConfirmPassErr(false)}
    }
    return (
        <>
            <Modal show={show} onHide={handleClose} centered backdrop="static" >
                <Modal.Header closeButton className='modalHead'>
                    <Modal.Title className='modalTitle'>Update your password</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {loading && <Spinner />}
                    <form onSubmit={profileUpdateSubmit}>
                        <div className="mb-2">
                            <label htmlFor="email" className="form-label mb-0">Email</label>
                            <input type="email" className="form-control" value={user?.email} name="email" readOnly disabled />
                        </div>
                        <div className="mb-2 password-container">
                            <label htmlFor="password" className="form-label mb-0">Password</label>
                            <input type={showPassword ? "text" : "password"} className={`form-control ${borderProfilePassErr && "errRed"}`} value={profileUpdate.password} onChange={handleChange} name="password" />
                            {
                                showPassword ? <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShowPassword(!showPassword)} width="16" height="16" fill="currentColor" className="bi bi-eye-slash" viewBox="0 0 16 16">
                                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                                    <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShowPassword(!showPassword)} width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                </svg>
                            }
                        </div>
                        <div className="mb-2 password-container">
                            <label htmlFor="confirm_password" className="form-label mb-0">Confirm Passowrd</label>
                            <input type={showConfirmPassword ? "text" : "password"} className={`form-control ${ borderProfileConfirmPassErr && "errRed"}`} value={profileUpdate.confirm_password} onChange={handleChange} name="confirm_password" />
                            {
                                showConfirmPassword ? <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShowConfirmPassword(!showConfirmPassword)} width="16" height="16" fill="currentColor" className="bi bi-eye-slash" viewBox="0 0 16 16">
                                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                                    <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setShowConfirmPassword(!showConfirmPassword)} width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                </svg>
                            }
                        </div>
                        <button type='submit' className='modalBtn mt-2 post-btn'>Send</button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ProfileUpdate