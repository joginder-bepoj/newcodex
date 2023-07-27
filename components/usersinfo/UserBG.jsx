import Image from 'next/image'
import React, { useState } from 'react'
import userImg from '../../assets/user.svg'
import { useStateContext } from '../../context/StateContext'
import ProfileUpdate from "../forms/ProfileUpdate"

const UserBG = ({userViewData}) => {
    const {user} = useStateContext()
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <>
        <section className='userprofil mt-5'>
            <div className="container pb-4">
                <div className='pb-1 pb-md-5 border-bottom'>
                    <div className='user-bg position-relative '>
                        <div className='userCharbg'>
                            <div className="userChar">
                                <Image src={userImg} alt="userImg"  />    
                            </div>
                        </div>                  
                    </div>
                    <div className='d-flex'>
                        <div className='addSpace d-none d-md-block' />
                        <div className='userInfos'>
                            <div className='userName'>
                                <h3 className='text-capitalize'>{userViewData?.user}</h3>
                                <p>{userViewData?.username || "nickname"}</p>
                            </div>
                            {userViewData.id === user?.id && <div>
                                <button className='post-btn profileBtn' onClick={handleShow}>Profile Settings</button>
                            </div>
                            }
                            
                        </div>
                    </div>
                    <ProfileUpdate show={show} handleClose={handleClose} />
                </div>
            </div>
        </section>   
    </>
  )
}

export default UserBG