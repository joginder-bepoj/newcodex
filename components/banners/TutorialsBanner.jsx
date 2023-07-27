import React from 'react'
import insiteBanner from "../../assets/insite-banner.svg";
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import BannerAd from '../advertisement/BannerAd';

const TutorialsBanner = () => {
  const router = useRouter();
  let xyz = router.asPath.split("/")

  return (
    <>
      <section className="site-inside-banner tutorial site-banner pt-5 py-md-2 pb-3" style={{maxHeight: "160px"}}>
        <div className="container py-md-0">
          <div className="row">
            <div className="col-sm-5 align-self-center">
              <h1 className="text-white">Tutorials</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item"><Link href="/" title='Home'>HOME</Link></li>
                  {
                    xyz.map((item, i) =>(
                      i >=1 && <li className='breadcrumb-item' key={i}><Link href="/web-designing" className="text-white text-uppercase">{item.replace(/-/g, " ")}</Link></li>
                    ))
                  }                  
                </ol>
              </nav>
            </div>
            <div className="col-sm-5 p-3 d-none d-md-block">
                  <BannerAd adWidth="510px" />
            </div>
            <div className="col-sm-2 d-none d-md-block">
              <figure className="d-flex justify-content-end"><Image src={insiteBanner} alt="tutorial-banner-img" height='auto' width="auto" /></figure>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TutorialsBanner