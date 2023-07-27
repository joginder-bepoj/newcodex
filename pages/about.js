import React from 'react'
import Head from "next/head"
import AboutBanner from "../components/banners/AboutBanner"
import aboutBnr from "../assets/about-svg.svg"
import Aboutview from "../components/about/About"
import Vision from "../components/vision/Vision"
import Goals from '../components/goals/Goals'
import Layout from '../layout/Layout'
import axios from 'axios'
import Loader from "../components/spinner/Spinner"


const about = ({metaTags, loading}) => {
  return (
    <>
    <div>
    <Head>
        <title>About</title>
        <meta name="keywords" content={metaTags[0].meta_tags} />
        <meta name="description" content={metaTags[0].meta_description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <AboutBanner name={"About Us"} bnrImg={aboutBnr} />
      <Aboutview />
        <Vision />
        <Goals />
        {loading ? <Loader /> : null}
      </Layout>
      </div>
    </>
  )
}

export default about

export async function getServerSideProps(context) {
  const res = await axios.get(`${process.env.NEXT_APP_API_URL}/getmetatags/3`, {
      headers: {
          "X-API-KEY": process.env.NEXT_APP_API_KEY
      }
    });
  const metaTags = res.data
  return {
    props: {metaTags}, // will be passed to the page component as props
  }
}
