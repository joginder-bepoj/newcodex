/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import video from "../../assets/bootstrap-img.svg"

const Videos = () => {
  return (
    <>
        <section className="video-sec py-4">
    <div className="container">
        <h2 className="sub-heading">Popular Video Courses</h2>
        <p> Learn Your Favorite Topics From Online  </p>
        <div className="row">
            <div className="col-md-6 border-bottom py-5">
                <div className="d-flex">
                    <div className="testi-video rounded-end">
                        <video width="320" height="175" controls src={video}></video>
                    </div>
                    <div className="ps-4">
                       <h5 className="fw-bold">BOOTSTRAP5 TUTORIAL</h5>
                       <p>If you already know the above basics, you can easily start the adventure with Bootstrap.
                        </p>
                        <a href="#" className="btn watch-video border" title="">Watch Video</a>
                    </div>
                </div>
            </div>  
            <div className="col-md-6 border-bottom py-5">
                <div className="d-flex">
                    <div className="testi-video rounded-end">
                        <video width="320" height="175" controls src={video}></video>
                    </div>
                    <div className="ps-4">
                       <h5 className="fw-bold">ANGULARJS TUTORIAL</h5>
                       <p>If you already know the above basics, you can easily start the adventure with Bootstrap.
                        </p>
                        <a href="#" className="btn watch-video border" title="">Watch Video</a>
                    </div>
                </div>
            </div> 
            <div className="col-md-6 border-bottom py-5">
                <div className="d-flex">
                    <div className="testi-video rounded-end">
                        <video width="320" height="175" controls src={video}></video>
                    </div>
                    <div className="ps-4">
                       <h5 className="fw-bold">HTML5 TUTORIAL</h5>
                       <p>If you already know the above basics, you can easily start the adventure with Bootstrap.
                        </p>
                        <a href="#" className="btn watch-video border" title="">Watch Video</a>
                    </div>
                </div>
            </div>  
            <div className="col-md-6 border-bottom py-5">
                <div className="d-flex">
                    <div className="testi-video rounded-end">
                        <video width="320" height="175" controls src={video}></video>
                    </div>
                    <div className="ps-4">
                       <h5 className="fw-bold">REACTJS TUTORIAL</h5>
                       <p>If you already know the above basics, you can easily start the adventure with Bootstrap.
                        </p>
                        <a href="#" className="btn watch-video border" title="">Watch Video</a>
                    </div>
                </div>
            </div>   
        </div>
    </div>
</section>
    </>
  )
}

export default Videos