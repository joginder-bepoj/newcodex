import React, {useEffect} from "react";
import { useRouter } from "next/router";
// import {Adsense} from '@ctrl/react-adsense';

const BannerAd = () => {
  const router = useRouter()

  useEffect(()=>{
    const refreshAds = () => {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    };

    // Refresh ads when the router changes
    router.events.on("routeChangeComplete", refreshAds);

    // Clean up the event listener when the component unmounts
    return () => {
      router.events.off("routeChangeComplete", refreshAds);
    };
  },[router])
  
  return (
    <>
      <section className="google-add d-none d-xl-block" >
      <ins className="adsbygoogle"
        style={{display: "inline-block", width: "728px", height: "90px"}}
        data-ad-client="ca-pub-6596297344025689"
        data-ad-slot="6034050648"></ins>
{/*          <Adsense
            className="adsbygoogle"
            style={{display: "inline-block", width: "728px", height: "90px"}}
            data-ad-client="ca-pub-6596297344025689"
            data-ad-slot="6034050648"
            data-ad-format="auto"
            data-full-width-responsive="true"
          /> */}
      </section>
    </>
  );
};

export default BannerAd;
