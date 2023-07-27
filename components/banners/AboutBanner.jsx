import React from 'react'
import Link from 'next/link'
import Image from "next/image"
import BannerAd from '../advertisement/BannerAd'

const AboutBanner = ({ name, bnrImg }) => {
  return (
    <>
      <section className="site-inside-banner site-banner about-bnr" style={{maxHeight:"160px"}}>
        <div className="container">
          <div className="row">
            <div className="col-sm-3 align-self-center">
              <h1 className="text-white">{name}</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item"><Link href="/" title='Home'>HOME</Link></li>
                  <li className="breadcrumb-item text-white text-uppercase">{name}</li>
                </ol>
              </nav>
            </div>
            <div className="col-sm-7 p-3 d-none d-md-block">
              <BannerAd />
            </div>
            <div className="col-sm-2 d-none d-md-block">
              <figure className="d-flex justify-content-end mb-0"><Image src={bnrImg} style={{height:"150px"}} alt="banner-img" height='auto' width='auto' priority={true} /></figure>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutBanner