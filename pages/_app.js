// import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/custom.css";
import "../css/prism.css";
import "react-toastify/dist/ReactToastify.css";
import { StateContext } from "../context/StateContext";
import React, {useEffect, useState} from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setLoading(true)
      console.log(
        `App is changing to ${url} ${
          shallow ? "with" : "without"
        } shallow routing`
      );
      // document.getElementById("spinner").style.display = "block";
      return;
    };

    const handleRouteComplete = (url, { shallow }) => {
      console.log("you have finished going to the new page");
      setLoading(false)
      // document.getElementById("spinner").style.display = "none";
      
      return;
    };

    router.events.on("routeChangeStart", handleRouteChange);
    router.events.on("routeChangeComplete", handleRouteComplete);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <StateContext>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6596297344025689"
     crossOrigin="anonymous"></script>
      <Component {...pageProps} loading={loading} />
    </StateContext>
  );
}

export default MyApp;
