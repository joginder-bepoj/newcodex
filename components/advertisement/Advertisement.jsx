import React, {useEffect} from "react";
// import {Adsense} from '@ctrl/react-adsense';
import { useRouter } from "next/router";

const Advertisement = () => {
 const router = useRouter()

  useEffect(()=>{
    const refreshAds = () => {
      // Make sure the adsbygoogle array is defined
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
      <section className="google-add pt-4"  >
        <div className="container">
         <ins className="adsbygoogle"
        style={{display: "block"}}
        data-ad-client="ca-pub-6596297344025689"
        data-ad-slot="1458448211"></ins>
{/*           <Adsense
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-6596297344025689"
            data-ad-slot="1458448211"
            data-ad-format="auto"
            data-full-width-responsive="true"
          /> */}
        </div>
      </section>
    </>
  );
};

export default Advertisement;
