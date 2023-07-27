import React from 'react'
import Image from 'next/image'
import codexBanner from "../../assets/codex-bnr.svg";
import { useRouter } from 'next/router';


const HomeBanner = () => {
  const router = useRouter()
  return (
    <>
        <section className="site-banner home border-bottom">
          <div className="container">
            <div className="row">
              <div className="col-md-6 banner-txt align-self-center">
                <h1 className='m-0'>Learn something new every day.</h1>
                <div className='mt-3 mb-4'>
                <p className="m-0">The best way to learn to code study any topic, anytime.<span className='d-md-block d-none' />Choose from thousands of expert-led courses now.</p>
                </div>
                <button title="Start Learning Now" className="btn site-btn" onClick={()=>router.push("/web-designing")} >Start Learning Now!</button>
              </div>
              <div className="col-md-6 d-none d-md-block">
                <figure className="d-flex justify-content-end">
                  <Image src={codexBanner} alt="Learn something new" height="auto" width="auto" priority={true} />
                </figure>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default HomeBanner
