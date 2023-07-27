import React from 'react'
import { useRouter } from "next/router";

const Placeholder = () => {
    const router = useRouter();
  return (
    <>
        
        <section className="issue py-4" aria-hidden={true}>
                <div className="container">
                    {
                        router.pathname === "/" ? <div className="border-bottom placeholder">
                            <div className="row">
                                <div className="col-md-6 placeholder-glow">
                                    <h2 className="site-heading mb-3 placeholder col-2"></h2>
                                </div>
                                <br />
                                <div className="col-md-6 new-issue">
                                    <p className="list-unstyled d-flex align-items-center justify-content-end d-flex placeholder-glow">
                                        <span className='placeholder col-6'></span>
                                    </p>
                                </div>
                            </div>
                        </div> : <div className="border-bottom position-relative">
                            <div className="row">
                                <div className="col-md-8 col-12 placeholder-glow">
                                    <h2 className="sub-heading placeholder col-2 "></h2>
                                    <br />
                                    <p className="text-secondary fs-5 placeholder col-5"></p>
                                </div>
                                <div className="col-md-4 col-12 d-flex justify-content-md-end align-items-baseline">
                                    <a className="post-btn mt-md-4 mb-3 mb-md-0 btn col-3 placeholder">
                                    </a>
                                </div>
                            </div>
                        </div>
                    }
                    <div className="card mb-2">
                    <div className="card-body rounded-2 bg-light">
                        <div className="row">
                            <div className="col-md-7 placeholder-grow">
                                    <h4 className="m-0 pb-1 fs-5 heading-issue placeholder col-4">
                                        
                                    </h4>
                                <div className="d-flex py-1 placeholder col-6">

                                </div>
                            </div>
                                <div className="col-md-5 comment-col align-self-center text-align-end d-none d-lg-block placeholder-glow">
                                    <p className='placeholder col-6'></p>
                                </div>
                        </div>
                    </div>
                </div>
                    <div className="card mb-2">
                    <div className="card-body rounded-2 bg-light">
                        <div className="row">
                            <div className="col-md-7 placeholder-grow">
                                    <h4 className="m-0 pb-1 fs-5 heading-issue placeholder col-4">
                                        
                                    </h4>
                                <div className="d-flex py-1 placeholder col-6">

                                </div>
                            </div>
                                <div className="col-md-5 comment-col align-self-center text-align-end d-none d-lg-block placeholder-glow">
                                    <p className='placeholder col-6'></p>
                                </div>
                        </div>
                    </div>
                </div>
                    
                </div>
            </section>
    </>
  )
}

export default Placeholder